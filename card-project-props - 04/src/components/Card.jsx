import { Bookmark } from 'lucide-react'
const Card = (props) => {
    console.log(props);
    return (

        <div className="card">

            <div className="top">
                <img src={props.brandLogo}
                    alt="logo"
                />
                <button>Save <Bookmark style={{ height: "15px", width: "15px" }} /></button>
            </div>

            <div className="center">
                <div className="gapper">
                    <h3>{props.company}</h3><span>{props.datePosted}</span>
                </div>
                <h2>{props.post}</h2>
                <div className='two-button-parent'>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>

        </div>

    )
}

export default Card
