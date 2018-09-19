import React, { Component } from 'react';
import FileUpload from './FileUpload';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>File upload</h1>
        <FileUpload />
      </div>
    );
  }
}

export default App;