import DocumentHead from '../components/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import { getAll } from "../services/articles"
import { getAllCategories } from "../services/categories"
import { getHomepageContent } from "../services/home"
import { getGlobalContent } from "../services/global"
import ReactMarkdown from 'react-markdown'

export async function getStaticProps() {
  const articles = await getAll();
  const categories = await getAllCategories();
  const homepage = await getHomepageContent();
  const global = await getGlobalContent();

  return {
    props: {
      articles,
      categories,
      homepage,
      global
    },
  };
}

export default function Home({ articles, categories, homepage, global }) {
  return (
    <>
      <DocumentHead title="Home" />
      <SiteHeader categories={categories} />
      <main>
        <div className="container">
          <h1 className="page-heading">{homepage.hero.title}</h1>
          <div className="intro-text">
            <ReactMarkdown>
              {homepage.hero.subtitle}
            </ReactMarkdown>
          </div>
          <ul className="posts">
            {articles.map((article) => (
              <li key={article.id}>
                <a href={`article/${article.slug}`} className="posts__item">
                  <h2 className="posts__item__title">{article.title}</h2>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter content={global} />
    </>
  )
}
