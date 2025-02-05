
import "./Contact.css"
import { contactInfo } from '../../data'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container full__height">
        <h3 className="sub__title">Got Some question?</h3>
        <h1 className="title">
          <span className="text__gradient">Contact Me</span>
        </h1>
        <form className="contact__form">
          <div className="column">
            <h3 className="sub__title color__primary">Contact Info</h3>
            <p>Fill the form to get in touch with me</p>
            <div className="contact__info__container">
              {
                contactInfo.map((list,index)=>(
                  <div className="contact__info" key={index}>
                    <div className="icon__container">
                      {list.icon}
                    </div>
                    <p>{list.value}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="column">
               <div className="form__top">
                <h3 className="sub__title color__primary">Keep In Touch</h3>
                <p>I craft beautifully simple designs and code with love. It is as simple as that!</p>
               </div>
               <div className="form__middle">
                 <div className="row">
                   <input type="text" placeholder='First name' name='firstname' className='control'/>
                   <input type="text" placeholder='Last name' name='lastname' className='control'/>
                 </div>
                 <div className="row">
                   <input type="email" placeholder='Email address' name='email' className='control'/>
                   <input type="tel" placeholder='Phone number' name='phone' className='control'/>
                 </div>
                 <textarea name="message" id="" cols={30} rows={10} placeholder='Message' className='control'></textarea>
               </div>
               <div className="form__bottom">
                 <button className="btn btn__primary">Send Message</button>
               </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
