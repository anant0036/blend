import React from 'react'
import './Style.scss'
import logo from '/a5135f8ce830710c2ef79507cb4441aa-removebg-preview.png'

function Home() {
  return (
    <div className='container'>
      <div className='header'>
        <img src={logo} />
      </div>

      <div className='section-body'>
        <h1>Blend Cocktail</h1>
        <p>I have taken more out of alcohol than alcohol has taken out of me.</p>
        <p><span>- Winston Churchill</span></p>
        <div>
          <button className='btn41-43 btn-41 btn-home'>Alcoholic</button>
          <button className='btn41-43 btn-41 btn-home'>Non Alcoholic</button>
        </div>
      </div>
    </div>
  )
}

export default Home
