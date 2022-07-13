import Image from 'next/image'
import phone1 from '/public/static/media/phone-1.png'
import phone2 from '/public/static/media/phone-2.png'
import phone3 from '/public/static/media/phone-3.png'
const Features = () => {
  return (
    <section id="features" className="section-features">
      <div className="section-features__box">
        <div className="section-features__box--left">
          <Image
            src={phone1}
            alt="acoustic economy showcase"
            id="image1"
            width={383}
            height={724}
            placeholder="blur"
          />
        </div>
        <div className="section-features__box--right">
          <h1 className="section-features__h1">
            Engage in a high-stakes economy 📈
          </h1>
          <p className="section-features__p">
            Challenge your friends to a game of chance and see who can come out
            on top. Play at the blackjack table for a chance to make millions 🤑
          </p>
        </div>
      </div>
      <div className="section-features__box">
        <div className="section-features__box--right">
          <h1 className="section-features__h1">🔥 Useful Commands</h1>
          <p className="section-features__p">
            Acoustic has a wide variety of useful commands to help you get the
            most out of your time on Discord.
          </p>
        </div>
        <div className="section-features__box--left section-features__box--left">
          <Image
            src={phone2}
            id="image2"
            alt="Acoustic avatar showcase"
            width={383}
            height={724}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="section-features__box">
        <div className="section-features__box--left">
          <Image
            src={phone3}
            id="image3"
            alt="Acoustic music showcase"
            width={383}
            height={724}
            placeholder="blur"
          />
        </div>
        <div className="section-features__box--right">
          <h1 className="section-features__h1">🤙 Jam with your friends</h1>
          <p className="section-features__p">
            Acoustic doesn&apos;t compromise on sound quality. It&apos;s the
            right choice for Discord audiophiles everywhere.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features
