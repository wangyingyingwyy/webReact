import React, { Component } from 'react'
import "./Todo.css" ;
export default class Todoinput extends Component {

    constructor(){
        super();
    }
    handInput=(e)=>{
        //绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode===13){
            let obj={};
            obj.title=e.target.value;
            obj.done='false';
            this.props.add(obj);
            e.target.value='';  
        }
    }
    render() {
        return (
            <div className="inpBox">
                <label>ToDoList</label>
                <input onKeyDown={this.handInput} type="text" placeholder="添加ToDo"/>
            </div>
        )
    }
}
