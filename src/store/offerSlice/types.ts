import { isString } from './../types';
import { N } from '../types';
export enum OfferSteps {
    imei = "Imei",
    isYourPhone = "IsYourPhone",
    questions = "Questions"
};

export type OfferError = {

}

export type PhoneInfo = {
    ID: string
    NAME: string
    IMAGE: string
}

export type Question = {
    ID: number
    questionAnswers: string[]
    questionName: string
    questionCode: string
    questionHelp: string
}

export type QuestionGroup = {
    groupName: string
    groupShortName: isString
    questions: Question[]
};


export type OfferState = {
    step: OfferSteps
    IMEI: string;
    loading: boolean,
    result: "success" | "error" | null
    errors: string[]
    phone: N<PhoneInfo[]>,
    questions: N<QuestionGroup[]>
}

