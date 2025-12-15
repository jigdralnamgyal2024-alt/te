export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
}

export interface HobbyItem {
  id: number;
  title: string;
  description: string;
  icon: string; // FontAwesome icon class
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}