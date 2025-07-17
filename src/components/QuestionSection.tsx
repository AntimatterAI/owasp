import Image from 'next/image';
import Button from './Button';

export default function QuestionSection() {
  return (
    <div className="bg-[#f1f6fe] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[120px] py-16 relative w-full max-w-[1440px]">
          <div className="bg-gradient-to-b from-[#000000] from-[31.806%] relative shrink-0 to-[#13346d] w-full">
            <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-16 items-center justify-center p-[64px] relative w-full">
                <div className="absolute h-[480.094px] top-[-150.26px] translate-x-[-50%] w-[480px]" style={{ left: "calc(50% - 0.457031px)" }}>
                  <Image src="/images/logos/owasp-logo-bg.svg" alt="" width={480} height={480} className="block max-w-none size-full opacity-20" />
                </div>
                <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center p-0 relative shrink-0 w-full z-10">
                  <div className="h-10 relative shrink-0 w-[41px]">
                    <Image src="/images/logos/owasp-logo-small.svg" alt="OWASP Logo" width={41} height={40} className="block max-w-none size-full" />
                  </div>
                  <div className="font-['Barlow'] font-medium text-[48px] text-[#ffffff] text-center tracking-[-0.96px] leading-[48px]">
                    <span>Have an </span>
                    <span className="text-[#00a7e1]">Idea</span>
                    <span> for a Project?</span>
                  </div>
                  <div className="font-['Poppins'] text-[#ffffff] text-[16px] text-center tracking-[-0.32px] leading-[24px] max-w-2xl">
                    Take advantage of our resources and let it grow with OWASP. Join our community of developers building the future of application security.
                  </div>
                </div>
                <Button text="Start a Project" variant="primary" size="56" className="z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 