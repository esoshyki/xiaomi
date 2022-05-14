import { QuestionTree } from "../../../store/offerSlice/types";
import { N } from "../../../store/types";

export const getTree = (tree: QuestionTree, questionId: string, questionKey: string, answerId: string): N<QuestionTree> => {
    console.log(tree, questionId, questionKey, answerId)
    const newTree = tree.questions.find(q => q.questionId === questionId || q.questionId === questionKey)?.answers.find(a => a.answerId === answerId);
    console.log(newTree);
    return newTree || null
}