
import {quizes} from "../QuizData/QuestionBank"

export const  QuizComponent = ()=>{
  return(
    <div className = "quiz-list">
      {
        quizes.map((quiz)=>{
          return <div className = "quiz" key = {quiz.id}>
            <div className = "quiz-title">{quiz.quizName}</div>
            <button>ENTER</button>
          </div>
        })

      }
    </div>
  )
}