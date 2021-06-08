import {OptionContainer} from "./OptionContainer"
import {useParams} from "react-router-dom";
import {useState} from "react";
export const QuestionCard = ({quizes})=>{
  const {id} = useParams();
  const [count , setCount] = useState(1)
  return(
    <div >
        {
          quizes.map((quiz)=>{
            return<div>{parseInt(id,10) === quiz.id && <div>
              <h1 className = "question-card title">{quiz.quizName}</h1>
              <div>{
                quiz.questions.map(({question,options,id})=>{
                  return(<>
                     {id === count &&<div className = "question-card">
                      <div className = "question">{question}</div>
                      <OptionContainer options = {options} />
                      
                    </div>}
                    
                  </>)

                })
                
                
              }<button onClick = {()=>setCount(count + 1)}>Submit</button></div>

              </div>}
            </div>
          })
        }
      </div>
  )
}