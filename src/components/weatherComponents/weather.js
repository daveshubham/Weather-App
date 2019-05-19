import React from 'react';
import './weatherStyle.css';

class Weather extends React.Component {

    render() {

        return(

            <div className = 'weatherStyle'>
                
                {this.props.city && this.props.country && <p>Location: { this.props.city }, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: { this.props.temperature } °C</p>}
                {this.props.humidity && <p>Humidity: { this.props.humidity } %</p>}
                {this.props.description && <p>Conditions: { this.props.description }</p>}
                
            
                <div className = 'errorMessage'>
                    {this.props.error && <p>Error: {this.props.error}</p>}
                </div>
                

            </div>
        );
    }
};

export default Weather;