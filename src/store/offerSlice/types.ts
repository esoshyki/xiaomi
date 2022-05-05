import { isString, isNumber } from './../types';
import { N } from '../types';

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
    combinationId?: number
    [questionId: number] : number | string
}

export type QuestionsData = {
    [id: number]: Question
}

export type AnswerTree = {
    combinationId?: number
    questions: QuestionTree
}

export type QuestionTree = {
    combinationId?: number
    questions: {
        [id: keyof QuestionsData]: {
            answers: {
                [id: keyof QuestionsData] : QuestionTree | []
            }
        }
    }
}

export type QuestionsResponse = {
    questionsData: QuestionsData
    questionsTree: QuestionTree
}

export type Question = {
    answerType: AnswerType
    questionName: string
    questionGroup: string
    questionShortName: isString
    questionHelp?: isString
    answers: {[id: number] : Answer}
}

export type QuestionGroup = {
    groupName: string
    groupShortName: isString
    questions: Question[]
};

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
}

