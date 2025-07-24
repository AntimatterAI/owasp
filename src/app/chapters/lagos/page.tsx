'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LagosChapterPage() {
  const techEcosystem = [
    { name: 'Flutterwave', sector: 'Fintech', description: 'Pan-African payment infrastructure', impact: '$150B+ processed' },
    { name: 'Paystack', sector: 'Fintech', description: 'Payment processing for businesses', impact: 'Acquired by Stripe' },
    { name: 'Andela', sector: 'Tech Talent', description: 'Global software engineering talent', impact: '100+ countries' },
    { name: 'Interswitch', sector: 'Financial Services', description: 'Digital payment infrastructure', impact: '30M+ users' }
  ];

  const focusAreas = [
    {
      icon: '🏙️',
      title: 'Megacity Security',
      description: 'Protecting Africa\'s largest urban economy with 20M+ people and massive digital infrastructure'
    },
    {
      icon: '💰',
      title: 'Fintech Capital',
      description: 'Securing Nigeria\'s $100B+ fintech ecosystem and pan-African payment networks'
    },
    {
      icon: '🌍',
      title: 'West African Gateway',
      description: 'Leading cybersecurity initiatives across Nigeria, Ghana, Senegal, and the broader region'
    },
    {
      icon: '🏦',
      title: 'Banking Hub',
      description: 'Supporting Africa\'s largest banking sector with advanced security frameworks'
    },
    {
      icon: '🎬',
      title: 'Nollywood Digital',
      description: 'Securing Nigeria\'s creative economy and digital entertainment platforms'
    },
    {
      icon: '🚀',
      title: 'Startup Ecosystem',
      description: 'Nurturing Africa\'s most vibrant startup scene with security-first practices'
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#003594] to-[#0056b3] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-6xl mr-4">🇳🇬</span>
                <Image
                  src="/images/logos/owasp-logo-small-white.svg"
                  alt="OWASP Logo"
                  width={80}
                  height={80}
                  className="mr-4"
                />
              </div>
              <h1 className="text-5xl font-bold mb-4">OWASP Lagos</h1>
              <p className="text-xl mb-6">Nigeria</p>
              <p className="text-lg max-w-4xl mx-auto mb-8">
                Africa's economic powerhouse. OWASP Lagos secures the innovations flowing from 
                Nigeria's financial capital, home to Flutterwave, Paystack, and the continent's 
                most dynamic fintech ecosystem serving over 200 million people.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4">💰 Fintech Capital of Africa</h3>
                <p className="text-lg">Protecting $100B+ in transactions across Nigeria's leading fintech companies</p>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="#" className="bg-white text-[#003594] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Join Our Community
                </a>
                <a href="mailto:lagos@owasp.org" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#003594] transition-colors">
                  Contact Chapter
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">About OWASP Lagos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Lagos stands as Africa's undisputed economic powerhouse, home to over 20 million 
                  people and the continent's largest concentration of fintech companies, banks, 
                  and digital innovations. As Nigeria's commercial capital, Lagos drives 
                  technological advancement across West Africa and beyond.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  OWASP Lagos operates at the epicenter of African fintech innovation, working 
                  with industry leaders like Flutterwave, Paystack, and Interswitch to ensure 
                  that Nigeria's digital economy is built on unshakeable security foundations.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#003594] mb-4">🎯 Our Mission</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• Secure Nigeria's $100B+ fintech ecosystem</p>
                    <p>• Protect 200M+ users across payment platforms</p>
                    <p>• Lead West African cybersecurity standards</p>
                    <p>• Support Africa's largest startup ecosystem</p>
                    <p>• Foster digital innovation with security-first practices</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#003594] mb-4">Why Lagos Leads Africa</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">💰</span>
                    <div>
                      <p className="font-semibold">Economic Powerhouse</p>
                      <p className="text-gray-600">Africa's largest economy concentrated in one megacity</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">🏦</span>
                    <div>
                      <p className="font-semibold">Financial Capital</p>
                      <p className="text-gray-600">Home to Nigeria's major banks and fintech unicorns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">🌍</span>
                    <div>
                      <p className="font-semibold">Regional Influence</p>
                      <p className="text-gray-600">Driving innovation across 200M+ West Africans</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">🚀</span>
                    <div>
                      <p className="font-semibold">Startup Hub</p>
                      <p className="text-gray-600">Africa's most active venture capital ecosystem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Ecosystem */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Lagos Tech Ecosystem</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {techEcosystem.map((company, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#003594]">{company.name}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {company.sector}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{company.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-800">Impact: {company.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Focus Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Our Focus Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <span className="text-4xl">{area.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-[#003594] mb-3">{area.title}</h3>
                      <p className="text-gray-700">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Economic Impact */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Economic Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[#003594] to-[#0056b3] text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">🏙️ Megacity Scale</h3>
                <p className="text-lg mb-6">
                  With over 20 million residents, Lagos is Africa's largest city and economic 
                  engine. Our cybersecurity work directly impacts the daily lives and 
                  livelihoods of millions across Nigeria and West Africa.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-2xl font-bold">20M+</p>
                    <p className="text-sm">People Protected</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-2xl font-bold">$100B+</p>
                    <p className="text-sm">Economy Secured</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#003594] mb-4">🌍 Pan-African Influence</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Lagos-based companies serve customers across all 54 African countries, 
                  making our security practices foundational to continental digital growth.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-6 py-4">
                    <h4 className="font-semibold">Payment Infrastructure</h4>
                    <p className="text-gray-700">Processing billions in cross-border transactions</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6 py-4">
                    <h4 className="font-semibold">Digital Banking</h4>
                    <p className="text-gray-700">Serving 100M+ users across multiple countries</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6 py-4">
                    <h4 className="font-semibold">Fintech Innovation</h4>
                    <p className="text-gray-700">Leading African financial technology development</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Involved */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003594] mb-8">Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#003594] mb-4">🏦 Fintech Professionals</h3>
                <p className="text-gray-700 mb-4">
                  Join Nigeria's leading fintech security community. Whether you work at 
                  Flutterwave, Paystack, traditional banks, or emerging startups, connect 
                  with peers advancing payment security across Africa.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Payment security best practices</p>
                  <p>• API security for financial services</p>
                  <p>• Fraud prevention and detection</p>
                  <p>• Regulatory compliance frameworks</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#003594] mb-4">🚀 Startup Ecosystem</h3>
                <p className="text-gray-700 mb-4">
                  Building the next unicorn? Get security right from day one. Our startup 
                  program helps emerging companies implement world-class security practices 
                  that scale with rapid growth.
                </p>
                <div className="space-y-3">
                  <a href="#" className="block w-full bg-[#003594] text-white px-4 py-2 rounded-lg text-center hover:bg-[#002d7a] transition-colors">
                    Join Startup Program
                  </a>
                  <a href="mailto:lagos@owasp.org" className="block w-full border border-[#003594] text-[#003594] px-4 py-2 rounded-lg text-center hover:bg-[#003594] hover:text-white transition-colors">
                    Enterprise Partnerships
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="bg-[#003594] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join OWASP Lagos</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be part of securing Africa's economic powerhouse. Join us in protecting the 
              innovations that connect, finance, and empower hundreds of millions across 
              Nigeria and the entire African continent.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-white text-[#003594] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join Our Community
              </a>
              <a href="mailto:lagos@owasp.org" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#003594] transition-colors">
                Contact Leaders
              </a>
              <a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#003594] transition-colors">
                Partner With Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 