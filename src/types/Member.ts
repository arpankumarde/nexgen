export interface Social {
  platform: "linkedin" | "twitter" | "github" | "website" | "instagram";
  url: string;
  isActive: boolean;
}

export interface Member {
  name: string;
  avatar: string | null;
  type: "core" | "extended";
  role: "technical" | "management" | "content" | "pr";
  email?: string;
  phone?: string;
  socials: Social[];
}
