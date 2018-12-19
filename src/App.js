import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './components/body/Body';
import { Alert } from 'reactstrap';
import Loader from 'react-loader-spinner';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albums : [],
      photo : [],
      loader : true
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
        albums:json,
        
  }))
}
photo() {
    fetch('https://jsonplaceholder.typicode.com/photos')// fetch for photos
      .then(response => response.json())
      .then(json => this.setState({
        photo:json,
        loader : false
  }))
}

  render() {
    return (
      <div className="App">
      <Alert color="info">
       <h1><i> Single Page Application</i></h1>
      </Alert>
        <div>
          {this.state.photo.map((item,index)=> {
            if(index<10){
              return <Body key={'photo-list'+ index}  title={item.title} url={item.url} thumbnail={item.thumbnailUrl}user={item.albumId}id= {item.id}/>
            }
          })}
       {this.state.loader && <Loader type="TailSpin" color="#ffff" height={80} width={80} />}
        {/*<Photos thumbnail={this.state.photo.thumbnailUrl} title={this.state.photo.title}/><Photos url ={this.state.photo.url}/> ======>single image*/}
       {/*} {this.state.albums.map((item,index) => (<Body key={'photo-list' + index} user={item.albumId} id= {item.id} title={item.title}/>))}*/}
      </div>
      <Alert color="dark">
        <h4><b>made by Jessica Nanni </b></h4>
      </Alert>
      </div>
    );
  }
}

export default App;
