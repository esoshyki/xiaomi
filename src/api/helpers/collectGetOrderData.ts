import { User } from './../../store/userSlice/types';

export const collectGetOrderData = (orderNumber: string, deviceId: string, user: User) => {

    const formData = new FormData();
    formData.set("number", orderNumber);
    formData.set("itemNumber", deviceId);
    formData.set(user.auth_param_name, user.auth_param_value);

    return formData

}