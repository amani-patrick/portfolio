
import "./Footer.css"
import Logo from '../../commons/Logo'
import SocialHandles from '../../commons/SocialHandles'
import { footer } from '../../data'

const Footer = () => {
  return (
    <footer id='footer'>
      <form className="newsletter">
        <h3 className="sub__title">Get weekly update</h3>
        <h2 className="title">Lets Work Together</h2>
        <div className="control__container">
            <input type="email"  placeholder='Enter your email address' className='control'/>
            <button className="btn" type='button'>Subscribe</button>
        </div>
      </form>
      <div className="container">
         <div className="row">
           <div className="column">
            <Logo/>
            <p className="text__muted description">
             A passionate Fullstack Developer 
            </p>
            <SocialHandles/>
           </div>
           {
            footer.map((list,index)=>(
              <div className="column" key={index}>
                <h3 className="group__name">{list.group}</h3>
                <div className="routes__container">
                  {
                    list.routes.map((route,i)=>(
                      <a href={`#${route.name.toLowerCase()}`} className="route__item" key={i}>
                        {
                          route.icon ? <div className="icon__container">{route.icon}</div>:""
                        }
                        <p className="name">{route.name}</p>
                      </a>
                    ))
                  }
                </div>
              </div>
            ))
           }
         </div>
         <article className="copyright__container">
          <h3>Copyright &copy; All right reserved - | 2024</h3>
          <p className="text__muted">Developed with love by Amani Patrick</p>
         </article>
      </div>
    </footer>
  )
}

export default Footer
