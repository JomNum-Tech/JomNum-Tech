"use client"

import type { Testimonial } from '@/types/TestimonialType'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonialData: Testimonial[] = [
  {
    img: {
      url: '/assets/mentorSpring.jpg',
    },
    text: "Best Platform Ever, support khmer product. The automation features have significantly improved our workflow.",
    user: "Chan Chhaya",
    profession: "Senior Developer",
    company: "TechCorp",
  },
  {
    img: {
      url: '/assets/mentorSpring.jpg',
    },
    text: "SpringOps has revolutionized our deployment process. It's user-friendly and incredibly efficient.",
    user: "Sarah Johnson",
    profession: "DevOps Engineer",
    company: "InnovateTech",
  },
  {
    img: {
      url: '/assets/mentorSpring.jpg',
    },
    text: "The documentation and learning resources provided by SpringOps are top-notch. It made onboarding a breeze.",
    user: "Michael Lee",
    profession: "CTO",
    company: "StartupX",
  },
]

interface TestimonialItemProps {
  data: Testimonial
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ data }) => {
  const { img, text, user, profession, company } = data
  
  return (
    <Card className="bg-card text-card-foreground shadow-xl rounded-xl overflow-visible h-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center h-full">
          <Avatar className="w-20 h-20 border-4 border-background -mt-16">
            <AvatarImage src={img.url} alt={user} />
            <AvatarFallback>{user.charAt(0)}</AvatarFallback>
          </Avatar>
          <Quote className="text-primary mt-4 mb-2 w-8 h-8" />
          <p className="text-sm leading-relaxed text-center mb-4 flex-grow overflow-y-auto">{text}</p>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <h4 className="text-lg font-medium mb-1">{user}</h4>
          <p className="text-xs text-muted-foreground mb-1">{profession}</p>
          <p className="text-xs font-medium text-primary">{company}</p>
        </div>
      </CardContent>
    </Card>
  )
}

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            What People Say About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with SpringOps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((data, i) => (
            <div key={i} className="flex">
              <TestimonialItem data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial