import React, { Component } from 'react';
import axios from 'axios';

import GnomeCard from '../components/GnomeCard';

class Brastlewark extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      gnomesFromApi:[],
      gnomes: [],
      totalGnomes: 0,
      currentPage: 0,
      gnomesPerPage: 10,   
      searchName: '',
      searchAge: ''
    }
  }

  componentDidMount() {
    const {currentPage, gnomesPerPage} = this.state;
    axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
      .then (response => {
        const gnomes = response.data;
        const paginatedGnomes = gnomes.Brastlewark.slice(currentPage, gnomesPerPage);
        this.setState({ gnomesFromApi: response.data, gnomes: paginatedGnomes, totalGnomes: gnomes.Brastlewark.length 
        });
      });
  };

  handleNextPage = () => {
    const {currentPage, gnomesPerPage, gnomesFromApi} = this.state;
    this.setState({ 
      currentPage:currentPage + gnomesPerPage
    });
    const newCurrentPage = currentPage + gnomesPerPage;
    const nextPaginatedGnomes = gnomesFromApi.Brastlewark.slice(newCurrentPage, newCurrentPage+gnomesPerPage);
    this.setState({
      gnomes:nextPaginatedGnomes, currentPage:newCurrentPage
    });
  };

  handlePreviousPage = () => {
    const {currentPage, gnomesPerPage, gnomesFromApi} = this.state;
    this.setState({ 
      currentPage:currentPage - gnomesPerPage
    });
    const newCurrentPage = currentPage - gnomesPerPage;
    const nextPaginatedGnomes = gnomesFromApi.Brastlewark.slice(newCurrentPage, newCurrentPage+gnomesPerPage);
    this.setState({
      gnomes:nextPaginatedGnomes, currentPage:newCurrentPage
    });
  };

  
  updateSearchName(event) {
    this.setState({searchName: event.target.value.substr(0, 25)})
  }


  updateSearchAge(event) {
    this.setState({searchAge: event.target.value.substr(0, 4)})
  }

  render() {
    const {gnomes, searchName, searchAge} = this.state;
    let fileteredGnomosByName = gnomes.filter(
      gnomo => {
        return gnomo.name.toLowerCase().indexOf(this.state.searchName.toLowerCase()) !== -1;
      }
    );
    let fileteredGnomosByAge = gnomes.filter(
      gnomo => {
        return gnomo.age > this.state.searchAge;
      }
    );
    return (
      <>
        <h1>Brastlewark</h1>
        <section className="navbar">
          <section className="searchbar-container">
            <div className="searchbar" >
              <p>Search by name</p>
              <input type="text" placeholder = "Gnome name" value={searchName} onChange={this.updateSearchName.bind(this)}/>
            </div>
            <div className="searchbar" >
              <p>Search by age</p>
              <input type="number" placeholder = "Older than..." value={searchAge} onChange={this.updateSearchAge.bind(this)}/>
            </div>
          </section>
          <section className="buttons">
            <button onClick={this.handlePreviousPage} className="page-btn"> Previous </button>
            <button onClick={this.handleNextPage} className="page-btn"> Next </button>
          </section>
        </section>
        <section className="gnome-list">
          {
            gnomes.length && !searchName && !searchAge  ? 
            gnomes.map(gnomo => 
              <GnomeCard data={gnomo} key={gnomo.name}/>
            ) : null
          }
          {
            gnomes.length && searchName  ? 
            fileteredGnomosByName.map(gnomo => 
              <GnomeCard data={gnomo} key={gnomo.name}/>
            ) : null
          }
          {
            gnomes.length && searchAge ? 
            fileteredGnomosByAge.map(gnomo => 
              <GnomeCard data={gnomo} key={gnomo.name}/>
            ) : null
          }
          {
            !gnomes.length ?
            <h2>Oh, the gnomes have disappeared!! Go to the previous/next page!</h2>
            : null
          }
        </section>
        <section>
          <button onClick={this.handlePreviousPage} className="page-btn"> Previous </button>
          <button onClick={this.handleNextPage} className="page-btn"> Next </button>
        </section>
      </>
    )
  }
}

export default Brastlewark
