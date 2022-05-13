import { QuestionTree } from "../../../store/offerSlice/types";
import { N } from "../../../store/types";

export const getTree = (tree: QuestionTree, questionId: string, answerId: string): N<QuestionTree> => {
    const newTree = tree.questions.find(q => q.questionId === questionId)?.answers.find(a => a.answerId === answerId);

    return newTree || null
}