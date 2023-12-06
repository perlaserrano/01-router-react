import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Characters } from '../models/Characters'

const CharacterScreen = () => {
const {id} = useParams()
const navigate = useNavigate()
const {type,name,description} = Characters.find(character => character.id === id);

const path = `/assets/${type}-${id}.png`

const handleBack = () => {
  navigate(-1);
}

  return (
    <div className="container row mt-5">
        <div className="col-8">
            <img className="img-thumbnail " src={path} alt={id} style={{with:"100%",height:"400px"}}/>
        </div>
        <div className="col-4">
            <h2>Nombre:{name}</h2>
            <p>Descripcion:{description}</p>

            <button onClick={handleBack} className="btn btn-outline-warning"> Go Back</button>
        </div>
  
    </div>
  )
}

export default CharacterScreen
