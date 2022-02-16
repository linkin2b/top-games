import React from "react";
import './App.css';
import axios from "axios";

const URL = "https://steam-store-data.p.rapidapi.com/api/featured/";

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
    'x-rapidapi-key': '44724f4afcmshd696a5173f1e582p103d8ejsn05f14162c664'
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
 console.log(games)

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