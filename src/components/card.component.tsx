interface cardProps {
    color?: string,
    style?: string,
    size?: string,
    animate?: string,
    title: string,
    img: string,
    onClick: ()=>void,
}

export const Card: React.FC<cardProps> = ({
    color = "bg-gray-400 border-gray-900/30",
    style = "border-2 rounded-r-xl",
    size = "110",
    animate = "transition delay-150 duration-300 ease-in-out hover:translate-x-[1vw] hover:translate-y-2 hover:scale-105 hover:cursor-pointer",
    title,
    img,
    onClick
}) => {

    // const imgSize = (Number(size) - 10).toString();

    return(
        <>
            <div className={`w-99/110 h-${size} ${color} ${style} ${animate} mt-2`} onClick={onClick}>
                <img src={`../../images/${img}`} alt="" className={`w-full h-80 ${style} aspect-square object-cover`} />
                <h1 className={`ml-3 text-xl font-bold text-gray-700`}>
                    {title}
                </h1>
            </div>
        </>
    )
}