import { getDataJs } from './lib'
import { getAllDataJs } from './lib'

export default function setupCards(){
    const answerButton = getAllDataJs('answer-button')
    const answerText = getAllDataJs('answer-text')

    answerButton.forEach(getAnswerButton)

    function getAnswerButton(btn){
        btn.addEventListener('click', showAnswer)
    }

    function showAnswer(event) {
        const clickedAnswerButton = event.target
        const currentAnswer = clickedAnswerButton.dataset.name

        answerText.forEach(text => {
            const answer = text.dataset.name
            text.classList.toggle('d-none', answer !== currentAnswer)
            console.log(currentAnswer)
        })
    }

}