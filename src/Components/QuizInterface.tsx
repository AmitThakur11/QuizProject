import { quizes } from "../QuizData/QuestionBank";
import {QuizComponent} from "./QuizComponent";
export const QuizInterface = ()=>{
  return(
    <div>
      <QuizComponent quizes = {Quizes} />
    </div>
  )
}