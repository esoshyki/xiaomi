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
    | "createOrder"
    | "createOrderFailure"

export type AnswerType = "from_list" | "free_input" | "show_qr_link" | "upload_image"

export type Answer = {
    answerName: string
}

export type AdditionActions = "createOrder" | "addPhoto";

export type MakeAdditionAction = {
    action: AdditionActions,
    images?: File[]
}
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
    maxLengthCombination?: number
}

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
    questionHelp?: string
    questionHeader?: string
    answerType: AnswerType
    validator?: string
    validateFailure?: string
    answers?: { [id: string]: Answer }
    answerOrder?: number
}

export type QuestionsData = {
    [id: string]: Question
}

export type QuestionTree = {
    answerId?: string
    combinationId?: string
    combinationCode?: string
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
    combinationCode?: string
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
    combinationCode?: string
    combinationId?: string
    offerId?: string
    additionalAction?: AdditionActions
}

export type ImageFile = {
    uri: string
    fileName: string
    type: string
}

export type OfferState = {
    step: OfferSteps
    getQuestions: ApiProps
    createOrder: ApiProps
    questionsData: QuestionsData | null
    questionsTree: QuestionTree | null
    hint: string,
    images: ImageFile[]
    givenAnswers: GivenAnswers
    deviceInfo: N<DeviceInfo>
    changeQuestionsContent: boolean
}

