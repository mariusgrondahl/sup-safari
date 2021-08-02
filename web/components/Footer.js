import styled from "@emotion/styled";
import Link from "next/link";

const FooterWrap = styled.div`
  background: darkturquoise;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 4rem 2rem 4rem 2rem;
  margin: 0rem 0 0 0; 
  color: #fff;

    a{
      color: yellow;
    }
    p{
        margin: 0;
    }

    .tiny{
      font-size: 1.2rem;
      padding-top: .5rem;
    }
  `

export default function Footer(props){
    return(
        <FooterWrap>
            <footer>
            <img className="logo" loading="lazy" width="200px" src="/logo-transparent-white.svg"  alt="sup safari logo" />
            <p>&#x1F4DE;  <strong>+47 41293362</strong></p>
            <p>&#x1F4EB;  <strong>Epost kommer</strong></p>
            

            {/* <p className="tiny">
            Laget med <Link href="https://www.sanity.io/"><a>Sanity.io</a></Link>, <Link href="https://www.netlify.com/"><a>Netlify</a></Link>, og <Link href="https://nextjs.org/"><a>NextJS</a></Link>
            </p> */}
            </footer>
        </FooterWrap>

    )
}
