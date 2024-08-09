import React from 'react'

const BotsPage = () => {

    fetch('http://localhost:3000/bots')
    .then(response => response.json())
    .then(bots => console.log(bots))
    


  return (
    <div>BotsPage</div>
  )
}

export default BotsPage