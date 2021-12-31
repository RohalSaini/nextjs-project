import articleStyle from '../styles/Article.module.css'
import ArticleItem from './ArticleItem';
const ArticleList = ({articles}) => {
    console.log(articles)
    return (
        <div className={articleStyle.grid}> {articles.map((article) => (
                 <col key = {article.id}>
                       <ArticleItem article ={article}/>
                 </col>   
              ))}
        </div>

    )
}

export default ArticleList;