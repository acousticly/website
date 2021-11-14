import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Features = () => {
  return (
    <section id="features" className="section-features">
      <div className="section-features__box">
        <div className="section-features__box--left">
          <Image
            src="/static/media/phone-1.avif"
            alt="acoustic economy showcase"
            id="image1"
            width={383}
            height={724}
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
          <div className="hero-cta">
            <Link href="/invite">
              <a className="hero-cta__icon">
                <Image
                  src="/static/svg/inviteFeat.svg"
                  alt="Invite Acoustic"
                  width={35}
                  height={35}
                />
              </a>
            </Link>
            <Link href="/support">
              <a className="hero-cta__icon">
                <Image
                  src="/static/svg/discordFeat.svg"
                  alt="Invite Acoustic"
                  width={35}
                  height={35}
                />
              </a>
            </Link>
            <Link href="/invite">
              <a className="hero-cta__text">Join us 😊</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="section-features__box">
        <div className="section-features__box--right">
          <h1 className="section-features__h1">🔥 Useful Commands</h1>
          <p className="section-features__p">
            Acoustic has a wide variety of useful commands to help you get the
            most out of your time on Discord.
          </p>
          <div className="hero-cta">
            <Link href="/invite">
              <a className="hero-cta__icon">
                <Image
                  src="/static/svg/inviteFeat.svg"
                  alt="Invite Acoustic"
                  width={35}
                  height={35}
                />
              </a>
            </Link>
            <Link href="/support">
              <a className="hero-cta__icon">
                <Image
                  src="/static/svg/discordFeat.svg"
                  alt="Invite Acoustic"
                  width={35}
                  height={35}
                />
              </a>
            </Link>
            <Link href="/invite">
              <a className="hero-cta__text">Join us 😊</a>
            </Link>
          </div>
        </div>
        <div className="section-features__box--left section-features__box--left">
          <Image
            src="/static/media/phone-2.avif"
            id="image2"
            alt="Acoustic avatar showcase"
            width={383}
            height={724}
          />
        </div>
      </div>
      <div className="section-features__box">
        <div className="section-features__box--left">
          <Image
            src="/static/media/phone-3.avif"
            id="image3"
            alt="Acoustic music showcase"
            width={383}
            height={724}
          />
        </div>
        <div className="section-features__box--right">
          <h1 className="section-features__h1">🤙 Jam with your friends</h1>
          <p className="section-features__p">
            Acoustic doesn&apos;t compromise on sound quality. It&apos;s the
            right choice for Discord audiophiles everywhere.
          </p>
          <div className="hero-cta">
            <Link href="/invite">
              <a className="hero-cta__icon">
                <Image
                  src="/static/svg/inviteFeat.svg"
                  alt="Invite Acoustic"
                  width={35}
                  height={35}
                />
              </a>
            </Link>
            <Link href="/support">
              <a className="hero-cta__icon">
                <Image
                  src="/static/svg/discordFeat.svg"
                  alt="Invite Acoustic"
                  width={35}
                  height={35}
                />
              </a>
            </Link>
            <Link href="/invite">
              <a className="hero-cta__text">Join us 😊</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
