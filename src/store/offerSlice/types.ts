import { isString, isNumber } from './../types';

export type OfferSteps = 
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
    [questionId: number] : string
}

export type Question = {
    questionId: string
    questionName: string
    questionDescription: string
    questionShortName: isString
    questionGroup: string
    answerType: AnswerType
    answers?: {[id: number] : Answer}
}

export type QuestionsData = {
    [id: number]: Question
}

export type QuestionTree = {
    combinationId?: string
    questions: Array<{
        questionId: string
        answers: any[]
    }>
}

export type QuestionsResponse = {
    questionsData: QuestionsData
    questionsTree: QuestionTree
    complete?: true
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
    [questionId: string] : string
}

export type GivenAnswers = {
    currentCombinationId?: string
    answers: GivenAnswer[]
}

export type OfferState = {
    step: OfferSteps
    loading: boolean,
    result: "success" | "error" | null
    errors: string[]
    answers: Answers | null
    questionsData: QuestionsData | null
    questionsTree: QuestionTree | null
    hint: string,
    currentQuestion: isNumber
    currentQuestionGroup: isNumber
    photoFront: isString
    photoBack: isString
    lastGivenQuestion?: number
    questionsGiven: string[]
    answersGiven: string[]
    givenAnswers: GivenAnswers
}

