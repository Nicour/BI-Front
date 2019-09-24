import React, { Component } from 'react'

export default class GnomeCard extends Component {
  render() {
    return (
        <div className="gnome-card" key={this.props.data.id}>
        <div className="gnome-image">
          <img src={this.props.data.thumbnail} alt={this.props.data.name}/>
        </div>
        <section className="gnome-info"> 
          <div>
            <h2>{this.props.data.name}</h2> 
          </div>
          <div>
            <p>Age: {this.props.data.age}</p>
          </div>
          <div>
            <p>Hair color: {this.props.data.hair_color}</p>
          </div>
          <div>
            <p>Height: {this.props.data.height}</p>
          </div>
          <div>
            <p> Weight: {this.props.data.weight}</p>
          </div>
          {this.props.data.friends.length ? 
          <div>
          <p> Friends: {this.props.data.friends + ""}</p>
          </div> : <p>No friends</p>
          }
          {this.props.data.professions.length ? 
          <div>
          <p> Professions: {this.props.data.professions + ""}</p>
          </div> : <p>No professions</p>
          }
        </section>
      </div>
      )
  }
}

