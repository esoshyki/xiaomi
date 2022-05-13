import { User } from './../store/userSlice/types';
import { ResponseData } from './types';
export const collectFormData = (data: object, user: User) : FormData => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, val]) => {
        formData.set(key, val);
    });
    formData.set(user.auth_param_name, user.auth_param_value)
    return formData
}

export const getErrorResponse = (message?: string) : ResponseData<any> => {
    return {
        data: null,
        errors: [{
            message: "Error",
            code: 500
        }],
        status: "error",
        statusCode: message ? 500 : 401
    }
}