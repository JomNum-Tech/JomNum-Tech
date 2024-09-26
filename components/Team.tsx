"use client"

import React from "react";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TwitterIcon, GitHubIcon, Shapes } from '@/components/Icon';

type SocialIconType = typeof FacebookIcon | typeof InstagramIcon | typeof TwitterIcon | typeof GitHubIcon;

interface SocialLink {
  icon: SocialIconType;
  href: string;
}

interface TeamMember {
  picture: string;
  fullName: string;
  designation: string;
  bio: string;
  socialLinks: SocialLink[];
}

const teamMembers: TeamMember[] = [
  {
    picture: "/assets/mentor.jpg",
    fullName: "Ing Muyleang",
    designation: "Mentor",
    bio: "Be Flexible",
    socialLinks: [
      { icon: FacebookIcon, href: "#" },
      { icon: InstagramIcon, href: "#" },
      { icon: TwitterIcon, href: "#" },
      { icon: GitHubIcon, href: "#" },
    ],
  },
  {
    picture: "/assets/meh.jpg",
    fullName: "Rous Sovanara",
    designation: "Full Stack x DevSecOps",
    bio: "Say goodbye to Manual",
    socialLinks: [
      { icon: FacebookIcon, href: "#" },
      { icon: InstagramIcon, href: "#" },
      { icon: TwitterIcon, href: "#" },
      { icon: GitHubIcon, href: "#" },
    ],
  },
  {
    picture: "/assets/mehUI.jpg",
    fullName: "Pov Sokny",
    designation: "Full Stack x DevSecOps",
    bio: "Say goodbye to Manual",
    socialLinks: [
      { icon: FacebookIcon, href: "#" },
      { icon: InstagramIcon, href: "#" },
      { icon: TwitterIcon, href: "#" },
      { icon: GitHubIcon, href: "#" },
    ],
  },
  {
    picture: "/assets/antony.jpg",
    fullName: "Mom Makara",
    designation: "Full Stack x DevSecOps",
    bio: "Say goodbye to Manual",
    socialLinks: [
      { icon: FacebookIcon, href: "#" },
      { icon: InstagramIcon, href: "#" },
      { icon: TwitterIcon, href: "#" },
      { icon: GitHubIcon, href: "#" },
    ],
  },
  {
    picture: "/assets/ben.jpg",
    fullName: "On Soben",
    designation: "Full Stack x DevSecOps",
    bio: "Say goodbye to Manual",
    socialLinks: [
      { icon: FacebookIcon, href: "#" },
      { icon: InstagramIcon, href: "#" },
      { icon: TwitterIcon, href: "#" },
      { icon: GitHubIcon, href: "#" },
    ],
  },
  {
    picture: "/assets/nak.jpg",
    fullName: "Sol Vathanak",
    designation: "Full Stack x DevSecOps",
    bio: "Say goodbye to Manual",
    socialLinks: [
      { icon: FacebookIcon, href: "#" },
      { icon: InstagramIcon, href: "#" },
      { icon: TwitterIcon, href: "#" },
      { icon: GitHubIcon, href: "#" },
    ],
  },
];

const TeamMemberItem: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8">
    <div className="relative w-32 h-32 mx-auto">
      <Image
        src={member.picture}
        alt={member.fullName}
        fill
        className="rounded-full border-4 p-1 border-blue-600 object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/assets/placeholder.jpg";
        }}
      />
    </div>
    <div className="mt-6">
      <h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
      <p className="mb-4 text-sm">{member.designation}</p>
      <p className="opacity-50">{member.bio}</p>
      <div className="mt-6">
        {member.socialLinks.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <a
              href={item.href}
              className={`inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 ${
                i + 1 !== member.socialLinks.length && "mr-4"
              }`}
              key={i}
            >
              <IconComponent />
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

const TeamMember: React.FC = () => {
  return (
    <header className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <Shapes />
      <section className="ezy__team9 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center mb-6 md:mb-12">
            <div className="max-w-lg text-center">
              <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
                Our Experts Team
              </h2>
              <p>
                Flexible Team
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center pt-6">
            {teamMembers.map((member, i) => (
              <div key={i}>
                <TeamMemberItem member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </header>
  );
};

export default TeamMember;