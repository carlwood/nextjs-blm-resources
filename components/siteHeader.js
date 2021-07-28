import Link from 'next/link'

export default function SiteHeader({ categories }) {
  return (
    <header className="site-header">
      <Link href="/">
        <a className="logo"><span>#BLM</span>Resources</a>
      </Link>

      {categories.length > 0 &&
        <nav className="nav">
          <ul className="nav-list">
            {categories.map((category) => (
              <li key={category.id}>
                <a href={`/category/${category.slug}`}>{category.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      }
    </header>
  )
}
