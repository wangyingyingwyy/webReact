import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class Todolist extends Component {
    constructor(){
        super();

        this.state={
            todo:JSON.parse(localStorage.getItem('key'))||[],
            todo2:JSON.parse(localStorage.getItem('key2'))||[]
        }
    }
    //存储到本地
    addItem=(data)=>{
        if(data.title!==''){
            let arr=[...this.state.todo,data];
            localStorage.setItem('key',JSON.stringify(arr))
            this.setState({
                todo:[...this.state.todo,data],
            }) 
        }else{
            alert("请填写此字段！")
        }
        
    }
    //由正在进行时变为已完成
    jumpItem=(idx)=>{
        let todo=[...this.state.todo];
        todo[idx].done='true';
        let todo2=[...this.state.todo2,todo[idx]];
        todo.splice(idx,1);
        localStorage.setItem('key2',JSON.stringify(todo2))
        localStorage.setItem('key',JSON.stringify(todo))
        this.setState((state,props)=>{
            return{
                todo2:todo2,
                todo:todo
            }
        })
    }
    // //由已完成变为正在进行时
    jumpItem2=(idx)=>{
        let todo2=[...this.state.todo2];
        todo2[idx].done='false';
        let todo=[...this.state.todo,todo2[idx]];
        todo2.splice(idx,1);
        localStorage.setItem('key',JSON.stringify(todo))
        localStorage.setItem('key2',JSON.stringify(todo2))
        this.setState((state,props)=>{
            return{
                todo2:todo2,
                todo:todo
            }
        })
    }
    //删除按钮
    delItem=(idx,e)=>{
        let todo=[...this.state.todo];
        todo.splice(idx,1);
        localStorage.setItem('key',JSON.stringify(todo))
        this.setState((state,props)=>{
            return{
                todo:todo,
            }
        })
    }
    delItem2=(idx,e)=>{
        let todo2=[...this.state.todo2];
        todo2.splice(idx,1);
        localStorage.setItem('key2',JSON.stringify(todo2))
        this.setState((state,props)=>{
            return{
                todo2:todo2,
            }
        })
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} del2={this.delItem2}
                todo={this.state.todo} todo2={this.state.todo2} 
                jump={this.jumpItem} jump2={this.jumpItem2}
                />
            </div>
        )
    }
}
