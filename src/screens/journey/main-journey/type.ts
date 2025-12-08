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

    tasks: any[]; 

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
