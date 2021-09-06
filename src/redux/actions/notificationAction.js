  import * as type from './actionTypes';

  export const setNotificationAction = (data) => ({type: type.SET_NOTIFICATION, payload: data});
  export const setOpenNotificationAction = () => ({type: type.SET_OPEN_NOTIFICATION});
  export const unsetOpenNotificationAction = () => ({type: type.UNSET_OPEN_NOTIFICATION});
  export const setVariantNotificationAction = (variant) => ({type: type.SET_VARIANT_NOTIFICATION, payload: variant});
  export const unsetVariantNotificationAction = () => ({type: type.UNSET_VARIANT_NOTIFICATION});
  export const resetNotificationAction = () => ({type: type.RESET_NOTIFICATION});