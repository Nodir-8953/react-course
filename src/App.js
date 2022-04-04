import Car from './Car/Car'
import React, { Component } from 'react'
import './App.css';

class App extends Component{
  state = {
    cars: [
      {name: 'Ford', year:2017},
      {name: 'BMW', year:2021},
      {name: 'Audi', year:2000}
    ],
    pageTitle: "React components",
    showCars: false
  }
  changeTitleHandler = (newTitle) => {
      this.setState({
        pageTitle: newTitle
      })
    }
  toggleCars = () =>{
    this.setState({
      showCars: !this.state.showCars
    })
  }
  render(){
    const divStyle = {
    textAlign: 'center', 
    fontSize: '30px'
    }
    
    const cars = this.state.cars;
    return (
          
          <div style={divStyle}>
            <h1 style={{color: 'blue'}}>{this.state.pageTitle}</h1>
            <button onClick={this.toggleCars}>Toggle cars</button>
            
            {
              this.state.showCars
               ?
               this.state.cars.map((car, index)=>{
                return(
                  <Car 
                  keys={index}
                    name={car.name} 
                    year={car.year}
                    onChangeTitle={()=>this.changeTitleHandler(car.name)}
                  />
                )
              })
              :
              null
            }
            
          </div>
        
    );
  
  }
}

export default App;
