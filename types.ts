export interface Project {
  id: number;
  title: string;
  category: 'Web Design' | 'UI/UX' | 'Photography' | 'Branding';
  imageUrl: string;
  size: 'small' | 'medium' | 'large';
}

export interface Stat {
  id: number;
  label: string;
  value: string;
  description: string;
}

export interface Client {
  id: number;
  name: string;
  logoUrl: string; // Using placeholder text or generic shapes for demo
}