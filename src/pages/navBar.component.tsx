import { useState } from "react";
import { Modal } from "../components/modal.component";

interface NavProps {
    buttonStyle?: string,
    homeStyle?: string
}

export const NavBar: React.FC<NavProps> = ({
    buttonStyle = "px-5 py-2 text-sm text-slate-200 font-semibold tracking-wide hover:text-white hover:bg-white/10 rounded-md transition-colors duration-150",
    homeStyle = "flex-auto pl-6 text-start text-lg text-white font-bold tracking-tight"
}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex items-center h-14 bg-slate-900 shadow-md px-2">
                <span className={homeStyle}>
                    Brettan Cutchall
                </span>
                <div className="flex gap-1 pr-4">
                    <a
                        href="/Brettan_Cutchall_Resume.pdf"
                        download="Brettan_Cutchall_Resume.pdf"
                        className={buttonStyle}
                    >
                        Download Resume
                    </a>
                    <button
                        className={`${buttonStyle} hover:cursor-pointer`}
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