'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TunisiaChapterPage() {
  const leaders = [
    { name: 'Nihel Ben Youssef', role: 'Chapter Leader', credentials: 'OWASP Tunisia Founder & Leader', experience: '7+ years OWASP leadership' },
    { name: 'Ahmed Amine Ben Souayeh', role: 'Chapter Leader', credentials: 'Co-Leader', experience: 'Active community builder' }
  ];

  const upcomingEvents = [
    {
      title: 'I[OT]Security',
      date: 'October 25, 2024',
      time: '7pm UTC+1',
      venue: 'OWASP Tunisia YouTube Channel',
      description: 'IoT and OT Security - Joint collaboration exploring Internet of Things and Operational Technology security challenges',
      coOrganizer: 'OWASP Algiers Chapter',
      status: 'Co-organizer: OWASP Algiers chapter!',
      registrationUrl: 'https://www.meetup.com/fr-FR/owasp-tunis-meetup-group/'
    }
  ];

  const recentEvents = [
    {
      title: 'GraphQL Vulnerabilities in the Wild: A Hands-On Workshop with OWASP TOP 10 Insights',
      date: 'September 5, 2024',
      time: '3pm UTC+1',
      speaker: 'Antoine Carossio',
      speakerRole: 'Co-founder & CTO of Escape',
      description: 'Hands-on workshop exploring GraphQL security vulnerabilities'
    },
    {
      title: 'AI: The New Attack Surface and Strategies for Securing It',
      date: 'April 26, 2024',
      time: '8pm UTC+1',
      speaker: 'Jeff Crume',
      speakerRole: 'IBM Distinguished Engineer and Master Inventor',
      experience: '40+ years IT industry experience',
      description: 'Exploring AI security challenges and mitigation strategies'
    },
    {
      title: 'Safeguarding your software supply chain: A deep Dive into SCA With OWASP Dependency Check',
      date: 'March 23, 2024',
      time: '11:30 GMT+1',
      speaker: 'Aymen Touzi',
      speakerRole: 'Cybersecurity and DevOps Expert, Sofrecom Tunisia',
      description: 'Software composition analysis and dependency security',
      meetupLink: 'https://www.meetup.com/fr-FR/owasp-tunis-meetup-group/events/299907061/'
    }
  ];

  const majorPastEvents = [
    {
      year: 2023,
      title: 'LLM Vulnerabilities Workshop',
      date: 'September 1, 2023',
      speakers: ['Alyssa Berriche - Lead Cyber Threat Intelligence Analyst', 'Foued Saidi - Technical Director @Securinets ISI Club'],
      topics: ['OWASP TOP 10 for LLMs', 'Active Directory Security'],
      description: 'Exploring LLM vulnerabilities and AD security'
    },
    {
      year: 2022,
      title: 'Securing Mobile Apps with OWASP MASVS Standard v2.0',
      date: 'June 24, 2022',
      speaker: 'Carlos Holguera',
      speakerRole: 'Mobile Security Research Engineer, NowSecure, OWASP Mobile Security Project Leader',
      description: 'Journey to MASVS v2.0 and mobile security standards'
    },
    {
      year: 2022,
      title: 'OWASP Tunisia Local Meeting at NACS',
      date: 'March 2, 2022',
      venue: 'National Agency of Computer Security',
      speakers: [
        'Mondher Smii - Chef de service Information Sharing & Analysis Center at ANSI',
        'Hajji Wajih - Lead Cyber Security Engineer at Ernst and Young',
        'Sofien Maatallah - Head of CSIRT at NACS',
        'Baha Baghdadi - Cyber Security Consultant at EY Tunisia'
      ],
      description: 'Government partnership showcase and security insights'
    },
    {
      year: 2021,
      title: 'OWASP SAMM2 - Your Dynamic Software Security Journey',
      date: 'January 29, 2021',
      speaker: 'Sebastien Deleersnyder',
      speakerRole: 'Co-founder CEO of Toreon, OWASP Belgium Chapter co-Leader, OWASP SAMM project co-leader',
      description: 'Software Assurance Maturity Model v2.0 deep dive'
    }
  ];

  const keyPartnerships = [
    {
      name: 'NACS (National Agency of Computer Security)',
      type: 'Government Partner',
      role: 'Strategic cybersecurity collaboration',
      impact: 'National security initiatives'
    },
    {
      name: 'SecuriNets Foundation',
      type: 'Academic Partner', 
      role: 'Educational programs and events',
      impact: 'Student engagement and training'
    },
    {
      name: 'OWASP Algiers Chapter',
      type: 'Regional Chapter',
      role: 'Cross-border collaboration',
      impact: 'North African cybersecurity unity'
    }
  ];

  const focusAreas = [
    {
      icon: '📱',
      title: 'Mobile Security',
      description: 'OWASP MASVS standards and mobile app security testing',
      projects: ['MASVS v2.0', 'Mobile Security Testing']
    },
    {
      icon: '🤖',
      title: 'AI/ML Security',
      description: 'LLM vulnerabilities and AI attack surface analysis',
      projects: ['OWASP TOP 10 for LLMs', 'AI Security Strategies']
    },
    {
      icon: '🔗',
      title: 'Blockchain Security',
      description: 'Smart contract security and blockchain penetration testing',
      projects: ['Smart Contract Security', 'Blockchain Pentesting']
    },
    {
      icon: '🏗️',
      title: 'DevSecOps',
      description: 'SAST in CI/CD and secure software development lifecycle',
      projects: ['SAST Integration', 'OWASP SAMM']
    },
    {
      icon: '🌐',
      title: 'IoT Security',
      description: 'IoT device security and embedded systems protection',
      projects: ['OWASP IoT Top 10', 'Firmware Analysis']
    },
    {
      icon: '📊',
      title: 'API Security',
      description: 'GraphQL vulnerabilities and API business logic flaws',
      projects: ['API Security Testing', 'GraphQL Security']
    }
  ];

  const achievementStats = [
    { metric: '7+', label: 'Years Active', description: 'Since 2017 establishment' },
    { metric: '50+', label: 'Events Hosted', description: 'Workshops & conferences' },
    { metric: '4', label: 'Social Platforms', description: 'Multi-platform presence' },
    { metric: '3', label: 'Major Partners', description: 'Strategic collaborations' }
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
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
                North Africa's cybersecurity excellence hub. OWASP Tunisia stands as a regional bridge 
                between Africa and Europe, driving cutting-edge security research, government partnerships, 
                and community-driven innovation across the MENA region.
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
          
          {/* Achievement Stats */}
          <section className="mb-16">
            <div className="grid md:grid-cols-4 gap-8">
              {achievementStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-[#003594] to-[#0056b3] text-white rounded-lg p-6">
                    <div className="text-3xl font-bold mb-2">{stat.metric}</div>
                    <div className="text-lg font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm opacity-90">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">About OWASP Tunisia</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Since 2017, OWASP Tunisia has established itself as North Africa's premier cybersecurity 
                  community, fostering innovation, research, and collaboration across the MENA region. 
                  As a strategic bridge between Africa and Europe, we drive cutting-edge security initiatives 
                  and build partnerships that strengthen the global cybersecurity ecosystem.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our chapter is renowned for hosting world-class speakers, conducting hands-on workshops, 
                  and maintaining strong partnerships with government agencies, academic institutions, 
                  and international OWASP chapters.
                </p>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#003594] mb-4">🎯 Our Mission</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• Pioneer cybersecurity excellence in North Africa</p>
                    <p>• Bridge regional and international security communities</p>
                    <p>• Drive innovation in emerging security domains</p>
                    <p>• Foster government-academia-industry collaboration</p>
                    <p>• Develop next-generation security professionals</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#003594] mb-4">Regional Leadership</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">🏆</span>
                    <div>
                      <p className="font-semibold">Innovation Hub</p>
                      <p className="text-gray-600">Leading AI/ML, IoT, and blockchain security research</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">🤝</span>
                    <div>
                      <p className="font-semibold">Strategic Partnerships</p>
                      <p className="text-gray-600">NACS, universities, and international chapters</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">🌍</span>
                    <div>
                      <p className="font-semibold">Cross-Border Impact</p>
                      <p className="text-gray-600">Collaborating with OWASP Algiers and MENA region</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Chapter Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {leaders.map((leader, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-[#003594] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                      <p className="text-[#003594] font-medium mb-2">{leader.role}</p>
                      <p className="text-sm text-gray-600 mb-2">{leader.credentials}</p>
                      <p className="text-sm text-gray-500">{leader.experience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#003594] mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-600 mb-3">
                        <span>📅 {event.date}</span>
                        <span>🕰️ {event.time}</span>
                        <span>📍 {event.venue}</span>
                      </div>
                      <p className="text-gray-700 mb-3">{event.description}</p>
                      {event.coOrganizer && (
                        <div className="bg-blue-100 px-4 py-2 rounded-lg inline-block mb-3">
                          <p className="text-sm font-medium text-blue-800">🤝 {event.status}</p>
                        </div>
                      )}
                      {event.registrationUrl && (
                        <div className="mt-4">
                          <a href={event.registrationUrl} className="bg-[#003594] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#002d7a] transition-colors inline-block">
                            Register on Meetup →
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Recent Events</h2>
            <div className="space-y-6">
              {recentEvents.map((event, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#003594] mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-600 mb-3">
                        <span>📅 {event.date}</span>
                        <span>🕰️ {event.time}</span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg mb-3">
                        <p className="font-medium text-gray-900">{event.speaker}</p>
                        <p className="text-sm text-gray-600">{event.speakerRole}</p>
                        {event.experience && (
                          <p className="text-xs text-gray-500 mt-1">{event.experience}</p>
                        )}
                      </div>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Major Past Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Major Past Events</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-700">
                📹 <strong>Video Archive:</strong> Many of our past events are recorded and available to view on our YouTube Channel. 
                Visit our <a href="https://owasp.org/www-chapter-tunisia/" className="text-[#003594] underline">official chapter page</a> for video links.
              </p>
            </div>
            <div className="space-y-8">
              {majorPastEvents.map((event, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#003594] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                      {event.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#003594] mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-3">{event.date}</p>
                      {event.venue && (
                        <p className="text-sm text-gray-500 mb-3">📍 {event.venue}</p>
                      )}
                      {event.speaker && (
                        <div className="bg-white p-4 rounded-lg mb-3">
                          <p className="font-medium">{event.speaker}</p>
                          <p className="text-sm text-gray-600">{event.speakerRole}</p>
                        </div>
                      )}
                      {event.speakers && (
                        <div className="mb-3">
                          <p className="font-medium mb-2">Speakers:</p>
                          <div className="space-y-1">
                            {event.speakers.map((speaker, i) => (
                              <p key={i} className="text-sm text-gray-700">• {speaker}</p>
                            ))}
                          </div>
                        </div>
                      )}
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Focus Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Security Focus Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <span className="text-4xl mb-4 block">{area.icon}</span>
                    <h3 className="text-xl font-semibold text-[#003594] mb-3">{area.title}</h3>
                    <p className="text-gray-700 mb-4">{area.description}</p>
                    <div className="space-y-2">
                      {area.projects.map((project, i) => (
                        <span key={i} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Strategic Partnerships */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Strategic Partnerships</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {keyPartnerships.map((partner, index) => (
                <div key={index} className="bg-gradient-to-br from-[#003594] to-[#0056b3] text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium mb-2">{partner.type}</p>
                    <p className="text-sm">{partner.role}</p>
                  </div>
                  <p className="text-sm opacity-90">{partner.impact}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Community Engagement */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Community Engagement</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#003594] mb-4">🌐 Multi-Platform Presence</h3>
                <p className="text-gray-700 mb-4">
                  Follow chapter news on Facebook, LinkedIn, YouTube and Meetup. 
                  We schedule our meetings on the Meetup platform for easy registration and updates.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a href="https://www.meetup.com/fr-FR/owasp-tunis-meetup-group/" className="bg-[#003594] text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-[#002d7a] transition-colors">
                    Meetup Group
                  </a>
                  <a href="https://owasp.org/www-chapter-tunisia/" className="bg-red-600 text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-red-700 transition-colors">
                    YouTube Videos
                  </a>
                  <a href="https://owasp.org/www-chapter-tunisia/" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-blue-700 transition-colors">
                    Facebook
                  </a>
                  <a href="https://owasp.org/www-chapter-tunisia/" className="bg-blue-800 text-white px-4 py-2 rounded-lg text-center text-sm hover:bg-blue-900 transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#003594] mb-4">📅 Open Meetings & Speaking</h3>
                <p className="text-gray-700 mb-4">
                  Our meetings are open to the public, and you do not need to be a member to attend. 
                  We also welcome speakers to share expertise with Tunisia's vibrant cybersecurity community.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>• Open to public - no membership required</p>
                  <p>• International speaker collaborations</p>
                  <p>• Technical workshops and hands-on sessions</p>
                  <p>• Government and industry partnerships</p>
                </div>
                <div className="space-y-2">
                  <a href="mailto:nihel.benyoussef@owasp.org" className="block w-full bg-[#003594] text-white px-4 py-2 rounded-lg text-center hover:bg-[#002d7a] transition-colors">
                    Contact Leaders
                  </a>
                  <p className="text-xs text-gray-600 text-center">Consider joining OWASP or sponsoring this chapter</p>
                </div>
              </div>
            </div>
          </section>
        </div>

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