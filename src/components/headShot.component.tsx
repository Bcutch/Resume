interface HSProps {
    position?: string,
    size?: string,
    border?: string,
}

export const HeadShot: React.FC<HSProps> = ({
    position="flex flex-auto justify-center mt-5",
    size=null,
    border="border-2 border-red-300",
}) => {

    return (
        <>
            {size==null && 
                (<div className={`${position}`}>
                    <img src="../../images/headshot.jpg" className={`h-70 w-70 ${border} aspect-square rounded-full object-cover`} />
                </div>)}

            {size!=null && 
                (<div className={`${position}`}>
                    <img src="../../images/headshot.jpg" className={`h-${size} w-${size} ${border} aspect-square rounded-full object-cover`} />
                </div>)}
        </>
    )
}