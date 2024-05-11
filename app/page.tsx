import Image from "next/image";
import LearnMoreButton from "./learn-more/page";
import ConfirmationButton from "./confirmation_button/page";

export default function Home() {
  return (
    <>
     <LearnMoreButton />
     <ConfirmationButton />
    </>
  );
}
