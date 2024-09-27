import { FacebookIcon, InstagramIcon, TwitterIcon, GitHubIcon } from '@/components/Icon';

export type SocialIconType = typeof FacebookIcon | typeof InstagramIcon | typeof TwitterIcon | typeof GitHubIcon;

export type SocialLink = {
    icon: SocialIconType;
    href: string;
}

export type TeamMember = {
    picture: string;
    fullName: string;
    designation: string;
    bio: string;
    socialLinks: SocialLink[];
}

