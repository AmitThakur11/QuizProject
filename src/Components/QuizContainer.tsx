import {useParams } from "react-router-dom";
import "../CSScomponents/QuizContainer.css";
import {quizes} from "../QuizData/QuestionBank"
import {useState} from "react"
export const QuizContainer = ()=>{
  const {id} = useParams();
  const [count , setCount] = useState(0)
  
  return(
    <div className = "quiz-container">
      <div >
        {
          quizes.map((quiz)=>{
            return<div>{parseInt(id,10) === quiz.id && <div>
              <h1 className = "question-card title">{quiz.quizName}</h1>
              <div>{
                quiz.questions.map(({question,options})=>{
                  return(
                    <div className = "question-card">
                      <div className = "question">{question}</div>
                      <div className = "option-container">
                        {
                          options.map(({option})=>{
                            return(
                              <div  className = "option">{option}</div>
                            )
                          })
                        }
                      
                      </div>
                      
                    </div>
                  )

                })
                
              }</div>

              </div>}
            </div>
          })
        }
      </div>
      
    </div>
  )
}