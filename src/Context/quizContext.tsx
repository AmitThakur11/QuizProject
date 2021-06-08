
import {useContext , createContext} from 'react';
import {quizes} from "../QuizData/QuestionBank"
export const  QuizContext = createContext();

export const QuizProvider = ({children})=>{
  return(
    <QuizContext.Provider value ={{quizes : quizes}}>
    {children}
    </QuizContext.Provider>
  )
}

export const  useQuiz = ()=>{
  return useContext(QuizContext)
}