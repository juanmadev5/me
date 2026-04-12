import { ProjectModel } from "./ProjectModel";
import { SocialLinksModel } from "./SocialLinksModel";

export interface PortfolioDataModel {
  devName: string;
  fullName: string;
  headerDescription: string;
  profilePhoto: string;
  location: string;
  aboutMeDescription: string;
  myProjects: ProjectModel[];
  socialLinks: SocialLinksModel[];
  cvlink: string;
}
