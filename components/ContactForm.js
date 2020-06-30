import React from 'react'



  export default function ContactForm() {
    return(
      <>
        <form name="interesse"  action="/sucess" method="POST" data-netlify="true">
        <input type="hidden" name="interesse" value="interesse" />
        <p>
          <label>Navn:</label>  
          <input type="text" name="name"  placeholder="Raymond Etternavn" required data-netlify="true" /> 
        </p>
        <p>
          <label>Epost:</label>
          <input type="email" name="email"  placeholder="dittnavn@eksempel.no" required data-netlify="true" />
        </p>
        <p>
        <label>Leie fra: </label>
        <input type="date" name="utleiestart" data-netlify="true"/>
        </p>

        <p>
        <label>Leie til: </label>
        <input type="date" name="utleieslutt" data-netlify="true"/>
        </p>

        <p>
          <label>Merknader:</label> 
            <textarea type="textarea" name="text" data-netlify="true">
          </textarea>
        </p>
      
        <button type="submit">Send forespørsel</button>

      </form>

      </>
    )  
    
  }
