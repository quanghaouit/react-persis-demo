// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Imports: Redux Actions
import { login } from '../redux/actions/authActions';
import { increaseCounter, decreaseCounter } from '../redux/actions/counterActions';

import './style.css'

// Screen: Counter
class Counter extends React.Component {
  render() {
    return (
      <div className='root'>
          <div>
          <label className='label'>Logged In: </label>
          <span className='status' >{`${this.props.loggedIn}`}</span>
          <button
            title="Login"
            onClick={this.props.loggedIn === false ? () => this.props.reduxLogin(true) : () => this.props.reduxLogin(false)}
          >Login</button>
        </div>
        <div>
        <label className='label'>Counter:</label>
          <button onClick={() => this.props.reduxIncreaseCounter()}>
            <span>+</span>
          </button>
          <span className='status'>{this.props.counter}</span>
          <button onClick={() => this.props.reduxDecreaseCounter()}>
            <span>-</span>
          </button>
        </div>
      </div>
    )
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
    return {
      // Increase Counter
      reduxIncreaseCounter: () => dispatch(increaseCounter()),
      // Decrease Counter
      reduxDecreaseCounter: () => dispatch(decreaseCounter()),
      // Login
      reduxLogin: (trueFalse) => dispatch(login(trueFalse)),
   };
};



// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter);