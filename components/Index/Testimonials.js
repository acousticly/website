import React from 'react'
import Image from 'next/image'
import star from '/public/static/svg/star.svg'
const Testimonials = () => {
  return (
    <section id="testimonials" className="section-testimonials">
      <div className="section-testimonials__container">
        <h1 className="section-testimonials__h1">Testimonials</h1>
        <div className="box-wrapper">
          <div className="box__left">
            <div className="box">
              <div className="box__top">
                <div className="testimonials__image">
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                </div>
              </div>
              <div className="box__middle">
                <h2 className="box__title">
                  “...There is zero reason not to add this bot. ”
                </h2>
              </div>
              <div className="box__bottom">
                <p className="box__author">- Otter</p>
              </div>
            </div>
            <div className="box">
              <div className="box__top">
                <div className="testimonials__image">
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                </div>
              </div>
              <div className="box__middle">
                <h2 className="box__title">
                  “Banger bot 10/10 would sacrifice my firstborn for this bot.”
                </h2>
              </div>
              <div className="box__bottom">
                <p className="box__author">- Dr.DragonFruit</p>
              </div>
            </div>
          </div>
          <div className="box__right">
            <div className="box">
              <div className="box__top">
                <div className="testimonials__image">
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                </div>
              </div>
              <div className="box__middle">
                <h2 className="box__title">
                  “Amazing bot! I love seeing it grow.”
                </h2>
              </div>
              <div className="box__bottom">
                <p className="box__author">- SmallChild83.3</p>
              </div>
            </div>
            <div className="box">
              <div className="box__top">
                <div className="testimonials__image">
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                </div>
              </div>
              <div className="box__middle">
                <h2 className="box__title">
                  “This is my go to music bot (: 👍”
                </h2>
              </div>
              <div className="box__bottom">
                <p className="box__author">- remo</p>
              </div>
            </div>
          </div>
          <div className="box__left box__left-">
            <div className="box">
              <div className="box__top">
                <div className="testimonials__image">
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                </div>
              </div>
              <div className="box__middle">
                <h2 className="box__title">
                  “11/10. One word to describe this bot: efficient”
                </h2>
              </div>
              <div className="box__bottom">
                <p className="box__author">- Aselav</p>
              </div>
            </div>
            <div className="box">
              <div className="box__top">
                <div className="testimonials__image">
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                  <Image src={star} alt="star icon" width={30} height={30} />
                </div>
              </div>
              <div className="box__middle">
                <h2 className="box__title">
                  “...the whole staff team is kind and ready to help you...”
                </h2>
              </div>
              <div className="box__bottom">
                <p className="box__author">- Light</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
