import {PropTypes, Component} from 'react';

class Provider extends Component {

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    // children代表子组件
    return this.props.children;
  }

}

Provider.propTypes = {
  store: PropTypes.object.isRequired
}

Provider.childContextTypes = {
  store: PropTypes.object
};

export default Provider;
