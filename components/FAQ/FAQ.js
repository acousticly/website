import React, { useEffect } from 'react'
import { faqfunc } from '../../script/FAQ'
import { faqData } from './FaqData'
import Image from 'next/image'
import Markdown from 'markdown-to-jsx'

const FAQ = () => {
  useEffect(() => {
    faqfunc()
  }, [])
  return (
    <section className="section-faq">
      <h1 className="section-faq__title">FAQs</h1>
      <p className="section-faq__p">Frequently Asked Questions</p>
      {faqData.map((el, index) => {
        return (
          <div className="faq-box" key={index}>
            <div className="faq-box__top">
              <h2 className="faq-box__title">{el.question}</h2>
              <Image
                src="/static/svg/chevron.svg"
                alt="chevron icon"
                width={12}
                height={10}
              />
            </div>
            <div className="faq-box__bottom">
              <p className="faq-box__p">
                <Markdown className="line-break">{el.answer}</Markdown>
              </p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default FAQ
