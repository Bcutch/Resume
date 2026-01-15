import { WorkCard } from "./workCard.component"

interface workProps {
    
}

export const WorkCards: React.FC<workProps> = ({}) => {
    return(
        <>
            <div className={`flex-col`}>
                <h1 className="text-white font-bold mb-4">
                    Work Experience:
                </h1>
                <div className={`h-265 overflow-x-hidden no-scrollbar pb-4 rounded-lg`}>
                    <WorkCard img="mwss.png" title="Making Waves Swimming School" content={
                        <>
                            <div>
                                <h2 className={`mt-5 font-bold text-gray-700`}>
                                    Customer Service Representative
                                </h2>
                                <h2 className={`mb-2 font-bold italic text-gray-700`}>
                                    Mar 2024 - Present
                                </h2>
                                <div>
                                    <ul className="ml-10 mb-5 text-gray-700">
                                        <li>Troubleshooted customer issues with account, online policies, registration, and payments.</li>
                                        <li>Scheduled, edited, and managed the operations side of the classes.</li>
                                        <li>Ran and analyzed sales reports in order to better create and find sales opportunities.</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    }/>
                    <WorkCard img="ozanam.png" title="Camp Ozanam" content={
                        <>
                            <div>
                                <h2 className={`mt-5 font-bold text-gray-700`}>
                                    Senior Staff
                                </h2>
                                <h2 className={`mb-2 font-bold italic text-gray-700`}>
                                    Jul - Aug 2024, 2025
                                </h2>
                                <div>
                                    <ul className="ml-10 mb-5 text-gray-700">
                                        <li>Developed skills in leadership, management, organization, and program development as a senior staff counsellor for up to 15 counsellors and up to 40 kids aged 6-13.</li>
                                        <li>Supervised all activities of the camp and ran camp wide activities.</li>
                                        <li>Responsible for any issues within my section of kids (One third of the camp) and was the point of contact to the parents.</li>
                                        <li>Responsible for daily maintenance of the camp while it was running.</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    }/>
                    <WorkCard img="wcdsb.jpg" title="Waterloo Catholic District School Board" content={
                        <>
                            <div>
                                <h2 className={`mt-5 font-bold text-gray-700`}>
                                    International Ambassador
                                </h2>
                                <h2 className={`mb-2 font-bold italic text-gray-700`}>
                                    May - Jul 2023, 2024, 2025
                                </h2>
                                <div>
                                    <ul className="ml-10 mb-5 text-gray-700">
                                        <li>Worked with exchange students with various cultures and levels of English.</li>
                                        <li>Programmed events throughout the day and supervised/organized large trips including bus scheduling.</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    }/>
                    <WorkCard img="works.png" title="The Works" content={
                        <>
                            <div>
                                <h2 className={`mt-5 font-bold text-gray-700`}>
                                    MOD / Server
                                </h2>
                                <h2 className={`mb-2 font-bold italic text-gray-700`}>
                                    Oct. 2022 - March 2023
                                </h2>
                                <div>
                                    <ul className="ml-10 mb-5 text-gray-700">
                                        <li>Managed and closed a restaurant on my own.</li>
                                        <li>Managed employee end times and resposible for analyzing times when business did not require the amount of staff invested that night.</li>
                                        <li>Responsible for checking that all sales of the day were accounted for.</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    }/>
                    <WorkCard img="landmark.png" title="Landmark Cinemas" content={
                        <>
                            <div>
                                <h2 className={`mt-5 font-bold text-gray-700`}>
                                    Assistant Manager
                                </h2>
                                <h2 className={`mb-2 font-bold italic text-gray-700`}>
                                    Oct 2021 - Oct 2022
                                </h2>
                                <div>
                                    <ul className="ml-10 mb-5 text-gray-700">
                                        <li>Developed skills in leadership, management, organization, and projection.</li>
                                        <li>Managed employees, created/ingested playlists, dealt with projection issues and ensured guest satisfaction.</li>
                                        <li>Adapted to changing conditions and regulations of the pandemic.</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    }/>
                    <WorkCard img="landmark.png" title="Landmark Cinemas" content={
                        <>
                            <div>
                                <h2 className={`mt-5 font-bold text-gray-700`}>
                                    Cast Member
                                </h2>
                                <h2 className={`mb-2 font-bold italic text-gray-700`}>
                                    Dec. 2018 – July 2019
                                </h2>
                                <div>
                                    <ul className="ml-10 mb-5 text-gray-700">
                                        <li>Gained creative problem solving and team collaboration skills to ensure customer satisfaction.</li>
                                        <li>Gained experience and learned the job of every position on both floor and concession.</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    }/>
                    <WorkCard img="ozanam.png" title="Camp Ozanam" content={
                        <>
                            <div>
                                <h2 className={`mt-5 font-bold text-gray-700`}>
                                    Camp Counsellor
                                </h2>
                                <h2 className={`mb-2 font-bold italic text-gray-700`}>
                                    Jul - Aug 2018, 2019, 2023
                                </h2>
                                <div>
                                    <ul className="ml-10 mb-5 text-gray-700">
                                        <li>Developed skills in leadership, management, organization, and program development as a cabin counsellor for groups of up to 10 kids ages 6-13.</li>
                                        <li>Supervised and planned different activities for the camp each week.</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    }/>
                </div>
            </div>
        </>
    )
}