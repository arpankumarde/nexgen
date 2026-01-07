export interface Speaker {
  name: string;
  avatar?: string | null;
  designation?: string;
  url?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  poster: string | null;
  startDate: string;
  endDate?: string;
  speakers: Speaker[];
}
