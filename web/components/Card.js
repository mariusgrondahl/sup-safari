import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Title from "../components/Title";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #fff;
  margin: 0rem 1rem 4rem 1rem;
  padding: 0rem 0rem 0rem 0rem;
  cursor: pointer;
  min-width: 65%;
  @media (min-width: 1280px) {
    min-width: 33%;
    }

  a {
    color: #2d2d2d;
    font-size: 2rem;
    text-decoration: none;
  }

  button.dark {
    background: #1d1d1d;
    border-bottom-left-radius: 5px;
    &:hover {
      background: black;
    }
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Infobox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  background: #2d2d2d;
  margin: 0;
  padding: 10rem 2rem 0rem 2rem;
  color: #fff;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(246, 246, 246, 0.5) 50%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
  width: 100%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.bildeURL});
  padding: 0;
  height: 35vh;
  width: 100%;
  max-width: 1024px;

  h3 {
    color: #fff;
  }

  a {
    text-decoration: none;
  }
`;
// settingg deafult image
Card.defaultProps = {
  bildeURL: "../static/img/teater.png"
};

export default function Card(props) {
  return (
    <Link href={`${props.slug}`}>
      <Wrap>
        <CardWrapper bildeURL={props.bildeURL}>
          <Infobox>
            <TitleBox>
              <Title align="center" size="h3" title={props.navn} />
            </TitleBox>
          </Infobox>
        </CardWrapper>

        <Flex>
          <button>
            <span>Gå til arrangement</span>
          </button>
        </Flex>
      </Wrap>
    </Link>
  );
}
