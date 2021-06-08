export type Options = {
  option : string ,
  isRight : boolean
}

export type  Questions = {
  id : number,
  question : string ,
  point : number,
  negativePoints : number ,
  options  : Options[]
}

export type Quizes = {
  id : number ,
  quizImage : string,
  quizName : string ,
  questions : Questions[]
  

}[]
