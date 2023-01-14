
import "../chartbar/chartbar.css"
import React from 'react'

const Chartbar = ({maximumPrice,currentPrice,label}) => {
  const fillHeight =  (100 * currentPrice)/maximumPrice;
  return (
    <div className="chart-bar">
        <div className='chart-bar__container'>
        <div className='char-bar__column ' style={{height: `${fillHeight}%`}}></div>
        </div>
        <p className="char-bar__label">{label}</p>
        
    </div>
  )
}

export default Chartbar