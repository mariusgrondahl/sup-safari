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

    @media (min-width: 900px) {
        max-width: 350px;
        }

    h1{
        font-size: 2.5rem;
        margin: 0rem 0rem 0rem 0rem;
        color: yellow,
        
    }

    h3 {
        font-size: 1.1rem;
        margin: 0rem;
        font-weight: 300;
    }

    button{
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
`

const Label = styled.label `
    width: 200px;
    padding-top: .6rem;
    color: yellow;
`

function ArticleCard(props) {
    return (
    
        <Link href={props.url} as={`/post/${props.url}`}>
        <Card>
        <Image bildeURL={props.bildeURL}>
        </Image>
        <div className="bottom-card">
            <h1>{props.title} </h1>
            <h3>{props.subtitle}</h3>
            <button>Les mer</button>
        </div>
        </Card>

        </Link>

    );
}

export default ArticleCard;

