import React, { Component } from 'react'
import gnomeService from '../services/gnome-service';

export default class GnomoDetails extends Component {

  state = {
    name: '',
    age: '',
    hair: '',
    image: '',
    height: '',
    fiends:[],
    professions: [],
    redirect: false
  };

  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id)
    gnomeService.getOneGnome(id)
      .then(response => {
        console.log(response)
        this.setState({
          name: response.data.name,
          age: response.data.age,
          hair: response.data.hair_color,
          image: response.data.thumbnail,
          height: response.data.height,
          weight: response.data.weight,
          fiends: response.data.fiends,
          professions: response.data.professions,
        })
      })
  }

  render() {
    const id = this.props.match.params.id
    return (
      <div>
        
      </div>
    )
  }
}
