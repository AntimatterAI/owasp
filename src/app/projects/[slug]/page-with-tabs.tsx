'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { Project } from '@/lib/projects';

interface ProjectPageProps {
  project: Project;
}

interface TabContentProps {
  content: string | undefined;
}

function TabContent({ content }: TabContentProps) {
  // Helper function to convert URLs in text to clickable links
  const renderTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, partIndex) => {
      if (urlRegex.test(part)) {
        return (
          <a 
            key={partIndex}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#003594] hover:text-[#0056b3] underline font-medium"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  if (!content) return null;

  return (
    <div className="prose prose-lg max-w-none space-y-6">
      {content.split('\n\n').map((paragraph, index) => {
        // Handle different content types
        if (paragraph.startsWith('##')) {
          // Heading
          const headingText = paragraph.replace(/^##\s+/, '');
          return (
            <h3 key={index} className="font-['Barlow'] font-bold text-[#101820] text-xl mt-8 mb-4">
              {renderTextWithLinks(headingText)}
            </h3>
          );
        } else if (paragraph.match(/^\d+\.\s+\*\*/)) {
          // Numbered list with bold items (like the Top 10 list)
          const items = paragraph.split(/(?=\d+\.\s+\*\*)/);
          return (
            <ol key={index} className="space-y-4 list-none">
              {items.filter(item => item.trim()).map((item, itemIndex) => {
                const cleanItem = item.trim();
                // Extract the number, title, and description
                const match = cleanItem.match(/^(\d+)\.\s+\*\*(.+?)\*\*\s*-?\s*(.*)$/);
                if (match) {
                  const [, number, title, description] = match;
                  return (
                    <li key={itemIndex} className="flex gap-4">
                      <div className="w-8 h-8 bg-[#003594] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {number}
                      </div>
                      <div>
                        <div className="font-['Poppins'] font-semibold text-[#101820] mb-1">
                          {renderTextWithLinks(title)}
                        </div>
                        {description && (
                          <div className="font-['Poppins'] text-[#757575] text-sm">
                            {renderTextWithLinks(description)}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                }
                return null;
              })}
            </ol>
          );
        } else if (paragraph.startsWith('-') || paragraph.match(/^\s*\*/)) {
          // Handle bullet points or markdown-style lists
          const lines = paragraph.split('\n').filter(line => line.trim());
          return (
            <ul key={index} className="space-y-2">
              {lines.map((line, lineIndex) => {
                const cleanLine = line.replace(/^[-*]\s*/, '').trim();
                if (cleanLine.startsWith('**') && cleanLine.includes('**:')) {
                  // Bold labels with descriptions
                  const match = cleanLine.match(/^\*\*(.+?)\*\*:\s*(.*)$/);
                  if (match) {
                    const [, label, description] = match;
                    return (
                      <li key={lineIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#003594] rounded-full flex-shrink-0 mt-2"></div>
                        <div>
                          <span className="font-['Poppins'] font-semibold text-[#101820]">
                            {renderTextWithLinks(label)}:
                          </span>
                          <span className="font-['Poppins'] text-[#757575] ml-1">
                            {renderTextWithLinks(description)}
                          </span>
                        </div>
                      </li>
                    );
                  }
                }
                return (
                  <li key={lineIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#003594] rounded-full flex-shrink-0 mt-2"></div>
                    <span className="font-['Poppins'] text-[#757575]">
                      {renderTextWithLinks(cleanLine)}
                    </span>
                  </li>
                );
              })}
            </ul>
          );
        } else {
          // Regular paragraph
          return (
            <p key={index} className="font-['Poppins'] text-[#757575] leading-relaxed">
              {renderTextWithLinks(paragraph)}
            </p>
          );
        }
      })}
    </div>
  );
}

export default function ProjectDetailPageWithTabs({ project }: ProjectPageProps) {
  const [activeTab, setActiveTab] = useState('main');

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

  // Define available tabs based on what content exists
  const tabs = [
    { id: 'main', label: 'Main', content: project.tab_main_content || project.long_description },
    ...(project.tab_translation_content ? [{ id: 'translation', label: 'Translation Efforts', content: project.tab_translation_content }] : []),
    ...(project.tab_sponsors_content ? [{ id: 'sponsors', label: 'Sponsors', content: project.tab_sponsors_content }] : []),
    ...(project.tab_data_content ? [{ id: 'data', label: 'Data 2025', content: project.tab_data_content }] : []),
  ];

  const currentTabContent = tabs.find(tab => tab.id === activeTab)?.content || project.long_description || '';

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
            {/* Tabs Navigation */}
            {tabs.length > 1 && (
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-[#003594] text-[#003594]'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Tab Content */}
            <section>
              <h2 className="font-['Barlow'] font-bold text-[#101820] text-[24px] lg:text-[32px] mb-6">
                About {project.title}
              </h2>
              <TabContent content={currentTabContent} />
            </section>

            {/* Features - Only show on Main tab */}
            {activeTab === 'main' && project.features && project.features.length > 0 && (
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
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-['Barlow'] font-bold text-[#101820] text-xl mb-4">
                Project Information
              </h3>
              <div className="space-y-4">
                {project.language && (
                  <div>
                    <div className="font-['Poppins'] font-medium text-[#101820] text-sm mb-1">Language</div>
                    <div className="font-['Poppins'] text-[#757575] text-sm">{project.language}</div>
                  </div>
                )}
                
                {project.license && (
                  <div>
                    <div className="font-['Poppins'] font-medium text-[#101820] text-sm mb-1">License</div>
                    <div className="font-['Poppins'] text-[#757575] text-sm">{project.license}</div>
                  </div>
                )}
                
                {project.version && (
                  <div>
                    <div className="font-['Poppins'] font-medium text-[#101820] text-sm mb-1">Latest Version</div>
                    <div className="font-['Poppins'] text-[#757575] text-sm">{project.version}</div>
                  </div>
                )}
                
                {project.contributors && (
                  <div>
                    <div className="font-['Poppins'] font-medium text-[#101820] text-sm mb-1">Contributors</div>
                    <div className="font-['Poppins'] text-[#757575] text-sm">{project.contributors}</div>
                  </div>
                )}
                
                {project.github_stars && (
                  <div>
                    <div className="font-['Poppins'] font-medium text-[#101820] text-sm mb-1">GitHub Stars</div>
                    <div className="font-['Poppins'] text-[#757575] text-sm">{project.github_stars}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Requirements */}
            {project.requirements && project.requirements.length > 0 && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
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
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-['Barlow'] font-bold text-[#101820] text-xl mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
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