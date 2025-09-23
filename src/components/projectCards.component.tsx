import { Card } from "./card.component"

interface projProps {
    
}

export const ProjectCards: React.FC<projProps> = ({}) => {


    return(
        <>
            <div className={`flex-col`}>
                <h1 className="text-white font-bold mb-4">
                    Projects:
                </h1>
                <div className={`h-125 overflow-x-hidden no-scrollbar pb-4`}>
                    <Card img="headshot.jpg" title="test"/>
                    <Card img="headshot.jpg" title="test"/>
                    <Card img="headshot.jpg" title="test"/>
                </div>
            </div>
        </>
    )
}