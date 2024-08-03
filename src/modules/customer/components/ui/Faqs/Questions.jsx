import React, { useState } from 'react'

const Questions = ({question, answer}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{question}</h4>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className='btn btn-primary'
        >
          {showInfo ? '-' : '+'}
        </button>
      </header>
      {showInfo && <p>{answer}</p>}
    </article>
  )
}

export default Questions
