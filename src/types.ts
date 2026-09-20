export type PageId = 
  | 'home' 
  | 'about' 
  | 'windows' 
  | 'doors' 
  | 'services' 
  | 'gallery' 
  | 'reviews' 
  | 'faq' 
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  postcode: string;
  serviceType: string;
  propertyType: string;
  notes: string;
  contactPreference: 'phone' | 'either';
}

export interface QuoteFormErrors {
  fullName?: string;
  phone?: string;
  postcode?: string;
  serviceType?: string;
  notes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'windows' | 'doors' | 'glazing';
  description: string;
  type: 'inspiration' | 'genuine-scope';
  image: string;
  tag: string;
}
