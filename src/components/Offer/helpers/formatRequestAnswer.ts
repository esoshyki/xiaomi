import { RootState } from "../../../store";
import { RequestAnswers } from "../../../store/offerSlice/types";

export const formatRequestAnswer = (state: RootState): RequestAnswers => {
    const { givenAnswers, deviceInfo } = state.offer;
    const { combinationId } = givenAnswers;
    const requestAnswers: RequestAnswers = givenAnswers.answers.reduce(
        (acc, next) => {
            const { questionId, answerId, answerName } = next;
            acc[questionId] = answerId ?? answerName;
            return acc;
        },
        {} as RequestAnswers
    );
    if (combinationId)
        requestAnswers.combinationId = combinationId;

    if (deviceInfo)
        requestAnswers.deviceInfo = deviceInfo

    return requestAnswers;
};
