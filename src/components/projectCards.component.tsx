import { Card } from "./card.component"

interface projProps {
    animate?: string
}

export const ProjectCards: React.FC<projProps> = ({
    animate = ""
}) => {

    return(
        <>
            <div className="flex flex-col h-full">
                <span className="section-heading">Passion Projects</span>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${animate}`}>
                    <Card img="plant-together.jpg" title="Plant Together" description="A collaborative PlantUML editor" onClick={() => window.open('https://plant-together.nnourr.tech/', '_blank', 'noopener,noreferrer')}/>
                    <Card img="Brophie.png" title="Brophie" description="A organizable photo gallery" onClick={()=>{window.open('https://brophie.vercel.app/', '_blank', 'noopener,noreferrer')}}/>
                    <Card img="uoguessr.jpg" title="UoGuesser" description="GeoGuessr-style campus game" onClick={()=>{window.open('https://github.com/Bcutch/UoGuessr', '_blank', 'noopener,noreferrer')}}/>
                    <Card img="geo.png" title="GeoJobSearch" description="Geographic job listing explorer" onClick={()=>{window.open('https://github.com/Bcutch/GeoJobSearch', '_blank', 'noopener,noreferrer')}}/>
                </div>
            </div>
        </>
    )
}