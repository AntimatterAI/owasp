import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

interface ChapterCardProps {
  name: string;
  location: string;
  country: string;
  memberCount: number;
  nextMeeting?: string;
  image: string;
  description: string;
  meetupUrl?: string;
  status: 'Active' | 'Starting' | 'Inactive';
}

const ChapterCard = ({ name, location, country, memberCount, nextMeeting, image, description, meetupUrl, status }: ChapterCardProps) => {
  const statusColors = {
    'Active': 'bg-[#28a745] text-white',
    'Starting': 'bg-[#ffc107] text-[#101820]',
    'Inactive': 'bg-[#6c757d] text-white'
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image src={image} alt={`${name} Chapter`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm">
            {memberCount} members
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-['Barlow'] font-medium text-xl text-[#101820] mb-1 group-hover:text-[#003594] transition-colors">
            {name}
          </h3>
          <p className="font-['Poppins'] text-[#757575] text-sm flex items-center gap-2">
            <Image src="/images/icons/marker.svg" alt="" width={16} height={16} className="opacity-60" />
            {location}, {country}
          </p>
        </div>
        
        <p className="font-['Poppins'] text-[#757575] text-sm leading-6 mb-4">
          {description}
        </p>
        
        {nextMeeting && (
          <div className="mb-4 p-3 bg-[#f8f9fa] rounded-lg">
            <p className="font-['Poppins'] text-[#101820] text-sm">
              <span className="font-semibold">Next Meeting:</span> {nextMeeting}
            </p>
          </div>
        )}
        
        <div className="flex gap-3">
          <Button text="Learn More" variant="ghost-dark" size="40" />
          {meetupUrl && (
            <Button text="Join Chapter" variant="primary" size="40" />
          )}
        </div>
      </div>
    </div>
  );
};

export default function ChaptersPage() {
  const featuredChapters = [
    {
      name: "OWASP London",
      location: "London",
      country: "United Kingdom",
      memberCount: 2500,
      nextMeeting: "May 19, 2025 - 12:00 PM",
      image: "/images/events/event-2.png",
      description: "One of the most active OWASP chapters globally, hosting monthly meetings with leading security researchers and practitioners.",
      meetupUrl: "https://owasp.org/www-chapter-london",
      status: "Active" as const
    },
    {
      name: "OWASP New York",
      location: "New York",
      country: "United States",
      memberCount: 1800,
      nextMeeting: "May 28, 2025 - 6:00 PM",
      image: "/images/events/event-5.png",
      description: "Bringing together NYC's vibrant security community with expert talks, networking events, and hands-on workshops.",
      meetupUrl: "https://owasp.org/www-chapter-new-york",
      status: "Active" as const
    },
    {
      name: "OWASP Berlin",
      location: "Berlin",
      country: "Germany",
      memberCount: 950,
      nextMeeting: "May 22, 2025 - 2:00 PM",
      image: "/images/events/event-3.png",
      description: "Fostering the German security community with regular meetups focused on web application security and OWASP projects.",
      meetupUrl: "https://owasp.org/www-chapter-berlin",
      status: "Active" as const
    },
    {
      name: "OWASP Tokyo",
      location: "Tokyo",
      country: "Japan",
      memberCount: 650,
      nextMeeting: "June 5, 2025 - 7:00 PM",
      image: "/images/events/event-4.png",
      description: "Connecting Japanese security professionals and promoting application security awareness across Asia-Pacific.",
      meetupUrl: "https://owasp.org/www-chapter-tokyo",
      status: "Active" as const
    },
    {
      name: "OWASP Sydney",
      location: "Sydney",
      country: "Australia",
      memberCount: 420,
      nextMeeting: "June 2, 2025 - 9:00 AM",
      image: "/images/events/event-6.png",
      description: "Building a strong security community in Australia with focus on practical application security skills.",
      meetupUrl: "https://owasp.org/www-chapter-sydney",
      status: "Active" as const
    },
    {
      name: "OWASP São Paulo",
      location: "São Paulo",
      country: "Brazil",
      memberCount: 380,
      image: "/images/events/event-1.png",
      description: "Growing the Latin American security community and promoting OWASP principles across Brazil.",
      status: "Starting" as const
    }
  ];

  const regions = [
    "All Regions",
    "North America",
    "Europe", 
    "Asia-Pacific",
    "Latin America",
    "Africa",
    "Middle East"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#101820] relative">
        <div className="max-w-[1440px] mx-auto px-[120px] py-24">
          <div className="max-w-4xl">
            <h1 className="font-['Barlow'] font-medium text-[56px] text-white leading-[56px] tracking-[-1.12px] mb-6">
              OWASP Chapters
            </h1>
            <p className="font-['Poppins'] text-[#f4f4f4] text-lg leading-7 mb-8">
              Connect with your local OWASP community. Join a chapter near you to attend meetings, participate in projects, 
              and network with fellow security professionals from around the world.
            </p>
            <div className="flex gap-4">
              <Button text="Start a Chapter" variant="light-blue" size="56" />
              <Button text="Chapter Leader Guide" variant="ghost-white" size="56" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-[120px] py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-['Barlow'] font-medium text-[48px] text-[#003594] leading-[48px] tracking-[-0.96px] mb-2">
                275+
              </div>
              <div className="font-['Poppins'] text-[#757575] text-sm">
                Active Chapters
              </div>
            </div>
            <div className="text-center">
              <div className="font-['Barlow'] font-medium text-[48px] text-[#003594] leading-[48px] tracking-[-0.96px] mb-2">
                80+
              </div>
              <div className="font-['Poppins'] text-[#757575] text-sm">
                Countries
              </div>
            </div>
            <div className="text-center">
              <div className="font-['Barlow'] font-medium text-[48px] text-[#003594] leading-[48px] tracking-[-0.96px] mb-2">
                50k+
              </div>
              <div className="font-['Poppins'] text-[#757575] text-sm">
                Members
              </div>
            </div>
            <div className="text-center">
              <div className="font-['Barlow'] font-medium text-[48px] text-[#003594] leading-[48px] tracking-[-0.96px] mb-2">
                500+
              </div>
              <div className="font-['Poppins'] text-[#757575] text-sm">
                Events per Year
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Find Your Chapter */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-[120px] py-20">
          <div className="text-center mb-12">
            <h2 className="font-['Barlow'] font-medium text-[40px] text-[#101820] leading-[40px] tracking-[-0.8px] mb-4">
              Find Your Local Chapter
            </h2>
            <p className="font-['Poppins'] text-[#757575] text-base leading-6 mb-8">
              Search for OWASP chapters in your area or explore chapters worldwide.
            </p>
            <div className="flex gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="text" 
                placeholder="Enter city, country, or region"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#003594] focus:border-transparent"
              />
              <Button text="Search" variant="primary" size="48" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-[120px] py-8">
          <div className="flex flex-wrap gap-3">
            {regions.map((region, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-[#003594] text-white' 
                    : 'bg-gray-100 text-[#757575] hover:bg-gray-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="mb-12">
          <h2 className="font-['Barlow'] font-medium text-[40px] text-[#101820] leading-[40px] tracking-[-0.8px] mb-4">
            Featured Chapters
          </h2>
          <p className="font-['Poppins'] text-[#757575] text-base leading-6">
            Explore some of our most active and engaged chapter communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredChapters.map((chapter, index) => (
            <ChapterCard key={index} {...chapter} />
          ))}
        </div>

        {/* Start a Chapter */}
        <div className="bg-gradient-to-r from-[#003594] to-[#0056d6] rounded-lg p-12 text-center text-white">
          <h3 className="font-['Barlow'] font-medium text-[32px] mb-4">
            Don't See a Chapter Near You?
          </h3>
          <p className="font-['Poppins'] text-white/90 text-base mb-8 max-w-2xl mx-auto">
            Start your own OWASP chapter and build a security community in your area. We provide resources, 
            support, and guidance to help you get started.
          </p>
          <div className="flex gap-4 justify-center">
            <Button text="Chapter Starter Kit" variant="ghost-white" size="48" />
            <Button text="Apply to Start" variant="light-blue" size="48" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 