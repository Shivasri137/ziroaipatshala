import ProjectGallery from "@/components/ProjectGallery";
export const metadata = {
  title: "Student Projects & Example Ideas",
  description: "Explore example AI learning projects for school students, from prompting and productivity to creative and problem-solving prototypes.",
  alternates: process.env.NEXT_PUBLIC_SITE_URL ? { canonical: "/projects" } : undefined,
};
export default function ProjectsPage() { return <ProjectGallery />; }
