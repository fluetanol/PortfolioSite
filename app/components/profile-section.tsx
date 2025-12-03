'use client'

import { useEffect, useRef } from "react";
import { certificationList, educationList, rewardsList } from "../const/profileList";
import { DateDescriptionList } from "./date-description-list";
import FullSection from "./full-section";
import { show_fadeinout_ty6 } from "../utils/observe-animation";


export default function ProfileSection() {
    const divsRef = useRef<HTMLDivElement[]>([]);

    useEffect(()=>{
        const currentDivs = divsRef.current;
        const observer = new IntersectionObserver(
            show_fadeinout_ty6({isOnceExecute:true}), 
            {threshold:0.2});
        currentDivs.forEach((div) => {
            if (div) observer.observe(div);
        });

        return  () => observer.disconnect();
    }, [])


    return(
          <FullSection>
                <div className="flex flex-col items-center gap-y-16 min-w-1/2">
                  <h1 className = "text-4xl font-semibold">Profile</h1>
        
                  <div className = "relative grid grid-cols-2 grid-rows-2 gap-x-48 gap-y-28  place-items-center">
                    <div ref={(el) => { if (el) divsRef.current[0] = el; }} className="space-y-4 opacity-0 translate-y-6">
                      <h2 className ="text-3xl"> Education </h2>
                      <DateDescriptionList items={educationList}/>
                    </div>
                    <div ref={(el) => { if (el) divsRef.current[1] = el; }} className="space-y-4 opacity-0 translate-y-6">
                      <h2 className ="text-3xl"> Rewards </h2>
                      <DateDescriptionList items={rewardsList}/>
                    </div>
                    <div ref={(el) => { if (el) divsRef.current[2] = el; }} className="space-y-4 opacity-0 translate-y-6 col-start-2">
                      <h2 className ="text-3xl"> Certification </h2>
                      <DateDescriptionList items={certificationList}/>
                    </div>
        
                    <div className="absolute left-1/2 h-full w-0.5 bg-gray-500"></div>
                  </div>
                </div>
        </FullSection>
    )
}