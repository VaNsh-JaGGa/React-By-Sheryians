import RightCard from "./RightCard"

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div className="h-full shrink-0 flex flex-nowrap gap-6 gw-2/3 p-6">
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img ={elem.img} tag={elem.tag} intro={elem.intro} />
      })}
    </div>
  )
}

export default RightContent
