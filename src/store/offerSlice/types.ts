import { N } from '../types';
export enum OfferSteps {
    imei = "Imei"
};

export type OfferError = {

}

export type PhoneInfo = {
    ID: string
    NAME: string
}

export type OfferState = {
    step: OfferSteps
    IMEI: string;
    loading: boolean,
    result: "success" | "error" | null
    errors: string[]
    phone: N<PhoneInfo>
}