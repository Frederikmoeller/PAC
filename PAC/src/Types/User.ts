export interface User {
    id: string;
    name: string;
    avatar?: string;
    status?: "online" | "offline" | "away" | "busy";
    description?: string;
    // add all user info needed here
}
