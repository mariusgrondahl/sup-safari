import groq from 'groq'
import ContactForm from '../components/ContactForm'
import CenterWrapper from '../components/CenterWrapper'
import Fullscreen from '../components/Fullscreen'
import styled from "@emotion/styled";
import { withRouter } from 'next/router'
import Link from 'next/link'
import client from '../client'



const Blogfront = styled.div`

    h2{
        padding-bottom: 1rem;
        border-bottom: 2px solid lightgray;
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
<Fullscreen image="/img/supsafari-hvaler.jpg"  text="#fff" height="40vh" >
    <h1>Surfe-tips</h1>
    </Fullscreen> 
    <Blogfront>
      <CenterWrapper>
      <div>
        {posts.map(
          ({ _id, title = '', slug = '', _updatedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <h2><a>{title}</a></h2>
                </Link>{' '}
  
              </li>
            )
        )}
      </div>
    
      </CenterWrapper>
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
