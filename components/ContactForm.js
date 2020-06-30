import React from 'react'



  export default function ContactForm() {
    return(
      <>
        <form name="interesse"  action="sucess" method="POST" data-netlify="true">
        <input type="hidden" name="interesse" value="interesse" />
        <p>
          <label>Navn:</label>  
          <input type="text" name="name" data-netlify="true" placeholder="Raymond Etternavn" required/> 
        </p>
        <p>
          <label>Epost:</label>
          <input type="email" name="email" data-netlify="true" placeholder="dittnavn@eksempel.no" required/>
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
