import { getTree } from './getTree';
import { GivenAnswer, QuestionTree } from './../../../store/offerSlice/types';

type ReturnProps = {
    questionId: string | null,
    combinationId?: string,
    offerId?: string
}
export const getFromTree = (tree: QuestionTree, answers: GivenAnswer[]): ReturnProps | null => {
    let _tree: QuestionTree = tree;
    let combinationId, offerId

    answers.forEach((answer) => {
        const { questionId, answerId, questionKey } = answer;

        if (!answerId) {
            return;
        }


        console.log(tree);
        console.log(answers);

        if (_tree.combinationId) combinationId = _tree.combinationId
        if (_tree.offerId) offerId = _tree.offerId

        _tree = getTree(_tree, questionId, questionKey, answerId) || _tree;

        console.log(_tree);

    });

    console.log(combinationId)
    console.log(offerId)

    const questionId = _tree.questions.find(
        (q) =>
            !(
                answers
                    .map((el) => el.questionKey)
                    .includes(q.questionId) ||
                answers.map((el) => el.questionId).includes(q.questionId)
            )
    )?.questionId;

    if (_tree.combinationId) combinationId = _tree.combinationId
    if (_tree.offerId) offerId = _tree.offerId

    console.log(combinationId)
    console.log(offerId)


    return {
        questionId: questionId ?? null,
        combinationId,
        offerId
    }

}