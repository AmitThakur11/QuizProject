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
  quizImage : string,
  quizName : string ,
  questions : Questions[]
  

}[]

export const quizes : Quizes = [
  { id : 1 ,
    quizImage : "https://lh3.googleusercontent.com/kAAS-6cAvKiMECnrQLPYqS6x2pn4HJ_Qr5IyiVsLV9eTF_9G-OYEdL-3halx2YKy0FSA7vfo7r3GwN5_eNcnzscQXUPtFDJ_rhH4_2G5eHNcU9U6kztOq06l4g4CxIsEm3taOz5Lqyyd3zDgwq3IOnpy1iK0L1CaM_aujHIZRVrIo_sI992TPI3rLNQ3L8Uj4kRskOSWZgWVixwiQR-8kNKOmsV9MXyevfCHknw15l0IJRmXoHrwUVNhNjjEg0IXsDCZ-HZufAtBcQ9VJpGjHVDYShvnxr8Nz9K--m8-dIqSTDpHLsP6G-pypBap0nir_jiJxq2wJfEmsPtCM4beModnLHwI0Bmjb3G76oXlM2jPQcsz8NcDHg_lyYw6qZq-WEWVun5_s1EAP0JXLoN3QH6HacOcRlzLBcqYRiPxTgDAlmx8t4twHztGHIpV5J3rSz_U73Cm6uuXQtl7kyO-0Z_AWgxtStnoCEHT0d3gMpBmQi8-dOAk-6Ikcbr-oy_bHnIP0PLSeLSpoqX8eB2v0ZtF2EclFVa0ZNkrmlTSM0o_rt4QO8VCk2XIigEZaaWGlo5qXzAvwTKUi8I8tpw8Zr2-ksdhd-cX5q3Slk61Vg7PWRC54v6idFOsVzjajfwmClg3YFhHpHz_VNehZVBQguh1HhT3Cc_6yKZEk-5fIexsN2lGDEa6qekLLpihvwBNBxHA7bpPFcWGIEl2st-NcmA=s512-no?authuser=0" ,
    quizName : "SPACE",
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
    quizImage : "https://lh3.googleusercontent.com/-WVdatKMobBt6cMn494VF0p342fQapOuxM6QX3YN3dR7gnusnTz8NR2dwQVzSYtE9xr4088P2iPqqEeo8xqWfKFcOiHHS0eycfaM7ocCXeoS2xqeu4pNHLiNxYo8pHpJDDsg7y6rNF2wuLZsNyasL3Snx6DTABf11knlJYLU3qLWvJDsfk1BT_pu6wU7X90ZiRbApf9b2qXsC8AlymFF67LslE4v5-ZLQzX2DlxNrGfNKeKNeipLkLglS0rRrRfB0OmWNB_oWKlAGqRKhOeGibEwUDgzTU24ove3w9MWY0esqbPmBX8yZwxaE7Taod00k7LiYaaXwItNzYa0b4dynQV1uJvrjFfWWHz9LZBLIZ9vu_D-l4nLNlWbdc9GQ0ZQj8BsY_TCGF257Cl4TC0rWKDkGzNTyiA13mz-SsSjWnfnKXQDVc74Ndpwx3PW7E07yP0r7Ru4p_oNRWRd6Fo6wIgcH_DVIPxjrTCteUyfvMP6Vj7-e74wD6z3wePWdpLE0fdM1_D4Z0Z8H0B-B8AhK1RaF6e5fsCzOJi2boxSbP4HjNYolYcdcpVIc9b89DhLhNkvvTHTV0AphSHfFx7gCV_fwMdz1W-AnDY7tYvyA-69n9A90ojnUMCEodIHR3hw80UaGEMX70a2gxIkVTobUrBhoOkf0CNlMwhRzxOdly6xqkGZYE5iXUsMtk4vfdkOnZmR7U-e402qyybk7wJrZss=s512-no?authuser=0" ,
    quizName : "MYTHOLOGY",
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
    quizImage : "https://lh3.googleusercontent.com/K0kwOLNFJVWJtqyTt8sHE18or0mSnJrqoCjxCKF9rh2g6X55Wg6E838iLd4R02gA05WLO6SZ87YOIwn1RqbDlqr329N2YacHWeh1hUDmz6GDrllBCEmZuc4H8H5nbwFI1FVDTsHtlE-_zL8wcj4zs29QJT5h5HSm4biEVHpVB0NsZA_vDdBec3vosJfZlwAll_BO8OrWeuD2XF4LDsHBLLwuOwlj7oAknzr3dX3UYkLufGDsZp9ejqCKM5acPIprOA1WgsHvoOFMfYx7Rmvg0seY6Hp62-n1QipL4nm8ZGo-yUS6huUWPhLdTSk6ym_OqeMtVnVb2U62jAcorNUfo2Av49Jwgjxh0ru4bFVNvSYfF5QYLa9qc6h_lX24hEc_GWOiuBRS2ISbcyVT1Y6V0u5iBLQ6lTJYJ-CBtPbC8XypyprIZuGtDyjkUV32DFNJtnbcu-hCeawX2GdL5MtiolrMrubFc7MXFCAeSGMVmMc9gYSE_1DbEuvu7FYfHDIJ1M8g2SPLJG85CEzgzj40O33o2AUNioZVxoHiU0wp_F1yezIgBXDI6WcZoOd37jyY9OcTmWn2w5oIA8bJcLySQnGM3I2DHeMULH4fYtGiVny9m9xX3dQQxCuEi7PWlDklHpgXlB-1d2FaQzTzxG0ZuWGlOsvwSiO5MlL20eGLp6kRZrzWIsSwf5YsoQtVHqFT9zF8a2O7a9X7c_nUNGhKBvM=s512-no?authuser=0" ,
    quizName : "SOCIAL MEDIA",
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