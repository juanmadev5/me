import ProvideData from "../data/Data";
import CustomSection from "./CustomSection";

export default function AboutMe() {
  const data = ProvideData();
  return (
    <CustomSection>
      <p className="overflow-x-hidden w-auto tracking-wider">
        {data.myData.aboutMeDescription}
      </p>
    </CustomSection>
  );
}
