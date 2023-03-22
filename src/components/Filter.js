import React from 'react'

function Filter() {
  return (
    <div className='filter-section'>
      <p>Colour</p>
      <span>
        <input type="checkbox" value="pink" /><p> Pink</p>
      </span>
      <span>
        <input type="checkbox" value="black" /> <p>Black</p>
      </span>
      <span>
        <input type="checkbox" value="grey" /> <p>Grey</p>      </span>
      <span>
        <input type="checkbox" value="red" /> <p>Red        </p>     </span>
      <span>
        <input type="checkbox" value="white" /> <p>White</p>
      </span>


    </div>
  )
}

export default Filter