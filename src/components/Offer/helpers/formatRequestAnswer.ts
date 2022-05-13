import { RootState } from "../../../store";
import { RequestAnswers } from "../../../store/offerSlice/types";

export const formatRequestAnswer = (state: RootState): RequestAnswers => {
    const { currentGivenAnswers } = state.offer;
    const { combinationId } = currentGivenAnswers;
    const requestAnswers: RequestAnswers = currentGivenAnswers.answers.reduce(
        (acc, next) => {
            const { questionId, answerId, answerName } = next;
            acc[questionId] = answerId ?? answerName;
            return acc;
        },
        {} as RequestAnswers
    );
    if (combinationId)
        requestAnswers.combinationId = combinationId;

    return requestAnswers;
};
