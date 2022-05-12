import { GivenAnswer, Question } from "../../../store/offerSlice/types";

export const collectAnswerData = (
    questionData: Question,
    answerName: string,
    answerId?: string,
): GivenAnswer => {
    const {
        questionId,
        questionGroup,
        questionName,
        questionShortName,
        questionDescription,
    } = questionData;
    const givenAnswer: GivenAnswer = {
        questionId,
        questionGroup,
        questionName,
        questionShortName,
        questionDescription,
        answerId,
        answerName,
    };

    return givenAnswer;
};
