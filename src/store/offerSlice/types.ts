import { isString, isNumber, N } from './../types';

export type OfferSteps =
    | "start"
    | "imei"
    | "isYourPhone"
    | "questions"
    | "summary"
    | "cost-confirm"
    | "qr-code"
    | "photo-front"
    | "photo-back"
    | "pending"
    | "success"
    | "preliminary"

export type AnswerType = "from_list" | "free_input"

export type Answer = {
    answerName: string
}

export type Question = {
    questionId: string
    questionKey: string
    questionName: string
    questionDescription?: isString
    questionDescriptionUrlName?: isString
    questionDescriptionUrl?: isString
    questionInputPlaceholder?: isString
    questionInputButtonName?: isString
    questionShortName: isString
    questionGroup: string
    answerType: AnswerType
    answers?: { [id: string]: Answer }
}

export type QuestionsData = {
    [id: string]: Question
}

export type QuestionTree = {
    answerId?: string
    combinationId?: string
    offerId?: string
    questions: Array<{
        questionId: string
        answers: QuestionTree[]
    }>
}

export type QuestionsResponse = {
    questionsData: QuestionsData
    questionsTree: QuestionTree
    complete?: true
    deviceInfo?: DeviceInfo | []
}

export type GivenAnswer = {
    questionId: string
    questionKey: string
    questionName: string
    questionDescription?: string
    questionDescriptionUrlName?: string
    questionDescriptionUrl?: string
    questionInputPlaceholder?: string
    questionInputButtonName?: string
    questionShortName: isString
    answerId?: string
    answerName: string
    questionGroup: isString
}

export type RequestAnswers = {
    [questionId: string]: string
} & { deviceInfo? : DeviceInfo }

export type GivenAnswers = {
    combinationId?: string
    offerId?: string
    answers: GivenAnswer[]
}

export type ServerError = {
    message: string
    code: number
}

export type DeviceInfo = {
    deviceID: string
    deviceImage: string
    deviceName: string
}

export type OfferState = {
    step: OfferSteps
    loading: boolean,
    result: "success" | "error" | null
    errors: ServerError[]
    questionsData: QuestionsData | null
    questionsTree: QuestionTree | null
    hint: string,
    photoFront: isString
    photoBack: isString
    givenAnswers: GivenAnswers
    currentGivenAnswers: GivenAnswers
    deviceInfo: N<DeviceInfo>
    questionsReceived: number
}

