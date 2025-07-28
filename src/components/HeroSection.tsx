'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ResponsiveContainer from './ResponsiveContainer';

const pulseIcon = "/images/icons/pulse.svg";

export default function HeroSection() {
  const router = useRouter();

  const handleJoinCommunity = () => {
    router.push('/join-community');
  };

  const handleSecureMyApp = () => {
    router.push('/secure-my-app');
  };

  return (
    <div className="bg-[#101820] relative w-full">
      <div className="overflow-clip relative w-full">
        <ResponsiveContainer size="full" className="py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center text-center space-y-8 lg:space-y-20">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="font-['Barlow'] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-white text-center tracking-[-0.64px] sm:tracking-[-0.8px] lg:tracking-[-1.28px] leading-tight lg:leading-[64px]">
                  Explore the World of
                </h1>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center">
                  <h1 className="font-['Barlow'] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-white tracking-[-0.64px] sm:tracking-[-0.8px] lg:tracking-[-1.28px] leading-tight lg:leading-[64px]">
                    Cyber
                  </h1>
                  <div className="overflow-clip relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 animate-pulse">
                    <Image src={pulseIcon} alt="Pulse Icon" fill className="filter brightness-110" />
                  </div>
                  <h1 className="font-['Barlow'] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-white tracking-[-0.64px] sm:tracking-[-0.8px] lg:tracking-[-1.28px] leading-tight lg:leading-[64px]">
                    Security
                  </h1>
                </div>
              </div>
              <p className="font-['Poppins'] text-[#f4f4f4] text-base sm:text-lg text-center tracking-[-0.32px] leading-6 sm:leading-7 max-w-[900px] mx-auto px-4 sm:px-0">
                Empowering a global community to build secure software through open-source tools,
                expert education, and collaborative innovation — free for everyone, everywhere.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
              <button 
                onClick={handleJoinCommunity}
                className="
                  h-12 sm:h-14 px-6 sm:px-8 border-2 border-[#757575] text-white font-['Poppins'] font-semibold text-sm sm:text-base 
                  hover:bg-white/10 hover:border-white/60 transition-all duration-300 rounded-sm cursor-pointer
                  w-full sm:w-auto
                "
              >
                Join the Community
              </button>
              <button 
                onClick={handleSecureMyApp}
                className="
                  h-12 sm:h-14 px-6 sm:px-8 bg-[#003594] text-white font-['Poppins'] font-semibold text-sm sm:text-base 
                  hover:bg-[#004bbb] transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl cursor-pointer
                  w-full sm:w-auto
                "
              >
                Secure My App
              </button>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 