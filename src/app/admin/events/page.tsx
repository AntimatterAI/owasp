'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Force dynamic rendering for admin pages
export const dynamic = 'force-dynamic'
import { useRouter } from 'next/navigation'
import { adminService } from '@/lib/admin'
import type { Event } from '@/lib/types'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    checkAuthAndLoadEvents()
  }, [])

  const checkAuthAndLoadEvents = async () => {
    try {
      const isAuth = await adminService.checkAuth()
      if (!isAuth) {
        router.push('/admin')
        return
      }
      
      const eventsData = await adminService.getEvents()
      setEvents(eventsData)
    } catch (error: any) {
      setError(error.message || 'Failed to load events')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return

    try {
      await adminService.deleteEvent(id)
      setEvents(events.filter(event => event.id !== id))
    } catch (error: any) {
      setError(error.message || 'Failed to delete event')
    }
  }

  const formatDate = (date: string, month: string, year: string) => {
    return `${month} ${date}, ${year}`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'text-green-800 bg-green-100'
      case 'draft': return 'text-yellow-800 bg-yellow-100'
      case 'cancelled': return 'text-red-800 bg-red-100'
      default: return 'text-gray-800 bg-gray-100'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Conference': return 'text-red-800 bg-red-100'
      case 'Chapter Meeting': return 'text-green-800 bg-green-100'
      case 'Training': return 'text-yellow-800 bg-yellow-100'
      case 'Workshop': return 'text-purple-800 bg-purple-100'
      default: return 'text-gray-800 bg-gray-100'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003594]"></div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Admin Navigation */}
      <div className="bg-[#003594]">
        <div className="max-w-[1440px] mx-auto px-[120px] py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button 
                onClick={() => router.push('/admin')}
                className="text-white hover:text-[#ffb81b] mr-6 font-['Poppins'] text-[14px] flex items-center gap-2"
              >
                <Image src="/images/icons/chevron.svg" alt="" width={16} height={16} className="rotate-180 filter brightness-0 invert" />
                Back to Dashboard
              </button>
              <h1 className="font-['Barlow'] font-medium text-white text-[20px] leading-[24px] tracking-[-0.4px]">
                Event Management
              </h1>
            </div>
            <Button 
              text="Add New Event" 
              variant="light-blue" 
              size="40"
              onClick={() => router.push('/admin/events/new')}
            />
          </div>
        </div>
      </div>

      {/* Events Content */}
      <div className="bg-[#F1F6FE]">
        <div className="max-w-[1440px] mx-auto px-[120px] pt-20 pb-[164px]">
          {error && (
            <div className="mb-8 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-16 items-center justify-center w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="font-['Poppins'] font-semibold text-[#00A7E1] text-[16px] leading-[24px] tracking-[-0.32px]">
                  Admin Dashboard
                </div>
                <h1 className="font-['Barlow'] font-medium text-[#101820] text-[64px] leading-[64px] tracking-[-1.28px] max-w-[1200px]">
                  Event Management
                </h1>
              </div>
              <div className="flex flex-row gap-20 items-start justify-start w-full">
                <div className="flex-1 min-w-0">
                  <p className="font-['Poppins'] font-normal text-[#757575] text-[16px] leading-[24px] tracking-[-0.32px]">
                    Manage all OWASP events including global conferences, regional AppSec Days, 
                    and chapter meetings. Create, edit, and publish events to keep the community informed.
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-['Poppins'] font-normal text-[#757575] text-[16px] leading-[24px] tracking-[-0.32px]">
                    Events marked as "Published" will appear on the public events page. 
                    Use the "Featured" option to highlight important events in the hero section.
                  </p>
                </div>
              </div>
            </div>

            {/* Events List */}
            <div className="w-full">
              {events.length === 0 ? (
                <div className="text-center py-16">
                  <div className="mb-8">
                    <Image src="/images/icons/megaphone.svg" alt="" width={64} height={64} className="mx-auto opacity-40" />
                  </div>
                  <h3 className="font-['Barlow'] font-medium text-[#101820] text-[24px] leading-[28px] tracking-[-0.48px] mb-2">
                    No events found
                  </h3>
                  <p className="font-['Poppins'] text-[#757575] text-[16px] leading-[24px] tracking-[-0.32px] mb-8 max-w-md mx-auto">
                    Get started by creating your first event. Events help keep the OWASP community 
                    informed about upcoming conferences, meetings, and training sessions.
                  </p>
                  <Button 
                    text="Add New Event" 
                    variant="primary" 
                    size="48"
                    onClick={() => router.push('/admin/events/new')}
                  />
                </div>
              ) : (
                <div className="grid gap-6">
                  {events.map((event) => (
                    <div key={event.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="p-8">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="font-['Barlow'] font-medium text-[#101820] text-[24px] leading-[28px] tracking-[-0.48px]">
                                {event.title}
                              </h3>
                              <div className="flex gap-2">
                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                                  {event.status}
                                </span>
                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(event.type)}`}>
                                  {event.type}
                                </span>
                                {event.is_featured && (
                                  <span className="px-3 py-1 text-xs font-medium rounded-full text-blue-800 bg-blue-100">
                                    Featured
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                              <div className="flex items-center gap-3">
                                <Image src="/images/icons/arrow-upright.svg" alt="" width={20} height={20} className="opacity-60" />
                                <div>
                                  <p className="font-['Poppins'] text-[#757575] text-[12px] leading-[16px] font-medium uppercase tracking-wide">
                                    Date
                                  </p>
                                  <p className="font-['Poppins'] text-[#101820] text-[14px] leading-[20px]">
                                    {formatDate(event.date, event.month, event.year)}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3">
                                <Image src="/images/icons/marker.svg" alt="" width={20} height={20} className="opacity-60" />
                                <div>
                                  <p className="font-['Poppins'] text-[#757575] text-[12px] leading-[16px] font-medium uppercase tracking-wide">
                                    Location
                                  </p>
                                  <p className="font-['Poppins'] text-[#101820] text-[14px] leading-[20px]">
                                    {event.location}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3">
                                <Image src="/images/icons/coins.svg" alt="" width={20} height={20} className="opacity-60" />
                                <div>
                                  <p className="font-['Poppins'] text-[#757575] text-[12px] leading-[16px] font-medium uppercase tracking-wide">
                                    Price
                                  </p>
                                  <p className="font-['Poppins'] text-[#101820] text-[14px] leading-[20px]">
                                    {event.price || 'Not specified'}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-3">
                              <Button 
                                text="Edit Event" 
                                variant="primary" 
                                size="40"
                                onClick={() => router.push(`/admin/events/${event.id}/edit`)}
                              />
                              <Button 
                                text="Delete" 
                                variant="ghost-dark" 
                                size="40"
                                onClick={() => handleDelete(event.id)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 