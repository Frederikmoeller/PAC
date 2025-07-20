import type { User } from "../Types/User";

export async function fetchLocalUser(userId: string): Promise<User> {
    const res = await fetch(`/api/users/${userId}/profile`);
    if (!res.ok) throw new Error("Failed to fetch user profile");
    return await res.json();
}