import React from "react";
import './Form.css'

const Form = ({value, onChange, onCreate, onKeyPress}) =>{
  //value : input의 내용 & onChange : 버튼 클릭 후 & onCreate : input 내용이 변경 & onKeyPress : 키를 입력할 때 실행
  return(
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  )
}

export default Form;