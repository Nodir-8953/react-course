import Car from './Car/Car'
import React, { Component } from 'react'
import './App.scss';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      cars: [
        {name: 'Ford', year:2017},
        {name: 'BMW', year:2021},
        {name: 'Audi', year:2000}
      ],
      pageTitle: "React components",
      showCars: false
    }
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
  onChangeName=(name, index)=>{
    const car = this.state.cars[index];
    car.name=name;
    const cars  = [...this.state.cars]
    cars[index] = car;
    this.setState({
      cars: cars
    })
  }
  deleteHandler(index){
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars})
  }
  componentWillMount(){
    console.log('wilmount');
  }
  componentDidMount(){
    console.log('didmaunt')
  }
  render(){
    console.log("render");
    const divStyle = {
    textAlign: 'center', 
    fontSize: '30px'
    }
    
    const cars = this.state.cars;
    return (
          
          <div style={divStyle}>
            <h1 style={{color: 'blue'}}>{this.state.pageTitle}</h1>
            {/* <h1>{this.props.title}</h1> */}
            <button onClick={this.toggleCars}>Toggle cars</button>
            
            <div style={{
              width: 400,
              margin: 'auto',
              paddingTop: '20px'
            }}>
            {
              this.state.showCars
               ?
               this.state.cars.map((car, index)=>{
                return(
                  <Car 
                  keys={index}
                    name={car.name} 
                    year={car.year}
                    onDelete={this.deleteHandler.bind(this, index)}
                    onChangeName={(event)=>this.onChangeName(event.target.value, index)}
                  />
                )
              })
              :
              null
            }
            </div>
            
          </div>
        
    );
  
  }
}

export default App;
