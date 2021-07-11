import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/">
        <a className="logo"><span>#BLM</span>Resources</a>
      </Link>

      <nav className="nav"></nav>
    </header>
  )
}
