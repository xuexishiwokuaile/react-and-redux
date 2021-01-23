import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions.js';

class AddTodo extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = this.refInput.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      value:''
    };
  }

  onSubmit(ev) {
    ev.preventDefault(); // 阻止网页跳转

    const input = this.input;
    // const input = this.state.value;
    // 删除两端的空白字符
    if (!input.value.trim()) {
      // input为空时
      return;
    }
    
    // 派发action
    this.props.onAdd(input.value);
    // 发送完成后将input清空input value
    input.value = '';
    this.setState({value: ''});
  }

  refInput(node) {
    this.input = node;
  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          {/* ref可以用来访问真实的dom元素 */}
          <input className="new-todo" onChange={this.onInputChange} value={this.state.value} ref={this.refInput}/>
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);

