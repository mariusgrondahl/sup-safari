import React from 'react'

  export default function ContactForm() {
    return(
      <>
        <form name="interesse"  action="?=sucess" method="POST" data-netlify="true">
        <input type="hidden" name="interesse" value="interesse" />
        <p>
          <label>Navn: <input type="text" name="name" data-netlify="true"/></label>   
        </p>
        <p>
          <label>Epost: <input type="email" name="email" data-netlify="true"/></label>
        </p>
      
          <button type="submit">Meld interessse</button>

      </form>

      <style jsx>{`    
          button{
            background: #2d2d2d;
            outline: none;
            border-radius: 3px;
            width: 100%;
            padding: .5rem;
            margin: 0 auto;
            color: #fff;
            border: none;
            text-transform: uppercase;
            font-style: italic;
          }

    
          input{
            border-radius: 3px;
            width: 100%;
            padding: .5rem;
            color: #2d2d2d;
            margin: .2rem 0rem;
            outline: none;
            border: none;
          }
        `}</style>
      </>
    )  
    
  }
