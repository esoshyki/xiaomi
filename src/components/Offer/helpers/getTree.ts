import { QuestionTree } from "../../../store/offerSlice/types";
import { N } from "../../../store/types";

export const getTree = (tree: QuestionTree, questionId: string, questionKey: string, answerId: string): N<QuestionTree> => {

    const branchIdx = tree.questions.findIndex(q => q.questionId === questionId || q.questionId === questionKey);

    if (branchIdx >= 0) {
        const newTree = tree.questions[branchIdx].answers.find(a => a.answerId === answerId);
        if (newTree) return newTree;
    } else {
        const nextQuestion = tree.questions[branchIdx + 1];
        if (!nextQuestion) {
            return null
        } else {
            const _newTree = nextQuestion.answers?.find(a => a.answerId === answerId);
            return _newTree || null
        }
    }

    return null
}