import groq from 'groq'
import ContactForm from '../components/ContactForm'
import CenterWrapper from '../components/CenterWrapper'
import Fullscreen from '../components/Fullscreen'
import styled from "@emotion/styled";
import { withRouter } from 'next/router'
import Link from 'next/link'
import client from '../client'
import ArticleCard from '../components/ArticleCard'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Blogfront = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 3rem 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
        }

    h2{
        padding-bottom: 1rem;
        text-align: center;
    }
    p{
      text-align: center;
      font-size: 1.8rem;
      line-height: 1.6;
      max-width: 700px;
      margin: 3rem 2rem 2rem 2rem;
    }
    a:hover{
        color: turquoise;
    }
`;



function Blog(props) {
  const { posts = [] } = props
  return(
<>
<Fullscreen image="/img/waves.jpg"  text="#fff" height="30vh" >
    <h1>Surfe-tips</h1>
    </Fullscreen> 
    <Blogfront>
        {posts.map(
          ({ _id, title = '', slug = '', image = '',publishedAt = '', _updatedAt = '', mainImage = '' }) =>
            slug && (
                <div key={_id}>
                <ArticleCard 
                bildeURL={urlFor(mainImage.asset._ref).width(1000).url()}
                title={title}
                url={slug.current}
                />  
              </div>

              
            )
        )}
      </Blogfront>
</>
  )
}


Blog.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `)
})



export default Blog
