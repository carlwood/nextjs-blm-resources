import DocumentHead from '../../components/head'
import SiteHeader from '../../components/siteHeader'
import SiteFooter from '../../components/siteFooter'
import { getAll, getBySlug } from "../../services/articles"
import { getAllCategories } from "../../services/categories"
import { getGlobalContent } from "../../services/global"
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
  const categories = await getAllCategories();
  const global = await getGlobalContent();

  return {
    props: {
      articles,
      categories,
      global
    }
  };
}

export default function Article({ articles, categories, global }) {
  return (
    <>
      <DocumentHead title={articles[0].title} />
      <SiteHeader categories={categories} />
      <main>
        <div className="container">
          <article className="article">
            <>
              <header>
                <h1 className="page-heading">{articles[0].title}</h1>
              </header>
              <div className="article__body">
                <ReactMarkdown>
                  {articles[0].content}
                </ReactMarkdown>
              </div>
            </>
          </article>
        </div>
      </main>
      <SiteFooter content={global} />
    </>
  )
}
