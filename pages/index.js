import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import articlesData from "../data/articles.json"; // Mock API source

// --- Data Fetching: getStaticProps with ISR ---
export async function getStaticProps() {
  
  // 1. Fetch main article list
  const articles = articlesData; 

  // 2. Define featured story separately (or fetch first item from API)
  const featuredArticle = {
    id: "heat-waves",
    title: "Heatwaves are getting worse – but which countries are most at risk?: New research",
    description: "Research reveals countries where record-breaking heatwaves are likely to cause most harm",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpUKwKWg3A2zrKHl_5G9VxLL6p7xW7FWXwg&s",
    category: "Movies",
    readTime: "4 min read",
    source: "newslo",
    time: "12 minutes ago"
  };

  if (!articles || articles.length === 0) {
    // Return notFound: true to show a 404 page, or return an empty array to show a fallback UI
    return {
      props: {
        articles: [],
        featured: null,
        isError: true
      },
      revalidate: 60,
    };
  }

  return {
    props: {
      articles,
      featured: featuredArticle,
      isError: false
    },
    // Incremental Static Regeneration: Rebuild the page in the background every 60 seconds
    revalidate: 60, 
  };
}

export default function Home({ articles, featured, isError }) {
  
  // Handle Error State Fallback
  if (isError) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-indigo-700">⚠️ Error Loading News</h1>
          <p className="mt-4 text-gray-600">
            We encountered an issue while trying to fetch the latest headlines. Please check your API connection or try again.
          </p>
        </div>
      </Layout>
    );
  }

  // Handle No Articles Available (Edge Case)
  if (articles.length === 0 && !featured) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800">No News Available</h1>
          <p className="mt-4 text-gray-500">
            The news provider returned no articles at this moment.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Dynamic SEO (Bonus) */}
      <head>
          <title>Global Pulse - Latest News and Headlines</title>
          <meta name="description" content="Your source for inspiration, knowledge, and entertainment headlines." />
      </head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* HERO SECTION */}
        <section className="text-center py-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
            WELCOME TO GLOBAL PULSE
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif font-light leading-snug">
            Breaking news, latest updates, and in-depth stories from around the world.{" "}
            <span className="font-semibold text-indigo-700">Stay Informed.</span>,{" "}
            <span className="font-semibold text-indigo-700">Stay Updated.</span>, and{" "}
            <span className="font-semibold text-indigo-700">Stay Ahead.</span>
          </h1>
        </section>

        {/* FEATURED STORY */}
        {featured && (
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
              <Link href={`/articles/${featured.id}`} className="relative block">
                <div className="min-h-[20rem] sm:min-h-[28rem] rounded-xl overflow-hidden shadow-lg group">
                  
                  {/* Next.js Image Component */}
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill // Fills the parent container dimensions
                    priority // High priority for LCP
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <div className="text-white text-3xl font-bold tracking-wider">
                      {featured.title.split(':')[0].trim()}
                    </div>
                    <div className="text-white text-xl font-medium mt-1">
                      {featured.title.split(':')[1] ? featured.title.split(':')[1].trim() : 'Top Story'}
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col justify-center">
                <div className="flex items-center text-xs font-medium text-gray-500 mb-2">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-4l-6 4v-4H2a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2zM7 8H5v2h2V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {featured.source} · {featured.time}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4 hover:text-indigo-700 transition cursor-pointer">
                  {featured.title}
                </h2>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {featured.description}
                </p>

                <div className="text-xs font-medium space-x-2">
                  <span className="text-indigo-700 border border-indigo-700 px-2 py-1 rounded">
                    {featured.category}
                  </span>
                  <span className="text-gray-500">· {featured.readTime}</span>
                </div>
              </div>
            </section>
        )}

        <hr className="my-10" />

        {/* LATEST NEWS - Grid is now populated with mapped data */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest News</h2>
            <Link href="/news" className="text-indigo-700 font-medium text-sm">
              See all →
            </Link>
          </div>

          {/* Responsive grid: 1 column on mobile, 2 on medium (md), 4 on large (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`} // Dynamic routing to the article page
                className="flex flex-col bg-white rounded-lg p-3 hover:shadow-lg transition border border-gray-100"
              >
                <div className="aspect-video overflow-hidden rounded-lg mb-3 bg-gray-200">
                  {/* Handle No-Image Edge Case (Part C) */}
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      [No Image Available]
                    </div>
                  )}
                </div>

                {/* Handle Long Titles Edge Case (Part C) */}
                <h3 className="font-bold mb-2 line-clamp-2 hover:text-indigo-700 transition">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {article.description}
                </p>

                <div className="text-xs font-medium mt-auto">
                  <span className="text-indigo-700 border border-indigo-700 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-gray-500"> · {article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <hr className="my-10" />

        {/* STORY BUBBLES */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Creator Stories</h2>
            <a href="#" className="text-indigo-700 text-sm font-medium">
              See all →
            </a>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-4 md:flex-wrap md:space-x-0 md:justify-start">
            {[
              { img: "BBC", color: "000", label: "bbcnews" },
              { img: "E", color: "E0F2F1", label: "ecommurz" },
              { img: "F1", color: "A50044", label: "formula_one" },
              { img: "A", color: "DDD", label: "_alvian.de.." },
              { img: "GOAL", color: "008080", label: "goal" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center min-w-max">
                <div className="w-16 h-16 rounded-full shadow-md flex items-center justify-center bg-white p-3 border-4 border-indigo-500/0 hover:border-indigo-500 transition-all duration-300">
                  <img
                    src={`https://placehold.co/64x64/${item.color}/ffffff/png?text=${item.img}`}
                    alt={`${item.label} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs text-gray-600 mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}