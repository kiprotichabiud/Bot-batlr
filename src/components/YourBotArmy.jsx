import React from 'react'
import BotCard from './BotCard'

const YourBotArmy = ({bots, onRemove}) => {

  return (
    <div className=' flex'>
 {bots.map(bot => (
        <BotCard  key={bot.id} bot={bot} 
        onDischarge={() => onRemove(bot.id)}
         />
      ))}
    </div>
  )
}

export default YourBotArmy