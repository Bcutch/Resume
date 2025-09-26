interface NavProps {
    
}

export const NavBar: React.FC<NavProps> = ({}) => {

    const buttonStyle = "w-45 p-1 text-center text-md text-indigo-800 border-gray-900/10";
    const homeStyle = "flex-auto py-l pl-5 text-start text-lg text-white font-bold";

    return (
        <>
            <div className="flex h-12 justify-end bg-gray-400 border-gray-900/30 rounded-b-md">
                <button className={`${homeStyle}`}>
                    Brettan Cutchall
                </button>
                <button className={`${buttonStyle} border-l-2 rounded-l-sm`}>
                    Download Resume
                </button>
                <button className={`${buttonStyle} border-x-1`}>
                    LinkedIn?
                </button>
                <button className={`${buttonStyle} border-r-2 rounded-r-sm`}>
                    Contact Me
                </button>
            </div>
        </>
    )
}