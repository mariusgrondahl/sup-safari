import ContactForm from '../components/ContactForm'
import CenterWrapper from '../components/CenterWrapper'
import Fullscreen from '../components/Fullscreen'
import styled from "@emotion/styled";

const Description = styled.div`
    p{
      text-align: center;
      font-size: 1.8rem;
      line-height: 1.6;
      max-width: 700px;
      margin: 3rem 2rem 2rem 2rem;
    }
`;



function Home(props) {
  return(
<>
    <Fullscreen image="/img/supsafari.jpg"  text="#fff" height="60vh" >
    <h1><span className="yellow">SUP-utleie</span>  i Fredrikstad og Hvaler</h1>
    </Fullscreen>    
      <CenterWrapper>
      <Description>
      <p>
      Opplev elver, innsjøer og skjærgården stående!
      Vi tilbyr utleie av SUPbrett til <strong>paddleturer i Fredrikstad og Hvaler-regionen.</strong> Vi tar gjerne en prat. Legg igjen navn, epost og når du ønsker å leie. Vi prekæs &#128526; &#129305; &#x1F3C4; 
      </p>

      <p>Vi har for tiden ingen ledige SUP-brett</p>
      </Description>
    
      </CenterWrapper>
</>
  )
}




export default Home
