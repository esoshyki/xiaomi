import { RootState } from "../../../store";
import { RequestAnswers } from "../../../store/offerSlice/types";

export const formatRequestAnswer = (state: RootState): RequestAnswers => {
    const { givenAnswers } = state.offer;
    const { currentCombinationId } = givenAnswers;
    const requestAnswers: RequestAnswers = givenAnswers.answers.reduce(
        (acc, next) => {
            const { questionId, answerId, answerName } = next;
            acc[questionId] = answerId ?? answerName;
            return acc;
        },
        {} as RequestAnswers
    );
    if (currentCombinationId)
        requestAnswers.combinationId = currentCombinationId;

    return requestAnswers;
};
