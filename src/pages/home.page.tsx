import { HeadShot } from "../components/headShot.component";
import { NavBar } from "./navBar.component";
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
                <div className="flex-col">
                    <NavBar />
                    <div className="flex flex-col mt-15 mx-[25vw] justify-center items-center">
                        <div className="hs">
                            <HeadShot />
                            <div className="ml-15 mt-10">
                                <h1 className="text-yellow-200 font-bold mb-4">
                                    About me!
                                </h1>
                                <p>
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
                        <div className="mt-30 h-fit w-full">
                            <School />
                        </div>
                        <div className="mt-10 w-1/2 h-fit">
                            <Skills />
                        </div>
                        
                    </div>
                    <div className="flex justify-center items-center mt-20 gap-60">
                        <div className="w-4/9 mb-10 mt-10 fit-content">
                            <ProjectCards />
                        </div>
                        <div className="w-1/3 mb-10 mt-10">
                            <WorkCards />
                        </div>
                    </div>
                    <Footer />
                </div>
            </body>
        </>
    )
}