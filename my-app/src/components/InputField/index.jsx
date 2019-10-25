import React from 'react'
import { Input } from 'antd';

function InputField(props){
return(
      <Input
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.change}
      />
 )
}

export default InputField;

