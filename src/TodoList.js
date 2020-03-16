import React from 'react';
import TodoItem from './TodoItem.js';
// import logo from './logo.svg';
// import './App.css';

//定义一个react组件
class TodoList extends React.Component {

  constructor(props){//组件的构造函数
    super(props);
    this.state = {
      list:[
      ],
      inputValue:''
    }

    this.hangdleInoutChange = this.hangdleInoutChange.bind(this);
  }

  handleBtnClick(){
    
    this.setState({
      list:[...this.state.list,this.state.inputValue],//...展开符
      inputValue:''
    })
  }

  hangdleInoutChange(e){
    // console.log(e.target.value);
    this.setState({
      inputValue:e.target.value
    })
  }

  handleDelete(index){
    // console.log('delete');
    const list = [...this.state.list];//copy
    list.splice(index,1);
    this.setState({list})
  }

  getTodeItem(){
    return (
      this.state.list.map((item,index)=>{
        // return <li key={index} onClick={this.handleItemClick.biindexnd(this,index)}>{item}</li>
        return <TodoItem handleDelete={this.handleDelete.bind(this)} key={index} content={item} index={index}/>//conten属性传值
      })
    )
  }
  render(){
    return (
      <div>
        <div className="TodoList">
        <input value={this.state.inputValue} onChange={this.hangdleInoutChange}/>
        <button className='btn' onClick={this.handleBtnClick.bind(this)}>add</button>
        {/* bind(this)代表绑定当前this */}
        <ul>
          {this.getTodeItem()}
        </ul>
      </div>
      </div>
      
    );
  }
}

export default TodoList;
