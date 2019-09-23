import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Brastlewark extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
       info: [],
       searchName: '',
       searchAge: '',
       active: false,
    }
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(response => {
      console.log(response)
      this.setState({info: response.data.Brastlewark})
    })
    .catch(error => {
      console.log(error);
    })
  }

  updateSearchName(event) {
    this.setState({searchName: event.target.value.substr(0, 25)})
  }

  updateSearchAge(event) {
    this.setState({searchAge: event.target.value.substr(0, 4)})
   
  }

  render() {
    const {info, searchName, searchAge} = this.state;
    let fileteredGnomosByName = info.filter(
      gnomo => {
        return gnomo.name.toLowerCase().indexOf(this.state.searchName.toLowerCase()) !== -1;
      }
    );
    let fileteredGnomosByAge = info.filter(
      gnomo => {
        return gnomo.age >= this.state.searchAge;
      }
    );
    return (
      <>
        <h1>Brastlewark</h1>
        <section className="searchbar-container">
        <div className="searchbar" >
          <p>Search by name</p>
          <input type="text" value={searchName} onChange={this.updateSearchName.bind(this)}/>
        </div>
        <div className="searchbar" >
          <p>Search by age</p>
          <input type="number" placeholder = 'Older than...' value={searchAge} onChange={this.updateSearchAge.bind(this)}/>
        </div>
        </section>
        <section className="gnome-list" >
        {
          info.length && searchName  ? 
          fileteredGnomosByName.map(gnomo => 
            <div className="gnome-card" key={gnomo.id}>
                <div className="gnome-image">
                  <img src={gnomo.thumbnail} alt={gnomo.name}/>
                </div>
                <section className="gnome-info"> 
                  <div>
                    <h2>{gnomo.name}</h2> 
                  </div>
                  <div>
                    <p>Age: {gnomo.age}</p>
                  </div>
                  <div>
                    <p>Hair color: {gnomo.hair_color}</p>
                  </div>
                  <div>
                    <p>Height: {gnomo.height}</p>
                  </div>
                  <div>
                    <p> Weight: {gnomo.weight}</p>
                  </div>
                  {gnomo.friends.length ? 
                  <div>
                  <p> Friends: {gnomo.friends + ""}</p>
                  </div> : <p>No friends</p>
                  }
                  {gnomo.professions.length ? 
                  <div>
                  <p> Professions: {gnomo.professions + ""}</p>
                  </div> : <p>No professions</p>
                  }
                </section>
              </div>
          ) : null
        }
        {
          info.length && searchAge ? 
          fileteredGnomosByAge.map(gnomo => 
              <div className="gnome-card" key={gnomo.id}>
                <div className="gnome-image">
                  <img src={gnomo.thumbnail} alt={gnomo.name}/>
                </div>
                <section className="gnome-info"> 
                  <div>
                    <h2>{gnomo.name}</h2> 
                  </div>
                  <div>
                    <p>Age: {gnomo.age}</p>
                  </div>
                  <div>
                    <p>Hair color: {gnomo.hair_color}</p>
                  </div>
                  <div>
                    <p>Height: {gnomo.height}</p>
                  </div>
                  <div>
                    <p> Weight: {gnomo.weight}</p>
                  </div>
                  {gnomo.friends.length ? 
                  <div>
                  <p> Friends: {gnomo.friends + ""}</p>
                  </div> : <p>No friends</p>
                  }
                  {gnomo.professions.length ? 
                  <div>
                  <p> Professions: {gnomo.professions + ""}</p>
                  </div> : <p>No professions</p>
                  }
                </section>
              </div>
          ) : null
        }
        </section>
      </>
    )
  }
}

export default Brastlewark
