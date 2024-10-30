import { myData } from "../data/Data";
import CustomSection from "./CustomSection";

export default function AboutMe() {
  return (
    <CustomSection>
      <p className="overflow-x-hidden w-auto tracking-wider">
        {myData.aboutMeDescription}
      </p>
    </CustomSection>
  );
}