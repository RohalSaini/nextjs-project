import {useRouter} from 'next/router'
import Link from 'next/link'
import { articles } from '../../../data'
import articleStyle from '../../../styles/Article.module.scss'

import Meta from '../../../components/Meta'
const Article = ({article}) => {
    const router = useRouter()
    const {id} = router.query
    console.log(article)
    console.log("Article is ");
    console.log(article);
    return <>
        <div className={articleStyle.card}>
          <div className={articleStyle.title}> {article[0].title}</div>
          <div> {article[0].body}</div>
        </div>
        <Link href='/'>Get Back</Link>
    </>
}

export const getServerSideProps = async (context) => {
    console.log("id is "+context.params.id);
    const res = await fetch(`https://nextjs-pr.herokuapp.com/api/articles/${context.params.id}`
    )
 
//    console.log("url is "+`${server}/api/articles/${context.params.id}`);    
    const article = await res.json()
    console.log(article);
    return {
        props: {
            article
        }
    }
}

// export const getStaticPaths = async () => {
//     const res = await fetch(`${server}/api/articles`)
//     console.log("url is path : "+`${server}/api/articles`)
//     const articles = await res.json()

//     const ids = articles.map((article) => article.id)
//     const paths = ids.map((id) => ({params: { id: id.toString()}}))

//     return {
//         paths,
//         fallback: false
//     }
// }
export default Article;