import React from 'react'

function Home({onGame}) {
  return (
    <div className='home'>
        <div className='title'>
            typing game

        </div>
        <button onClick={()=>onGame('playGame')} className='btnPlay'>
            play game
        </button>
       
      
    </div>
  )
}

export default Home
