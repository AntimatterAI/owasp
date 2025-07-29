'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TunisiaChapterPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#003594] to-[#0056b3] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-6xl mr-4">🇹🇳</span>
                <Image
                  src="/images/logos/owasp-logo-small-white.svg"
                  alt="OWASP Logo"
                  width={80}
                  height={80}
                  className="mr-4"
                />
              </div>
              <h1 className="text-5xl font-bold mb-4">OWASP Tunisia</h1>
              <p className="text-xl mb-6">Tunisia</p>
              <p className="text-lg max-w-4xl mx-auto mb-8">
                North Africa's cybersecurity excellence hub. OWASP Tunisia stands as a regional bridge between 
                Africa and Europe, driving cutting-edge security research, government partnerships, and 
                community-driven innovation across the MENA region.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4">🌉 Regional Bridge</h3>
                <p className="text-lg">Connecting Africa and Europe through cybersecurity excellence and cross-border collaboration</p>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://www.meetup.com/fr-FR/owasp-tunis-meetup-group/" className="bg-white text-[#003594] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Join Our Meetup
                </a>
                <a href="https://owasp.org/www-chapter-tunisia/" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#003594] transition-colors">
                  Official Chapter Page
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">About OWASP Tunisia</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-lg text-gray-700">
                The Open Worldwide Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software. All of our projects, tools, documents, forums, and chapters are free and open to anyone interested in improving application security.
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Follow chapter news on <a href="#" className="text-[#003594] underline">Facebook</a>, <a href="#" className="text-[#003594] underline">Linkedin</a>, <a href="#" className="text-[#003594] underline">Youtube</a> and <a href="https://www.meetup.com/fr-FR/owasp-tunis-meetup-group/" className="text-[#003594] underline">Meetup</a>. We schedule our meetings on the <a href="https://www.meetup.com/fr-FR/owasp-tunis-meetup-group/" className="text-[#003594] underline">Meetup</a>.
            </p>
          </section>

          {/* Next Event */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">NEXT EVENT</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#003594] mb-4">Co-organizer: OWASP Algiers chapter!- I[OT]Security 25th October 2024 at 7pm UTC+1 on OWASP Tunisia youtube</h3>
            </div>
          </section>

          {/* Previous Event */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Previous EVENT - 5 September 2024 at 3pm UTC+1</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#003594] mb-4">Topic: "GraphQL Vulnerabilities in the Wild: A Hands-On Workshop with OWASP TOP 10 Insights"</h3>
              <p className="text-lg text-gray-700">Speaker: Antoine Carossio, Co-founder & CTO of Escape</p>
            </div>
          </section>

          {/* Past Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">PAST EVENTS</h2>
            
            <div className="space-y-8">
              {/* April 2024 Event */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594] mb-2">PAST EVENT- 26 April 2024 8 pm (UTC+1) !!</h3>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Topic: AI: The New Attack Surface and Strategies for Securing It</h4>
                <p className="text-gray-700 mb-2">Speaker: Jeff Crume. IBM Distinguished Engineer and Master Inventor with more than 40 years' experience in the IT industry.</p>
                <p className="text-sm text-gray-600">Scheduled via Meetup</p>
              </div>

              {/* March 2024 Event */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594] mb-2">PAST EVENT- 23 March 2024 11h30 (GMT+1) !! Scheduled via Meetup</h3>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Topic: Safeguarding your software supply chain: A deep Dive into SCA With OWASP Dependency Check</h4>
                <p className="text-gray-700 mb-2">Speaker: Aymen Touzi. Cybersecurity and Devops Expert. Sofrecom Tunisia</p>
                <a href="https://www.meetup.com/fr-FR/owasp-tunis-meetup-group/events/299907061/" className="text-[#003594] underline">https://www.meetup.com/fr-FR/owasp-tunis-meetup-group/events/299907061/</a>
              </div>

              {/* September 2023 Event */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594] mb-2">PAST EVENT- 1 September 2023 7PM(GMT+1) !! Scheduled via Meetup</h3>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Workshops on</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>"Exploring LLM Vulnerabilities with OWASP TOP 10 for LLMs" by Alyssa Berriche : Lead Cyber Threat Intelligence Analyst.</li>
                  <li>"Code Red: Deciphering the Depths of Active Directory Security" by Foued saidi: Technical Director @Securinets ISI Club. Top HacktheBox Tunisia, Top60 HacktheBox WorldWide</li>
                </ul>
              </div>

              {/* April 2023 Event */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594] mb-2">Previous EVENT- 28 April 2023 7PM(GMT+1) Workshop on Small Coding Mistakes , Big Security Risks</h3>
                <p className="text-gray-700">Speaker: Mohamed Adib Boukthir</p>
                <a href="#" className="text-[#003594] underline">View Youtube Video</a>
              </div>
            </div>
          </section>

          {/* Meeting Info */}
          <section className="mb-16">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Our meetings are open to the public, and you do not need to be a member to attend. Please do consider joining OWASP if you find our community, projects, and meetings valuable, or sponsoring this chapter.
              </p>
            </div>
          </section>

          {/* Meeting Supporters */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Meeting Supporters</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                The following is the list of organisations who have generously provided us with space for OWASP Tunisia chapter meetings. Thank you for your contribution.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                The following is the list of organisations/Foundations who have generously help us to communicate about OWASP projects and OWASP Tunisia chapter activities. Thank you for your contribution.
              </p>
            </div>
          </section>

          {/* Among Past Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Among our PAST EVENTS (See PASTEVENTS)!</h2>
            
            <div className="space-y-8">
              {/* Mobile App Event */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594] mb-2">Mobile app Pentest and Security</h3>
                <p className="text-gray-700 mb-2">OUR Speaker ! Ahmed Abdallah, Senior Solutions Architect and Cyber Security Consultant. OWASP Dubai Chapter Leader</p>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Securing Mobile Apps with the OWASP MASVS Standard. Our Journey to v2.0. [NEW NEW!!]</h4>
                <p className="text-gray-700 mb-2">With our Honorable Guest ! Carlos Holguera Mobile security research engineer. NowSecure . Project Leader @OWASP Mobile Security Project</p>
                <p className="text-sm text-gray-600">Join us via https://www.meetup.com/fr-FR/owasp-tunis-meetup-group/events/286694349/</p>
              </div>

              {/* NACS Meeting */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594] mb-2">OWASP Tunisia Chapter Local Meeting at NACS (National Agency of Computer Security) 20 October 2021!</h3>
                <p className="text-sm text-gray-600">View the video on our Youtube Channel</p>
              </div>

              {/* SAST Event */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594] mb-2">Hands-On - Static Analysis Security Testing (SAST) in CI/CD - 20 May 2021 at 8 PM UTC+1</h3>
                <h4 className="text-lg font-medium text-gray-900 mb-2">OUR GUEST: Raouf Mnif -Devops Architect at Baaz</h4>
                <p className="text-gray-700 mb-2">Raouf Mnif Spent 10 years developing the skills to increase velocity, reliability, and quality with a high focus on security. Good experience with AWS, Docker, Kubernetes, and ArgoCD, helping organizations instill Devops for the modern age</p>
                <p className="text-sm text-gray-600">Take your ticket Now and subscribe to our Meetup OWASP Tunis Group!</p>
              </div>

              {/* NACS Collaboration */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594] mb-2">April/May 2021 - Common Project about Software Security Awarness with National Agency of Computer Security !</h3>
              </div>

              {/* SAMM2 Event */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594] mb-2">OWASP SAMM2 - Your Dynamic Software Security Journey - 29 January 2021 at 12pm CET</h3>
                <p className="text-sm text-gray-600 mb-4">Take your ticket and subscribe to our Meetup OWASP Tunis Group!</p>
                
                <h4 className="text-lg font-medium text-gray-900 mb-2">Our Guest: Sebastien Deleersnyder</h4>
                <p className="text-gray-700 mb-4">
                  Sebastien Deleersnyder (https://twitter.com/sebadele) is co-founder, CEO of Toreon and a proponent of application security as a holistic endeavor. He started the Belgian OWASP chapter, was a member of the OWASP Foundation Board and performed several public presentations on Application Security. Seba also co-founded the yearly security & hacker BruCON conference and trainings in Belgium. With a background in development and many years of experience in security, he has trained countless developers to create software more securely. He has led OWASP projects such as OWASP SAMM, thereby truly making the world a little bit safer. Now he is adapting application security models to the evolving field of DevOps and is also focused on bringing Threat Modeling to a wider audience.
                </p>
                
                <h5 className="text-md font-medium text-gray-900 mb-2">Description</h5>
                <p className="text-gray-700">
                  OWASP Software Assurance Maturity Model (SAMM) enables you to formulate and implement a strategy for software security that is tailored to the risk profile of your organisation. In this talk, we give an overview of the new release of the SAMM model. After 10 years since its first conception, it was important to align it with today's development practices. We will cover a number of topics in the talk: the core structure of the model, which was redesigned and extended to align with modern development practices, the measurement model which was setup to cover both coverage and quality and the new security practice streams where the SAMM activities are grouped in maturity levels. We will demonstrate the new SAMM2 toolbox to measure the maturity of an example development team and how you can create a roadmap of activities.
                </p>
              </div>

              {/* Blockchain Event */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594] mb-2">LAST ONLINE EVENT! Blockchain [for] Security - 5-12-20</h3>
                
                <h4 className="text-lg font-medium text-gray-900 mb-2">Abstract</h4>
                <p className="text-gray-700 mb-4">
                  Blockchain is a disruptive technology proposing some security properties for various digital applications. But Blockchain has also its own challenges in terms of security……
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-md font-medium text-gray-900 mb-2">"Blockchain as a security brick for software applications" by Sami Bel Hadj</h5>
                    <p className="text-gray-700">
                      Sami is Technical/Software Dev Manager with more than 18 years' experience designing, developing and supporting software systems. Creative and dynamic Engineer with proven expertise in effectively leading technical teams. His professional strengths include extensive database technology expertise, team leadership and management, strong oral and written communication skills, and ability to achieve corporate objectives in challenging work environments. Sami is also professor of Blockchain technology / philosophy in several Tunisian universities.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-md font-medium text-gray-900 mb-2">"Pen testing Blockchain Solutions (Ethereum Smart Contracts & Nodes)" By Alex Devassy</h5>
                    <p className="text-gray-700">
                      Alex is Cyber Security Professional, having 2+ years of rich and insightful exposure in Red Teaming, security consultancy along with cyber security training. Focused on Penetration testing of commercial off-the-shelf applications, Web Application, Web Service, Network PT including Active Directory, SAP, IOS, Blockchain and Salesforce applications using open source and commercial tools. Experienced in developing automation / malicious scripts in windows PowerShell, node js. Have been a part of the winning team at IIT Delhi, Open Innovation Blockchain Hackathon, conducted by Best of Block Inc.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-md font-medium text-gray-900 mb-2">"Secured Smart Contracts Development using SCSVS" by Damian Rusinek</h5>
                    <p className="text-gray-700">
                      Damian is Senior IT Security Specialist, since 2016 in SecuRing. Professionally responsible for web and mobile application audits and source code analysis. Software developer and analyst with over a decade of experience. Mainly focused on the cryptographic protocols, distributed ledger technologies and applications that use them.
                    </p>
                    <p className="text-gray-700 mt-2">
                      Finished PhD at Warsaw University of Technology. Damian works as researcher at Maria Curie Sklodowska University in Lublin where his main topic of research are biocrypto and blockchain based protocols and applications. Author of several academic research papers and speaker at such conferences as Cryptography and Security Systems, International Science Conference on Computer Networks, Confidence, Confidence London, AppSec EU, InfoShare. Creator of Smart Contracts Security Verification Standard.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secure Programming Event */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594] mb-2">Previous Event- Hands-on on Secure Programming & Secure Coding Standards 13-07-20</h3>
                <p className="text-sm text-gray-600">Subscribe/Follow us on our Youtube and Meetup for more details!</p>
              </div>
            </div>
          </section>

          {/* Social Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Social Links- OWASP Tunisia Chapter. Follow US</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="https://www.meetup.com/fr-FR/owasp-tunis-meetup-group/" className="bg-[#003594] text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-[#002d7a] transition-colors">
                Meetup
              </a>
              <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors">
                Facebook
              </a>
              <a href="#" className="bg-blue-800 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-blue-900 transition-colors">
                Linkedin
              </a>
              <a href="#" className="bg-red-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-red-700 transition-colors">
                Youtube
              </a>
            </div>
          </section>

          {/* Leaders */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Leaders</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594]">Nihel Ben Youssef</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#003594]">Ahmed Amine Ben Souayeh</h3>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="bg-[#003594] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join OWASP Tunisia</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be part of North Africa's premier cybersecurity community. Join us in driving 
              innovation, fostering collaboration, and shaping the future of regional cybersecurity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.meetup.com/fr-FR/owasp-tunis-meetup-group/" className="bg-white text-[#003594] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join Our Meetup
              </a>
              <a href="https://owasp.org/www-chapter-tunisia/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#003594] transition-colors">
                Official Chapter Page
              </a>
              <a href="mailto:nihel.benyoussef@owasp.org" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#003594] transition-colors">
                Contact Leaders
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 