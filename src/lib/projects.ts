import { createClientComponentClient } from './supabase';

export interface Project {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  slug: string;
  description: string;
  long_description?: string;
  image?: string;
  category: string;
  status: 'active' | 'inactive' | 'archived';
  project_url?: string;
  github_url?: string;
  website_url?: string;
  documentation_url?: string;
  is_featured: boolean;
  project_type: 'flagship' | 'production' | 'other';
  github_stars?: number;
  last_updated?: string;
  version?: string;
  downloads?: string;
  contributors?: number;
  features?: string[];
  requirements?: string[];
  getting_started?: string[];
  tags?: string[];
  license?: string;
  language?: string;
  maintainers?: string[];
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  // Tab content fields
  tab_main_content?: string;
  tab_translation_content?: string;
  tab_sponsors_content?: string;
  tab_data_content?: string;
}

export interface ProjectsResponse {
  projects: Project[];
  total: number;
}

export async function getProjects(options?: {
  category?: string;
  project_type?: string;
  featured?: boolean;
  limit?: number;
  offset?: number;
  search?: string;
}): Promise<ProjectsResponse> {
  try {
    const supabase = createClientComponentClient();
    let query = supabase
      .from('projects')
      .select('*', { count: 'exact' })
      .eq('status', 'active');

    // Apply filters
    if (options?.category) {
      query = query.eq('category', options.category);
    }

    if (options?.project_type) {
      query = query.eq('project_type', options.project_type);
    }

    if (options?.featured !== undefined) {
      query = query.eq('is_featured', options.featured);
    }

    if (options?.search) {
      query = query.or(`title.ilike.%${options.search}%,description.ilike.%${options.search}%`);
    }

    // Apply pagination
    if (options?.limit) {
      query = query.limit(options.limit);
    }

    if (options?.offset) {
      query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
    }

    // Order by featured first, then by title
    query = query.order('is_featured', { ascending: false })
                 .order('title', { ascending: true });

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }

    return {
      projects: data || [],
      total: count || 0
    };
  } catch (error) {
    console.error('Error in getProjects:', error);
    throw error;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const supabase = createClientComponentClient();
    const { data, error } = await supabase
      .from('projects')
      .select(`
        id, created_at, updated_at, title, slug, description, long_description,
        image, category, status, project_url, github_url, website_url,
        documentation_url, is_featured, project_type, github_stars,
        last_updated, version, downloads, contributors, features,
        requirements, getting_started, tags, license, language,
        maintainers, difficulty_level,
        tab_main_content, tab_translation_content, tab_sponsors_content, tab_data_content
      `)
      .eq('slug', slug)
      .eq('status', 'active')
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned
        return null;
      }
      console.error('Error fetching project:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in getProjectBySlug:', error);
    throw error;
  }
}

export async function getFlagshipProjects(): Promise<Project[]> {
  const response = await getProjects({ project_type: 'flagship', featured: true });
  return response.projects;
}

export async function getProductionProjects(): Promise<Project[]> {
  const response = await getProjects({ project_type: 'production' });
  return response.projects;
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const response = await getProjects({ category });
  return response.projects;
}

export async function searchProjects(query: string, limit: number = 20): Promise<Project[]> {
  const response = await getProjects({ search: query, limit });
  return response.projects;
}

// Helper function to get unique categories
export async function getProjectCategories(): Promise<string[]> {
  try {
    const supabase = createClientComponentClient();
    const { data, error } = await supabase
      .from('projects')
      .select('category')
      .eq('status', 'active');

    if (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }

    const categories = [...new Set(data?.map(p => p.category) || [])];
    return categories.sort();
  } catch (error) {
    console.error('Error in getProjectCategories:', error);
    throw error;
  }
}

// Helper function to get project statistics
export async function getProjectStats(): Promise<{
  total: number;
  flagship: number;
  production: number;
  categories: number;
}> {
  try {
    const [totalResponse, flagshipResponse, productionResponse, categoriesResponse] = await Promise.all([
      getProjects(),
      getProjects({ project_type: 'flagship' }),
      getProjects({ project_type: 'production' }),
      getProjectCategories()
    ]);

    return {
      total: totalResponse.total,
      flagship: flagshipResponse.total,
      production: productionResponse.total,
      categories: categoriesResponse.length
    };
  } catch (error) {
    console.error('Error in getProjectStats:', error);
    throw error;
  }
}