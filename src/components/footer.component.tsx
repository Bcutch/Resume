import { useState } from "react";
import { Modal } from "./modal.component";

interface FooterProps {
    extra?: string
}

export const Footer: React.FC<FooterProps> = ({
    extra = ""
}) => {

    const buttonStyle = "px-5 py-2 text-sm text-slate-200 font-semibold hover:text-white hover:bg-white/10 rounded-md transition-colors duration-150";
    const homeStyle = "flex-auto pl-6 text-center text-sm text-slate-400 font-medium";

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={`flex items-center h-14 bg-slate-900 shadow-inner px-2 mt-16 ${extra}`}>
                <span className={homeStyle}>
                    Thank you for considering me!
                </span>
                <div className="flex gap-1 pr-4">
                    <a 
                        className={buttonStyle}
                        href="../../Brettan_Cutchall_Resume.pdf"
                        download="Brettan_Cutchall_Resume.pdf"
                    >
                        Download Resume
                    </a>
                    <button 
                        className={`${buttonStyle} cursor-pointer`} 
                        onClick={() => setIsModalOpen(true)}
                    >
                        Contact Me
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <Modal
                    onClose={() => {setIsModalOpen(false)}}
                />
            )}
        </>
    )
}