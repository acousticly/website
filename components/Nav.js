import Link from 'next/link'
import Image from 'next/image'
import meta from '/public/static/media/meta.webp'
const Nav = () => {
  return (
    <nav className="nav-container">
      <a>
        <Link href="https://acoustic.to" passHref>
          <Image
            className="brand-logo"
            src={meta}
            alt="Acoustic logo"
            width={55.34}
            height={50}
          />
        </Link>
      </a>
      <ul className="nav-list">
        <li className="nav-item nav-link">
          <a>
            <Link href="/#features">Features</Link>
          </a>
        </li>
        <li className="nav-item nav-link">
          <a>
            <Link href="faq">FAQ</Link>
          </a>
        </li>
        <li className="nav-item nav-link">
          <a>
            <Link href="https://docs.acoustic.to">Docs</Link>
          </a>
        </li>
        <li className="nav-item nav-link">
          <a>
            <Link href="https://status.acoustic.to">Status</Link>
          </a>
        </li>
        <Link href="/invite" passHref>
          <button className="nav-rocket-button nav-item">
            <span>Begin your journey</span>
            <span>🚀</span>
          </button>
        </Link>
      </ul>
      <div className="nav-icon">
        <div className="bar1" />
        <div className="bar2" />
      </div>
      <div className="mobile-nav">
        <Link href="index#features" passHref>
          Features
        </Link>
        <Link href="faq" passHref>
          FAQ
        </Link>
        <Link href="https://docs.acoustic.to" passHref>
          Docs
        </Link>
        <Link href="https://status.acoustic.to" passHref>
          Status
        </Link>
      </div>
    </nav>
  )
}

export default Nav
