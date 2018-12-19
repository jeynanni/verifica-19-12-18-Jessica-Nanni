import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Photos.css';

class Photos extends Component {
  render() {
    return (
      <div className="Photos">
     
        <img alt={this.props.title} src={this.props.url}/>
        
        <img alt={this.props.title} src={this.props.thumbnail}/>
      </div>
    );
  }
}

export default Photos;