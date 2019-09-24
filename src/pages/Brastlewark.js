import React, { Component } from 'react';
import axios from 'axios';
import GnomeCard from '../components/GnomeCard';

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
        <section className="gnome-list">
        {
          info.length && !searchName && !searchAge  ? 
          info.map(gnomo => 
            <GnomeCard data={gnomo}/>
          ) : null
        }
        {
          info.length && searchName  ? 
          fileteredGnomosByName.map(gnomo => 
            <GnomeCard data={gnomo}/>
          ) : null
        }
        {
          info.length && searchAge ? 
          fileteredGnomosByAge.map(gnomo => 
            <GnomeCard data={gnomo}/>
          ) : null
        }
        </section>
      </>
    )
  }
}

export default Brastlewark
