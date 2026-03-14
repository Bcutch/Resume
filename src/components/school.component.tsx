interface skillsProps {
    color?: string,
    size?: string,
    animate?: string,
}

export const School: React.FC<skillsProps> = ({
    color = "",
    animate = "",
    size = "py-5 px-6"
}) => {

    return(
        <>
            <div className={`section-card w-full h-full ${color} ${size} ${animate}`}>
                <span className={`section-heading`}>Education</span>
                <div className="flex items-baseline justify-between mt-1">
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-base font-bold text-slate-800">
                            University of Guelph
                        </h2>
                        <span className="text-sm text-slate-500 italic">(GPA: 3.3/4.0)</span>
                    </div>
                    <span className="text-sm text-slate-500 font-medium">Sep 2019 – Dec 2025</span>
                </div>
                <div className="flex justify-between items-baseline mt-0.5">
                    <p className="text-sm text-blue-700 font-medium italic">
                    Bachelor of Computing, Honours Major Software Engineering
                    </p>
                    <span className="text-sm text-slate-500">Guelph, ON</span>
                </div>
                <p className="text-sm text-slate-500 italic ml-4 mt-0.5">
                    Area of Application in Mathematics
                </p>
                <div className="mt-3 text-sm text-slate-700">
                    <span className="font-semibold text-slate-800">Relevant Coursework: </span>
                    Software Reliability &amp; Testing, Databases, Software Design, Object Oriented Programming,
                    Mobile Computing, Human Computer Interaction, System Analysis &amp; Design, Data Structures,
                    Algorithms, Parallel Programming
                </div>
            </div>
        </>
    )
}