import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Karla Leon",
    role: "Founder & Lead Bookkeeper",
    image: "/Kay-bg_3.jpg",
    bio: "Certified bookkeeper with over 20 years of experience in financial management and real estate.",
  },
  {
    name: "Sarah Johnson",
    role: "Senior Bookkeeper",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Specializing in small business accounting and tax preparation with 10+ years of experience.",
  },
  {
    name: "Michael Chen",
    role: "QuickBooks Specialist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Expert in QuickBooks and modern accounting software with 5+ years of experience.",
  },
];

export function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced team of professionals is dedicated to providing the
            highest quality bookkeeping services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member) => (
            <Card
              key={member.name}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="aspect-square relative rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
