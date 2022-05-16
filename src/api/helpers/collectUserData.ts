import { UserState } from './../../store/userSlice/types';
import { OfferState } from './../../store/offerSlice/types';
export const connectUserData = (state: UserState, formData: FormData) => {
    const { user } = state;

    if (user?.auth_param_name && user.auth_param_value) {
        formData.set(user?.auth_param_name, user?.auth_param_value)
    }
}   