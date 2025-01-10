import { data } from "../app/Data";

export default function AboutMe() {
  return (
    <p className="p-4">
      {data.aboutMeDescription}
    </p>
  );
}