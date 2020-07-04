import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import CenterWrapper from '../../components/CenterWrapper'
import Fullscreen from '../../components/Fullscreen'
import styled from "@emotion/styled";

const Article = styled.article`
  padding: 0rem 2rem;

  img{
    width: 100%;
  }
`;

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const singlePost = (props) => {
  const {
    title = 'Mangler tittel',
    name = 'Ukjent',
    mainImage,
    slug,
    body = []
  } = props
  return (
    <>
    <Fullscreen image={urlFor(mainImage).width().url()} text="#fff" height="60vh" >
    <h1>{title}</h1>
    <span className="byline">Av: {name}</span>

    </Fullscreen> 
    <CenterWrapper>
    <Article>

      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
   </Article>
    </CenterWrapper>
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  _id,
  mainImage,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

singlePost.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "test" } = context.query
  return await client.fetch(query, { slug })
}

export default singlePost