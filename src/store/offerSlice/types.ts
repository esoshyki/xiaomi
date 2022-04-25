import { isString, isNumber } from './../types';
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

export type PhoneVariant = {
    offerId: number
    properties: {
        MEMORY: number
        BRAND: string
        MODEL: string
    }
}

export type Answer = {
    answerName: string
    answerId: string
}

export type QuestionAnswer = {
    answerId: string
    answerName: string
}

export type Question = {
    questionId: string
    questionAnswers: QuestionAnswer[]
    questionName: string
    questionCode: string
    questionHelp: string
}

export type QuestionGroup = {
    groupName: string
    groupShortName: isString
    questions: Question[]
};

export type GivenAnswer = {
    questionId: string
    answerId: string
    questionCode: string
}

export type OfferState = {
    step: OfferSteps
    IMEI: string;
    loading: boolean,
    result: "success" | "error" | null
    errors: string[]
    phone: N<PhoneInfo[]>,
    questions: N<QuestionGroup[]>,
    variants: N<PhoneVariant[]>,
    variant: N<PhoneVariant>,
    hint: string,
    currentQuestion: isNumber
    currentQuestionGroup: isNumber
    givenAnswers: GivenAnswer[]
}

