import Leftcontent from "./Leftcontent";
import RightContent from "./RightContent";

const Page1content = (props) => {
  return (
    <div className="pb-14 pt-5 overflow-x-hidden h-[90vh] flex items-center gap-10 px-18">
      <Leftcontent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1content;
