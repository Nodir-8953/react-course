import React from 'react';
import './Car.scss'
class Car extends React.Component{
    render(){
        const inputClasses = ['input']
            if (this.props.name !== ''){
                inputClasses.push('green')
            } else{
                inputClasses.push('red')
            }
            if(this.props.name.length>5){
                inputClasses.push('bold')
            }
            return(
                <div className='Car' >
                    <strong>Car name: {this.props.name}</strong>
                    <div>Car year: {this.props.year}</div>
                    <input 
                        type="text" 
                        onChange={this.props.onChangeName} 
                        value={this.props.name}
                        className={inputClasses.join(' ')}   
                    />
                    <button onClick={this.props.onDelete}>Delete</button>
                </div>  
                )
            
        
    }
    
}
export default Car