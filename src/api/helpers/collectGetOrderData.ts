import { User } from './../../store/userSlice/types';

export const collectGetOrderData = (orderNumber: string, user: User, itemNumber?: string) => {

    const formData = new FormData();
    formData.set("number", orderNumber);
    itemNumber && formData.set("itemNumber", itemNumber);
    formData.set(user.auth_param_name, user.auth_param_value);

    return formData

}