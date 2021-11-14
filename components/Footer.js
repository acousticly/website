import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top--right">
          <h1 className="footer__h1">
            Ready to experience music&nbsp;
            <br />
            like never before?
          </h1>
          <div className="invite-wrapper">
            <Link href="/invite" passHref>
              <button className="rocket-button">
                <span>Begin your journey</span>
                <span>🚀</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__border">
        <div className="footer__middle">
          <div className="footer__middle--left">
            <p className="footer__p">
              Acoustic is a fast, interactive, and immersive music experience on
              Discord. Chill with your friends and listen to your favorite
              songs.
            </p>
            <br />
          </div>
          <div className="footer__middle--right">
            <ul>
              <h3 className="footer__h3">Quick Links</h3>
              <div className="ul-box">
                <li>
                  <a>
                    <Link href="/support"> Community</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link href="/#features"> Features</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link href="/faq"> FAQs</Link>
                  </a>
                </li>
              </div>
            </ul>
            <ul>
              <h3 className="footer__h3">Company</h3>
              <div className="ul-box">
                <li>
                  <a>
                    <Link href="/about"> About us</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link href="/privacy">Privacy Policy</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link href="/terms"> Terms &amp; Conditions</Link>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="line" />
          <h6 className="footer__copy">
            © {new Date().getFullYear()} Copyright Acoustic. All rights reserved
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Footer
