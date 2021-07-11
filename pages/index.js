import DocumentHead from '../components/head'
import SiteHeader from '../components/siteHeader'
import styles from '../styles/Home.module.css'
import { getAll } from "../services/articles";

export async function getStaticProps() {
  const articles = await getAll();

  return {
    props: {
      articles: articles
    },
  };
}

export default function Home({ articles }) {
  // const { data, loading, error } = useQuery(ARTICLES_QUERY);

  // if (loading) return "Loading...";
  // if (error) return <pre>NOOO: {error.message}</pre>

  return (
    <>
      <DocumentHead title="Home" />
      <SiteHeader />
      <div className={styles.container}>
        <main className={styles.main}>
          { articles.length > 0  && <h1>Articles</h1>}
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <a href={`articles/${article.slug}`}>{article.title}</a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  )
}
