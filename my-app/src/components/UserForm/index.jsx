import React, {Component}  from 'react';
import InputField from '../InputField';
import { Form, Button, DatePicker } from 'antd';
import { userFormRef } from '../../firebase'

class UserForm extends Component {
state = {
    firstName: '',
    lastName: '',
    birthday: '',
    age: '',
    hobby: ''
};

changeHandler = (event) => {
    this.setState({[event.target.name] : event.target.value}
)}

changeDateHandler = (date, dateString) => {
    this.setState({ birthday: dateString})
  }
  

submitHandler = (event) => {
    const { firstName, lastName, birthday, age, hobby } = this.state
  
    const userData = {
        firstName,
        lastName,
        birthday,
        age,
        hobby
    }
    userFormRef.push().set(userData)
    console.log(userData, 'Huraayyyy we did it')
    alert('User Data submitted successfully')
   
}

render(){

    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 18 },
          sm: { span: 16 },
        },
      };

    return(
        <Form {...formItemLayout}>

            <p className='title'>User Form</p>
            <Form.Item label="First Name:">
            <InputField
            type = 'text'
            name = 'firstName'
            value = {this.state.firstName}
            change = {this.changeHandler}
            />
            </Form.Item>

            <Form.Item label="Last Name:">
            <InputField
            type = 'text'
            name = 'lastName'
            value = {this.state.lastName}
            change = {this.changeHandler}
            />
            </Form.Item>

            <Form.Item label="Birthday:">
             <DatePicker onChange={this.changeDateHandler}/>
            </Form.Item>

            <Form.Item label="Age:">
            <InputField
            type = 'text'
            name = 'age'
            value = {this.state.age}
            change = {this.changeHandler}
            />
            </Form.Item>

            <Form.Item label="Hobby:">
            <InputField
            type = 'text'
            name = 'hobby'
            value = {this.state.hobby}
            change = {this.changeHandler}
            />
             </Form.Item>

             <Button type="submit" onClick={this.submitHandler}>Submit</Button>
        </Form>
    )
}
}

const WrappedUserForm = Form.create({ name: 'user form' })(UserForm);

export default WrappedUserForm





































// import React from 'react'
// import InputField from '../InputField'

// function UserForm(){

// const changeHandler = (event) => {
//     console.log(event.target.value)
// } 
   
// return(
//     <div>
//     <InputField 
//     label='First Name'
//     type='text'
//     name='firstname'
//     value={(e) => e.target.value}
//     change={changeHandler}
//     />
//     <InputField 
//     label='Last Name'
//     type='text'
//     name='lastname'
//     value='Nedu'
//     change={changeHandler}
//     />
//     <InputField 
//     label='Please enter your age'
//     type='text'
//     name='age'
//     value='16'
//     />
//     </div>
// )
// }

// export default UserForm;