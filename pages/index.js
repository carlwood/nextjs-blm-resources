import DocumentHead from '../components/head'
import SiteHeader from '../components/siteHeader'
import styles from '../styles/Home.module.css'
import { getAll } from "../services/articles";
import { getAllCategories } from "../services/categories";

export async function getStaticProps() {
  const articles = await getAll();
  const categories = await getAllCategories();

  return {
    props: {
      articles,
      categories
    },
  };
}

export default function Home({ articles, categories }) {
  return (
    <>
      <DocumentHead title="Home" />
      <SiteHeader categories={categories} />
      <main>
        <div className="container">
          <h1 className="page-heading">From "neutral" to antiracist</h1>
          <p className="intro-text">To be neutral in situations of injustice is to side with the oppressor. We're working to become actively <em>antiracist</em>. This site is a repository of resources we've found helpful, and we've made it publicly accessible in case others find it useful too.</p>
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
    </>
  )
}
