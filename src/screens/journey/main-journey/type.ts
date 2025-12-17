export interface JourneyResponse {
  data: JourneyData;
}

export interface JourneyData {
  id: number;
  title: string;
  description: string;
  image_url: string;
  join_code: string;
  is_private: boolean;
  members: JourneyMember[];
  tasks: JourneyTask[];
  tasks_boss: any[];
}

export interface JourneyMember {
  id: number;
  name: string;
  avatar: string | null;
  is_master: boolean;
}

export interface JourneyTask {
  id: number;
  title: string;
  days_remaining: number;
  have_assigned_person: boolean;
}
