interface cardProps {
    color?: string,
    style?: string,
    size?: string,
    animate?: string,
    title: string,
    img: string,
}

export const Card: React.FC<cardProps> = ({
    color = "bg-gray-400 border-gray-900/30",
    style = "border-2 rounded-r-xl",
    size = "50",
    animate = "transition delay-150 duration-300 ease-in-out hover:translate-x-5 hover:scale-110",
    title,
    img,
}) => {

    const imgSize = (Number(size) - 10).toString();

    return(
        <>
            <div className={`w-7/8 h-${size} ${color} ${style} ${animate} mt-2`}>
                <img src={`../../images/${img}`} alt="" className={`w-full h-${imgSize} ${style} aspect-square object-cover`} />
                <h1 className={`ml-3 text-xl font-bold text-gray-700`}>
                    {title}
                </h1>
            </div>
        </>
    )
}