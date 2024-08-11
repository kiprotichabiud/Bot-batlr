import React, { useEffect, useState } from 'react'
import BotsCollection from './BotsCollection'
import YourBotArmy from './YourBotArmy';

const BotsPage = () => {
    const [bots, setBots] = useState([]);
    const [botArmy, setBotArmy] = useState([]);


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
      const removeBot = (botId) => {
        fetch(`http://localhost:3000/bots/${botId}`, {
          method: 'DELETE'
        })
          .then(() => {
            setBotArmy(botArmy.filter(b => b.id !== botId));
            
          });
      };
      const addBotToArmy = (botId) => {
        const botToAdd = bots.find(bot => bot.id === botId);
        if (!botArmy.find(b => b.id === botId) && botToAdd) {
          setBotArmy([...botArmy, botToAdd]);
        }
      };
    
    
  return (
    <div >
        

        
      <h1 className='justify-center p-4 text-center m-4 font-bold shadow-lg'>Bot Battle</h1>
      <h2>Your Army</h2>
      <YourBotArmy
        bots={botArmy}
        onRemove={removeBot}
      />
      <hr />
      <BotsCollection
        bots={bots}
        onDischarge={dischargeBot}
        onAdd={addBotToArmy}
      />
     
    
    </div>
  )
}

export default BotsPage