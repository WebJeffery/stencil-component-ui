import { addMessageBox, Message } from './utils/message';
import { addNotificationBox, Notification } from './utils/notification';
import enResources from './locale/en';
import { i18nAddResources } from './utils/i18n';

export default () => {
  const cacheIvyOption = globalThis.$swc;
  const message = Message;

  const conf = {
    ...cacheIvyOption,
    message,
    notification: Notification,
  };
  globalThis.$swc = conf;
  // 添加多语言
  i18nAddResources('en', enResources);
  addMessageBox();
  addNotificationBox();
};
