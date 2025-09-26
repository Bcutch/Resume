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
            <div className={`w-full h-full ${color} ${style} ${animate}`}>
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
                        Sep 2019 - Dec 2026
                    </h2>
                </div>
                <div className={`flex mx-3 text-lg italic text-sky-900`}>
                    <h2 className={`flex flex-auto justify-start`}>
                        Bachelor of Computing, Software Engineering
                    </h2>
                    <h2 className={`justify-end`}>
                        Guelph
                    </h2>
                </div>
                <ul className={`ml-10`}>
                    <li className={`justify-start text-lg text-sky-900`}>
                        <h2 className={`font-bold inline-block`}>
                            Relevant Coursework:
                        </h2>
                        <h2 className={`ml-1 inline-block`}>
                            Software Reliability & Testing, Databases, Software Design.
                        </h2>
                    </li>
                </ul>
            </div>
        </>
    )
}