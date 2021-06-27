import {OptionContainer} from "./OptionContainer"
import {useParams} from "react-router-dom";
import {useQuiz} from "../Context/quizContext";
import {TotalCard} from "../Components/TotalCard"
export const QuestionCard = ({quizes})=>{
  const {id} = useParams();
  const {count , setCount} = useQuiz()
  return(
    <div >
        {
          quizes.map((quiz)=>{
            return<div>{parseInt(id,10) === quiz.id && <div>
              <h1 className = "question-card title">{quiz.quizName}</h1>
              <div>{
                quiz.questions.map(({question,options,id})=>{
                  return(
                  <>
                     {id === count &&<div className = "question-card">
                            <div className = "question">{question}</div>
                            <OptionContainer options = {options} />
                          </div>
                      }
                  </>
                  )
                })
              }
              {count > quiz.questions.length && <TotalCard/>}
              {count < quiz.questions.length+1 && <button onClick ={()=>setCount(count+1)}>Next</button>}
            </div>

              </div>}
            </div>
          })
        }
      </div>
  )
}