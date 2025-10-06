import { ProjectModel } from "./ProjectModel";
import { SocialLinksModel } from "./SocialLinksModel";
import { StackModel } from "./StackModel";

export interface PortfolioDataModel {
  devName: string;
  fullName: string;
  headerDescription: string;
  profilePhoto: string;
  location: string;
  aboutMeDescription: string;
  myStack: StackModel[];
  myProjects: ProjectModel[];
  socialLinks: SocialLinksModel[];
  cvLink: string;
}
