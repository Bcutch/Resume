interface ModalProps {
    onClose: () => void,
}

export const Modal: React.FC<ModalProps> = ({
    onClose,
}: ModalProps) => {
    return (
        <div className='fixed inset-0 z-9999 flex items-center justify-center backdrop-blur-xs transition-opacity duration-200'>
            <div className='w-[32rem] rounded-xl bg-slate-800 p-6 shadow-xl'>
                <div className='mb-6 items-center justify-between space-y-3'>
                    <h2 className='text-2xl font-bold text-white mb-10'>Contact Info</h2>
                    <div className="flex">
                        <img src={`../../images/phone.png`} alt="" className={`w-9 h-9 border-2 aspect-square rounded-full object-cover`} />
                        <h3 className='text-xl font-bold text-white ml-10'>
                            226-750-2892
                        </h3>
                    </div>
                    <div className="flex">
                        <img src={`../../images/email.png`} alt="" className={`w-9 h-9 border-2 aspect-square rounded-full object-cover`} />
                        <h3 className='text-xl font-bold text-white ml-10'>
                            brettan.cutchall@gmail.com
                        </h3>
                    </div>
                    <div className="flex">
                        <img src={`../../images/git.png`} alt="" className={`w-9 h-9 border-2 aspect-square rounded-full object-cover`} />
                        <h3 className='text-xl font-bold text-white ml-10'>
                            <a href="https://github.com/Bcutch" target="_blank" rel="noopener noreferrer">
                                https://github.com/Bcutch
                            </a>
                        </h3>
                    </div>
                </div>
                <div className='max-h-[60vh] space-y-2 space-x-40 text-right'>
                    <button
                        className="text-xl px-4 py-2 text-white border-white/20 cursor-pointer rounded-xl border-2 transition-all hover:border-white/60"
                        onClick={() => {
                            onClose()
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}