import { Dribbble, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  const team = [
    {
      name: "Dahlia Moore",
      role: "Senior Manager",
      image: "/team1.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        dribbble: "#",
        instagram: "#",
      },
    },
    {
      name: "Jhone Digo",
      role: "Marketing",
      image: "/team2.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        dribbble: "#",
        instagram: "#",
      },
    },
    {
      name: "Zara Tingo",
      role: "Web Developer",
      image: "/team3.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        dribbble: "#",
        instagram: "#",
      },
    },
    {
      name: "David Zone",
      role: "SEO Expert",
      image: "/team4.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        dribbble: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Awesome Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600">
            Business consulting excepteur sint occaecat cupidatat consulting non
            proident, sunt in culpa qui officia deserunt laborum market.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group bg-transparent text-center">
              <div className="relative mx-auto h-64 w-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>

              <div className="relative mx-3">
                <div className="relative w-full overflow-hidden py-8">
                  <div>
                    <h3 className="mt-6 text-lg font-medium text-primary">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                  <div className="mt-4 flex justify-center gap-4">
                    <Link
                      href={member.socials.facebook}
                      className="text-gray-400"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href={member.socials.twitter}
                      className="text-gray-400"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link
                      href={member.socials.dribbble}
                      className="text-gray-400"
                    >
                      <Dribbble className="h-5 w-5" />
                    </Link>
                    <Link
                      href={member.socials.instagram}
                      className="text-gray-400"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-x-0 top-0 h-0 w-full bg-primary transition-all duration-400 ease-in-out group-hover:h-full group-hover:opacity-40 group-hover:text-white group-hover:cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
