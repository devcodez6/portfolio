import "./contact.css"
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.png"
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";



const Contact = () => {
   const formRef = useRef()
   const [done, setDone] = useState(false)
   const theme = useContext(ThemeContext)
   const darkMode = theme.state.darkMode;

   const handleSubmit = (e) =>{
    e.preventDefault()
    emailjs.sendForm("service_p2lmnta", "template_twi9cfq", formRef.current, "4da0vFwzjox2Bpmu9")
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
   }

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
            <h1 className="c-title" >Let's discuss your project</h1>
            <div className="c-info">
            <div className="c-info-item">
                    <img src={phone} alt="" className="c-icon" />
                    +234 816 1262 895
                </div>
                 <div className="c-info-item">
                 <img src={email} alt="" className="c-icon" /> 
                 arraazyy@gmail.com
                 </div>
                <div className="c-info-item">
                    <img src={address} alt="" className="c-icon" />  
                    16 Cole street Iyana Ipaja,Alimosho, Lagos.   
                </div>
                </div>
            </div>
            <div className="c-right"> 
            <p className="c-desc">
             <b>Get in touch.</b> Always ready to work.
             <h3>Available for:</h3>
             <h4>  entry, intern, freelancing and  contract.</h4>      
            </p> 
           
            <form  ref={formRef} onSubmit={handleSubmit} >
                <input style={{backgroundColor:darkMode &&  "#444"}} type="text" placeholder="Name" Name="user_name" />
                <input style={{backgroundColor:darkMode &&  "#444"}}  type="text" placeholder="Subject" Name="user_Subject" />
                <input style={{backgroundColor:darkMode &&  "#444"}} type="text" placeholder="Email" Name="user_email" />
                <textarea style={{backgroundColor:darkMode &&  "#444"}} rows="5" placeholder="Message" name="message"/>
                 <button>Submit</button>
                 {done && "   Email recieved.Thanks"}
            </form>                
        </div>
        </div>
    </div>
  )
}

export default Contact