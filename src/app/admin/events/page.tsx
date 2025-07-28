'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { adminService } from '@/lib/admin'
import type { Event } from '@/lib/types'
import Button from '@/components/Button'

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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003594]"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => router.push('/admin')}
                className="text-[#003594] hover:text-[#002266] mr-4"
              >
                ← Back
              </button>
              <img className="h-8 w-auto" src="/logo.svg" alt="OWASP" />
              <h1 className="ml-4 text-xl font-semibold text-gray-900">Event Management</h1>
            </div>
            <div className="flex items-center">
              <Button 
                text="Add New Event" 
                variant="primary" 
                size="40"
                onClick={() => router.push('/admin/events/new')}
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          {events.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No events</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by creating a new event.</p>
              <div className="mt-6">
                <Button 
                  text="Add New Event" 
                  variant="primary" 
                  size="40"
                  onClick={() => router.push('/admin/events/new')}
                />
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {events.map((event) => (
                <li key={event.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-medium text-[#003594] truncate">
                            {event.title}
                          </p>
                          <div className="ml-2 flex-shrink-0 flex space-x-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                              {event.status}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(event.type)}`}>
                              {event.type}
                            </span>
                            {event.is_featured && (
                              <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-800 bg-blue-100">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {formatDate(event.date, event.month, event.year)} at {event.time}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              </svg>
                              {event.location}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            {event.price && (
                              <span className="font-medium text-[#ffb81b]">{event.price}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-3">
                      <Button 
                        text="Edit" 
                        variant="ghost-dark" 
                        size="32"
                        onClick={() => router.push(`/admin/events/${event.id}/edit`)}
                      />
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
} 