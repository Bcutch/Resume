import { HeadShot } from "../components/headShot.component";
import { NavBar } from "../components/NavBar.component"

import { useState, useEffect } from "react";
import { ProjectCards } from "../components/projectCards.component";

export const Home: React.FC = () => {

    return (
        <>
            <title>
                Brettan Cutchall
            </title>
            <body>
                <div className="flex-col">
                    <NavBar />
                    <div className="grid grid-cols-3 mt-10">
                        <div className="ml-5">
                            <ProjectCards />
                        </div>
                        <HeadShot />
                        <div className="mr-20 mt-10">
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
                                This is about me. This is about me. This is about me. This is a  
                            </p>
                        </div>

                    </div>
                </div>
            </body>
        </>
    )
}