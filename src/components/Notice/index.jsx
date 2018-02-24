import React, { Component } from 'react';
import './style.scss';

class Notice extends Component {
  state = {
    isOnline: navigator.onLine
  };

  componentDidMount(){

    window.addEventListener('online',  () => {
      this.setState({
          isOnline: navigator.onLine
      });
    });

    window.addEventListener('offline',  () => {
        this.setState({
            isOnline: navigator.onLine
        });
    });
  }

    render() {
      if(this.state.isOnline){
          return(
            <div className="notice"></div>
          );
      }

      return(
        <div className="notice active">You're offline</div>
      );
    }
}

export default Notice;
