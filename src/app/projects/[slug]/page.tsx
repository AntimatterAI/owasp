import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/projects';
import ProjectDetailPageWithTabs from './page-with-tabs';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPageWithTabs project={project} />;
}