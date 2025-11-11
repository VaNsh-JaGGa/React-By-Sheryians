import { Bookmark } from 'lucide-react'
const Card = () => {
  return (
    

      <div className="card">

        <div className="top">
          <img src="https://imgs.search.brave.com/seiMig0aND-rc8Dy7OGiRJjZPFp8swDPN5NevDXm6aA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/MTM2LzMyMi9zbWFs/bC9hbWF6b24tbG9n/by1hbWF6b24taWNv/bi1mcmVlLWZyZWUt/dmVjdG9yLmpwZw" alt="" />
          <button>Save <Bookmark style = {{height:"15px",width:"15px"}} /></button>
        </div>

        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='two-button-parent'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
      
  )
}

export default Card
