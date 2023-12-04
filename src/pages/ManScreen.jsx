import React from 'react'
import { Characters } from '../models/Characters'
import Card from '../components/Card';

const ManScreen = () => {

  const mans = Characters.filter(character => character.type === "h")

  console.log(mans);
  return (
    <div className="container mt-3">
      <h1>Man Screen</h1>
      <hr />

      <div className="row">
      {mans.map(man => <Card key={man.id} {...man}/>)}

      </div>

      
    </div>
  )
}

export default ManScreen
