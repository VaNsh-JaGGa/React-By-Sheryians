import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
    console.log(props);
    
    return (
        <div className="h-full overflow-hidden  relative  w-70 bg-amber-200 rounded-4xl">
            <img className="h-full object-cover" src={props.img} alt="" />
            <RightCardContent tag={props.tag} intro={props.intro} id={props.id} />
        </div>
    )
}

export default RightCard
