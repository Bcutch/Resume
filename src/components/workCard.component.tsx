import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface cardProps {
    title: string,
    img: string,
    content: React.ReactNode,
}

export const WorkCard: React.FC<cardProps> = ({
    title,
    img,
    content,
}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <>
            <div className="section-card w-full mt-3 overflow-hidden">
                <img 
                    src={`/images/${img}`} 
                    alt={title}
                    className="w-full h-40 object-cover rounded-t-xl"
                />
                <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors duration-150"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h1 className="text-base font-semibold text-slate-800">
                        {title}
                    </h1>
                    <FontAwesomeIcon
                        className="text-slate-400 text-sm"
                        icon={isOpen ? faAngleUp : faAngleDown}
                    />
                </div>
                {isOpen && (
                    <div className="px-4 pb-4">
                        {content}
                    </div>
                )}
            </div>
        </>
    )
}