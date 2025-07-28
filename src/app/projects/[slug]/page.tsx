import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

interface ProjectData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  status: 'Active' | 'Stable' | 'Flagship';
  image: string;
  githubUrl?: string;
  websiteUrl?: string;
  documentation?: string;
  version?: string;
  downloads?: string;
  lastUpdate?: string;
  contributors?: number;
  features: string[];
  requirements: string[];
  gettingStarted: string[];
}

const projectData: { [key: string]: ProjectData } = {
  'amass': {
    slug: 'amass',
    title: 'Amass',
    description: 'In-depth attack surface mapping and asset discovery platform for security professionals.',
    longDescription: 'The OWASP Amass Project performs network mapping of attack surfaces and external asset discovery using open source information gathering and active reconnaissance techniques. Amass is a comprehensive tool that aids information security professionals during network mapping of attack surfaces and external asset discovery using open source information gathering and active reconnaissance techniques.',
    category: 'Asset Discovery',
    status: 'Active',
    image: '/images/tools/amass.png',
    githubUrl: 'https://github.com/OWASP/Amass',
    websiteUrl: 'https://github.com/OWASP/Amass',
    documentation: 'https://github.com/OWASP/Amass/wiki',
    version: 'v3.23.3',
    downloads: '2.5M+',
    lastUpdate: '2024-03-15',
    contributors: 45,
    features: [
      'DNS enumeration and subdomain discovery',
      'Certificate transparency log analysis',
      'Passive reconnaissance using OSINT sources',
      'Active reconnaissance techniques',
      'Integration with external APIs',
      'Visualization of discovered assets',
      'Export results in multiple formats'
    ],
    requirements: [
      'Go 1.19+ for building from source',
      'Network connectivity for API queries',
      'Optional: API keys for enhanced data sources'
    ],
    gettingStarted: [
      'Install Amass using package manager or download binary',
      'Run basic enumeration: amass enum -d example.com',
      'Configure API keys for enhanced results',
      'Explore advanced options and output formats'
    ]
  },
  'owtf': {
    slug: 'owtf',
    title: 'OWTF',
    description: 'Offensive Web Testing Framework for efficient penetration testing workflows.',
    longDescription: 'OWASP OWTF (Offensive Web Testing Framework) is a comprehensive penetration testing framework that combines different testing strategies for efficient security assessments. It automates the execution of security tests and provides a unified interface for managing penetration testing workflows.',
    category: 'Penetration Testing',
    status: 'Active',
    image: '/images/tools/owtf.png',
    githubUrl: 'https://github.com/owtf/owtf',
    websiteUrl: 'https://github.com/owtf/owtf',
    documentation: 'https://github.com/owtf/owtf/wiki',
    version: 'v2.5.1',
    downloads: '850K+',
    lastUpdate: '2024-02-28',
    contributors: 78,
    features: [
      'Automated security testing workflows',
      'Integration with popular security tools',
      'Web-based dashboard and reporting',
      'OWASP Testing Guide integration',
      'Plugin architecture for extensibility',
      'Detailed vulnerability reporting',
      'Multi-target testing capabilities'
    ],
    requirements: [
      'Python 3.8+ runtime environment',
      'Docker for containerized deployment',
      'Web browser for dashboard access'
    ],
    gettingStarted: [
      'Clone the repository and install dependencies',
      'Configure target applications for testing',
      'Launch the web interface and start scans',
      'Review results and generate reports'
    ]
  },
  'dependency-track': {
    slug: 'dependency-track',
    title: 'Dependency-Track',
    description: 'Intelligent component analysis platform for supply chain security.',
    longDescription: 'Dependency-Track is an intelligent Component Analysis platform that allows organizations to identify and reduce risk in the software supply chain. It takes a unique and highly beneficial approach to tracking known vulnerabilities, identifying components with known vulnerabilities, and providing intelligence on component usage.',
    category: 'Supply Chain Security',
    status: 'Active',
    image: '/images/tools/dependency-track.png',
    githubUrl: 'https://github.com/DependencyTrack/dependency-track',
    websiteUrl: 'https://dependencytrack.org/',
    documentation: 'https://docs.dependencytrack.org/',
    version: 'v4.9.1',
    downloads: '1.2M+',
    lastUpdate: '2024-04-01',
    contributors: 124,
    features: [
      'Continuous component analysis',
      'Vulnerability intelligence and alerting',
      'Policy engine for compliance',
      'SBOM (Software Bill of Materials) support',
      'Risk scoring and metrics',
      'Integration with CI/CD pipelines',
      'REST API for automation'
    ],
    requirements: [
      'Java 17+ runtime environment',
      'PostgreSQL or H2 database',
      'Minimum 4GB RAM recommended'
    ],
    gettingStarted: [
      'Download and deploy Dependency-Track',
      'Upload your first SBOM or integrate with CI/CD',
      'Configure vulnerability data sources',
      'Set up policies and notifications'
    ]
  },
  'owasp-application-security-verification-standard-asvs': {
    slug: 'owasp-application-security-verification-standard-asvs',
    title: 'OWASP Application Security Verification Standard (ASVS)',
    description: 'A framework of security requirements that focus on normalizing the functional and non-functional security controls required when designing, developing and testing modern web applications.',
    longDescription: 'The OWASP Application Security Verification Standard (ASVS) Project provides a basis for testing web application technical security controls and also provides developers with a list of requirements for secure development. The primary aim of the OWASP Application Security Verification Standard (ASVS) Project is to normalize the range of coverage and level of rigor available in the market when it comes to performing Web application security verification using a commercially-workable open standard.',
    category: 'Documentation',
    status: 'Flagship',
    image: '/images/tools/dependency-track.png',
    githubUrl: 'https://github.com/OWASP/ASVS',
    websiteUrl: 'https://owasp.org/www-project-application-security-verification-standard/',
    documentation: 'https://github.com/OWASP/ASVS/tree/master/4.0',
    version: 'v4.0.3',
    downloads: '500K+',
    lastUpdate: '2024-01-15',
    contributors: 67,
    features: [
      'Three levels of security verification (L1, L2, L3)',
      'Comprehensive security requirements framework',
      'Application security architecture guidance',
      'Cryptographic controls and key management',
      'Data protection and privacy requirements',
      'Communications security standards',
      'Malicious code detection guidelines',
      'Business logic verification controls'
    ],
    requirements: [
      'Understanding of web application security principles',
      'Familiarity with security testing methodologies',
      'Knowledge of common vulnerability classes'
    ],
    gettingStarted: [
      'Download the latest ASVS standard document',
      'Identify your application security verification level (L1/L2/L3)',
      'Map your security requirements to ASVS controls',
      'Implement verification testing based on chosen level'
    ]
  }
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-[1440px] mx-auto px-[120px] py-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <Button text="Back to Projects" variant="primary" size="48" />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const statusColors = {
    'Active': 'bg-[#28a745] text-white',
    'Stable': 'bg-[#ffc107] text-[#101820]',
    'Flagship': 'bg-[#dc3545] text-white'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#101820] relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[120px] py-12 sm:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4 lg:mb-6">
                <Link href="/projects" className="text-[#ffb81b] hover:text-[#ffa000] transition-colors text-sm">
                  ← Back to Projects
                </Link>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs sm:text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <h1 className={`font-['Barlow'] font-medium text-white mb-4 lg:mb-6 ${
                project.slug === 'owasp-application-security-verification-standard-asvs' 
                  ? 'text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[48px] leading-tight xl:leading-[56px] tracking-[-0.56px] sm:tracking-[-0.72px] lg:tracking-[-0.8px] xl:tracking-[-0.96px]' 
                  : 'text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] leading-tight xl:leading-[56px] tracking-[-0.64px] sm:tracking-[-0.8px] lg:tracking-[-0.96px] xl:tracking-[-1.12px]'
              }`}>
                {project.title}
              </h1>
              
              <p className="font-['Poppins'] text-[#f4f4f4] text-sm sm:text-base lg:text-lg leading-6 lg:leading-7 mb-6 lg:mb-8">
                {project.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 lg:mb-8">
                {project.websiteUrl && (
                  <Button text="Visit Project" variant="light-blue" size="56" />
                )}
                {project.githubUrl && (
                  <Button text="View on GitHub" variant="ghost-white" size="56" />
                )}
                {project.documentation && (
                  <Button text="Documentation" variant="ghost-white" size="56" />
                )}
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {project.version && (
                  <div>
                    <div className="text-[#ffb81b] text-lg sm:text-xl lg:text-2xl font-bold">{project.version}</div>
                    <div className="text-white/70 text-xs sm:text-sm">Latest Version</div>
                  </div>
                )}
                {project.downloads && (
                  <div>
                    <div className="text-[#ffb81b] text-lg sm:text-xl lg:text-2xl font-bold">{project.downloads}</div>
                    <div className="text-white/70 text-xs sm:text-sm">Downloads</div>
                  </div>
                )}
                {project.contributors && (
                  <div>
                    <div className="text-[#ffb81b] text-lg sm:text-xl lg:text-2xl font-bold">{project.contributors}</div>
                    <div className="text-white/70 text-xs sm:text-sm">Contributors</div>
                  </div>
                )}
                {project.lastUpdate && (
                  <div>
                    <div className="text-[#ffb81b] text-lg sm:text-xl lg:text-2xl font-bold">{new Date(project.lastUpdate).toLocaleDateString()}</div>
                    <div className="text-white/70 text-xs sm:text-sm">Last Update</div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[120px] py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 lg:space-y-12">
            
            {/* Features */}
            <div>
              <h2 className="font-['Barlow'] font-medium text-[24px] sm:text-[28px] lg:text-[32px] text-[#101820] mb-4 lg:mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <Image src="/images/icons/check.svg" alt="" width={20} height={20} className="mt-0.5 shrink-0" />
                    <span className="font-['Poppins'] text-[#757575] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Getting Started */}
            <div>
              <h2 className="font-['Barlow'] font-medium text-[24px] sm:text-[28px] lg:text-[32px] text-[#101820] mb-4 lg:mb-6">
                Getting Started
              </h2>
              <div className="space-y-4">
                {project.gettingStarted.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-[#003594] text-white rounded-full flex items-center justify-center text-xs lg:text-sm font-bold shrink-0">
                      {index + 1}
                    </div>
                    <span className="font-['Poppins'] text-[#757575] text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6 lg:space-y-8">
            
            {/* Requirements */}
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
              <h3 className="font-['Barlow'] font-medium text-lg lg:text-[20px] text-[#101820] mb-3 lg:mb-4">
                Requirements
              </h3>
              <ul className="space-y-2">
                {project.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#003594] text-sm">•</span>
                    <span className="font-['Poppins'] text-[#757575] text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
              <h3 className="font-['Barlow'] font-medium text-lg lg:text-[20px] text-[#101820] mb-3 lg:mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} className="block text-[#003594] hover:text-[#004bbb] text-sm transition-colors">
                    GitHub Repository →
                  </a>
                )}
                {project.documentation && (
                  <a href={project.documentation} className="block text-[#003594] hover:text-[#004bbb] text-sm transition-colors">
                    Documentation →
                  </a>
                )}
                {project.websiteUrl && (
                  <a href={project.websiteUrl} className="block text-[#003594] hover:text-[#004bbb] text-sm transition-colors">
                    Project Website →
                  </a>
                )}
              </div>
            </div>
            
            {/* Contribute */}
            <div className="bg-[#f8f9fa] p-4 lg:p-6 rounded-lg">
              <h3 className="font-['Barlow'] font-medium text-lg lg:text-[20px] text-[#101820] mb-3 lg:mb-4">
                Get Involved
              </h3>
              <p className="font-['Poppins'] text-[#757575] text-sm mb-4">
                Want to contribute to {project.title}? Join our community of developers and security professionals.
              </p>
              <Button text="Contribute" variant="primary" size="40" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 