import React from 'react'

  export default function ContactForm() {
    return(
      <>
        <form name="interesse"  action="?=sucess" method="POST" data-netlify="true">
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
        <label>Leie fra:</label>
        <input type="date" name="utleiestart" data-netlify="true"/>
        </p>

        <p>
        <label>Leie til</label>
        <input type="date" name="utleiestart" data-netlify="true"/>
        </p>

        <p>
          <label>Merknader:</label> 
            <textarea type="textarea" name="text" data-netlify="true">
          </textarea>
        </p>
      
        <button type="submit">Send forespørsel</button>

      </form>

      <style jsx>{`    
          label{
            color: #2d2d2d;
            font-weight: bold;
            font-size: 1rem;
          }
    
          input{
            border-radius: 3px;
            width: 100%;
            max-width: 450px;
            padding: .5rem;
            color: #2d2d2d;
            margin: .2rem 0rem;
            outline: none;
            border: none;
            box-sizing: border-box;
          }

          textarea {
            border-radius: 3px;
            max-width: 450px;
            width: 100%;
            padding: .5rem;
            color: #2d2d2d;
            margin: .2rem 0rem;
            outline: none;
            border: none;
            box-sizing: border-box;
          }

          button{
            background: #2d2d2d;
            outline: none;
            border-radius: 3px;
            width: 100%;
            padding: .7rem;
            margin: 0 auto;
            color: #fff;
            border: none;
            text-transform: uppercase;
            font-style: italic;
            box-sizing: border-box;
          }

        `}</style>
      </>
    )  
    
  }
