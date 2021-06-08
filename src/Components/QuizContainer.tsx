
import "../CSScomponents/QuizContainer.css";
import {quizes} from "../QuizData/QuestionBank"
import {QuestionCard} from "./QuestionCard"
export const QuizContainer = ()=>{
  
  return(
    <div className = "quiz-container">
      <QuestionCard quizes = {quizes} />
      
    </div>
  )
}