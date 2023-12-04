import React from 'react'
import { Characters } from '../models/Characters'
import Card from '../components/Card';

const WomanScreen = () => {
  const womans = Characters.filter(character => character.type === "m")

  console.log(womans);
  return (
    <div className="container mt-3">
      <h1>Woman Screen</h1>
      <hr />

      <div className="row">
      {womans.map(woman => <Card key={woman.id} {...woman}/>)}

      </div>

      
    </div>
  )
}

export default WomanScreen
