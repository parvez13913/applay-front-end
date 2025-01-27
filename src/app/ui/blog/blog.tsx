import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      date: "22 Aug 2020",
      title: "We have announced our new product.",
      excerpt:
        "Lorem ipsum Dolor A Et amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Voluptate Sed",
      image: "/blog1.jpg",
      href: "#",
    },
    {
      date: "15 Jul 2020",
      title: "Top five way for learning web development.",
      excerpt:
        "Lorem ipsum Dolor A Et amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Voluptate Sed",
      image: "/blog2.jpg",
      href: "#",
    },
    {
      date: "05 Jan 2020",
      title: "We provide highly business solutions.",
      excerpt:
        "Lorem ipsum Dolor A Et amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Voluptate Sed",
      image: "/blog3.jpg",
      href: "#",
    },
  ];

  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Read Our Blog
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600">
            Business consulting excepteur sint occaecat cupidatat consulting non
            proident, sunt in culpa qui officia deserunt laborum market.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Link href={post.href}>
                <div className="h-64 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={800}
                    height={800}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
