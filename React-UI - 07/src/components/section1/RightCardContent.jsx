

const RightCardContent = (props) => {
    return (
        <div>
            <div className="absolute p-8 flex flex-col justify-between items-start top-0 left-0 h-full w-full">
                <h2 className="bg-white h-14 w-14 text-xl font-bold rounded-full flex justify-center items-center">{props.id + 1}</h2>
                <div>
                    <p className="text-lg text-white text-justify tra leading-relaxed mb-12">{props.intro}</p>
                    <div className="flex justify-between ">
                        <button className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-full ">{props.tag}</button>
                        <button className="bg-blue-600 text-white font-semibold px-3 py-2 rounded-full" ><i class="ri-arrow-right-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
