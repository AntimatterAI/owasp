import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function Footer() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full">
      <div className="bg-[#151515] box-border content-stretch flex flex-col gap-10 items-center justify-center px-[120px] py-16 relative shrink-0 w-full">
        <div className="font-['Barlow'] font-medium text-[32px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.64px] leading-[40px]">
          Corporate Supporters
        </div>
        <div className="box-border content-stretch flex flex-col gap-10 items-center justify-center p-0 relative shrink-0 w-full max-w-[1440px]">
          <div className="box-border content-stretch flex flex-row gap-16 items-center justify-center p-0 relative shrink-0 flex-wrap">
            <div className="h-8 relative shrink-0 w-[130px]">
              <Image src="/images/sponsors/adobe-logo.svg" alt="Adobe" width={130} height={32} className="block max-w-none size-full" />
            </div>
            <div className="h-8 relative shrink-0 w-[168.726px]">
              <Image src="/images/sponsors/united-airlines-logo.svg" alt="United Airlines" width={169} height={32} className="block max-w-none size-full" />
            </div>
            <div className="h-12 overflow-clip relative shrink-0 w-[68.267px]">
              <Image src="/images/sponsors/salesforce-logo.svg" alt="Salesforce" width={68} height={48} className="block max-w-none size-full" />
            </div>
            <div className="h-8 overflow-clip relative shrink-0 w-[79.858px]">
              <Image src="/images/sponsors/bdo-logo.svg" alt="BDO" width={80} height={32} className="block max-w-none size-full" />
            </div>
            <div className="h-6 overflow-clip relative shrink-0 w-[155.496px]">
              <Image src="/images/sponsors/backslash-logo.svg" alt="Backslash" width={156} height={24} className="block max-w-none size-full" />
            </div>
            <div className="h-8 overflow-clip relative shrink-0 w-[107.527px]">
              <Image src="/images/sponsors/rakuten-logo.svg" alt="Rakuten" width={108} height={32} className="block max-w-none size-full" />
            </div>
            <div className="h-10 overflow-clip relative shrink-0 w-[189.6px]">
              <Image src="/images/sponsors/checkpoint-logo-1.svg" alt="Check Point" width={190} height={40} className="block max-w-none size-full" />
            </div>
            <div className="h-6 relative shrink-0 w-[193.551px]">
              <Image src="/images/sponsors/atlassian-logo.svg" alt="Atlassian" width={194} height={24} className="block max-w-none size-full" />
            </div>
          </div>
                      <Link href="/corporate-support">
              <Button text="Become a Corporate Supporter" variant="ghost-white" size="48" />
            </Link>
        </div>
      </div>
      <div className="bg-[#101820] box-border content-stretch flex flex-col gap-16 items-center justify-center px-[120px] py-16 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row gap-12 items-start justify-start p-0 relative shrink-0 w-full max-w-[1440px]">
          <div className="bg-[#151515] box-border content-stretch flex flex-col items-start justify-between p-[32px] relative shrink-0 w-[480px] h-[360px]">
            <div className="h-16 relative shrink-0 w-[212.63px]">
              <Image src="/images/logos/owasp-logo-footer.svg" alt="OWASP Logo" width={213} height={64} className="block max-w-none size-full" />
            </div>
            <div className="font-['Poppins'] text-[#ffffff] text-[14px] leading-[20px]">
              OWASP is a nonprofit foundation improving software security through open-source projects, global communities, and education. All resources are free and open to everyone.
            </div>
          </div>
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px p-0 relative self-stretch shrink-0">
            <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                <div className="font-['Poppins'] text-[16px] text-[rgba(244,244,244,0.5)] tracking-[-0.32px] leading-[24px]">
                  Quick Links
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  Projects
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  Chapters
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  Events
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  About
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  Visit Store
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                <div className="font-['Poppins'] text-[16px] text-[rgba(244,244,244,0.5)] tracking-[-0.32px] leading-[24px]">
                  Quick Links
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  Privacy
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  Sitemap
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  Contact
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                <div className="font-['Poppins'] text-[16px] text-[rgba(244,244,244,0.5)] tracking-[-0.32px] leading-[24px]">
                  Socials
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  LinkedIn
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  GitHub
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  X (Twitter)
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  Facebook
                </div>
                <div className="font-['Barlow'] font-medium text-[#ffffff] text-[24px] tracking-[-0.48px] leading-[32px] cursor-pointer hover:text-[#ffb81b] transition-colors">
                  YouTube
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
              <button className="bg-[#ffb81b] h-12 px-6 font-['Poppins'] font-semibold text-[#101820] text-[14px] tracking-[-0.28px] leading-[20px] hover:bg-[#ffc947] transition-colors rounded-sm">
                Make a Donation
              </button>
              <button className="border-2 border-[#ffffff] h-12 px-6 font-['Poppins'] font-semibold text-[#ffffff] text-[14px] tracking-[-0.28px] leading-[20px] hover:bg-white/10 transition-colors rounded-sm">
                Join Now
              </button>
            </div>
          </div>
        </div>
        <div className="box-border content-stretch flex flex-row gap-16 items-end justify-center p-0 relative shrink-0 text-[#d7d7d7] text-[12px] tracking-[-0.24px] w-full max-w-[1440px]">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 font-['Poppins'] leading-[16px]">
            OWASP, the OWASP logo, and Global AppSec are registered trademarks and AppSec Days, AppSec California, AppSec Cali, SnowFROC, OWASP Boston Application Security Conference, and LASCON are trademarks of the OWASP Foundation, Inc.
          </div>
          <div className="relative shrink-0 font-['Poppins'] leading-[16px]">
            © 2025, OWASP Foundation Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
} 