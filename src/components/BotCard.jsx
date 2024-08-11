import React from 'react'

const BotCard = ({bot ,onDischarge}) => {



    
  return (
    <div className='flex flex-col items-center border-2  rounded-lg p-4 shadow-md max-w-[320px] '>
    <img
      src={bot.avatar_url}
      alt={bot.name}
      className='w-24 h-24 mb-4'
    />
      <h3 className='text-lg font-semibold mb-2'>{bot.name}</h3>
      <p className='text-sm mb-1'>Class: {bot.bot_class}</p>
      <p className='text-sm mb-1'>Health: {bot.health}</p>
      <p className='text-sm mb-1'>Damage: {bot.damage}</p>
      <p className='text-sm mb-1'>Armor: {bot.armor}</p>
      <p className='text-sm mb-4 text-center'>Catchphrase: {bot.catchphrase}</p>

      <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800" onClick={onDischarge}>x</button>
        
        
      
    </div>
  )   
}

export default BotCard