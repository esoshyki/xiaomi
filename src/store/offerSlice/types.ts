import { isString } from '../types';
export enum OfferSteps {
    imei = "Imei"
}

export type OfferError = {

}

export type OfferState = {
    step: OfferSteps
    IMEI: isString
}