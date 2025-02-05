
import "./Partners.css"
import { partners } from '../../../data'

const Partners = () => {
  return (
    <div id='partners'>
        <div className="logos__slide">
            {
                partners.map((partner,index) =>(
                    <img src={partner.logo} alt={partner.name} key={index}/>
                ))
            }
        </div>
        <div className="logos__slide">
            {
                partners.map((partner,index) =>(
                    <img src={partner.logo} alt={partner.name} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Partners
