import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

  const navigate = useNavigate();

  return (
    <div className='erreur'>
      <div>
        <h1>Error 404</h1>
      </div>

      <div>
        <button onClick={() => navigate ('/')} >Retour à l'accueil</button>
      </div>
    </div>

  )
}

export default Error