import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsHero() {
  return (
    <div className="bg-[#101820] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#101820] via-[#1a2332] to-[#003594] opacity-60" />
      
      {/* Centered container */}
      <div className="max-w-[1440px] mx-auto px-[120px] py-20 relative">
        {/* Ray Background Element */}
        <div
          className="absolute h-[402px] top-0 w-[480px] pointer-events-none"
          data-name="Ray"
          style={{ left: "calc(25% + 120px)" }}
        >
          <div className="absolute bottom-[-49.751%] left-[-124.166%] right-[-123.939%] top-[-218.905%]">
            <Image src="/images/ray.svg" alt="" fill className="block max-w-none opacity-40" />
          </div>
        </div>

        <div
          className="flex flex-col gap-20 items-center justify-center relative z-10"
          data-name="Container"
        >
          <div className="flex flex-col gap-12 items-center justify-start w-full">
            <div className="flex flex-col gap-6 items-center justify-start px-60 py-0 w-full">
              <div
                className="relative shrink-0 w-12 h-12"
                data-name="Logo"
              >
                <Image src="/images/logos/owasp-logo-small-white.svg" alt="OWASP Logo" fill />
              </div>
              <h1 className="font-['Barlow'] font-medium text-[64px] text-white text-center leading-[64px] tracking-[-1.28px]">
                Projects for Good
              </h1>
              <p className="font-['Poppins'] text-[#f4f4f4] text-[16px] text-center leading-[24px] tracking-[-0.32px] max-w-3xl">
                We are a community of developers, technologists and evangelists
                improving the security of software. The OWASP Foundation gives
                aspiring open source projects a platform to improve the security
                of software with:
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center">
              <Link href="/projects#contribute" className="box-border flex flex-row gap-10 h-14 items-center justify-center px-8 py-0 border border-[#757575] hover:border-white transition-colors">
                <span className="font-['Poppins'] font-semibold text-[16px] text-white text-center leading-[24px] tracking-[-0.32px]">
                  Contribute to Projects
                </span>
              </Link>
              <Link href="/submit-project" className="bg-[#003594] hover:bg-[#004bbb] transition-colors flex flex-row gap-10 h-14 items-center justify-center px-8 py-0 w-[225px]">
                <span className="font-['Poppins'] font-semibold text-[16px] text-white text-center leading-[24px] tracking-[-0.32px]">
                  Start New Project
                </span>
              </Link>
            </div>
          </div>
          
          {/* Images section matching Figma layout */}
          <div className="flex flex-row gap-4 items-start justify-center w-full">
            {/* Large left image - Juice Shop presentation */}
            <div className="flex-1 h-80 relative">
              <div className="h-80 overflow-hidden relative w-full rounded-lg">
                <div
                  className="absolute bg-center bg-cover bg-no-repeat h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full min-w-full"
                  style={{
                    backgroundImage: `url('/images/events/hero-main.png')`,
                  }}
                />
              </div>
              <div className="absolute border-[#101820] border-[6px] border-solid inset-[-6px] pointer-events-none rounded-lg" />
            </div>
            
            {/* Right side grid - 4 smaller images */}
            <div className="flex-1 flex flex-col gap-4 h-80">
              <div className="flex flex-row gap-4 flex-1">
                {/* Top left - Group meeting/conference */}
                <div
                  className="flex-1 bg-center bg-cover bg-no-repeat h-full rounded-lg"
                  style={{ backgroundImage: `url('/images/events/hero-top-left.png')` }}
                />
                {/* Top right - Person working on laptop */}
                <div
                  className="flex-1 bg-center bg-cover bg-no-repeat h-full rounded-lg"
                  style={{ backgroundImage: `url('/images/events/hero-top-right.png')` }}
                />
              </div>
              <div className="flex flex-row gap-4 flex-1">
                {/* Bottom left - Documents/wireframes on table */}
                <div
                  className="flex-1 bg-center bg-cover bg-no-repeat h-full rounded-lg"
                  style={{ backgroundImage: `url('/images/events/hero-bottom-left.png')` }}
                />
                {/* Bottom right - Silhouettes at event */}
                <div
                  className="flex-1 bg-center bg-cover bg-no-repeat h-full rounded-lg"
                  style={{ backgroundImage: `url('/images/events/hero-bottom-right.png')` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 