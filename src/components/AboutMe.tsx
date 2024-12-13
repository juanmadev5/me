import { myData } from "../data/Data";
import CustomSection from "./CustomSection";

export default function AboutMe() {
  return (
    <CustomSection>
      <p className="text-pretty">
        {myData.aboutMeDescription}
      </p>
    </CustomSection>
  );
}