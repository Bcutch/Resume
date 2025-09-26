interface skillsProps {
    color?: string,
    style?: string,
    size?: string,
    animate?: string,
}

export const Skills: React.FC<skillsProps> = ({
    color = "bg-gray-400 border-gray-900/30",
    style = "border-2 rounded-xl",
    animate = "",
}) => {

    return(
        <>
            <div className={`flex-col w-full h-full ${color} ${style} ${animate}`}>
                <h1 className={`ml-3 text-xl font-bold text-gray-700`}>
                    Skills:
                </h1>
                <div className={`flex flex-wrap gap-2 gap-y-2 m-5`}>
                    <div className="bubble">
                        C
                    </div>
                    <div className="bubble">
                        Java
                    </div>
                    <div className="bubble">
                        Python
                    </div>
                    <div className="bubble">
                        Javascript
                    </div>
                    <div className="bubble">
                        Typescript
                    </div>
                    <div className="bubble">
                        HTML
                    </div>
                    <div className="bubble">
                        React
                    </div>
                    <div className="bubble">
                        Express
                    </div>
                    <div className="bubble">
                        TailwindCSS
                    </div>
                    <div className="bubble">
                        Node
                    </div>
                    <div className="bubble">
                        MySQL
                    </div>
                    <div className="bubble">
                        Docker
                    </div>
                    <div className="bubble">
                        Git
                    </div>
                    <div className="bubble">
                        Jest
                    </div>
                    <div className="bubble">
                        jQuery
                    </div>
                    <div className="bubble">
                        Agile Development
                    </div>
                    <div className="bubble">
                        SOLID design
                    </div>
                    <div className="bubble">
                        REST Api
                    </div>
                    <div className="bubble">
                        Flutter
                    </div>
                    <div className="bubble">
                        Dart
                    </div>
                    <div className="bubble">
                        Adaptive Design
                    </div>
                </div>
            </div>
        </>
    )
}