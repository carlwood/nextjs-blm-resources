import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getAll, getBySlug } from "../../services/articles";
import ReactMarkdown from 'react-markdown'

export async function getStaticPaths() {
  const articles = await getAll();

  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const articles = await getBySlug(params.slug);
  return { props: { articles } };
}

export default function Article({ articles }) {
  // const { data, loading, error } = useQuery(ARTICLES_QUERY);

  // if (loading) return "Loading...";
  // if (error) return <pre>NOOO: {error.message}</pre>

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {articles.map((article) => (
          <>
            <h1>{article.title}</h1>
            <ReactMarkdown>
              {article.content}
            </ReactMarkdown>
          </>
        ))}
        
      </main>
    </div>
  )
}
