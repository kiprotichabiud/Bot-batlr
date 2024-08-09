import React from 'react'
import BotCard from './BotCard'

const BotsCollection = ({bots}) => {

    
  return (
    <div  className='flex flex-wrap p-4 border-2 gap-8 justify-center rounded-lg'>
 {bots.map(bot => (
        <BotCard key={bot.id} bot={bot}  />
      ))}
    </div>
  )
}

export default BotsCollection