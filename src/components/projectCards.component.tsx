import { Card } from "./card.component"

interface projProps {
    animate?: string
}

export const ProjectCards: React.FC<projProps> = ({
    animate = ""
}) => {

    return(
        <>
            <div className={`flex-col`}>
                <h1 className="text-white font-bold mb-4">
                    Passion Projects:
                </h1>
                <div className={`w-full h-265 overflow-x-hidden no-scrollbar pb-4 rounded-lg ${animate}`}>
                    <Card img="plant-together.jpg" title="Plant Together" onClick={() => window.open('https://plant-together.nnourr.tech/', '_blank', 'noopener,noreferrer')}/>
                    <Card img="uoguessr.jpg" title="UoGuesser" onClick={()=>{window.open('https://github.com/Bcutch/UoGuessr', '_blank', 'noopener,noreferrer')}}/>
                    <Card img="geo.png" title="GeoJobSearch" onClick={()=>{window.open('https://github.com/Bcutch/GeoJobSearch', '_blank', 'noopener,noreferrer')}}/>
                    <Card img="workingon.png" title="Brophie" onClick={()=>{}}/>
                </div>
            </div>
        </>
    )
}