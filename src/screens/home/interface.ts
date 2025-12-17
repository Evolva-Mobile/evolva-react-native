import { ImageSourcePropType } from "react-native";
import { Icon } from "@/src/components/ui/Icon";

// Membro do grupo
export type Member = {
  id: number;
  name: string;
  avatar: string | null;
  is_master: boolean;
};

// Tarefa
export type Task = {
  id: number;
  title: string;
  days_remaining: number;
  have_assigned_person: boolean;
};

// Estrutura principal do grupo/journey
export type JourneyData = {
  id: number;
  title: string;
  description: string;
  join_code: string;
  is_private: boolean;
  image_url?: string | null;
  members: Member[];
  tasks: Task[];
  tasks_boss: Task[];
};

// Resposta da API
export type JourneyResponse = {
  data: JourneyData;
};

export type JourneyCard = {
  id: string;
  title: string;
  membersLabel: string;
  icon: ImageSourcePropType;
  hasNotification?: boolean;
};

export type BottomAction = {
  id: string;
  icon: Parameters<typeof Icon>[0]["name"];
  onPress?: () => void;
};
