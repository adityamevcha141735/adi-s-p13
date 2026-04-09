import { Briefcase, Award, MapPin } from 'lucide-react'
import Counter from '../components/Counter'
import SkillCard from '../components/SkillCard'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 space-y-20">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
          About <span className="gradient-text">Our Studio</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We craft digital experiences that drive business growth and innovation. With a team of passionate developers and designers, we're committed to excellence.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-4 gap-8 py-12">
        <Counter end={150} label="Projects Completed" />
        <Counter end={98} label="Client Satisfaction" />
        <Counter end={50} label="Team Members" />
        <Counter end={15} label="Years Experience" />
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="card">
          <Briefcase className="text-primary mb-4" size={32} />
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To empower businesses with world-class web solutions that drive growth, engagement, and digital transformation in the modern era.
          </p>
        </div>
        <div className="card">
          <Award className="text-secondary mb-4" size={32} />
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To be the leading digital innovation partner, recognized for delivering cutting-edge solutions and exceptional client experiences globally.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Meet Our <span className="gradient-text">Talented Team</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'Alex River', role: 'Lead Developer', avatar: 'A' },
            { name: 'Sarah Moon', role: 'UI/UX Designer', avatar: 'S' },
            { name: 'James Park', role: 'PM Lead', avatar: 'J' },
            { name: 'Lisa Chen', role: 'DevOps Engineer', avatar: 'L' },
          ].map((member) => (
            <div key={member.name} className="card text-center group hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                {member.avatar}
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Our <span className="gradient-text">Expertise</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Frontend Technologies</h3>
            <SkillCard name="React & Next.js" level={95} />
            <SkillCard name="Tailwind CSS" level={90} />
            <SkillCard name="TypeScript" level={88} />
            <SkillCard name="Vue.js" level={80} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8">Backend & Tools</h3>
            <SkillCard name="Node.js & Express" level={92} />
            <SkillCard name="PostgreSQL & MongoDB" level={89} />
            <SkillCard name="AWS & DevOps" level={85} />
            <SkillCard name="Python & FastAPI" level={82} />
          </div>
        </div>
      </div>
    </section>
  )
}
