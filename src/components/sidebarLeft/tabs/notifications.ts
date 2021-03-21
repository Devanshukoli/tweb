import { SettingSection } from "..";
import Row from "../../row";
import CheckboxField from "../../checkboxField";
import { InputNotifyPeer, PeerNotifySettings, Update } from "../../../layer";
import appNotificationsManager from "../../../lib/appManagers/appNotificationsManager";
import { SliderSuperTabEventable } from "../../sliderTab";
import { copy } from "../../../helpers/object";
import rootScope from "../../../lib/rootScope";
import { convertKeyToInputKey } from "../../../helpers/string";
import { LangPackKey } from "../../../lib/langPack";

type InputNotifyKey = Exclude<InputNotifyPeer['_'], 'inputNotifyPeer'>;

export default class AppNotificationsTab extends SliderSuperTabEventable {
  protected init() {
    this.container.classList.add('notifications-container');
    this.setTitle('Telegram.NotificationSettingsViewController');

    const NotifySection = (options: {
      name: LangPackKey,
      typeText: string,
      inputKey: InputNotifyKey,
    }) => {
      const section = new SettingSection({
        name: options.name
      });

      const enabledRow = new Row({
        checkboxField: new CheckboxField({text: options.typeText, checked: true}),
        subtitle: 'Loading...',
      });
      
      const previewEnabledRow = new Row({
        checkboxField: new CheckboxField({text: 'Message preview', checked: true}),
        subtitle: 'Loading...',
      });

      section.content.append(enabledRow.container, previewEnabledRow.container);

      this.scrollable.append(section.container);

      const inputNotifyPeer = {_: options.inputKey};
      const ret = appNotificationsManager.getNotifySettings(inputNotifyPeer);
      (ret instanceof Promise ? ret : Promise.resolve(ret)).then((notifySettings) => {
        const applySettings = () => {
          const muted = appNotificationsManager.isMuted(notifySettings);
          enabledRow.checkboxField.checked = !muted;
          previewEnabledRow.checkboxField.checked = notifySettings.show_previews;
  
          return muted;
        };
        
        applySettings();

        this.eventListener.addEventListener('destroy', () => {
          const mute = !enabledRow.checkboxField.checked;
          const showPreviews = previewEnabledRow.checkboxField.checked;

          if(mute === appNotificationsManager.isMuted(notifySettings) && showPreviews === notifySettings.show_previews) {
            return;
          }

          const inputSettings: any = copy(notifySettings);
          inputSettings._ = 'inputPeerNotifySettings';
          inputSettings.mute_until = mute ? 2147483647 : 0;
          inputSettings.show_previews = showPreviews;

          appNotificationsManager.updateNotifySettings(inputNotifyPeer, inputSettings);
        }, true);

        this.listenerSetter.add(rootScope, 'notify_settings', (update: Update.updateNotifySettings) => {
          const inputKey = convertKeyToInputKey(update.peer._) as any;
          if(options.inputKey === inputKey) {
            notifySettings = update.notify_settings;
            applySettings();
          }
        });
      });
    };

    NotifySection({
      name: 'AutoDownloadSettings.TypePrivateChats',
      typeText: 'Notifications for private chats',
      inputKey: 'inputNotifyUsers'
    });

    NotifySection({
      name: 'DataAndStorage.CategorySettings.GroupChats',
      typeText: 'Notifications for groups',
      inputKey: 'inputNotifyChats'
    });

    NotifySection({
      name: 'AutoDownloadSettings.TypeChannels',
      typeText: 'Notifications for channels',
      inputKey: 'inputNotifyBroadcasts'
    });

    {
      const section = new SettingSection({
        name: 'Suggest.Localization.Other'
      });

      const contactsSignUpRow = new Row({
        checkboxField: new CheckboxField({text: 'Contacts joined Telegram', checked: true}),
        subtitle: 'Loading...',
      });
      
      const soundRow = new Row({
        checkboxField: new CheckboxField({text: 'Notification sound', checked: true, stateKey: 'settings.notifications.sound'}),
        subtitle: 'Enabled',
      });

      section.content.append(contactsSignUpRow.container, soundRow.container);

      this.scrollable.append(section.container);

      appNotificationsManager.getContactSignUpNotification().then(enabled => {
        contactsSignUpRow.checkboxField.checked = enabled;

        this.eventListener.addEventListener('destroy', () => {
          const _enabled = contactsSignUpRow.checkboxField.checked;
          if(enabled !== _enabled) {
            appNotificationsManager.setContactSignUpNotification(!_enabled);
          }
        }, true);
      });
    }
  }
}