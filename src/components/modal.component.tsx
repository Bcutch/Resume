interface ModalProps {
    onClose: () => void,
}

export const Modal: React.FC<ModalProps> = ({
    onClose,
}: ModalProps) => {
    return (
        <div className='fixed inset-0 z-9999 flex items-center justify-center backdrop-blur-sm transition-opacity duration-200 px-4'>
            <div className='w-full max-w-sm sm:max-w-lg rounded-2xl bg-slate-800 p-6 sm:p-8 shadow-2xl border border-slate-200'>
                <div className='mb-6 items-center justify-between space-y-3'>
                    <h2 className='text-2xl font-bold text-white'>Contact Info</h2>
                    <p className="text-sm text-slate-500 mb-6">Feel free to reach out through any of the channels below.</p>
                    <div className="flex items-center gap-4">
                        <img src={`/images/phone.png`} alt="" className={`w-9 h-9 border-2 aspect-square rounded-full object-cover`} />
                        <span className='text-lg sm:text-base font-medium text-white'>
                            226-750-2892
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={`/images/email.png`} alt="" className={`w-9 h-9 border-2 aspect-square rounded-full object-cover`} />
                        <span className='text-lg sm:text-base font-medium text-white break-all'>
                            brettan.cutchall@gmail.com
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={`/images/git.png`} alt="" className={`w-9 h-9 border-2 aspect-square rounded-full object-cover`} />
                        <a
                            href="https://github.com/Bcutch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg sm:text-base font-medium text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            github.com/Bcutch
                        </a>
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