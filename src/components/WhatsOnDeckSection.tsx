import Image from 'next/image';

const checkIcon = "/images/icons/check.svg";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => (
  <div className="bg-gradient-to-b from-[#000000] from-[31.806%] to-[#13346d] h-[200px] w-80 p-6 flex flex-col justify-between relative group hover:shadow-lg transition-all duration-300 hover:scale-105">
    <div className="relative size-6 shrink-0">
      <Image 
        src={checkIcon} 
        alt="Check" 
        width={24} 
        height={24} 
        className="filter brightness-0 invert opacity-90" 
      />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="font-['Barlow'] font-medium text-white text-[20px] leading-6 tracking-[-0.4px]">
        {title}
      </h3>
      <p className="font-['Poppins'] text-[#d7d7d7] text-sm leading-5">
        {description}
      </p>
    </div>
  </div>
);

export default function WhatsOnDeckSection() {
  const projects = [
    {
      title: "Juice Shop",
      description: "A globally-used, intentionally insecure web app for security training."
    },
    {
      title: "Nettacker",
      description: "A fast, automated network scanner built for vulnerability detection."
    },
    {
      title: "Offensive Web Testing Framework",
      description: "A smart framework for streamlined penetration testing."
    },
    {
      title: "Bug Logging Tool (BLT)",
      description: "A next-gen bug tracker focused on gamification to incentivize bug and security reporting."
    },
    {
      title: "Nest",
      description: "Core infrastructure to power and enable the OWASP projects and contributors ecosystem."
    },
    {
      title: "PyGoat",
      description: "A Python-based sandbox for learning and exposing security flaws in modern stacks."
    },
    {
      title: "OpenCRE",
      description: "A collaborative cybersecurity knowledge base & reference system."
    }
  ];

  return (
    <div className="bg-white relative w-full">
      <div className="flex flex-col items-center relative w-full">
        <div className="box-border flex flex-col gap-16 items-center justify-start px-[120px] py-20 relative w-full max-w-[1440px]">
          <div className="box-border flex flex-col gap-12 items-center justify-start p-0 relative w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center p-0 relative w-full">
              <div className="flex flex-col items-center justify-center relative w-full">
                <div className="box-border flex flex-col gap-2 items-center justify-center p-0 relative w-full">
                  <div className="font-['Poppins'] font-semibold text-[#00a7e1] text-base leading-6 tracking-[-0.32px]">
                    GSoC 2025
                  </div>
                  <h2 className="font-['Barlow'] font-medium text-[#101820] text-[48px] leading-[48px] tracking-[-0.96px] text-center">
                    What's on Deck?
                  </h2>
                </div>
              </div>
              <p className="font-['Poppins'] text-[#757575] text-base leading-6 tracking-[-0.32px] text-center max-w-2xl">
                Contributors will get hands-on experience improving and expanding some of OWASP's most vital tools:
              </p>
            </div>
            
            <div className="box-border flex flex-col gap-6 items-center justify-start p-0 relative w-full">
              {/* Row 1 - 2 cards centered */}
              <div className="box-border flex flex-row gap-6 items-center justify-center p-0 relative w-full">
                <ProjectCard {...projects[0]} />
                <ProjectCard {...projects[1]} />
              </div>
              
              {/* Row 2 - 3 cards */}
              <div className="box-border flex flex-row gap-6 items-center justify-center p-0 relative w-full">
                <ProjectCard {...projects[2]} />
                <ProjectCard {...projects[3]} />
                <ProjectCard {...projects[4]} />
              </div>
              
              {/* Row 3 - 2 cards centered */}
              <div className="box-border flex flex-row gap-6 items-center justify-center p-0 relative w-full">
                <ProjectCard {...projects[5]} />
                <ProjectCard {...projects[6]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 