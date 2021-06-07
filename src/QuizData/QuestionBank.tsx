
export type Options = {
  option : string ,
  isRight : boolean
}

export type  Questions = {
  question : string ,
  point : number,
  negativePoints : number ,
  options  : Options[]
}

export type Quizes = {
  id : number ,
  quizName : string ,
  questions : Questions[]
  

}[]

export const quizes : Quizes = [
  { id : 1 ,
    quizName : "Quiz One",
    questions : [
        {
          question : "Question number 1",
          point : 10,
          negativePoints :2,
          options : [
            {
              option  : "Option One",
              isRight : true
            },
            {
              option  : "Option two",
              isRight : false 
            },
            {
              option  : "Option three",
              isRight : false 
            },
            {
              option  : "Option four",
              isRight : false
            },
          ]
        },
        {
          question : "Question number 2",
          point : 10,
          negativePoints :2,
          options : [
            {
              option  : "Option One",
              isRight : false 
            },
            {
              option  : "Option two",
              isRight : true 
            },
            {
              option  : "Option three",
              isRight : false 
            },
            {
              option  : "Option four",
              isRight : false
            },
          ]
        },
        {
          question : "Question number 3",
          point : 10,
          negativePoints :2,
          options : [
            {
              option  : "Option One",
              isRight : false 
            },
            {
              option  : "Option two",
              isRight : false
            },
            {
              option  : "Option three",
              isRight : true 
            },
            {
              option  : "Option four",
              isRight : false
            },
          ]
        },
        {
          question : "Question number 4",
          point : 10,
          negativePoints :2,
          options : [
            {
              option  : "Option One",
              isRight : false 
            },
            {
              option  : "Option two",
              isRight : false 
            },
            {
              option  : "Option three",
              isRight : false 
            },
            {
              option  : "Option four",
              isRight : true
            },
          ]
        },
        {
          question : "Question number 5",
          point : 10,
          negativePoints :2,
          options : [
            {
              option  : "Option One",
              isRight : true
            },
            {
              option  : "Option two",
              isRight : false 
            },
            {
              option  : "Option three",
              isRight : false 
            },
            {
              option  : "Option four",
              isRight : false
            },
          ]
        },
        {
          question : "Question number 6",
          point : 10,
          negativePoints :2,
          options : [
            {
              option  : "Option One",
              isRight : false 
            },
            {
              option  : "Option two",
              isRight : true 
            },
            {
              option  : "Option three",
              isRight : false 
            },
            {
              option  : "Option four",
              isRight : false
            },
          ]
        },
        {
          question : "Question number 7",
          point : 10,
          negativePoints :2,
          options : [
            {
              option  : "Option One",
              isRight : false 
            },
            {
              option  : "Option two",
              isRight : false
            },
            {
              option  : "Option three",
              isRight : true
            },
            {
              option  : "Option four",
              isRight : false
            },
          ]
        },
        {
          question : "Question number 8",
          point : 10,
          negativePoints :2,
          options : [
            {
              option  : "Option One",
              isRight : false 
            },
            {
              option  : "Option two",
              isRight : false
            },
            {
              option  : "Option three",
              isRight : false 
            },
            {
              option  : "Option four",
              isRight : true
            },
          ]
        },
        {
          question : "Question number 9",
          point : 10,
          negativePoints :2,
          options : [
            {
              option  : "Option One",
              isRight : true 
            },
            {
              option  : "Option two",
              isRight : false
            },
            {
              option  : "Option three",
              isRight : false 
            },
            {
              option  : "Option four",
              isRight : false
            },
          ]
        },
        {
          question : "Question number 10",
          point : 10,
          negativePoints :2,
          options : [
            {
              option  : "Option One",
              isRight : false 
            },
            {
              option  : "Option two",
              isRight : true 
            },
            {
              option  : "Option three",
              isRight : false 
            },
            {
              option  : "Option four",
              isRight : false
            },
          ]
        }
  ]
  },
  { 
    id : 2 ,
    quizName : "Quiz Two",
    questions : [
      {
        question : "Question number 1",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : true
          },
          {
            option  : "Option two",
            isRight : false 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 2",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : true 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 3",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : false
          },
          {
            option  : "Option three",
            isRight : true 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 4",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : false 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : true
          },
        ]
      },
      {
        question : "Question number 5",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : true
          },
          {
            option  : "Option two",
            isRight : false 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 6",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : true 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 7",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : false
          },
          {
            option  : "Option three",
            isRight : true
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 8",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : false
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : true
          },
        ]
      },
      {
        question : "Question number 9",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : true 
          },
          {
            option  : "Option two",
            isRight : false
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 10",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : true 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      }
]
  },
  { 
    id : 3 ,
    quizName : "Quiz Three",
    questions : [
      {
        question : "Question number 1",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : true
          },
          {
            option  : "Option two",
            isRight : false 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 2",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : true 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 3",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : false
          },
          {
            option  : "Option three",
            isRight : true 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 4",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : false 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : true
          },
        ]
      },
      {
        question : "Question number 5",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : true
          },
          {
            option  : "Option two",
            isRight : false 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 6",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : true 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 7",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : false
          },
          {
            option  : "Option three",
            isRight : true
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 8",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : false
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : true
          },
        ]
      },
      {
        question : "Question number 9",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : true 
          },
          {
            option  : "Option two",
            isRight : false
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      },
      {
        question : "Question number 10",
        point : 10,
        negativePoints :2,
        options : [
          {
            option  : "Option One",
            isRight : false 
          },
          {
            option  : "Option two",
            isRight : true 
          },
          {
            option  : "Option three",
            isRight : false 
          },
          {
            option  : "Option four",
            isRight : false
          },
        ]
      }
]
  }
]