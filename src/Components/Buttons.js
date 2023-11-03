import React from 'react'
import './Button.css'
function Buttons(props) {
    let style;
    if(props.page === 5){
    style = {
        display: "none"
    }}
    else if(props.page === 4)
    style = {
        backgroundColor: "#493DFF"
    }
  return (
    <>
        <button disabled = {props.page === 1 || props.page === 5}className='back' onClick={() => {props.onChange(prev => prev -1)}}>{props.page > 1 && props.page < 5 && "Go Back"}</button>
        <button style = {style} className='next' onClick={() => {
          if(!props.formData.email || !props.formData.name || !props.formData.phone)
            props.setError(true)
          else
            props.onChange(prev => prev +1)}
        }>{props.page === 4 ? "Confirm" : props.page < 5 ? "Next Step" : "" }</button>
    </>
  )
}

export default Buttons