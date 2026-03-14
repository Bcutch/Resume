import { WorkCard } from "./workCard.component"

interface workProps {
    extra?: string
}

export const WorkCards: React.FC<workProps> = ({
    extra = ""
}) => {

    const title = "mt-2 font-semibold text-slate-800 text-sm"
    const date = "mb-2 text-xs text-blue-600 font-medium italic"
    const text = "ml-5 text-sm text-slate-600 space-y-1"

    return(
        <>
            <div className={extra}>
                <span className="section-heading">Work Experience</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <WorkCard img="mwss.png" title="Making Waves Swimming School" content={
                        <>
                            <div>
                                <h2 className={title}>
                                    Customer Service Representative
                                </h2>
                                <h2 className={date}>
                                    Mar 2024 - Present
                                </h2>
                                <ul className={text}>
                                    <li>Troubleshooted customer issues with account, online policies, registration, and payments.</li>
                                    <li>Scheduled, edited, and managed the operations side of the classes.</li>
                                    <li>Ran and analyzed sales reports in order to better create and find sales opportunities.</li>
                                </ul>
                            </div>
                        </>
                    }/>
                    <WorkCard img="ozanam.png" title="Camp Ozanam — Senior Staff" content={
                        <>
                            <div>
                                <h2 className={title}>
                                    Senior Staff
                                </h2>
                                <h2 className={date}>
                                    Jul - Aug 2024, 2025
                                </h2>
                                <ul className={text}>
                                    <li>Developed skills in leadership, management, organization, and program development as a senior staff counsellor for up to 15 counsellors and up to 40 kids aged 6-13.</li>
                                    <li>Supervised all activities of the camp and ran camp wide activities.</li>
                                    <li>Responsible for any issues within my section of kids (One third of the camp) and was the point of contact to the parents.</li>
                                    <li>Responsible for daily maintenance of the camp while it was running.</li>
                                </ul>
                            </div>
                        </>
                    }/>
                    <WorkCard img="wcdsb.jpg" title="Waterloo Catholic District School Board" content={
                        <>
                            <div>
                                <h2 className={title}>
                                    International Ambassador
                                </h2>
                                <h2 className={date}>
                                    May - Jul 2023, 2024, 2025
                                </h2>
                                <ul className={text}>
                                    <li>Worked with exchange students with various cultures and levels of English.</li>
                                    <li>Programmed events throughout the day and supervised/organized large trips including bus scheduling.</li>
                                </ul>
                            </div>
                        </>
                    }/>
                    <WorkCard img="works.png" title="The Works" content={
                        <>
                            <div>
                                <h2 className={title}>
                                    MOD / Server
                                </h2>
                                <h2 className={date}>
                                    Oct. 2022 - March 2023
                                </h2>
                                <ul className={text}>
                                    <li>Managed and closed a restaurant on my own.</li>
                                    <li>Managed employee end times and resposible for analyzing times when business did not require the amount of staff invested that night.</li>
                                    <li>Responsible for checking that all sales of the day were accounted for.</li>
                                </ul>
                            </div>
                        </>
                    }/>
                    <WorkCard img="landmark.png" title="Landmark Cinemas — Manager" content={
                        <>
                            <div>
                                <h2 className={title}>
                                    Assistant Manager
                                </h2>
                                <h2 className={date}>
                                    Oct 2021 - Oct 2022
                                </h2>
                                <ul className={text}>
                                    <li>Developed skills in leadership, management, organization, and projection.</li>
                                    <li>Managed employees, created/ingested playlists, dealt with projection issues and ensured guest satisfaction.</li>
                                    <li>Adapted to changing conditions and regulations of the pandemic.</li>
                                </ul>
                            </div>
                        </>
                    }/>
                    <WorkCard img="ozanam.png" title="Camp Ozanam — Counsellor" content={
                        <>
                            <div>
                                <h2 className={title}>
                                    Camp Counsellor
                                </h2>
                                <h2 className={date}>
                                    Jul - Aug 2018, 2019, 2023
                                </h2>
                                <ul className={text}>
                                    <li>Developed skills in leadership, management, organization, and program development as a cabin counsellor for groups of up to 10 kids ages 6-13.</li>
                                    <li>Supervised and planned different activities for the camp each week.</li>
                                </ul>
                            </div>
                        </>
                    }/>
                </div>
            </div>
        </>
    )
}