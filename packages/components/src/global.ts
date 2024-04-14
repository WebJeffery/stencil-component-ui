import { addMessageBox, Message } from './utils/message';
import { addNotificationBox, Notification } from './utils/notification';


export default () => {
  const cacheIvyOption = globalThis.$swc;
  const message = Message;

  const conf = {
    ...cacheIvyOption,
    message,
    notification: Notification,
  };
  globalThis.$swc = conf;
  addMessageBox();
  addNotificationBox();
};
