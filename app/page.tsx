import Image from "next/image";
import LearnMoreButton from "./learn-more/page";
import ConfirmationButton from "./confirmation_button/page";
import SocialButtons from "./social_buttons/page";

export default function Home() {
  return (
    <>
     <SocialButtons />
     <LearnMoreButton />
     <ConfirmationButton />
    
    </>
  );
}
