import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

interface EventCardProps {
  date: string;
  month: string;
  year: string;
  time: string;
  title: string;
  location: string;
  type: 'Conference' | 'Chapter Meeting' | 'Training' | 'Workshop';
  image: string;
  price?: string;
  registrationUrl?: string;
}

const EventCard = ({ date, month, year, time, title, location, type, image, price, registrationUrl }: EventCardProps) => {
  const typeColors = {
    'Conference': 'bg-[#dc3545] text-white',
    'Chapter Meeting': 'bg-[#28a745] text-white',
    'Training': 'bg-[#ffc107] text-[#101820]',
    'Workshop': 'bg-[#6f42c1] text-white'
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${typeColors[type]}`}>
            {type}
          </span>
        </div>
        {price && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#ffb81b] text-[#101820] rounded-full text-sm font-semibold">
              {price}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="font-['Barlow'] font-medium text-[32px] text-[#003594] tracking-[-0.64px] leading-8">
              {date}
            </div>
            <div className="flex flex-col font-['Poppins'] text-[#101820] text-sm">
              <div className="leading-5 font-semibold">{month}</div>
              <div className="leading-5 text-gray-600">{year}</div>
            </div>
          </div>
          <div className="text-[#757575] text-sm">
            {time}
          </div>
        </div>
        
        <h3 className="font-['Barlow'] font-medium text-xl text-[#101820] mb-2 group-hover:text-[#003594] transition-colors">
          {title}
        </h3>
        
        <p className="font-['Poppins'] text-[#757575] text-sm mb-4 flex items-center gap-2">
          <Image src="/images/icons/marker.svg" alt="" width={16} height={16} className="opacity-60" />
          {location}
        </p>
        
        <div className="flex gap-3">
          <Button text="Learn More" variant="ghost-dark" size="40" />
          {registrationUrl && (
            <Button text="Register" variant="primary" size="40" />
          )}
        </div>
      </div>
    </div>
  );
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      date: "3-7",
      month: "NOV",
      year: "2025",
      time: "9:00 AM - 6:00 PM",
      title: "OWASP Global AppSec USA 2025",
      location: "Washington, DC",
      type: "Conference" as const,
      image: "/images/events/event-1.png",
      price: "Early Bird",
      registrationUrl: "https://globalappsec.us"
    },
    {
      date: "19",
      month: "MAY",
      year: "2025",
      time: "12:00-12:45 PM",
      title: "OWASP London Chapter Meeting",
      location: "London, UK",
      type: "Chapter Meeting" as const,
      image: "/images/events/event-2.png",
      price: "Free",
      registrationUrl: "https://owasp.org/www-chapter-london"
    },
    {
      date: "22",
      month: "MAY",
      year: "2025",
      time: "2:00-3:30 PM",
      title: "OWASP Berlin Meetup",
      location: "Berlin, Germany",
      type: "Chapter Meeting" as const,
      image: "/images/events/event-3.png",
      price: "Free"
    },
    {
      date: "25",
      month: "MAY",
      year: "2025",
      time: "10:00-11:30 AM",
      title: "Web Security Training Workshop",
      location: "Tokyo, Japan",
      type: "Training" as const,
      image: "/images/events/event-4.png",
      price: "$299"
    },
    {
      date: "28",
      month: "MAY",
      year: "2025",
      time: "6:00-7:30 PM",
      title: "OWASP NYC Chapter Meeting",
      location: "New York, USA",
      type: "Chapter Meeting" as const,
      image: "/images/events/event-5.png",
      price: "Free"
    },
    {
      date: "02",
      month: "JUN",
      year: "2025",
      time: "9:00-10:30 AM",
      title: "Secure Coding Workshop",
      location: "Sydney, Australia",
      type: "Workshop" as const,
      image: "/images/events/event-6.png",
      price: "$199"
    }
  ];

  const eventTypes = [
    "All Events",
    "Conferences",
    "Chapter Meetings",
    "Training",
    "Workshops"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-8 items-start justify-start pb-[164px] pt-20 px-[120px] relative w-full">
        <div className="box-border content-stretch flex flex-col gap-16 items-center justify-center p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-0 relative shrink-0 w-full">
            <div className="font-['Barlow'] font-medium leading-[64px] relative shrink-0 text-[#101820] text-[64px] text-left tracking-[-1.28px] w-[1200px] max-w-full">
              <p className="block leading-[64px]">
                Global and Regional Events
              </p>
            </div>
            <div className="box-border content-stretch flex flex-row font-['Poppins'] gap-20 items-start justify-start p-0 relative shrink-0 text-[#757575] text-[16px] text-left tracking-[-0.32px] w-full">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <p className="block leading-[24px]">
                  Ever wanted to network and learn along with other AppSec
                  professionals? We host nearly a dozen events each year varying
                  in format to week long trainings and conferences, to single day
                  programs.
                </p>
              </div>
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <p className="block leading-[24px]">
                  Although some events have corporate sponsors, all content
                  remains vendor neutral, and speakers are carefully selected to
                  deliver a valuable experience.
                </p>
              </div>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
                <div className="basis-0 bg-[#f1f6fe] box-border content-stretch flex flex-col gap-4 grow h-[180px] items-start justify-start min-h-px min-w-px overflow-clip p-[24px] relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-8">
                    <div className="absolute bottom-[12.5%] left-[12.5%] right-[12.5%] top-[6.25%]">
                      <Image src="/images/icons/check-figma.svg" alt="" width={28} height={28} className="block max-w-none size-full" />
                    </div>
                  </div>
                  <div className="font-['Barlow'] font-medium leading-[32px] min-w-full relative shrink-0 text-[#182430] text-[24px] text-left tracking-[-0.48px]">
                    <p className="block leading-[32px]">
                      OWASP events are a<br />
                      great way to:
                    </p>
                  </div>
                </div>
                <div className="basis-0 bg-[#041a41] box-border content-stretch flex flex-col grow h-[180px] items-start justify-between min-h-px min-w-px overflow-clip p-[24px] relative shrink-0">
                  {/* Decorative ellipse element */}
                  <div className="absolute flex h-[0px] items-center justify-center top-[-19.717px] translate-x-[-50%] w-[0px]" style={{ left: "calc(50% - 79.537px)" }}>
                    <div className="flex-none rotate-[28deg] scale-y-[-100%]">
                      <div className="h-[150.311px] relative w-[27.588px]">
                        <div className="absolute bottom-[-33.264%] left-[-181.239%] right-[-181.239%] top-[-33.264%]">
                          <Image src="/images/icons/ellipse-decoration.svg" alt="" fill className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#13336d] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[12px] relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-6">
                      <Image src="/images/icons/briefcase-figma.svg" alt="" width={24} height={24} className="block max-w-none size-full filter brightness-0 invert" />
                    </div>
                  </div>
                  <div className="font-['Barlow'] font-medium leading-[24px] min-w-full relative shrink-0 text-[#ffffff] text-[20px] text-left tracking-[-0.4px]">
                    <p className="block leading-[24px]">
                      Improve your career skills
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
                <div className="basis-0 bg-[#041a41] box-border content-stretch flex flex-col grow h-[180px] items-start justify-between min-h-px min-w-px overflow-clip p-[24px] relative shrink-0">
                  {/* Decorative ellipse element */}
                  <div className="absolute flex h-[0px] items-center justify-center top-[-19.717px] translate-x-[-50%] w-[0px]" style={{ left: "calc(50% - 79.537px)" }}>
                    <div className="flex-none rotate-[28deg] scale-y-[-100%]">
                      <div className="h-[150.311px] relative w-[27.588px]">
                        <div className="absolute bottom-[-33.264%] left-[-181.239%] right-[-181.239%] top-[-33.264%]">
                          <Image src="/images/icons/ellipse-decoration.svg" alt="" fill className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#13336d] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[12px] relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-6">
                      <Image src="/images/icons/users-figma.svg" alt="" width={24} height={24} className="block max-w-none size-full filter brightness-0 invert" />
                    </div>
                  </div>
                  <div className="font-['Barlow'] font-medium leading-[24px] min-w-full relative shrink-0 text-[#ffffff] text-[20px] text-left tracking-[-0.4px]">
                    <p className="block leading-[24px]">
                      Build your professional network
                    </p>
                  </div>
                </div>
                <div className="basis-0 bg-[#041a41] box-border content-stretch flex flex-col grow h-[180px] items-start justify-between min-h-px min-w-px overflow-clip p-[24px] relative shrink-0">
                  {/* Decorative ellipse element */}
                  <div className="absolute flex h-[0px] items-center justify-center top-[-19.717px] translate-x-[-50%] w-[0px]" style={{ left: "calc(50% - 79.537px)" }}>
                    <div className="flex-none rotate-[28deg] scale-y-[-100%]">
                      <div className="h-[150.311px] relative w-[27.588px]">
                        <div className="absolute bottom-[-33.264%] left-[-181.239%] right-[-181.239%] top-[-33.264%]">
                          <Image src="/images/icons/ellipse-decoration.svg" alt="" fill className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#13336d] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[12px] relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-6">
                      <Image src="/images/icons/chart-projector-figma.svg" alt="" width={24} height={24} className="block max-w-none size-full filter brightness-0 invert" />
                    </div>
                  </div>
                  <div className="font-['Barlow'] font-medium leading-[24px] min-w-full relative shrink-0 text-[#ffffff] text-[20px] text-left tracking-[-0.4px]">
                    <p className="block leading-[24px]">
                      Learn about new trends in the industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px self-stretch shrink-0 rounded-lg" style={{ backgroundImage: "url('/images/events/figma-hero-image.png')" }} />
          </div>
        </div>
      </div>

      {/* Featured Event */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-[120px] py-20">
          <div className="bg-gradient-to-r from-[#003594] to-[#0056d6] rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-12">
                <div className="mb-6">
                  <span className="px-4 py-2 bg-[#ffb81b] text-[#101820] rounded-full text-sm font-semibold">
                    Featured Event
                  </span>
                </div>
                <h2 className="font-['Barlow'] font-medium text-[40px] text-white leading-[44px] tracking-[-0.8px] mb-4">
                  OWASP Global AppSec USA 2025
                </h2>
                <p className="font-['Poppins'] text-white/90 text-lg leading-7 mb-6">
                  Join 800+ security professionals from November 3–7, 2025, at the Marriott Marquis in Washington, DC 
                  for a dynamic week of learning, networking, and inspiration.
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-white">
                    <Image src="/images/icons/marker.svg" alt="" width={20} height={20} className="filter brightness-0 invert" />
                    <span>Washington, DC</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <span>November 3-7, 2025</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button text="Register Now" variant="light-blue" size="48" />
                  <Button text="View Agenda" variant="ghost-white" size="48" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 relative h-80 lg:h-auto">
                <Image src="/images/events/event-1.png" alt="Global AppSec USA" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-[120px] py-8">
          <div className="flex flex-wrap gap-3">
            {eventTypes.map((type, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-[#003594] text-white' 
                    : 'bg-gray-100 text-[#757575] hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="mb-12">
          <h2 className="font-['Barlow'] font-medium text-[40px] text-[#101820] leading-[40px] tracking-[-0.8px] mb-4">
            Upcoming Events
          </h2>
          <p className="font-['Poppins'] text-[#757575] text-base leading-6">
            Don't miss these opportunities to connect with the OWASP community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#f8f9fa] rounded-lg p-12 text-center">
          <h3 className="font-['Barlow'] font-medium text-[32px] text-[#101820] mb-4">
            Stay Updated on Events
          </h3>
          <p className="font-['Poppins'] text-[#757575] text-base mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive notifications about upcoming events, early bird pricing, 
            and exclusive content from the OWASP community.
          </p>
          <div className="flex gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#003594] focus:border-transparent"
            />
            <Button text="Subscribe" variant="primary" size="48" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 