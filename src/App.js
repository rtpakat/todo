import React, { Component } from 'react';
import './App.css';
import HeaderComponen from './Components/HeaderComponen';
import FormSubmit from './Components/FormSubmit';
import List from './Components/List';
import ListItem from './Components/ListItem';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      todos:[
          {id: 1,name: "ไปเที่ยว",complete :false},
          {id: 2,name: "เดินเล่น",complete :false}
      ] ,
      message: ""
   };

   //บอกว่าฟั่งชั่นอยู่ที่แอพ ส่งเข้าไปใน Formsubmit onChangeMessage ชื่อ props
   this.onChangeMessage = this.onChangeMessage.bind(this);
   this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }
  onChangeMessage(e){
    this.setState({message: e.target.value })
  }
  onSubmitMessage(e){
    e.preventDefault(); //กดsubmit แล้วไม่ให้โหลดเปลี่ยนหน้า **ป้องการการเปลี่ยนหน้า**
    let oldTodo = this.state.todos; //เอาtodo เก่ามา
    let todolengh = this.state.todos.length; //นับไอดี
    let lastId = this.state.todos[todolengh -1].id
    let newMassage =  {id: lastId+1 ,name: this.state.message,complete :false};
    oldTodo.push(newMassage);
    this.setState({todos : oldTodo});
  }


  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponen/>
        <List todos={this.state.todos}>
          <ListItem/>
        </List>
        <FormSubmit 
        onChangeMessage={this.onChangeMessage} 
        onSubmitMessage={this.onSubmitMessage}/>
        
      </div>
    );
  }
}

export default App;
