import Image from 'next/image';
import Link from 'next/link';

interface PersonaCardProps {
  icon: string;
  title: string;
}

const PersonaCard = ({ icon, title }: PersonaCardProps) => {
  return (
    <div className="flex flex-row gap-4 items-center justify-start flex-1">
      <div className="bg-[#f1f6fe] flex flex-row gap-2.5 items-center justify-center p-3 w-[60px] h-[60px] flex-shrink-0">
        <div className="relative w-8 h-8">
          <Image src={icon} alt="" fill className="object-contain" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-['Barlow'] font-medium text-[#101820] text-[24px] leading-[32px] tracking-[-0.48px]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default function WhoShouldStartSection() {
  return (
    <div className="bg-white">
      {/* Centered container with proper spacing */}
      <div className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="flex flex-col gap-12 items-center justify-start">
          {/* Main Title */}
          <h2 className="font-['Barlow'] font-medium text-[#101820] text-[48px] leading-[48px] tracking-[-0.96px] w-full text-center">
            Who Should Start an OWASP Project?
          </h2>
          
          {/* Grid Content */}
          <div className="flex flex-col gap-8 w-full">
            {/* First Row */}
            <div className="flex flex-row gap-8 items-start justify-start w-full">
              <PersonaCard
                icon="/images/icons/code.svg"
                title="Application Developers"
              />
              <div className="bg-[#d7d7d7] w-px h-[60px] flex-shrink-0" />
              <PersonaCard
                icon="/images/icons/laptop.svg"
                title="Software Architects"
              />
            </div>
            
            {/* Second Row */}
            <div className="flex flex-row gap-8 items-start justify-start w-full">
              <PersonaCard
                icon="/images/icons/lock-file.svg"
                title="Information Security Authors"
              />
              <div className="bg-[#d7d7d7] w-px h-[60px] flex-shrink-0" />
              <div className="flex flex-row gap-4 items-center justify-start flex-1">
                <div className="bg-[#f1f6fe] flex flex-row gap-2.5 items-center justify-center p-3 w-[60px] h-[60px] flex-shrink-0">
                  <div className="relative w-8 h-8">
                    <Image src="/images/icons/globe-alt.svg" alt="" fill className="object-contain" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-['Barlow'] font-medium text-[#101820] text-[24px] leading-[32px] tracking-[-0.48px]">
                    Those seeking community support<br />for a security idea
                  </h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Text */}
          <p className="font-['Poppins'] text-[#757575] text-[16px] leading-[24px] tracking-[-0.32px] w-full text-center">
            You can find more information about project levels, promotion criteria, and best practices at the{' '}
            <Link href="/project-handbook" className="text-[#003594] hover:underline">
              Project Committee
            </Link>
            {' '}page.
          </p>
        </div>
      </div>
    </div>
  );
} 