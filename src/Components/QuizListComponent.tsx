import  "../CSScomponents/QuizListComponent.css"
import {quizes} from "../QuizData/QuestionBank"

export const  QuizListComponent = ()=>{
  return(
    <div className = "quiz-list">
      {
        quizes.map((quiz)=>{
          console.log(quiz.quizImage);
          return <div className = "quiz" key = {quiz.id}>
            <div className = "quiz-image"><img  src = {quiz.quizImage} alt = "processing"/></div>
            <div className = "quiz-title">{quiz.quizName}</div>
          </div>
        })

      }
    </div>
  )
}