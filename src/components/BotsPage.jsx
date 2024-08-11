import React, { useEffect, useState } from 'react'
import BotsCollection from './BotsCollection'

const BotsPage = () => {
    const [bots, setBots] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/bots')
          .then(response => response.json())
          .then(bots => setBots(bots));
      }, []);

    

      const dischargeBot = (botId) => {
        fetch(`http://localhost:3000/bots/${botId}`, {
          method: 'DELETE'
        })
          .then(() => {
            setBots(bots.filter(b => b.id !== botId));
            
          });
      };

  return (
    <div className='' >
        <BotsCollection bots={bots} onDischarge={dischargeBot}/>
    </div>
  )
}

export default BotsPage