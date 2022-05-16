import { GivenAnswer, QuestionTree, TreeQuestion, SetTreeDataProps } from './../../../store/offerSlice/types';

const getTreeQuestion = (
    question: TreeQuestion,
    givenAnswers: string[],
    questionsAnswered: string[],
    setTreeData: (props: SetTreeDataProps
    ) => void): TreeQuestion | null => {

    if (!questionsAnswered.includes(question.questionId)) {
        return question
    }

    if (!question.answers) {
        return null
    }

    const nextTree = question.answers.find(ans => givenAnswers.includes(ans.answerId || ""));

    if (!nextTree) return null;

    const { combinationId, offerId, additionalAction } = nextTree;

    setTreeData({ combinationId, offerId, additionalAction })

    const nextQuestion = nextTree.questions.find(q => questionsAnswered.includes(q.questionId));

    if (!nextQuestion) {
        console.log(`nextQuestion`, nextTree.questions.find(q => !questionsAnswered.includes(q.questionId)))
        return nextTree.questions.find(q => !questionsAnswered.includes(q.questionId)) || null
    }

    return getTreeQuestion(nextQuestion, givenAnswers, questionsAnswered, setTreeData)
}

export const getFromTree = (tree: QuestionTree, answers: GivenAnswer[], setTreeProps: (props: SetTreeDataProps) => void): TreeQuestion | null => {
    const givenAnswers = answers.reduce((acc, next) => {
        if (next.answerId) {
            acc.push(next.answerId)
        }
        ;
        if (next.answerName) {
            acc.push(next.answerName)
        }
        return acc
    }, [] as string[]);
    const questionsAnswered = answers.reduce((acc, next) => {
        if (next.questionId) acc.push(next.questionId);
        if (next.questionKey) acc.push(next.questionKey);
        return acc;
    }, [] as string[]);

    const { combinationId, offerId, additionalAction } = tree;

    setTreeProps({ combinationId, offerId, additionalAction })

    const question = tree.questions.find(el => !questionsAnswered.includes(el.questionId));

    console.log(`questionsAnswered`, questionsAnswered);

    if (question) {
        console.log(`newQuestion`, question);
        return question
    }

    let nextQuestion: TreeQuestion | null = null;

    tree.questions.forEach(question => {
        if (questionsAnswered.includes(question.questionId)) {
            const _nextQuestion = getTreeQuestion(question, givenAnswers, questionsAnswered, setTreeProps);
            if (_nextQuestion) nextQuestion = nextQuestion
        }

        const nextTree = question.answers.find(ans => givenAnswers.includes(ans.answerId || ""));

        if (nextTree) {
            const found = getFromTree(nextTree, answers, setTreeProps)
            if (found) nextQuestion = found;
        }
    })

    return nextQuestion

}