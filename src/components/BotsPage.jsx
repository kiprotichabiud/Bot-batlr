import React, { useEffect, useState } from 'react'
import BotsCollection from './BotsCollection'
import YourBotArmy from './YourBotArmy';

const BotsPage = () => {
    const [bots, setBots] = useState([]);
    const [botArmy, setBotArmy] = useState([]);


    useEffect(() => {
        fetch('https://bot-battlr-db-eight.vercel.app/bots')
          .then(response => response.json())
          .then(bots => setBots(bots));
      }, []);

    

      const dischargeBot = (botId) => {
        fetch(`https://bot-battlr-db-eight.vercel.app/bots/${botId}`, {
          method: 'DELETE'
        })
          .then(() => {
            setBots(bots.filter(b => b.id !== botId));
            
          });
      };
      const removeBot = (botId) => {
        fetch(`https://bot-battlr-db-eight.vercel.app/bots/${botId}`, {
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
        

        
      <h1 className='justify-center p-4 text-center m-4 font-extrabold shadow-lg'>Bot Battle</h1>
      <h2 className=' font-bold m-4 p-4'>Your Army</h2>
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