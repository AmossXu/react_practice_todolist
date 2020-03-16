import React from 'react';

class TodoList extends React.Component{
    //子组件和父组件通信，需要调用父组件传递过来的方法

    handleDelete(){
        const{handleDelete,index} = this.props;
        handleDelete(index);
        // this.props.handleDelete(this.props.index)
        // console.log(this.props.index);
        
    }
    
    render(){
        return(
            <div onClick={this.handleDelete.bind(this)}>
                {this.props.content}
            </div>
        )
    }
}

export default TodoList;