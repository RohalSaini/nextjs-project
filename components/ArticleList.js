import articleStyle from '../styles/Article.module.scss'
import ArticleItem from './ArticleItem';
const ArticleList = ({articles}) => {
    console.log(articles)
    return (
        <div className={articleStyle.grid}> {articles.map((article) => (
                        <ArticleItem key ={article.id} article ={article}/>
              ))}
        </div>

    )
}

export default ArticleList;