import DocumentHead from '../../components/head'
import SiteHeader from '../../components/siteHeader'
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
    <>
      <DocumentHead />
      <SiteHeader />
      <main>
        <div className="container">
          <article className="article">
            {articles.map((article) => (
              <>
                <header>
                  <h1 className="page-heading">{article.title}</h1>
                </header>
                <div className="article__body">
                  <ReactMarkdown>
                    {article.content}
                  </ReactMarkdown>
                </div>
              </>
            ))}
          </article>
        </div>
      </main>
    </>
  )
}
