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
        questionKey
    } = questionData;

    console.log(questionKey);
    
    const givenAnswer: GivenAnswer = {
        questionKey,
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
