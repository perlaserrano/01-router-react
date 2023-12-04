import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Card = ({name,type,id}) => {
const path = `/assets/${type}-${id}.png`


  return (
    <div className="card m-3 col-12 col-md-4" style={{with:"200"}}>
        <img src={path} alt={id} className="card-img-top" />
        <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">
                <Link className="card-link" to={`/character/${id}`}>
                Ver Mas...
                </Link>
            </p>
        </div>
   
    </div>
  )
}

export default Card