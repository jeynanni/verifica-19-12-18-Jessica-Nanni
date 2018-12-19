import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css';

class Body extends Component {
    

   
  render() {
    return (
      <div className="Body">
      <div>{this.props.albumId}<div/>
      <div>{this.props.id}</div>
      <div>{this.props.title}</div>
      <img alt={this.props.title} src={this.props.url}/>  
      <img alt={this.props.title} src={this.props.thumbnail}/>
      </div>
      </div>
    );
  }
}

export default Body;