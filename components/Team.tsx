"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FacebookIcon, InstagramIcon, TwitterIcon, GitHubIcon, Shapes } from '@/components/Icon'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { TeamMember } from '@/types/TeamType'

const teamMembers: TeamMember[] = [
  {
    picture: "/assets/mentor.jpg",
    fullName: "Ing Muyleang",
    designation: "Mentor",
    bio: "Be Flexible",
    expertise: ["Leadership", "Project Management", "Agile Methodologies"],
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
    designation: "Leader",
    bio: "Be Flexible",
    expertise: ["Leadership", "Project Management", "Agile Methodologies"],
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
    designation: "FullStack x DevOps",
    bio: "Be Flexible",
    expertise: ["Leadership", "Project Management", "Agile Methodologies"],
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
    designation: "FullStack x DevOps",
    bio: "Be Flexible",
    expertise: ["Leadership", "Project Management", "Agile Methodologies"],
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
    designation: "FullStack x DevOps",
    bio: "Be Flexible",
    expertise: ["Leadership", "Project Management", "Agile Methodologies"],
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
    designation: "FullStack x DevOps",
    bio: "Be Flexible",
    expertise: ["Leadership", "Project Management", "Agile Methodologies"],
    socialLinks: [
      { icon: FacebookIcon, href: "#" },
      { icon: InstagramIcon, href: "#" },
      { icon: TwitterIcon, href: "#" },
      { icon: GitHubIcon, href: "#" },
    ],
  },
  // ... (other team members)
]

const TeamMemberItem: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 shadow-xl rounded-xl h-full p-6 lg:p-8 relative overflow-hidden"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-32 h-32 mx-auto mb-6">
        <Image
          src={member.picture}
          alt={member.fullName}
          fill
          className="rounded-full border-4 p-1 border-blue-600 object-cover transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/assets/placeholder.jpg"
          }}
        />
      </div>
      <div className="text-center">
        <h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
        <p className="mb-4 text-sm text-blue-600 dark:text-blue-400">{member.designation}</p>
        <p className="opacity-75 mb-4">{member.bio}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {member.expertise.map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          {member.socialLinks.map((item, i) => {
            const IconComponent = item.icon
            return (
              <motion.a
                href={item.href}
                className="opacity-60 hover:opacity-100 transition-opacity"
                key={i}
                whileHover={{ y: -3 }}
              >
                <IconComponent />
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <header className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
        <Shapes />
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-6 text-green-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Our Team
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are a group of passionate developers dedicated to creating innovative solutions and fostering a culture of continuous learning and growth.
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="team" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="team">Our Team</TabsTrigger>
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="values">Our Values</TabsTrigger>
          </TabsList>
          <TabsContent value="team">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <TeamMemberItem member={member} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="mission">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="mb-4">
                  Our mission is to empower businesses and individuals through innovative technology solutions. We strive to create software that not only meets the current needs of our clients but also anticipates future challenges in the ever-evolving digital landscape.
                </p>
                <p>
                  By fostering a culture of continuous learning and collaboration, we aim to push the boundaries of what is possible in software development and deliver exceptional value to our clients and the wider tech community.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="values">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Innovation: We embrace new technologies and methodologies to stay at the forefront of our field.</li>
                  <li>Collaboration: We believe in the power of teamwork and open communication.</li>
                  <li>Integrity: We uphold the highest standards of honesty and ethical behavior in all our interactions.</li>
                  <li>Continuous Learning: We are committed to personal and professional growth.</li>
                  <li>User-Centric Approach: We prioritize the needs and experiences of end-users in everything we create.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-500">Join Our Team</h2>
          <p className="text-center mb-8">
            We are always looking for talented individuals to join our team. If you are passionate about technology and want to work on exciting projects, we would love to hear from you!
          </p>      
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-green-500">Our Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'DevOps', 'Cloud Computing', 'AI/ML', 'Cybersecurity'].map((skill, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <Badge className="mb-2">{skill}</Badge>
                  <p className="text-sm opacity-75">Expert Level</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

    </div>
  )
}

export default AboutUs