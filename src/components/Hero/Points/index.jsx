
import "./Points.css"

const Points = () => {
  return (
    <div className='point__container'>
       <article className='point__card'>
        <h1 className="title">3+</h1>
        <small>Years Working</small>
        <h5>Experience</h5>
       </article>

       <article className='point__card'>
        <h1 className="title">50+</h1>
        <small>Worldwide</small>
        <h5>Clients</h5>
       </article>

       <article className='point__card'>
        <h1 className="title">20+</h1>
        <small>Completed</small>
        <h5>Projects</h5>
       </article>
    </div>
  )
}

export default Points
