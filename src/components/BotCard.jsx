import React from 'react'

const BotCard = ({bot}) => {
  return (
    <div className='flex-wrap border-2 justify-center text-center shadow-md'>
         <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
    </div>
  )   
}

export default BotCard