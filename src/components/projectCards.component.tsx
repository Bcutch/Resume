import { Card } from "./card.component"

interface projProps {
    
}

export const ProjectCards: React.FC<projProps> = ({}) => {


    return(
        <>
            <div className={`flex-col`}>
                <h1 className="text-white font-bold mb-4">
                    Passion Projects:
                </h1>
                <div className={`h-130 overflow-x-hidden no-scrollbar pb-4 rounded-lg`}>
                    <Card img="plant-together.jpg" title="Plant Together"/>
                    <Card img="uoguessr.jpg" title="UoGuesser"/>
                    <Card img="headshot.jpg" title="GeoJobSearch"/>
                </div>
            </div>
        </>
    )
}