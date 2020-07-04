import React from "react";
import styled from '@emotion/styled';
import Link from 'next/link';

const Card = styled.div`
    width: 90vw;
    background: #fafafa;
    color: #2d2d2d;
    font-weight: 600;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 1rem;
    pointer: cursor;
    text-align: center;
    box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.12);

    @media (min-width: 900px) {
        max-width: 350px;
        }

    h1{
        font-size: 2.5rem;
        margin: 0rem 0rem 0rem 0rem;
        color: #2d2d2d;
        padding: 1rem;

        
    }

    h3 {
        font-size: 1.1rem;
        margin: 0rem;
        font-weight: 300;
    }

    a{
        margin-top: 2rem;
    }

    .bottom-card{
        padding: 1rem;
    }
`   

const Image = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-size: cover;
    background-position: bottom center;
    background-image: url(${props => props.bildeURL});
    padding: 0;
    width: 100%;
    height: 25vh;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`

const Label = styled.label `
    width: 200px;
    padding-top: .6rem;
    color: yellow;
`

function ArticleCard(props) {
    return (    
        <Link href="/post/[slug]" as={`/post/${props.url}`} >
        <Card>
        <Image bildeURL={props.bildeURL}>
        </Image>
        <div className="bottom-card">
            <h1>{props.title} </h1>
            <h3>{props.subtitle}</h3>
        </div>
        </Card>
        </Link>
    );
}

export default ArticleCard;

