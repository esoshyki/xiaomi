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
        questionKey
    } = questionData;

    
    const givenAnswer: GivenAnswer = {
        questionKey,
        questionId,
        questionGroup,
        questionName,
        questionShortName,
        answerId,
        answerName,
    };

    return givenAnswer;
};
