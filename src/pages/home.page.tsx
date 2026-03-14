import { HeadShot } from "../components/headShot.component";
import { NavBar } from "../components/navBar.component";
import { ProjectCards } from "../components/projectCards.component";
import { WorkCards } from "../components/workCards.component";
import { School } from "../components/school.component";
import { Skills } from "../components/skills.component";
import { Footer } from "../components/footer.component";

export const Home: React.FC = () => {

    return (
        <>
            <title>
                Brettan Cutchall
            </title>
            <body>
                <div className="flex-col min-h-screen bg-[#bacbdb]">
                    <NavBar />
                    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-6 sm:mt-12">
                        <div className="section-card p-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                            <div className="flex-shrink-0">
                                <HeadShot position="flex justify-center" />
                            </div>
                            <div className="flex-1 mt-4 sm:mt-0">
                                <h1 className="text-2xl font-bold text-slate-900 mb-1">
                                    Brettan Cutchall
                                </h1>
                                <p className="text-sm text-blue-600 font-semibold mb-4 uppercase tracking-wide">
                                    Software Engineer
                                </p>
                                <span className="section-heading">
                                    About Me
                                </span>
                                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                                    I’m 24 and recently graduated from the University of Guelph with a Bachelor of Computing, 
                                    majoring in Software Engineering (Honours). Through my studies, I’ve developed strong full-stack 
                                    development skills and, more importantly, hands-on experience working in agile team environments, 
                                    including sprint planning, task decomposition, and participating in daily stand-up meetings. I’ve 
                                    been working since I was 14 and have held roles across a variety of companies and teams, each giving 
                                    me different perspectives and experiences along the way. Outside of school and work, I enjoy dragon boat 
                                    racing, playing guitar, and rock climbing, which help keep me active and engaged in my personal time.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <School />
                        </div>
                        <div className="mt-6">
                            <Skills />
                        </div>    
                    </div>
                    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-6 sm:mt-10">
                        <ProjectCards />
                    </div>
                    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8">
                        <WorkCards />
                    </div>
                    <Footer />
                </div>
            </body>
        </>
    )
}