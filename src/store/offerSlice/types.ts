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
    | "create-order"
    | "preliminary"

export type AnswerType = "from_list" | "free_input" | "show_qr_link" | "upload_image"

export type Answer = {
    answerName: string
}

export type AdditionActions = "createOrder" | "addPhoto";


//API 

export type ApiResult = "success" | "error" | null

export type ApiProps = {
    loading: boolean
    result: ApiResult
    errors: ServerError[]
}

export type RequestAnswers = {
    [questionId: string]: string
} & { deviceInfo? : DeviceInfo }

export type QuestionsResponse = {
    questionsData: QuestionsData
    questionsTree: QuestionTree
    complete?: true
    deviceInfo?: DeviceInfo | []
}

export type CreateOrderResponse = any;

// QUESTIONS

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
    questionHeader?: string
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
    additionalAction?: AdditionActions
    questions: Array<{
        questionId: string
        answers: QuestionTree[]
    }>
}



export type TreeQuestion = {
    questionId: string
    answers: QuestionTree[]
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

export type GivenAnswers = {
    combinationId?: string
    offerId?: string
    additionalAction?: AdditionActions
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

export type SetTreeDataProps = {
    combinationId?: string
    offerId?: string
    additionalAction?: AdditionActions
}

export type OfferState = {
    step: OfferSteps
    getQuestions: ApiProps
    createOrder: ApiProps
    createOrderData?: CreateOrderResponse
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

