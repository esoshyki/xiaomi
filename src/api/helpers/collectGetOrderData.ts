import { User } from './../../store/userSlice/types';

export const collectGetOrderData = (orderNumber: string, itemHash: string, user: User) => {

    const formData = new FormData();
    formData.set("orderNumber", orderNumber);
    formData.set("itemHash", itemHash);
    formData.set(user.auth_param_name, user.auth_param_value);

    return formData

}