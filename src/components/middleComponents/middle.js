import React from 'react';
import './middleStyle.css';

class Middle extends React.Component {

  render() {

    return(

      <div>

        <div className = 'middle'>

          <form onSubmit = {this.props.getWeather}>

            <input type = 'text' name = 'city' placeholder = 'city'/>
            <input type = 'text' name = 'country' placeholder = 'country'/>
            <button>Get Weather</button>
            
          </form>

        </div>
        
      </div>
    );
  }
}

export default Middle;