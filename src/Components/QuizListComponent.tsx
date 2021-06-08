import  "../CSScomponents/QuizListComponent.css";
import {Quizes} from "../QuizData/QuestionBank"
import {useQuiz} from "../Context/quizContext";
import {Link } from "react-router-dom"
export const  QuizListComponent = ()=>{
  const {quizes} = useQuiz()
  return(
    <div className = "quiz-list">
      {
        quizes.map((quiz:Quizes)=>{
          return <Link to = {`/quiz/${quiz.id}`}><div className = "quiz" key = {quiz.id}>
            <div className = "quiz-image"><img  src = {quiz.quizImage} alt = "processing"/></div>
            <div className = "quiz-title">{quiz.quizName}</div>
          </div></Link>
        })

      }
    </div>
  )
}