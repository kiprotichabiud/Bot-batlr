import React, { useEffect, useState } from 'react'
import BotsCollection from './BotsCollection'

const BotsPage = () => {
    const [bots, setBots] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/bots')
          .then(response => response.json())
          .then(bots => setBots(bots));
      }, []);


  return (
    <div>
        <BotsCollection bots={bots}/>
    </div>
  )
}

export default BotsPage