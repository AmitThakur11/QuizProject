
import {useContext , useReducer ,  createContext , useState} from 'react';
import {quizes} from "../QuizData/QuestionBank"
export const  QuizContext = createContext("");

export const QuizProvider = ({children})=>{
  const [count , setCount] = useState(1);
  const [state , dispatch]= useReducer(()=>{

  } , {})
  const sharedData = {quizes : quizes , count : count , setCount : setCount}
  return(
    <QuizContext.Provider value ={sharedData}>
    {children}
    </QuizContext.Provider>
  )
}

export const  useQuiz = ()=>{
  return useContext(QuizContext)
}