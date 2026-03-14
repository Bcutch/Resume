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
                        className={`w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 ${border} aspect-square rounded-full object-cover shadow-lg`}
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