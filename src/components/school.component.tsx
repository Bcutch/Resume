interface skillsProps {
    color?: string,
    style?: string,
    size?: string,
    animate?: string,
}

export const School: React.FC<skillsProps> = ({
    color = "bg-gray-400 border-gray-900/30",
    style = "border-2 rounded-xl",
    animate = "",
}) => {

    return(
        <>
            <div className={`w-full h-full py-3 ${color} ${style} ${animate}`}>
                <h1 className={`flex justify-start ml-3 mb-5 text-xl font-bold text-gray-700`}>
                    Education:
                </h1>
                <div className={`flex mx-3 text-lg italic text-sky-900`}>
                    <div className={`flex flex-auto justify-start`}>
                        <h2 className={`font-bold`}>
                            University of Guelph
                        </h2>
                        <h2 className={`ml-1`}>
                            (GPA: 3.3/4.0)
                        </h2>
                    </div>
                    <h2 className={`justify-end`}>
                        Sep 2019 - Dec 2025
                    </h2>
                </div>
                <div className={`flex mx-3 text-lg italic text-sky-900`}>
                    <h2 className={`flex flex-auto justify-start`}>
                        Bachelor of Computing, Honours Major Software Engineering
                    </h2>
                    <h2 className={`justify-end`}>
                        Guelph, ON
                    </h2>
                </div>
                <div className={`flex mx-3 text-lg italic text-sky-900`}>
                    <h2 className={`flex flex-auto justify-start ml-5`}>
                        Area of Applictaion in Mathematics
                    </h2>
                </div>
                <ul className={`ml-10`}>
                    <li className={`justify-start text-lg text-sky-900`}>
                        <h2 className={`font-bold inline-block`}>
                            Relevant Coursework:
                        </h2>
                        <h2 className={`ml-1 inline-block`}>
                            Software Reliability & Testing, Databases, Software Design, Object Oriented Programing, 
                            Mobile Computing, Human Computer Interaction, System Analysis & Design, Data Structures, 
                            Algorithms, Parallel Programming
                        </h2>
                    </li>
                </ul>
            </div>
        </>
    )
}