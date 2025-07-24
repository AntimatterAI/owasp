'use client';

import React, { Suspense, useMemo } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Search from '@/components/Search';
import ProjectsHero from '@/components/ProjectsHero';
import PoweringOpenSourceSection from '@/components/PoweringOpenSourceSection';
import WhoShouldStartSection from '@/components/WhoShouldStartSection';
import SDLCMappingSection from '@/components/SDLCMappingSection';
import ProjectInventorySection from '@/components/ProjectInventorySection';
import FinalCTASection from '@/components/FinalCTASection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function ProjectsContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ProjectsHero />

      {/* Powering Open Source Security Section */}
      <PoweringOpenSourceSection />

      {/* Who Should Start Section */}
      <WhoShouldStartSection />

      {/* SDLC Mapping Section */}
      <SDLCMappingSection />

      {/* Project Inventory Section */}
      <ProjectInventorySection />

      {/* Final CTA Section */}
      <FinalCTASection />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#003594] mx-auto mb-4"></div>
            <p className="text-[#757575]">Loading projects...</p>
          </div>
        </div>
      }>
        <ProjectsContent />
      </Suspense>
      <Footer />
    </div>
  );
} 