import React from 'react'
import emailjs from 'emailjs-com'
// import { FormControl,Input ,InputLabel,FormHelperText ,Button} from '@material-ui/core';


const ContantForm = () => {

    const sendEmail =(e)=>{
        e.preventDefault();
        emailjs.sendForm('webdeveloper.neo', 'template_qo3m9mm', '#form','user_PvnWRnrARwfm4iV0O0Mw4')
        .then((response)=> {
           console.log('SUCCESS!', response.status, response.text);
        }, (error) =>{
           console.log('FAILED...', error);
        });
        e.target.reset()
    }

    return (
    <form id="form" onSubmit={sendEmail} >
    <label>Name</label>
    <input type="text" id="fname"  placeholder="name..." name='name'/>
    <label>Subject</label>
    <input type="text" id="fname"  placeholder="subject..." name='subject'/>
    <label >Email</label>
    <input type="email" id="lname" placeholder="email..." name="email" />
    <label>message</label>
    <textarea placeholder="message . . ." name="message"  />
    <button>send</button>
    </form>
   
    )
}

export default ContantForm
