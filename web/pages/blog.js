import groq from 'groq'
import ContactForm from '../components/ContactForm'
import CenterWrapper from '../components/CenterWrapper'
import Fullscreen from '../components/Fullscreen'
import styled from "@emotion/styled";
import { withRouter } from 'next/router'
import Link from 'next/link'
import client from '../client'



const Description = styled.div`
    p{
      text-align: center;
      font-size: 1.8rem;
      line-height: 1.6;
      max-width: 700px;
      margin: 3rem 2rem 2rem 2rem;
    }
`;



function Blog(props) {
  const { posts = [] } = props
  return(
<>
<Fullscreen image="/img/supsafari-hvaler.jpg"  text="#fff" height="40vh" >
    <h1>Vannbloggen</h1>
    </Fullscreen> 
      <CenterWrapper>
      <div>
        {posts.map(
          ({ _id, title = '', slug = '', _updatedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <h2><a>{title}</a></h2>
                </Link>{' '}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
      </div>
    
      </CenterWrapper>
</>
  )
}


Blog.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `)
})



export default Blog
