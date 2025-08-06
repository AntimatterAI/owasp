import Image from 'next/image';
import Link from 'next/link';

interface ButtonProps {
  text?: string;
  type?: "Primary" | "Ghost White" | "Ghost Dark" | "Light Blue";
  size?: "40" | "48" | "56";
}

function Button({
  text = "Join Now",
  type = "Primary", 
  size = "40",
}: ButtonProps) {
  if (type === "Ghost Dark" && size === "48") {
    return (
      <div className="flex flex-row gap-10 items-center justify-center px-6 py-0 relative h-12 border border-[#757575] border-solid">
        <div className="font-['Poppins'] font-semibold text-[#101820] text-[14px] text-center text-nowrap tracking-[-0.28px] leading-[20px]">
          {text}
        </div>
      </div>
    );
  }
  return null;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageStyle?: React.CSSProperties;
  imageContainerClass?: string;
}

function ProjectCard({ title, description, image, imageStyle, imageContainerClass }: ProjectCardProps) {
  return (
    <div className="bg-[#ffffff] flex flex-col gap-3 p-[12px] w-full">
      <div className={`bg-[#030303] flex flex-col gap-6 h-40 items-center justify-center p-0 w-full ${imageContainerClass || ''}`}>
        <div 
          className="bg-center bg-cover bg-no-repeat shrink-0"
          style={{ 
            backgroundImage: `url('${image}')`,
            ...imageStyle
          }}
        />
      </div>
      <div className="flex flex-col gap-4 items-start justify-center p-[16px] w-full">
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="flex flex-row gap-0.5 items-center justify-start w-full">
            <div className="font-['Barlow'] font-medium text-[#003594] text-[20px] text-left text-nowrap tracking-[-0.4px] leading-[24px] flex-1">
              {title}
            </div>
            <div className="relative size-6">
              <div className="absolute bottom-[1.384%] flex items-center justify-center left-[1.386%] right-[1.383%] top-[1.384%]">
                <div className="flex-none h-[15.001px] rotate-[315deg] w-[18.001px]">
                  <Image src="/images/icons/arrow-up-right.svg" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="font-['Poppins'] text-[#757575] text-[14px] text-left w-full leading-[20px]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectInventorySection() {
  return (
    <div className="bg-[#f1f6fe]">
      {/* Centered container with proper spacing */}
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[120px] py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-16 items-center justify-start w-full">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-end justify-between w-full">
            <div className="flex-1 flex flex-col gap-6 lg:gap-8 items-start justify-start">
              <div className="font-['Barlow'] font-medium text-[#101820] text-[32px] sm:text-[40px] lg:text-[56px] text-left lg:text-center tracking-[-0.64px] lg:tracking-[-1.12px] leading-tight lg:leading-[56px]">
                OWASP Project Inventory
              </div>
              <div className="font-['Poppins'] text-[#757575] text-sm sm:text-[16px] text-left tracking-[-0.32px] leading-[20px] sm:leading-[24px] w-full">
                Explore all OWASP tools, documentation, and code libraries, organized into three project tiers:
              </div>
            </div>
            <div className="flex flex-row gap-10 h-12 items-center justify-start lg:justify-center px-6 py-0 shrink-0">
              <Button text="See All Projects" type="Ghost Dark" size="48" />
            </div>
          </div>

          {/* Three Tier Cards */}
          <div className="bg-[#ffffff] flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-start p-4 sm:p-6 lg:p-8 w-full rounded-lg">
            {/* Flagship Projects */}
            <div className="w-full lg:flex-1 flex flex-col gap-4 lg:gap-6 items-start justify-start">
              <div className="bg-[#d9e5fa] flex flex-row gap-2.5 items-center justify-center p-[12px]">
                <div className="relative size-6">
                  <Image src="/images/icons/flag-icon.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start text-left w-full">
                <div className="font-['Barlow'] font-medium text-[#101820] text-[24px] tracking-[-0.48px] w-full leading-[32px]">
                  Flagship Projects
                </div>
                <div className="font-['Poppins'] text-[#757575] text-[14px] w-full leading-[20px]">
                  Proven, high-impact tools with strategic value to application security.
                </div>
              </div>
            </div>

            <div className="bg-[#d7d7d7] w-full lg:w-px h-px lg:h-auto lg:self-stretch" />

            {/* Production Projects */}
            <div className="w-full lg:flex-1 flex flex-col gap-4 lg:gap-6 items-start justify-start">
              <div className="bg-[#d9e5fa] flex flex-row gap-2.5 items-center justify-center p-[12px]">
                <div className="relative size-6">
                  <Image src="/images/icons/factory-icon.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start text-left w-full">
                <div className="font-['Barlow'] font-medium text-[#101820] text-[24px] tracking-[-0.48px] w-full leading-[32px]">
                  Production Projects
                </div>
                <div className="font-['Poppins'] text-[#757575] text-[14px] w-full leading-[20px]">
                  Mature, stable projects ready for use in real-world environments.
                </div>
              </div>
            </div>

            <div className="bg-[#d7d7d7] w-full lg:w-px h-px lg:h-auto lg:self-stretch" />

            {/* Other Projects */}
            <div className="w-full lg:flex-1 flex flex-col gap-4 lg:gap-6 items-start justify-start">
              <div className="bg-[#d9e5fa] flex flex-row gap-2.5 items-center justify-center p-[12px]">
                <div className="relative size-6">
                  <Image src="/images/icons/egg-icon.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start text-left w-full">
                <div className="font-['Barlow'] font-medium text-[#101820] text-[24px] tracking-[-0.48px] w-full leading-[32px]">
                  Other Projects
                </div>
                <div className="font-['Poppins'] text-[#757575] text-[14px] w-full leading-[20px]">
                  Early-stage Lab and Incubator projects exploring new ideas and solutions.{' '}
                  <span className="underline text-[#003594]">Explore</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filter and Projects Section */}
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            {/* Filter Tabs */}
            <div className="bg-[#f4f4f4] flex flex-row gap-2 items-start justify-start overflow-hidden p-[6px]">
              <div className="bg-[#ffffff] flex flex-row gap-2 items-start justify-center pl-3 pr-4 py-2 border border-[#d9e5fa] border-solid shadow-[0px_2px_4px_0px_rgba(0,0,0,0.16)]">
                <div className="relative size-6">
                  <Image src="/images/icons/flag-icon.svg" alt="" fill className="object-contain" />
                </div>
                <div className="font-['Poppins'] text-[#101820] text-[16px] text-left text-nowrap tracking-[-0.32px] leading-[24px]">
                  Flagship Projects
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-center pl-3 pr-4 py-2">
                <div className="relative size-6">
                  <Image src="/images/icons/factory-icon-filter.svg" alt="" fill className="object-contain" />
                </div>
                <div className="font-['Poppins'] text-[#757575] text-[16px] text-left text-nowrap tracking-[-0.32px] leading-[24px]">
                  Production Projects
                </div>
              </div>
            </div>

            {/* Project Cards Row */}
            <div className="flex flex-row gap-8 items-start justify-start w-full">
              <Link href="/projects/asvs">
                <ProjectCard
                  title="OWASP Application Security Verification Standard (ASVS)"
                  description="The OWASP Application Security Verification Standard (ASVS) Project provides a basis for testing web application technical security controls and also provides developers with a list of requirements for secure development."
                  image="/images/asvs-logo.png"
                  imageStyle={{ 
                    height: "80px", 
                    width: "160px", 
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                />
              </Link>
              <ProjectCard
                title="OWASP OWTF"
                description="An OWASP+PTES focused try to unite great tools and make pen testing more efficient, written mostly in Python."
                image="/images/icons/project-owtf.png"
                imageStyle={{ height: "120px", width: "85px" }}
              />
              <ProjectCard
                title="OWASP Dependency Track"
                description="An OWASP+PTES focused try to unite great tools and make pen testing more efficient, written mostly in Python."
                image="/images/icons/project-dependency-track.png"
                imageStyle={{ height: "48px", width: "270px", backgroundSize: "122.38% 257.14%", backgroundPosition: "48.87% 46.36%" }}
              />
            </div>

            {/* Load More Button */}
            <div className="flex flex-row gap-10 h-12 items-center justify-center px-6 py-0">
              <Button text="Load More" type="Ghost Dark" size="48" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 