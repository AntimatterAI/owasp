'use client'

import Image from 'next/image';
import Link from 'next/link';

// Local images
const logo = "/images/logos/owasp-logo.svg";
const searchIcon = "/images/icons/search.svg";
const chevronIcon = "/images/icons/chevron.svg";

export default function Header() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[#101820] h-20 sticky top-0 w-full z-50 border-b border-white/10">
      <div className="flex flex-row items-center h-full">
        <div className="box-border flex flex-row h-20 items-center justify-between px-16 py-0 relative w-full max-w-[1440px] mx-auto">
          <Link href="/" className="h-10 relative shrink-0 w-[132.894px]">
            <Image src={logo} alt="OWASP Logo" fill className="object-contain" />
          </Link>
          
          <div className="absolute box-border flex flex-row gap-10 items-center justify-start p-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="box-border flex flex-row gap-1 h-10 items-center justify-start p-0 relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="font-['Poppins'] text-white text-sm text-center">
                Projects
              </div>
              <div className="flex h-5 items-center justify-center relative shrink-0 w-5">
                <div className="relative size-3">
                  <Image src={chevronIcon} alt="" width={12} height={12} className="opacity-60 rotate-90" />
                </div>
              </div>
            </div>
            <div className="box-border flex flex-row gap-1 h-10 items-center justify-start p-0 relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="font-['Poppins'] text-white text-sm text-center">
                Chapters
              </div>
              <div className="flex h-5 items-center justify-center relative shrink-0 w-5">
                <div className="relative size-3">
                  <Image src={chevronIcon} alt="" width={12} height={12} className="opacity-60 rotate-90" />
                </div>
              </div>
            </div>
            <div className="box-border flex flex-row gap-1 h-10 items-center justify-start p-0 relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="font-['Poppins'] text-white text-sm text-center">
                Events
              </div>
              <div className="flex h-5 items-center justify-center relative shrink-0 w-5">
                <div className="relative size-3">
                  <Image src={chevronIcon} alt="" width={12} height={12} className="opacity-60 rotate-90" />
                </div>
              </div>
            </div>
            <div className="box-border flex flex-row gap-1 h-10 items-center justify-start p-0 relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="font-['Poppins'] text-white text-sm text-center">
                About
              </div>
              <div className="flex h-5 items-center justify-center relative shrink-0 w-5">
                <div className="relative size-3">
                  <Image src={chevronIcon} alt="" width={12} height={12} className="opacity-60 rotate-90" />
                </div>
              </div>
            </div>
            <button className="flex items-center justify-center relative shrink-0 size-10 hover:opacity-100 transition-opacity opacity-80">
              <div className="relative size-6">
                <Image src={searchIcon} alt="Search" width={24} height={24} />
              </div>
            </button>
          </div>
          
          <div className="box-border flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
            <button className="border-2 border-[#757575] h-10 px-4 text-white font-['Poppins'] font-semibold text-sm hover:border-white/60 hover:bg-white/10 transition-all duration-300 rounded-sm">
              Join the Community
            </button>
            <button className="bg-[#003594] h-10 px-4 text-white font-['Poppins'] font-semibold text-sm hover:bg-[#004bbb] transition-all duration-300 rounded-sm shadow-sm">
              Secure My App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 