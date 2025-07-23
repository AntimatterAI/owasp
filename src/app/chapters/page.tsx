'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

interface Chapter {
  name: string;
  url?: string;
}

interface CountryChapters {
  country: string;
  chapters: Chapter[];
}

export default function ChaptersPage() {
  const [expandedRegions, setExpandedRegions] = useState<Set<string>>(new Set());

  const toggleRegion = (region: string) => {
    const newExpandedRegions = new Set(expandedRegions);
    if (newExpandedRegions.has(region)) {
      newExpandedRegions.delete(region);
    } else {
      newExpandedRegions.add(region);
    }
    setExpandedRegions(newExpandedRegions);
  };

  const regions = [
    "Africa",
    "Asia", 
    "Central America",
    "Europe",
    "North America",
    "Oceania",
    "South America"
  ];

  const chapterData: CountryChapters[] = [
    {
      country: "United States",
      chapters: [
        { name: "OWASP Atlanta", url: "/chapters/atlanta" },
        { name: "OWASP Austin", url: "/chapters/austin" },
        { name: "OWASP Boston", url: "/chapters/boston" },
        { name: "OWASP Chicago", url: "/chapters/chicago" },
        { name: "OWASP Denver", url: "/chapters/denver" },
        { name: "OWASP Detroit", url: "/chapters/detroit" },
        { name: "OWASP Houston", url: "/chapters/houston" },
        { name: "OWASP Las Vegas", url: "/chapters/las-vegas" },
        { name: "OWASP Los Angeles", url: "/chapters/los-angeles" },
        { name: "OWASP New York", url: "/chapters/new-york" },
        { name: "OWASP Portland", url: "/chapters/portland" },
        { name: "OWASP San Francisco", url: "/chapters/san-francisco" },
        { name: "OWASP Seattle", url: "/chapters/seattle" },
        { name: "OWASP Washington DC", url: "/chapters/washington-dc" },
      ]
    },
    {
      country: "Canada",
      chapters: [
        { name: "OWASP Calgary", url: "/chapters/calgary" },
        { name: "OWASP Montreal", url: "/chapters/montreal" },
        { name: "OWASP Ottawa", url: "/chapters/ottawa" },
        { name: "OWASP Toronto", url: "/chapters/toronto" },
        { name: "OWASP Vancouver", url: "/chapters/vancouver" },
      ]
    },
    {
      country: "United Kingdom",
      chapters: [
        { name: "OWASP Birmingham", url: "/chapters/birmingham" },
        { name: "OWASP Cambridge", url: "/chapters/cambridge" },
        { name: "OWASP Edinburgh", url: "/chapters/edinburgh" },
        { name: "OWASP London", url: "/chapters/london" },
        { name: "OWASP Manchester", url: "/chapters/manchester" },
      ]
    },
    {
      country: "Germany",
      chapters: [
        { name: "OWASP Berlin", url: "/chapters/berlin" },
        { name: "OWASP Frankfurt", url: "/chapters/frankfurt" },
        { name: "OWASP Hamburg", url: "/chapters/hamburg" },
        { name: "OWASP Munich", url: "/chapters/munich" },
        { name: "OWASP Stuttgart", url: "/chapters/stuttgart" },
      ]
    },
    {
      country: "France",
      chapters: [
        { name: "OWASP France", url: "/chapters/france" },
        { name: "OWASP Lyon", url: "/chapters/lyon" },
        { name: "OWASP Paris", url: "/chapters/paris" },
      ]
    },
    {
      country: "Netherlands",
      chapters: [
        { name: "OWASP Amsterdam", url: "/chapters/amsterdam" },
        { name: "OWASP Netherlands", url: "/chapters/netherlands" },
      ]
    },
    {
      country: "Australia",
      chapters: [
        { name: "OWASP Australia", url: "/chapters/australia" },
        { name: "OWASP Melbourne", url: "/chapters/melbourne" },
        { name: "OWASP Perth", url: "/chapters/perth" },
        { name: "OWASP Sydney", url: "/chapters/sydney" },
      ]
    },
    {
      country: "India",
      chapters: [
        { name: "OWASP Bangalore", url: "/chapters/bangalore" },
        { name: "OWASP Chennai", url: "/chapters/chennai" },
        { name: "OWASP Delhi", url: "/chapters/delhi" },
        { name: "OWASP Hyderabad", url: "/chapters/hyderabad" },
        { name: "OWASP Mumbai", url: "/chapters/mumbai" },
        { name: "OWASP Pune", url: "/chapters/pune" },
      ]
    },
    {
      country: "Japan",
      chapters: [
        { name: "OWASP Japan", url: "/chapters/japan" },
        { name: "OWASP Kansai", url: "/chapters/kansai" },
        { name: "OWASP Tokyo", url: "/chapters/tokyo" },
      ]
    },
    {
      country: "Brazil",
      chapters: [
        { name: "OWASP Brasília", url: "/chapters/brasilia" },
        { name: "OWASP Campinas", url: "/chapters/campinas" },
        { name: "OWASP Curitiba", url: "/chapters/curitiba" },
        { name: "OWASP Goiânia", url: "/chapters/goiania" },
        { name: "OWASP Porto Alegre", url: "/chapters/porto-alegre" },
        { name: "OWASP Rio de Janeiro", url: "/chapters/rio-de-janeiro" },
        { name: "OWASP Salvador", url: "/chapters/salvador" },
        { name: "OWASP São Paulo", url: "/chapters/sao-paulo" },
      ]
    },
    {
      country: "Argentina",
      chapters: [
        { name: "OWASP Argentina", url: "/chapters/argentina" },
        { name: "OWASP Buenos Aires", url: "/chapters/buenos-aires" },
        { name: "OWASP Córdoba", url: "/chapters/cordoba" },
      ]
    },
    {
      country: "Mexico",
      chapters: [
        { name: "OWASP Guadalajara", url: "/chapters/guadalajara" },
        { name: "OWASP Mexico", url: "/chapters/mexico" },
        { name: "OWASP Monterrey", url: "/chapters/monterrey" },
      ]
    },
    {
      country: "South Africa",
      chapters: [
        { name: "OWASP Cape Town", url: "/chapters/cape-town" },
        { name: "OWASP Johannesburg", url: "/chapters/johannesburg" },
      ]
    },
    {
      country: "Spain",
      chapters: [
        { name: "OWASP Barcelona", url: "/chapters/barcelona" },
        { name: "OWASP Madrid", url: "/chapters/madrid" },
        { name: "OWASP Spain", url: "/chapters/spain" },
      ]
    },
    {
      country: "Italy",
      chapters: [
        { name: "OWASP Italy", url: "/chapters/italy" },
        { name: "OWASP Milan", url: "/chapters/milan" },
        { name: "OWASP Rome", url: "/chapters/rome" },
      ]
    },
    {
      country: "Poland",
      chapters: [
        { name: "OWASP Krakow", url: "/chapters/krakow" },
        { name: "OWASP Poland", url: "/chapters/poland" },
        { name: "OWASP Warsaw", url: "/chapters/warsaw" },
      ]
    },
    {
      country: "Israel",
      chapters: [
        { name: "OWASP Israel", url: "/chapters/israel" },
        { name: "OWASP Tel Aviv", url: "/chapters/tel-aviv" },
      ]
    },
    {
      country: "Singapore",
      chapters: [
        { name: "OWASP Singapore", url: "/chapters/singapore" },
      ]
    },
    {
      country: "Turkey",
      chapters: [
        { name: "OWASP Istanbul", url: "/chapters/istanbul" },
        { name: "OWASP Turkey", url: "/chapters/turkey" },
      ]
    },
    {
      country: "Russia",
      chapters: [
        { name: "OWASP Moscow", url: "/chapters/moscow" },
        { name: "OWASP Russia", url: "/chapters/russia" },
        { name: "OWASP Saint Petersburg", url: "/chapters/saint-petersburg" },
      ]
    }
  ];

  // In the new design, we always show all data since collapsed view uses regions
  const displayedData = chapterData;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-[#101820] overflow-hidden">
        {/* World Map Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="relative w-full h-full flex items-center justify-center">
            <svg width="800" height="400" viewBox="0 0 800 400" className="max-w-none">
              {/* Simplified world map dots representing chapters */}
              <circle cx="150" cy="180" r="3" fill="#00A7E1" />
              <circle cx="180" cy="160" r="3" fill="#00A7E1" />
              <circle cx="200" cy="200" r="3" fill="#00A7E1" />
              <circle cx="320" cy="150" r="3" fill="#00A7E1" />
              <circle cx="340" cy="170" r="3" fill="#00A7E1" />
              <circle cx="360" cy="140" r="3" fill="#00A7E1" />
              <circle cx="380" cy="160" r="3" fill="#00A7E1" />
              <circle cx="450" cy="180" r="3" fill="#00A7E1" />
              <circle cx="480" cy="200" r="3" fill="#00A7E1" />
              <circle cx="520" cy="160" r="3" fill="#00A7E1" />
              <circle cx="550" cy="190" r="3" fill="#00A7E1" />
              <circle cx="600" cy="220" r="3" fill="#00A7E1" />
              <circle cx="650" cy="240" r="3" fill="#00A7E1" />
              <circle cx="700" cy="200" r="3" fill="#00A7E1" />
              {/* Additional dots for visual effect */}
              <circle cx="120" cy="220" r="2" fill="#FFB81B" />
              <circle cx="250" cy="240" r="2" fill="#FFB81B" />
              <circle cx="300" cy="180" r="2" fill="#FFB81B" />
              <circle cx="420" cy="220" r="2" fill="#FFB81B" />
              <circle cx="580" cy="170" r="2" fill="#FFB81B" />
              <circle cx="620" cy="180" r="2" fill="#FFB81B" />
            </svg>
          </div>
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-[120px] py-24">
          <div className="max-w-4xl">
            <h1 className="font-['Barlow'] font-medium text-[64px] text-white leading-[64px] tracking-[-1.28px] mb-6">
              OWASP Local Chapters
            </h1>
            <p className="font-['Poppins'] text-[#f4f4f4] text-[16px] leading-[24px] mb-8 max-w-2xl">
              Connect with your local OWASP community. Join a chapter near you to attend meetings, participate in projects, 
              and network with fellow security professionals from around the world.
            </p>
            <div className="flex gap-4">
              <Button text="Find Chapter Near You" variant="light-blue" size="56" />
              <Button text="Start a New Chapter" variant="ghost-white" size="56" />
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Listing Section */}
      <div className="max-w-[1440px] mx-auto px-[120px] py-16">
        {/* Section Header with Search */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-['Barlow'] font-medium text-[32px] text-[#101820] leading-[40px] tracking-[-0.64px] mb-2">
              Chapter Listing
            </h2>
            <p className="font-['Poppins'] text-[#757575] text-[14px] leading-[20px]">
              Browse all OWASP chapters worldwide
            </p>
          </div>
          
          <div className="flex">
            <input 
              type="text" 
              placeholder="Search chapter"
              className="px-4 py-2 border border-[#D7D7D7] rounded-l-sm focus:outline-none focus:ring-1 focus:ring-[#003594] focus:border-[#003594] text-[14px] font-['Poppins']"
            />
            <button className="bg-[#003594] text-white px-4 py-2 rounded-r-sm text-[14px] font-['Poppins'] font-semibold hover:bg-[#002a7a] transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Chapters List - Collapsed View */}
        <div className="space-y-0">
          {regions.map((region, regionIndex) => (
            <div key={regionIndex} className="border-b border-[#D7D7D7]">
              <button
                onClick={() => toggleRegion(region)}
                className="w-full flex items-center justify-between py-6 text-left hover:bg-[#F4F4F4] transition-colors duration-200"
              >
                <h3 className="font-['Barlow'] font-medium text-[20px] text-[#101820] leading-[24px]">
                  {region}
                </h3>
                <svg 
                  className={`w-5 h-5 text-[#757575] transition-transform duration-200 ${
                    expandedRegions.has(region) ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expandedRegions.has(region) && (
                <div className="pb-6 pl-0">
                  <div className="space-y-6">
                    {displayedData
                      .filter(countryData => {
                        // Simple region mapping - you might want to make this more sophisticated
                        const countryToRegion: { [key: string]: string } = {
                          "United States": "North America",
                          "Canada": "North America",
                          "Mexico": "Central America",
                          "United Kingdom": "Europe",
                          "Germany": "Europe",
                          "France": "Europe",
                          "Netherlands": "Europe",
                          "Spain": "Europe",
                          "Italy": "Europe",
                          "Poland": "Europe",
                          "Australia": "Oceania",
                          "India": "Asia",
                          "Japan": "Asia",
                          "Singapore": "Asia",
                          "Turkey": "Asia",
                          "Russia": "Asia",
                          "Israel": "Asia",
                          "Brazil": "South America",
                          "Argentina": "South America",
                          "South Africa": "Africa"
                        };
                        return countryToRegion[countryData.country] === region;
                      })
                      .map((countryData, countryIndex) => (
                        <div key={countryIndex} className="border-b border-[#F4F4F4] pb-4">
                          <h4 className="font-['Barlow'] font-medium text-[16px] text-[#101820] leading-[20px] mb-3">
                            {countryData.country}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                            {countryData.chapters.map((chapter, chapterIndex) => (
                              <Link
                                key={chapterIndex}
                                href={chapter.url || '#'}
                                className="font-['Poppins'] text-[14px] text-[#003594] hover:text-[#00A7E1] transition-colors duration-200 hover:underline"
                              >
                                {chapter.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

                 {/* Call to Action */}
        <div className="bg-[#F1F6FE] rounded-lg p-12 text-center mt-16">
          <h3 className="font-['Barlow'] font-medium text-[32px] text-[#101820] leading-[40px] tracking-[-0.64px] mb-4">
            Don't See a Chapter Near You?
          </h3>
          <p className="font-['Poppins'] text-[#757575] text-[16px] leading-[24px] mb-8 max-w-2xl mx-auto">
            Start your own OWASP chapter and build a security community in your area. We provide resources, 
            support, and guidance to help you get started.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/chapter-starter-kit">
              <Button text="Chapter Starter Kit" variant="primary" size="48" />
            </Link>
            <Link href="/join-community">
              <Button text="Join Our Community" variant="ghost-dark" size="48" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 