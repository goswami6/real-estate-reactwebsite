import React from 'react'
import './Faq.css'

const FAQs = ({ faq, index, toggleFAQ }) => {
  return (
    <div>
      <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
    </div>
  )
}

export default FAQs
