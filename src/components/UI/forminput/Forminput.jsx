import React from 'react'
import "../forminput/Forminput.css"
const Forminput = ({labelName,placeholder,inputType,id,...rest}) => {
  console.log(rest);
  return (
    <div className='form-container'>
        <label className='lable' htmlFor={id}>{labelName}</label>
       <input className='input' placeholder={placeholder || "..."} id={id} type={inputType} {...rest}/>

    </div>
  )
}

export default Forminput