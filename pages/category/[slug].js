import DocumentHead from '../../components/head'
import SiteHeader from '../../components/siteHeader'
import { getAllCategories, getCategoryArticles } from "../../services/categories";

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

  return {
    props: {
      categoryArticles,
      categories
    }
  };
}

export default function Category({ categoryArticles, categories }) {
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
    </>
  )
}
