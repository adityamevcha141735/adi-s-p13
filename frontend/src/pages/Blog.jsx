import { useState } from 'react'
import { Search, Calendar, User } from 'lucide-react'

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Future of Web Development in 2026',
    excerpt: 'Exploring the latest trends and technologies shaping the web development landscape',
    author: 'Alex River',
    date: '2026-04-05',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Why Performance Matters for SEO',
    excerpt: 'How website speed impacts your search engine rankings and user engagement',
    author: 'Sarah Moon',
    date: '2026-04-03',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Building Scalable Applications',
    excerpt: 'Best practices for architecting applications that grow with your business',
    author: 'James Park',
    date: '2026-03-28',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65b?w=500&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'AI Integration in Web Apps',
    excerpt: 'Practical guide to integrating machine learning models into your web applications',
    author: 'Lisa Chen',
    date: '2026-03-20',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8b13f1553f8ca306d912058fef?w=500&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'Modern CSS Techniques',
    excerpt: 'Master the latest CSS features for building responsive and beautiful interfaces',
    author: 'Alex River',
    date: '2026-03-15',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1633356122544-f134ef2944f7?w=500&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'DevOps Best Practices',
    excerpt: 'Essential practices for smooth deployment and infrastructure management',
    author: 'Lisa Chen',
    date: '2026-03-10',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565b318?w=500&h=300&fit=crop',
  },
]

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(BLOG_POSTS.map(post => post.category))]

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
          Our <span className="gradient-text">Blog</span>
        </h1>
        <p className="text-xl text-gray-600">Insights, tips, and stories from our team</p>
      </div>

      {/* Search & Filter */}
      <div className="mb-12 space-y-6">
        <div className="relative">
          <Search className="absolute left-4 top-4 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredPosts.map((post, index) => (
          <article
            key={post.id}
            className="card overflow-hidden group hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer animate-fadeInUp"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-gray-200">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

            <div className="flex items-center gap-4 pt-4 border-t border-blue-100 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No articles found. Try adjusting your search.</p>
        </div>
      )}

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-12 text-white text-center">
        <h2 className="text-3xl font-display font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-6 opacity-90">Get the latest insights and updates delivered to your inbox</p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 rounded-lg text-dark focus:outline-none"
          />
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
