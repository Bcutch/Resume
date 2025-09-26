import { HeadShot } from "../components/headShot.component";
import { NavBar } from "../components/navBar.component";
import { ProjectCards } from "../components/projectCards.component";
import { School } from "../components/school.component";
import { Skills } from "../components/skills.component";

export const Home: React.FC = () => {

    return (
        <>
            <title>
                Brettan Cutchall
            </title>
            <body>
                <div className="flex-col">
                    <NavBar />
                    <div className="grid grid-cols-3 mt-10 mr-5 gap-5">
                        <div className="projects ml-5">
                            <ProjectCards />
                        </div>
                        <HeadShot />
                        <div className="mr-15 mt-10">
                            <h1 className="text-yellow-200 font-bold mb-4">
                                About me!
                            </h1>
                            <p>
                                This is about me. This is about me. This is about me. This is a
                                This is about me. This is about me. This is about me. This is a
                                This is about me. This is about me. This is about me. This is a  
                                This is about me. This is about me. This is about me. This is a  
                                This is about me. This is about me. This is about me. This is a  
                                This is about me. This is about me. This is about me. This is a 
                            </p>
                        </div>
                        <div className="h-40"></div>
                        <div></div>
                        <div className={`mt-5 ml-3 w-full h-55`}>
                            <Skills />
                        </div>
                        <div className={`skills items-end mt-5 h-40 w-full`}>
                            <School />
                        </div>
                    </div>

                </div>
            </body>
        </>
    )
}