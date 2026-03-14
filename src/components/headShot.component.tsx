interface HSProps {
    position?: string,
    size?: string,
    border?: string,
}

export const HeadShot: React.FC<HSProps> = ({
    position="flex flex-auto justify-center mt-5 ml-3",
    size=null,
    border="border-4 border-blue-600 ring-4 ring-blue-100",
}) => {

    return (
        <>
            {size == null && (
                <div className={position}>
                    <img
                        src="/images/headshot.jpg"
                        className={`h-[18vw] w-[18vw] ${border} aspect-square rounded-full object-cover shadow-lg`}
                    />
                </div>
            )}
            {size != null && (
                <div className={position}>
                    <img
                        src="/images/headshot.jpg"
                        className={`h-${size} w-${size} ${border} aspect-square rounded-full object-cover shadow-lg`}
                    />
                </div>
            )}
        </>
    )
}