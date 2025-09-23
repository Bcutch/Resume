interface HSProps {
    position?: string,
    size?: string,
    border?: string,
}

export const HeadShot: React.FC<HSProps> = ({
    position="flex flex-auto justify-center mt-5",
    size="70",
    border="border-2 border-red-300",
}) => {

    return (
        <>
            <div className={`${position}`}>
                <img src="../../images/headshot.jpg" className={`h-${size} w-${size} ${border} aspect-square rounded-full object-cover`} />
            </div>
        </>
    )
}