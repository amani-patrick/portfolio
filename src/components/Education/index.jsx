
import "./Education.css"
import { education } from '../../data'
import { FaAward } from 'react-icons/fa'

const Education = () => {
  return (
    <section id='education'>
      <div className="container">
        <h1 className="title">
          <span className="text__gradient">Education</span>
        </h1>
        <div className="education__container">
          {
            education.map((list,index)=>(
              <div className='education__card' key={index}>
                <div className="icon__container">
                  <FaAward/>
                </div>
                <div className="details">
                  <p className="text__muted date">{list.dateRange}</p>
                  <h1 className="text__gradient certification">{list.certification}</h1>
                  <h3 className="name">{list.schoolName}</h3>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Education
