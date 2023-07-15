import Image from 'next/image'
import rocket from '/public/static/svg/rocket.svg'
import customers from '/public/static/svg/customers.svg'
import speed from '/public/static/svg/speed.svg'
const Why = () => {
  return (
    <section className="section-why">
      <div className="section-why__container">
        <div className="section-why__box">
          <Image
            className="brand-logo"
            src={rocket}
            alt="rocket icon"
            width="auto"
            height={64}
          />
          <h2 className="section-why__h2">Fast &amp; Dependable 🚀</h2>
          <p className="section-why__p">
            With a 1ms average API response time, Acoustic can keep up with
            whatever you and your friends decide to throw at it!
          </p>
        </div>
        <div className="section-why__box">
          <Image
            className="brand-logo"
            src={customers}
            alt="customer icon"
            width="auto"
            height={64}
          />
          <h2 className="section-why__h2">100% Customer Satisfaction</h2>
          <p className="section-why__p">
            Our customers love us and we&apos;re always happy to hear the great
            experiences they have using Acoustic.
          </p>
        </div>
        <div className="section-why__box">
          <Image
            className="brand-logo"
            src={speed}
            alt="speed icon"
            width="auto"
            height={64}
          />
          <h2 className="section-why__h2">Speedy Support</h2>
          <p className="section-why__p">
            While we strive to be issue free, we&apos;re always happy to help
            you if something goes wrong.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Why
