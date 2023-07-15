import Link from 'next/link'
import Image from 'next/image'
import meta from '/public/static/media/meta.webp'
const Nav = () => {
  return (
    <nav className="nav-container">
      <Link href="https://acoustic.to" passHref>
        <Image
          className="brand-logo"
          src={meta}
          alt="Acoustic logo"
          width="auto"
          height={50}
        />
      </Link>
      <ul className="nav-list">
        <li className="nav-item nav-link">
          <Link href="/#features">Features</Link>
        </li>
        <li className="nav-item nav-link">
          <Link href="faq">FAQ</Link>
        </li>
        <li className="nav-item nav-link">
          <Link href="https://docs.acoustic.to">Docs</Link>
        </li>
        <li className="nav-item nav-link">
          <Link href="https://top.gg/bot/816842865732091924">Vote</Link>
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
        <Link href="https://top.gg/bot/816842865732091924" passHref>
          Vote
        </Link>
      </div>
    </nav>
  )
}

export default Nav
