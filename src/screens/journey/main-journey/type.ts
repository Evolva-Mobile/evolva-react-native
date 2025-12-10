export type JourneyProps = {
    id: number;
    title?: string;
    description: string | null;
    is_private: boolean;
    join_code: string;
    created_at: string;
    updated_at: string;

    users: {
        id: number;
        name: string;
        email: string;
        avatar_url: string | null;
        coins: number;
        email_verified_at: string | null;
        created_at: string;
        updated_at: string;
        xp: number;
        level: number;

        pivot: {
            journey_id: number;
            user_id: number;
            is_master: number;
            created_at: string;
            updated_at: string;
        };
    }[];

    tasks: {
        id: number;
        journey_id: number;
        created_by: number;
        title: string;
        description: string | null;
        type: "normal" | "daily" | "weekly" | string; // pode ajustar se quiser
        xp_reward: number;
        coin_reward: number;
        deadline: string | null; // vem null ou "2025-12-12T00:00:00.000000Z"
        is_completed: boolean;
        requires_proof: boolean;
        created_at: string;
        updated_at: string;
    }[];

    store: {
        id: number;
        name: string;
        description: string | null;
        image_url: string | null;
        created_at: string;
        updated_at: string;
        journey_id: number;
    };
};
