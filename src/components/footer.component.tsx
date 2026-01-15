import { useState } from "react";
import { Modal } from "./modal.component";

interface FooterProps {
    
}

export const Footer: React.FC<FooterProps> = () => {

    const buttonStyle = "w-70 p-1 text-center text-md text-white font-bold border-gray-900/10";
    const homeStyle = "flex-auto py-l pl-5 text-center text-xl text-white font-bold";

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex h-13 justify-end bg-gray-400 border-gray-900/30 rounded-t-md">
                <button className={`${homeStyle}`}>
                    Thank you for considering me!
                </button>
                <button className={`${buttonStyle} border-l-2 border-r-1 rounded-l-sm hover:cursor-pointer`}>
                    <a href="../../Brettan_Cutchall_Resume.pdf" download="Brettan_Cutchall_Resume.pdf">
                        Download Resume
                    </a>
                </button>
                {/* <button className={`${buttonStyle} border-x-1 hover:cursor-pointer`}>
                    LinkedIn?
                </button> */}
                <button className={`${buttonStyle} border-r-2 border-l-1 rounded-r-sm hover:cursor-pointer`} onClick={() => {setIsModalOpen(true)}}>
                    Contact Me
                </button>
            </div>
            {isModalOpen && (
                <Modal
                    onClose={() => {setIsModalOpen(false)}}
                />
            )}
        </>
    )
}