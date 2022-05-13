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

export type Answers = {
    combinationId?: string
    [questionId: number]: string
}

export type Question = {
    questionId: string
    questionName: string
    questionDescription: string
    questionShortName: isString
    questionGroup: string
    answerType: AnswerType
    answers?: { [id: number]: Answer }
}

export type QuestionsData = {
    [id: number]: Question
}

export type QuestionTree = {
    answerId?: string
    combinationId?: string
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
    questionName: string
    questionDescription: string
    questionShortName: isString
    answerId?: string
    answerName: string
    questionGroup: isString
}

export type RequestAnswers = {
    [questionId: string]: string
}

export type GivenAnswers = {
    combinationId?: string
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
}

