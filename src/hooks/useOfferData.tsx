import { select } from '../store/selector';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import { CheckImei, GetQuestions, setCurrentQuestion, setCurrentQuestionGroup, setGivenAnswers, setImeiValue, setStep } from '../store/offerSlice';
import { GivenAnswer, OfferSteps } from '../store/offerSlice/types';

export const useOfferData = () => {
    const offer = useSelector(select.offer);
    const dispatch = useDispatch()

    const setImei = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setImeiValue(e.target.value))
    }

    const getQuestions = (phoneID: string) => {
        dispatch(GetQuestions.request(phoneID))
    }

    const changeStep = (step: OfferSteps) => {
        dispatch(setStep(step))
    }

    const nextQuestion = () => {
        const { currentQuestion, currentQuestionGroup, questions } = offer;
        if (typeof currentQuestion !== "number" || typeof currentQuestionGroup !== "number" || !questions) return;

        const currentGroup = questions[currentQuestion];

        if (currentGroup.questions[currentQuestion + 1]) {
            return dispatch(setCurrentQuestion(currentQuestion + 1))
        } else {
            if (questions[currentQuestionGroup + 1]) {
                return dispatch(setCurrentQuestionGroup(currentQuestionGroup + 1))
            }
        }
    };

    const getAnswer = (answer: GivenAnswer) => {
        const { givenAnswers } = offer;
        const ans = givenAnswers.find(ans => ans.questionId === answer.questionId);

        if (ans) {
            ans.answerId = answer.answerId;
            dispatch(setGivenAnswers([...givenAnswers]))
        } else {
            dispatch(setGivenAnswers([...givenAnswers, answer]))
        };
        nextQuestion()
    }

    const checkImei = (emai: string) => dispatch(CheckImei.request(emai))

    return ({
        ...offer,
        setImei,
        checkImei,
        getQuestions,
        changeStep,
        nextQuestion,
        getAnswer
    })
}
