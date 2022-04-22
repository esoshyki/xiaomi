import { getUserData } from './userSlice';
import { getThemeData } from './themeSlice';
import { getOfferData } from "./offerSlice";

export const select = {
    offer: getOfferData,
    theme: getThemeData,
    user: getUserData
}