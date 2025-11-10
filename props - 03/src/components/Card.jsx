
const Card = (props) => {
  console.log(props);
  console.log(props.user);

  return (
    <div>
         <div className="Child1">
        <img src = {props.img} alt = "" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, hic? Voluptate, consectetur.</p>
        <button> Handle </button>
      </div>

    </div>
  )
}

export default Card;
