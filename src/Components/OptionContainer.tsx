
export const OptionContainer = ({options})=>{
  return(
    <div className = "option-container">
      {
        options.map(({option})=>{
          return(
            <div  className = "option">{option}</div>
          )
        })
      }
    </div>
  )
}