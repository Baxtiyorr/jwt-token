import './Industry.scss'
import industry from '../../assets/images/industry.png'
const Industry = () => {
  return (
    <section>
      <div className="container">
        <div className="industry-card">
            <img src={industry} alt="industry" />
        </div>
      </div>
    </section>
  )
}

export default Industry
