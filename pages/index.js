import Head from 'next/head'
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

  console.log(articles)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
  )
}
