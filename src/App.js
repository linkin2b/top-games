import React from "react";
import './App.css';
import axios from "axios";


const URL = "https://steam-store-data.p.rapidapi.com/api/featured/";
const API_KEY = process.env.REACT_APP_TOPGAMES_KEY;

class Top extends React.Component {

constructor(props){
  super(props);

  this.state = {
    games: [],
    name: '',
    small_capsule_image: ''
  };
}


componentDidMount() {
  this.getData()
}

async getData(){
const options = {
    
  method: 'GET',
  url: 'https://steam-store-data.p.rapidapi.com/api/featured/',
  headers: {
    'x-rapidapi-host': 'steam-store-data.p.rapidapi.com',
    'x-rapidapi-key': API_KEY
  }
};

const res = await axios.request(options)
const {data} = await res;
  
this.setState({games: data.featured_win})
}




// create card for each enttry

//lines 64-71


render (){
  const {games} = this.state;


  return(
  

  <div>
    <div>
    <h1 id="heading">
      Steam Featured Windows Games
    </h1></div>
      
        {
          games.length && games.map( games =>  {
            return (<div id="container">
                      <div id="card">
                      < h2>{games.name}</h2>
                        <div>
                          <img id="img" src={games.small_capsule_image} alt="Number 1" ></img>
                        </div>
                        <div><h3>${games.final_price}</h3></div>
                      </div>
                      </div>)
                  
          })
        }        
        
  </div>
  )
}
}

export default Top;