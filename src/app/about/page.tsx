import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function AboutPage() {
  const stats = [
    { number: "275+", label: "Global Chapters" },
    { number: "50k+", label: "Community Members" },
    { number: "200+", label: "Open Source Projects" },
    { number: "20+", label: "Years of Impact" }
  ];

  const values = [
    {
      icon: "/images/icons/check.svg",
      title: "Open",
      description: "Everything at OWASP is radically transparent from our finances to our code."
    },
    {
      icon: "/images/icons/check.svg",
      title: "Innovation",
      description: "We encourage and support innovation and experiments for solutions to software security challenges."
    },
    {
      icon: "/images/icons/check.svg",
      title: "Global",
      description: "Anyone around the world is encouraged to participate in the OWASP community."
    },
    {
      icon: "/images/icons/check.svg",
      title: "Integrity",
      description: "We are honest and truthful in our interactions and outcomes."
    }
  ];

  const leadership = [
    {
      name: "Vandana Verma Sehgal",
      role: "Executive Director",
      image: "/images/events/event-1.png",
      bio: "Leading OWASP's mission to make software security visible and actionable."
    },
    {
      name: "Grant Ongers",
      role: "Global Board Chair",
      image: "/images/events/event-2.png",
      bio: "Driving strategic initiatives and global community engagement."
    },
    {
      name: "Bil Corry",
      role: "Vice Chair",
      image: "/images/events/event-3.png",
      bio: "Supporting board operations and community development."
    },
    {
      name: "Matt Tesauro",
      role: "Treasurer",
      image: "/images/events/event-4.png",
      bio: "Overseeing financial operations and transparency."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#101820] relative">
        <div className="max-w-[1440px] mx-auto px-[120px] py-24">
          <div className="max-w-4xl">
            <h1 className="font-['Barlow'] font-medium text-[56px] text-white leading-[56px] tracking-[-1.12px] mb-6">
              About OWASP
            </h1>
            <p className="font-['Poppins'] text-[#f4f4f4] text-xl leading-8 mb-8">
              The Open Web Application Security Project (OWASP) is a nonprofit foundation that works to improve 
              the security of software. Our mission is to make software security visible, so that individuals 
              and organizations can make informed decisions.
            </p>
            <div className="flex gap-4">
              <Link href="/join-community">
                <Button text="Join Our Mission" variant="light-blue" size="56" />
              </Link>
              <Link href="/annual-report">
                <Button text="Annual Report" variant="ghost-white" size="56" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="text-center mb-16">
          <h2 className="font-['Barlow'] font-medium text-[48px] text-[#101820] leading-[48px] tracking-[-0.96px] mb-6">
            Our Mission
          </h2>
          <p className="font-['Poppins'] text-[#757575] text-lg leading-8 max-w-4xl mx-auto">
            OWASP is a nonprofit foundation that works to improve the security of software. Through community-led 
            open source software projects, hundreds of local chapters worldwide, tens of thousands of members, 
            and leading educational and training conferences, the OWASP Foundation is the source for developers 
            and technologists to secure the web.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-['Barlow'] font-medium text-[56px] text-[#003594] leading-[56px] tracking-[-1.12px] mb-2">
                {stat.number}
              </div>
              <div className="font-['Poppins'] text-[#757575] text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#f8f9fa]">
        <div className="max-w-[1440px] mx-auto px-[120px] py-20">
          <div className="text-center mb-16">
            <h2 className="font-['Barlow'] font-medium text-[48px] text-[#101820] leading-[48px] tracking-[-0.96px] mb-6">
              Our Core Values
            </h2>
            <p className="font-['Poppins'] text-[#757575] text-lg leading-8 max-w-3xl mx-auto">
              These principles guide everything we do at OWASP, from our projects and events to our community interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#003594] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image src={value.icon} alt="" width={24} height={24} className="filter brightness-0 invert" />
                </div>
                <h3 className="font-['Barlow'] font-medium text-[24px] text-[#101820] mb-4">
                  {value.title}
                </h3>
                <p className="font-['Poppins'] text-[#757575] text-sm leading-6">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-['Barlow'] font-medium text-[48px] text-[#101820] leading-[48px] tracking-[-0.96px] mb-6">
              Our Story
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-['Barlow'] font-medium text-[20px] text-[#003594] mb-2">2001 - Founded</h3>
                <p className="font-['Poppins'] text-[#757575] text-base leading-6">
                  OWASP was founded by Mark Curphey to raise awareness about application security and provide 
                  practical guidance to developers and organizations.
                </p>
              </div>
              <div>
                <h3 className="font-['Barlow'] font-medium text-[20px] text-[#003594] mb-2">2003 - First Top 10</h3>
                <p className="font-['Poppins'] text-[#757575] text-base leading-6">
                  The OWASP Top 10 was first released, becoming the de facto standard for web application 
                  security awareness worldwide.
                </p>
              </div>
              <div>
                <h3 className="font-['Barlow'] font-medium text-[20px] text-[#003594] mb-2">2004 - Nonprofit Status</h3>
                <p className="font-['Poppins'] text-[#757575] text-base leading-6">
                  OWASP became a 501(c)(3) nonprofit organization, establishing our commitment to vendor neutrality 
                  and open source principles.
                </p>
              </div>
              <div>
                <h3 className="font-['Barlow'] font-medium text-[20px] text-[#003594] mb-2">Today - Global Impact</h3>
                <p className="font-['Poppins'] text-[#757575] text-base leading-6">
                  With hundreds of projects, thousands of members, and global reach, OWASP continues to lead 
                  the charge in making software security accessible to all.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image src="/images/events/gsoc-1.png" alt="OWASP History" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="bg-[#f8f9fa]">
        <div className="max-w-[1440px] mx-auto px-[120px] py-20">
          <div className="text-center mb-16">
            <h2 className="font-['Barlow'] font-medium text-[48px] text-[#101820] leading-[48px] tracking-[-0.96px] mb-6">
              Leadership Team
            </h2>
            <p className="font-['Poppins'] text-[#757575] text-lg leading-8 max-w-3xl mx-auto">
              Our dedicated team of volunteers and staff members who guide OWASP's mission and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Barlow'] font-medium text-[20px] text-[#101820] mb-1">
                    {leader.name}
                  </h3>
                  <p className="font-['Poppins'] text-[#003594] text-sm font-medium mb-3">
                    {leader.role}
                  </p>
                  <p className="font-['Poppins'] text-[#757575] text-sm leading-6">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="max-w-[1440px] mx-auto px-[120px] py-20">
        <div className="bg-gradient-to-r from-[#003594] to-[#0056d6] rounded-2xl p-16 text-center text-white">
          <h2 className="font-['Barlow'] font-medium text-[48px] leading-[48px] tracking-[-0.96px] mb-6">
            Get Involved
          </h2>
          <p className="font-['Poppins'] text-white/90 text-lg leading-8 mb-12 max-w-3xl mx-auto">
            Join our global community of security professionals, developers, and advocates working together 
            to make the web a safer place for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-['Barlow'] font-medium text-[24px] mb-4">Contribute</h3>
              <p className="font-['Poppins'] text-white/80 text-sm mb-6">
                Help improve our projects, documentation, and tools that millions of developers rely on.
              </p>
              <Button text="Start Contributing" variant="ghost-white" size="40" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-['Barlow'] font-medium text-[24px] mb-4">Join a Chapter</h3>
              <p className="font-['Poppins'] text-white/80 text-sm mb-6">
                Connect with local security professionals and attend events in your area.
              </p>
              <Button text="Find Chapters" variant="ghost-white" size="40" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-['Barlow'] font-medium text-[24px] mb-4">Support Us</h3>
              <p className="font-['Poppins'] text-white/80 text-sm mb-6">
                Help fund our mission through corporate sponsorship or individual donations.
              </p>
              <Button text="Make a Donation" variant="light-blue" size="40" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 