export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
  deliverables: string[];
  timeline: string;
  idealFor: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  selectedServices: string[];
  budget: string;
  timeline: string;
  projectNotes: string;
}
