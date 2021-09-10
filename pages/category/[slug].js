import DocumentHead from '../../components/head'
import SiteHeader from '../../components/siteHeader'
import SiteFooter from '../../components/siteFooter'
import { getAllCategories, getCategoryArticles } from "../../services/categories";
import { getGlobalContent } from "../../services/global"

export async function getStaticPaths() {
  const categories = await getAllCategories();

  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // const articles = await getBySlug(params.slug);
  const categoryArticles = await getCategoryArticles(params.slug);
  const categories = await getAllCategories();
  const global = await getGlobalContent();

  return {
    props: {
      categoryArticles,
      categories,
      global
    }
  };
}

export default function Category({ categoryArticles, categories, global }) {
  return (
    <>
      <DocumentHead title={categoryArticles[0].name} />
      <SiteHeader categories={categories} />
      <main>
        <div className="container">
          <h1 className="page-heading">{categoryArticles[0].name}</h1>
          <ul className="posts">
            {categoryArticles[0].articles.map((article) => (
              <li key={article.id}>
                <a href={`/article/${article.slug}`} className="posts__item">
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
