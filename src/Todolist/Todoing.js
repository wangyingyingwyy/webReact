import React, { Component } from 'react'
import "./Todo.css" ;
export default class Todoing extends Component {
    render() {
        var {todo}=this.props;
        var {todo2}=this.props;
        return (
            <div className="boxTo">
                <h2>正在进行
                    <span>
                        {todo.length}
                    </span>
                </h2>
                <ol>
                    {
                        todo.map((item,idx)=>{        
                                    return <li key={idx}>
                                                <input type="checkbox" onClick={()=>this.props.jump(idx)}/>
                                                  {item.title}
                                                <button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                                            </li>
                                                   
                                

                        })
                    }
                </ol>
                <h2>已经完成 
                    <span>
                        {todo2.length}
                    </span>
                </h2>
                <ol>
                    {
                        todo2.map((item,idx)=>{
                                 return  <li key={idx}>
                                        <input type="checkbox" onClick={()=>this.props.jump2(idx)} checked="checked"/>
                                        {item.title}
                                        <button onClick={(e)=>this.props.del2(idx,e)}>删除</button>
                                    </li>
                            
                           
                        })
                    }
                </ol>
            </div>
            
        )
    }
}
