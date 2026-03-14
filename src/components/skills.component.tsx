interface skillsProps {
    size?: string,
    animate?: string,
}

export const Skills: React.FC<skillsProps> = ({
    animate = "",
    size = "py-5 px-6"
}) => {

    return(
        <>
            <div className={`section-card w-full h-full ${size} ${animate}`}>
                <span className="section-heading">Skills</span>
                <div className="flex flex-wrap gap-2 mt-2">
                    {[
                        "C", "Java", "Python", "JavaScript", "TypeScript", "HTML",
                        "React", "Express", "TailwindCSS", "Node", "MySQL", "Docker",
                        "Git", "Jest", "jQuery", "Agile Development", "SOLID Design",
                        "REST API", "Flutter", "Dart", "Adaptive Design"
                    ].map((skill) => (
                        <div key={skill} className="bubble">{skill}</div>
                    ))}
                </div>
            </div>
        </>
    )
}