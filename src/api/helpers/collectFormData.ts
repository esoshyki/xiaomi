import { User } from '../../store/userSlice/types';
import { ResponseData } from '../types';
import { toFormData } from './toFormData';


export const collectFormData = (data: object, user: User) : FormData => {

    const formData = toFormData(data);
    formData.set(user.auth_param_name, user.auth_param_value);

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