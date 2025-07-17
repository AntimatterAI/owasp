'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
        <div className="box-border flex flex-col gap-8 items-start justify-start px-[120px] py-32 relative w-full">
          <div className="relative w-full">
            <div className="flex flex-col items-center justify-center relative w-full">
              <div className="box-border flex flex-col gap-20 items-center justify-center px-16 py-0 relative w-full max-w-[1440px]">
                <div className="box-border flex flex-col gap-8 items-center justify-center p-0 relative w-full">
                  <div className="box-border flex flex-col gap-6 items-center justify-center p-0 relative w-full">
                    <h1 className="font-['Barlow'] font-medium text-[64px] text-white text-center tracking-[-1.28px] leading-[64px]">
                      Explore the World of
                    </h1>
                    <div className="flex flex-row gap-4 items-center justify-center">
                      <h1 className="font-['Barlow'] font-medium text-[64px] text-white tracking-[-1.28px] leading-[64px]">
                        Cyber
                      </h1>
                      <div className="overflow-clip relative size-12 animate-pulse">
                        <Image src={pulseIcon} alt="Pulse Icon" width={48} height={48} className="filter brightness-110" />
                      </div>
                      <h1 className="font-['Barlow'] font-medium text-[64px] text-white tracking-[-1.28px] leading-[64px]">
                        Security
                      </h1>
                    </div>
                  </div>
                  <p className="font-['Poppins'] text-[#f4f4f4] text-lg text-center tracking-[-0.32px] leading-7 max-w-[900px]">
                    Empowering a global community to build secure software through open-source tools,
                    expert education, and collaborative innovation — free for everyone, everywhere.
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <button 
                    onClick={handleJoinCommunity}
                    className="h-14 px-8 border-2 border-[#757575] text-white font-['Poppins'] font-semibold text-base hover:bg-white/10 hover:border-white/60 transition-all duration-300 rounded-sm cursor-pointer"
                  >
                    Join the Community
                  </button>
                  <button 
                    onClick={handleSecureMyApp}
                    className="h-14 px-8 bg-[#003594] text-white font-['Poppins'] font-semibold text-base hover:bg-[#004bbb] transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    Secure My App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 