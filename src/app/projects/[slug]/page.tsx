import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { getProjectBySlug } from '@/lib/projects';

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

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case 'flagship':
        return 'bg-[#dc3545] text-white';
      case 'production':
        return 'bg-[#28a745] text-white';
      default:
        return 'bg-[#6c757d] text-white';
    }
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-[#28a745] text-white';
      case 'intermediate':
        return 'bg-[#ffc107] text-[#101820]';
      case 'advanced':
        return 'bg-[#dc3545] text-white';
      default:
        return 'bg-[#6c757d] text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1a237e] via-[#303f9f] to-[#42a5f5] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[120px] py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
            {/* Project Info */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-8">
              <div className="flex flex-wrap gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getProjectTypeColor(project.project_type)}`}>
                  {project.project_type.charAt(0).toUpperCase() + project.project_type.slice(1)} Project
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(project.difficulty_level)}`}>
                  {project.difficulty_level.charAt(0).toUpperCase() + project.difficulty_level.slice(1)}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {project.category}
                </span>
              </div>
              
              <h1 className="font-['Barlow'] font-bold text-white text-[32px] sm:text-[40px] lg:text-[48px] leading-tight tracking-[-0.96px]">
                {project.title}
              </h1>
              
              <p className="font-['Poppins'] text-white/90 text-lg leading-relaxed max-w-3xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {project.github_url && (
                  <Link href={project.github_url} target="_blank" rel="noopener noreferrer">
                    <Button text="View on GitHub" variant="ghost-white" size="56" />
                  </Link>
                )}
                {project.website_url && (
                  <Link href={project.website_url} target="_blank" rel="noopener noreferrer">
                    <Button text="Visit Website" variant="primary" size="56" />
                  </Link>
                )}
                {project.documentation_url && (
                  <Link href={project.documentation_url} target="_blank" rel="noopener noreferrer">
                    <Button text="Documentation" variant="ghost-white" size="56" />
                  </Link>
                )}
              </div>
            </div>

            {/* Project Image/Logo */}
            {project.image && (
              <div className="w-full lg:w-80 h-48 lg:h-80 relative bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[120px] py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            {project.long_description && (
              <section>
                <h2 className="font-['Barlow'] font-bold text-[#101820] text-[24px] lg:text-[32px] mb-6">
                  About {project.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="font-['Poppins'] text-[#757575] leading-relaxed">
                    {project.long_description}
                  </p>
                </div>
              </section>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="font-['Barlow'] font-bold text-[#101820] text-[24px] lg:text-[32px] mb-6">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#003594] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Image src="/images/icons/check.svg" alt="Check" width={12} height={12} className="filter brightness-0 invert" />
                      </div>
                      <span className="font-['Poppins'] text-[#757575]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Getting Started */}
            {project.getting_started && project.getting_started.length > 0 && (
              <section>
                <h2 className="font-['Barlow'] font-bold text-[#101820] text-[24px] lg:text-[32px] mb-6">
                  Getting Started
                </h2>
                <ol className="space-y-4">
                  {project.getting_started.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#003594] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="font-['Poppins'] text-[#757575] pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Stats */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-['Barlow'] font-bold text-[#101820] text-xl mb-4">
                Project Information
              </h3>
              <div className="space-y-4">
                {project.language && (
                  <div>
                    <div className="font-['Poppins'] font-medium text-[#101820] text-sm">Language</div>
                    <div className="font-['Poppins'] text-[#757575] text-sm">{project.language}</div>
                  </div>
                )}
                {project.license && (
                  <div>
                    <div className="font-['Poppins'] font-medium text-[#101820] text-sm">License</div>
                    <div className="font-['Poppins'] text-[#757575] text-sm">{project.license}</div>
                  </div>
                )}
                {project.version && (
                  <div>
                    <div className="font-['Poppins'] font-medium text-[#101820] text-sm">Latest Version</div>
                    <div className="font-['Poppins'] text-[#757575] text-sm">{project.version}</div>
                  </div>
                )}
                {project.contributors && project.contributors > 0 && (
                  <div>
                    <div className="font-['Poppins'] font-medium text-[#101820] text-sm">Contributors</div>
                    <div className="font-['Poppins'] text-[#757575] text-sm">{project.contributors}</div>
                  </div>
                )}
                {project.downloads && (
                  <div>
                    <div className="font-['Poppins'] font-medium text-[#101820] text-sm">Downloads</div>
                    <div className="font-['Poppins'] text-[#757575] text-sm">{project.downloads}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Requirements */}
            {project.requirements && project.requirements.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-['Barlow'] font-bold text-[#101820] text-xl mb-4">
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {project.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#003594] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="font-['Poppins'] text-[#757575] text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-['Barlow'] font-bold text-[#101820] text-xl mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}