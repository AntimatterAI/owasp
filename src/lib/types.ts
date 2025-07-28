export interface Event {
  id: string
  created_at: string
  title: string
  date: string
  month: string
  year: string
  time: string
  location: string
  type: 'Conference' | 'Chapter Meeting' | 'Training' | 'Workshop'
  image: string
  price?: string
  registration_url?: string
  description?: string
  is_featured: boolean
  status: 'draft' | 'published' | 'cancelled'
}

export interface Project {
  id: string
  created_at: string
  title: string
  slug: string
  description: string
  long_description?: string
  image?: string
  category: string
  status: 'active' | 'inactive' | 'archived'
  project_url?: string
  github_url?: string
  is_featured: boolean
}

export interface Chapter {
  id: string
  created_at: string
  name: string
  slug: string
  city: string
  country: string
  region: 'Africa' | 'Asia' | 'Europe' | 'North America' | 'South America' | 'Central America' | 'Oceania'
  description?: string
  meeting_info?: string
  contact_email?: string
  website_url?: string
  meetup_url?: string
  linkedin_url?: string
  twitter_url?: string
  is_active: boolean
}

export type EventFormData = Omit<Event, 'id' | 'created_at'>
export type ProjectFormData = Omit<Project, 'id' | 'created_at'>  
export type ChapterFormData = Omit<Chapter, 'id' | 'created_at'> 