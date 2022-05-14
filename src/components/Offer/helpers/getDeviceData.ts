import { DeviceInfo, GivenAnswer } from "../../../store/offerSlice/types";

export const getDeviceData = (givenAnswers: GivenAnswer[]) => {

    return givenAnswers.reduce((acc, next) => {
        if (next.questionShortName) {
            acc[next.questionShortName] = acc[next.questionShortName] ? acc[next.questionShortName] + ", " + next.answerName : next.answerName
        };
        return acc
    }, {} as {
        [questionShortName: string]: string
    })
}