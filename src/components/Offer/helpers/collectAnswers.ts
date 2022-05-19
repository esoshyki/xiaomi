import { GivenAnswer } from './../../../store/offerSlice/types';

type ReturnedAnswers = {
    [key: string] : string
}

export const collectAnswers = (answers: GivenAnswer[]) => {
    const requestAnswers = answers.reduce(
        (acc, next) => {
            const { questionId, answerId, answerName } = next;
            acc[questionId] = answerId ?? answerName
            // acc.push({ [questionId]: answerId ?? answerName });
            return acc;
        },
        {} as ReturnedAnswers
    );

    return requestAnswers
}

