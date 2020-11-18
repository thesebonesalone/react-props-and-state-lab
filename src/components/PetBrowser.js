import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPets = (array) => {
    return array.map(pet => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    })
  }
  render() {
    return <div className="ui cards">{this.renderPets(this.props.pets)}</div>
  }
}

export default PetBrowser
