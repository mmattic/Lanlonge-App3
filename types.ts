import { LucideIcon } from "lucide-react";

export interface ResourceItem {
  id: string;
  name: string;
  description: string;
  url: string;
  iconColor: string; // Tailwind class for background color
  iconInitial?: string; // If no image, use initials
  isHot?: boolean;
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  items: ResourceItem[];
}

export type SearchEngine = 'Baidu' | 'Google' | 'Amazon' | 'Bing';

export type PageView = 'home' | 'about';