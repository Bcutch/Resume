interface cardProps {
    animate?: string,
    description?: string,
    title: string,
    img: string,
    onClick: ()=>void,
}

export const Card: React.FC<cardProps> = ({
    animate = "transition duration-200 ease-in-out hover:translate-y-[-4px] hover:shadow-lg hover:cursor-pointer",
    description = "",
    title,
    img,
    onClick
}) => {

    // const imgSize = (Number(size) - 10).toString();

    return(
        <>
            <div 
                className={`section-card overflow-hidden ${animate} mt-2 group`} 
                onClick={onClick}
            >
                <div className="relative overflow-hidden">
                    <img 
                        src={`/images/${img}`} 
                        alt={title} 
                        className="w-full h-36 sm:h-44 object-cover rounded-t-xl transition duration-300 group-hover:scale-105" 
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-t-xl" /> */}
                </div>
                <div className="px-4 py-3">
                    <div className="flex items-start justify-between gap-2">
                        <div>
                            <h1 className="text-sm sm:text-base font-semibold text-slate-800 leading-tight">
                                {title}
                            </h1>
                            {description && (
                                <p className="text-xs text-slate-500 mt-0.5">
                                    {description}
                                </p>
                            )}
                            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-150">
                                View →
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}