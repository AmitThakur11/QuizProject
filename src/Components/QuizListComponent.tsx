import  "../CSScomponents/QuizListComponent.css"
import {quizes} from "../QuizData/QuestionBank"
import {Link } from "react-router-dom"
export const  QuizListComponent = ()=>{
  return(
    <div className = "quiz-list">
      {
        quizes.map((quiz)=>{
          return <Link to = {`/quiz/${quiz.id}`}><div className = "quiz" key = {quiz.id}>
            <div className = "quiz-image"><img  src = {quiz.quizImage} alt = "processing"/></div>
            <div className = "quiz-title">{quiz.quizName}</div>
          </div></Link>
        })

      }
    </div>
  )
}