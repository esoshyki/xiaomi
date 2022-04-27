import { isString, isNumber } from './../types';
import { N } from '../types';

export type OfferSteps = "imei" | "isYourPhone" | "questions" | "summary" | "cost-confirm" | "qr-code" | "photo-front" | "photo-back" | "pending" | "success"

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
    displayConditionQuestion?: string
    displayConditionAnswers?: string[]
}

export type QuestionGroup = {
    groupName: string
    groupShortName: isString
    questions: Question[]
};

export type GivenAnswer = {
    questionId: string
    answerId: string
    answerName: string
    questionCode: string
    groupShortName: string
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
    givenAnswers: {
        [k: string]: GivenAnswer[]
    }
}

