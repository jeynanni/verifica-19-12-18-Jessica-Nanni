import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css';
import { Media } from 'reactstrap';

class Body extends Component {
    

   
  render() {
    return (
      <div className="Body">
      <div className ="container">
      <div className ="firstImg">
      <img alt={this.props.title} src={this.props.thumbnail}/>
      </div>
      <div className="second">
      <div>{this.props.albumId}<div/>
      <div>{this.props.id}</div>
      <div>{this.props.title}</div>
      </div>
      <img alt={this.props.title} src={this.props.url}/>  
      </div>
      </div>
      
      </div>
      
    );
  }
}

export default Body;