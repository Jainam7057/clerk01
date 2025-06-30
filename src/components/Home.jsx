import { useState } from 'react'
import emailjs from '@emailjs/browser';

function Home() {
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  async function handleSubmit(e){
    e.preventDefault()
    await emailjs.send("service_zswy0ck", "template_hh3ryjm", {message, to_email : email, name : "Jainam"}, {publicKey : "aXe89G7OquzySAMhL"})
  }
  return (
    <div>
       <input type="text" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required/>
       <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
       <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Home
