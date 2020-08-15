import React, { Component } from 'react';
import './App.css';

// 1. Create a const variable named fav_film with an object that has two key values, film and director, include the values.


const fav_film={
  films:['avatar','prison break'],
  director:{
    firstName:'matt',
    lastName:'rich',
  }
};

// 2. Display the first name and last name into the DOM 
console.log(fav_film.director.firstName)
console.log(fav_film.director.lastName)

// * Extra credit * 
// Create a nested object and render it onto the DOM 

class App extends Component {

  render() {
  const favorite=fav_film.films[1]
  console.log(favorite)
    return (
      <div className="App">
      <h1> What is your favorite film that you seen this year? </h1>
      <h1>my favorite film is {favorite}</h1>
      
      </div>
    );
  }
}

export default App;

