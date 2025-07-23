'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, Suspense } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Search from '@/components/Search';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  status: 'Active' | 'Stable' | 'Flagship';
  githubUrl?: string;
  websiteUrl?: string;
}

const ProjectCard = ({ title, description, image, category, status, githubUrl, websiteUrl }: ProjectCardProps) => {
  const statusColors = {
    'Active': 'bg-[#28a745] text-white',
    'Stable': 'bg-[#ffc107] text-[#101820]',
    'Flagship': 'bg-[#dc3545] text-white'
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-['Barlow'] font-medium text-xl text-[#101820] mb-3 group-hover:text-[#003594] transition-colors">
          {title}
        </h3>
        <p className="font-['Poppins'] text-[#757575] text-sm leading-6 mb-4">
          {description}
        </p>
        <div className="flex gap-3">
          <Link href={`/projects/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
            <Button text="View Project" variant="primary" size="40" />
          </Link>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button text="GitHub" variant="ghost-dark" size="40" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

function ProjectsContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const searchQuery = searchParams.get('query') || '';
  const selectedCategory = searchParams.get('category') || 'All Projects';

  const featuredProjects = [
    {
      title: "OWASP Top 10",
      description: "The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.",
      image: "/images/tools/owtf.png",
      category: "Documentation",
      status: "Flagship" as const,
      websiteUrl: "https://owasp.org/www-project-top-ten/",
      githubUrl: "https://github.com/OWASP/Top10"
    },
    {
      title: "ZAP (Zed Attack Proxy)",
      description: "The OWASP Zed Attack Proxy (ZAP) is one of the world's most popular free security tools and is actively maintained by hundreds of international volunteers.",
      image: "/images/tools/dependency-track.png",
      category: "Security Testing",
      status: "Flagship" as const,
      websiteUrl: "https://www.zaproxy.org/",
      githubUrl: "https://github.com/zaproxy/zaproxy"
    },
    {
      title: "Amass",
      description: "In-depth attack surface mapping and asset discovery platform for security professionals and penetration testers.",
      image: "/images/tools/amass.png",
      category: "Asset Discovery",
      status: "Active" as const,
      websiteUrl: "https://github.com/OWASP/Amass",
      githubUrl: "https://github.com/OWASP/Amass"
    },
    {
      title: "OWTF",
      description: "Offensive Web Testing Framework that combines different testing strategies for efficient penetration testing workflows.",
      image: "/images/tools/owtf.png",
      category: "Penetration Testing",
      status: "Active" as const,
      websiteUrl: "https://github.com/owtf/owtf",
      githubUrl: "https://github.com/owtf/owtf"
    },
    {
      title: "Dependency-Track",
      description: "Intelligent component analysis platform for identifying and reducing risk from third-party components.",
      image: "/images/tools/dependency-track.png",
      category: "Supply Chain Security",
      status: "Active" as const,
      websiteUrl: "https://dependencytrack.org/",
      githubUrl: "https://github.com/DependencyTrack/dependency-track"
    },
    {
      title: "Juice Shop",
      description: "A globally-used, intentionally insecure web application for security training and education purposes.",
      image: "/images/events/event-1.png",
      category: "Training",
      status: "Flagship" as const,
      websiteUrl: "https://owasp.org/www-project-juice-shop/",
      githubUrl: "https://github.com/juice-shop/juice-shop"
    },
    {
      title: "OWASP Application Security Verification Standard (ASVS)",
      description: "A framework of security requirements that focus on normalizing the functional and non-functional security controls required when designing, developing and testing modern web applications.",
      image: "/images/tools/dependency-track.png",
      category: "Documentation",
      status: "Flagship" as const,
      websiteUrl: "https://owasp.org/www-project-application-security-verification-standard/",
      githubUrl: "https://github.com/OWASP/ASVS"
    }
  ];

  const categories = [
    "All Projects",
    "Security Testing",
    "Asset Discovery", 
    "Documentation",
    "Training",
    "Penetration Testing",
    "Supply Chain Security"
  ];

  const handleCategoryFilter = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'All Projects') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    // Reset to first page when filtering
    params.delete('page');
    replace(`${pathname}?${params.toString()}`);
  };

  const handleClearFilters = () => {
    const params = new URLSearchParams();
    replace(`${pathname}?${params.toString()}`);
  };

  const filteredProjects = useMemo(() => {
    return featuredProjects.filter(project => {
      const matchesSearch = !searchQuery || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All Projects' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, featuredProjects]);

  const activeFiltersCount = (searchQuery ? 1 : 0) + (selectedCategory !== 'All Projects' ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#101820] relative">
        <div className="max-w-[1440px] mx-auto px-[120px] py-24">
          <div className="max-w-4xl">
            <h1 className="font-['Barlow'] font-medium text-[56px] text-white leading-[56px] tracking-[-1.12px] mb-6">
              OWASP Projects
            </h1>
            <p className="font-['Poppins'] text-[#f4f4f4] text-lg leading-7 mb-8">
              Discover powerful, open-source security tools and resources developed by the global OWASP community. 
              From web application security testing to vulnerability assessment, our projects help secure the digital world.
            </p>
            <div className="flex gap-4">
              <Link href="/submit-project">
                <Button text="Submit a Project" variant="light-blue" size="56" />
              </Link>
              <Link href="/project-handbook">
                <Button text="Project Handbook" variant="ghost-white" size="56" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-[120px] py-8">
          <div className="max-w-lg mx-auto">
            <Search 
              placeholder="Search projects by name, description, or category..."
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-[120px] py-8">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="font-['Poppins'] text-[#757575] text-sm mr-2">Filter by category:</span>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-[#003594] text-white shadow-md' 
                    : 'bg-gray-100 text-[#757575] hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
            {activeFiltersCount > 0 && (
              <button
                onClick={handleClearFilters}
                className="ml-4 px-3 py-1 text-xs text-[#003594] hover:text-[#004bbb] border border-[#003594] rounded-full hover:bg-[#003594]/5 transition-all"
              >
                Clear all ({activeFiltersCount})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-['Barlow'] font-medium text-[40px] text-[#101820] leading-[40px] tracking-[-0.8px] mb-4">
              Featured Projects
            </h2>
            <p className="font-['Poppins'] text-[#757575] text-base leading-6">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== 'All Projects' && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-['Barlow'] font-medium text-xl text-[#101820] mb-2">
                  No projects found
                </h3>
                <p className="font-['Poppins'] text-[#757575] text-base mb-6">
                  We couldn't find any projects matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <button 
                  onClick={handleClearFilters}
                  className="inline-flex items-center px-4 py-2 bg-[#003594] text-white rounded-lg hover:bg-[#004bbb] transition-colors font-medium"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-[#f8f9fa] rounded-lg p-12 text-center">
          <h3 className="font-['Barlow'] font-medium text-[32px] text-[#101820] mb-4">
            Start Your Own OWASP Project
          </h3>
          <p className="font-['Poppins'] text-[#757575] text-base mb-8 max-w-2xl mx-auto">
            Have an idea for a security tool or resource? Join our community of developers and security professionals 
            building the future of application security.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/project-handbook">
              <Button text="Project Guidelines" variant="ghost-dark" size="48" />
            </Link>
            <Link href="/submit-project">
              <Button text="Submit Project Idea" variant="primary" size="48" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#003594] mx-auto mb-4"></div>
            <p className="text-[#757575]">Loading projects...</p>
          </div>
        </div>
      }>
        <ProjectsContent />
      </Suspense>
      <Footer />
    </div>
  );
} 