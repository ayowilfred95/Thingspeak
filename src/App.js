import React from "react";
import './App.css';

import 'weather-icons/css/weather-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Gas from "./app_component/gas-sensor.component";
import Form from './app_component/form.component';


// api call to https://api.thingspeak.com/channels/<channel_ID>.json?api_key=<XXXXXXXXXXXXXXXX>
const API_KEY = "7V2IFL5BQYHO68XC";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      icon:undefined,
      gas: undefined,
      temp:undefined,
      humidity:undefined,
      description: "",
      error: false

    };
    this.getData();

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      clouds:"wi-day-fog"
      };
  }

  calCelsius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell;
  }


  getData = async (e)=>{

    e.preventDefault();

    const gas = e.target.elements.city.value;
    const temp = e.target.elements.city.value;
    if(gas && temp) {
      const api_call = await fetch(`https://api.thingspeak.com/channels/1848655/fields/1.json?api_key=${API_KEY}`)

    const response = await api_call.json();

    console.log(response);
    
    
    // try and refer to this place in case you need to get refeerence for each tags
    this.setState({ 
      gas:response.channel.field1,
      temp_celsius:this.calCelsius(response.channel.field2),
      humidity:response.channel.field3, 
      description:response.description,
      name:response.channel.name,
      icon:this.weatherIcon.Thunderstorm
    });
  }else {
    this.setState({error:true});
  }
  };

  render(){
    return(
      <div className="App">
        <Form />
      <Gas 
      gas_rpm={this.state.gas} 
      humidity={this.state.humidity}
      temp_celsius={this.state.celsius}
      description={this.state.description}
      name={this.state.name}
      weatherIcon={this.state.icon}
       />
    </div>
     );
  }
}


export default App;
