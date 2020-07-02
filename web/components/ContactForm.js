import React from 'react'



  export default function ContactForm() {
    return(
      <>
        <form name="interesse" action="?=success" method="POST" data-netlify="true">
        <input type="hidden" name="interesse" value="interesse" />
        <p>
          <label>Navn: 
          <input type="text" name="name" data-netlify="true" placeholder="Raymond Etternavn" required/>
          </label>  
        </p>
        <p>
          <label>Epost:
          <input type="email" name="email" data-netlify="true" placeholder="dittnavn@eksempel.no" required/>
          </label>
        </p>
        <p>
          <label>Merknader:
            <textarea type="textarea" name="text" data-netlify="true">
          </textarea>
          </label> 
        </p>
      
        <button type="submit">Send forespørsel</button>

      </form>

      </>
    )  
    
  }
