import { supabase } from "../lib/Supabase";
import { PortfolioDataModel } from "../model/PortfolioDataModel";

export async function getPortfolioData(): Promise<PortfolioDataModel> {
  const { data: profileData } = await supabase
    .from("profile")
    .select("*")
    .single();
  const { data: stackData } = await supabase.from("stack").select("*");
  const { data: projectsData } = await supabase.from("projects").select("*");
  const { data: socialsData } = await supabase.from("social_links").select("*");

  if (!profileData) throw new Error("No se pudo cargar el perfil");

  return {
    devName: profileData.dev_name,
    fullName: profileData.full_name,
    headerDescription: profileData.header_description,
    profilePhoto: profileData.profile_photo_url,
    location: profileData.location,
    aboutMeDescription: profileData.about_me_description,
    myStack: stackData || [],
    myProjects: projectsData || [],
    socialLinks: socialsData || [],
    cvLink: profileData.cv_link,
  };
}
