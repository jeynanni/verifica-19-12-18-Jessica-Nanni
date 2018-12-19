import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Photos from './components/photos/Photos';
import Body from './components/body/Body';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albums : [],
      photo : [],
      
    };
  }

  componentDidMount = () => {
    this.albums()
    this.photo()
    
  }
  albums() {
    fetch('https://jsonplaceholder.typicode.com/albums' )// fetch for albums
      .then(response => response.json())
      .then(json => this.setState({
        albums:json
  }))
}
photo() {
    fetch('https://jsonplaceholder.typicode.com/photos')// fetch for photos
      .then(response => response.json())
      .then(json => this.setState({
        photo:json
  }))
}

  render() {
    return (
      <div className="App">
        <div>
          
        {this.state.photo.map((item,index) => (<Photos key={'image-list'+ index}  title={item.title} url={item.url} thumbnail={item.thumbnailUrl}/>))}
        {/*<Photos thumbnail={this.state.photo.thumbnailUrl} title={this.state.photo.title}/><Photos url ={this.state.photo.url}/> ======>single image*/}
        {this.state.albums.map((item,index) => (<Body key={'photo-list' + index} user={item.albumId} id= {item.id} title={item.title}/>))}
      </div>
      </div>
    );
  }
}

export default App;
