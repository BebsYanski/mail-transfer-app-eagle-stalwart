import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Questions'
import './faqs.css'
const Faqs = () => {

  const [questions, setQuestions] = useState(data);
  return (
      <div className=''>
        <h2>Frequently Asked Questions</h2>

        <section className="info">
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })
          }
        </section>
      </div>
  )
}

export default Faqs
