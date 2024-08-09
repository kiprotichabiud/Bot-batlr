import React from 'react'
import BotCard from './BotCard'

const BotsCollection = ({bots}) => {

    
  return (
    <div>
 {bots.map(bot => (
        <BotCard key={bot.id} bot={bot}  />
      ))}
    </div>
  )
}

export default BotsCollection