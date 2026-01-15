import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface cardProps {
    color?: string,
    style?: string,
    size?: string,
    title: string,
    img: string,
    content: React.ReactNode,
}

export const WorkCard: React.FC<cardProps> = ({
    color = "bg-gray-400 border-gray-900/30",
    style = "border-2 rounded-r-xl",
    size = "110",
    title,
    img,
    content,
}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openClose = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    return(
        <>
            <div className={`w-full h-${size} ${color} ${style} mt-2`}>
                <img src={`../../images/${img}`} alt="" className={`w-full h-55 ${style} aspect-square object-cover`} />
                <h1 className={`flex ml-3 text-xl font-bold text-gray-700`}>
                    <div className='flex-auto'>
                        {title}
                    </div>
                    <div className='h-5 w-5 mr-2 hover:cursor-pointer' onClick={openClose}>
                        {!isOpen && <FontAwesomeIcon icon={faAngleDown} />}
                        {isOpen && <FontAwesomeIcon icon={faAngleUp} />}
                    </div>
                </h1>
                {isOpen && (
                    content
                )}
            </div>
        </>
    )
}