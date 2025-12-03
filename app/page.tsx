import Image from "next/image";
import { IntroductionSection } from "./components/introuduction-section";
import FullSection from "./components/full-section";
import { DateDescriptionList } from "./components/date-description-list";
import { educationList, certificationList, rewardsList } from "./const/profileList";


export default function Home() {


  return (
    <div>

      <IntroductionSection/>

      <FullSection>
        <div className="flex flex-col items-center gap-y-16 min-w-1/2">
          <h1 className = "text-4xl font-semibold">Profile</h1>

          <div className = "relative grid grid-cols-2 grid-rows-2 gap-x-48 gap-y-28  place-items-center">
            <div className="space-y-4 opacity-0 translate-y-6">
              <h2 className ="text-3xl"> Education </h2>
              <DateDescriptionList items={educationList}/>
            </div>
            <div className="space-y-4 opacity-0 translate-y-6">
              <h2 className ="text-3xl flex justify-start"> Rewards </h2>
              <DateDescriptionList items={rewardsList}/>
            </div>
            <div className="space-y-4 opacity-0 translate-y-6 col-start-2">
              <h2 className ="text-3xl"> Certification </h2>
              <DateDescriptionList items={certificationList}/>
            </div>

            <div className="absolute left-1/2 h-full w-0.5 bg-gray-500"></div>
          </div>
        </div>
      </FullSection>
    </div>
  );
}
