import Image from 'next/image';
import Button from './Button';

const markerIcon = "/images/icons/marker.svg";
const megaphoneIcon = "/images/icons/megaphone.svg";
const eventBackgroundImage = "/images/events/event-1.png";

export default function GlobalNetworkSection() {
  return (
    <div className="bg-[#101820] relative w-full">
      <div className="flex flex-col items-center relative w-full">
        <div className="box-border flex flex-row gap-16 items-center justify-start px-[120px] py-20 relative w-full max-w-[1440px]">
          {/* Background blur effects */}
          <div className="absolute bg-[#ffb81b] blur-[50px] filter h-[300px] left-10 top-16 w-[300px] opacity-25" />
          <div className="absolute bg-[#00a7e1] blur-[50px] filter h-[300px] right-10 top-16 w-[300px] opacity-25" />
          
          {/* Main content container */}
          <div className="relative w-full h-[600px] bg-[#101820] overflow-hidden rounded-lg border border-white/10 shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src={eventBackgroundImage} 
                alt="OWASP Global AppSec Background" 
                fill
                className="object-cover"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-row">
              {/* Left side - Main content */}
              <div className="flex-1 flex flex-col justify-between p-16">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="font-['Barlow'] font-medium text-[#ffb81b] text-[56px] leading-[56px] tracking-[-1.12px]">
                        3-7
                      </div>
                      <div className="flex flex-col font-['Poppins'] text-white text-base">
                        <div className="leading-5 font-semibold">NOV</div>
                        <div className="leading-5 opacity-90">2025</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <h2 className="font-['Barlow'] font-medium text-white text-[56px] leading-[56px] tracking-[-1.12px]">
                        OWASP 2025
                      </h2>
                      <h2 className="font-['Barlow'] font-medium text-white text-[56px] leading-[56px] tracking-[-1.12px]">
                        Global AppSec USA
                      </h2>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="relative size-6">
                        <Image src={markerIcon} alt="" width={24} height={24} className="filter brightness-0 invert opacity-90" />
                      </div>
                      <div className="font-['Barlow'] font-medium text-white text-[24px] leading-7 tracking-[-0.48px]">
                        Washington, DC
                      </div>
                    </div>
                  </div>
                  
                  <p className="font-['Poppins'] text-[#e5e5e5] text-lg leading-7 tracking-[-0.36px] max-w-2xl">
                    Join 800+ security professionals from November 3–7, 2025, at the Marriott Marquis for a dynamic week of learning, networking, and inspiration. Explore six expert-led tracks—from OWASP Projects to builder, breaker, defender, and more.
                  </p>
                </div>
                
                <div className="flex flex-row gap-4 items-start">
                  <Button text="Register Now" variant="primary" size="56" className="min-w-[180px] shadow-lg" />
                  <Button text="More Info" variant="ghost-white" size="56" className="min-w-[180px]" />
                </div>
              </div>
              
              {/* Right side - Early bird banner */}
              <div className="flex flex-col justify-start items-end p-16">
                <div className="bg-[#00a7e1] flex items-center gap-3 px-5 py-3 rounded-sm shadow-lg">
                  <div className="relative size-5">
                    <Image src={megaphoneIcon} alt="" width={20} height={20} className="filter brightness-0 invert" />
                  </div>
                  <div className="font-['Poppins'] font-medium text-white text-base">
                    Early bird pricing ends soon!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 