import TestimonialCarousel from '../components/TestimonialCarousel'

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
          What Clients <span className="gradient-text">Say About Us</span>
        </h1>
        <p className="text-xl text-gray-600">Real feedback from real clients who trusted us with their projects</p>
      </div>

      <TestimonialCarousel />

      {/* Additional Testimonials Cards */}
      <div className="mt-20 grid md:grid-cols-3 gap-8">
        {[
          {
            name: 'David Kumar',
            role: 'Startup Founder',
            text: 'Exceeded our expectations. The team delivered on time and the quality was impeccable.',
          },
          {
            name: 'Jessica Wong',
            role: 'Marketing Lead',
            text: 'Made our website conversions jump by 45%. Incredibly talented and responsive team!',
          },
          {
            name: 'Robert Taylor',
            role: 'Operations Director',
            text: 'Professional, reliable, and innovative. We\'ve partnered with them on multiple projects.',
          },
        ].map((testimonial, index) => (
          <div key={index} className="card hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
            <div className="border-t border-blue-100 pt-4">
              <p className="font-bold text-dark">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats with Testimonials */}
      <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
        <div className="card">
          <p className="text-4xl font-bold gradient-text">4.9/5</p>
          <p className="text-gray-600 mt-2">Average Rating</p>
        </div>
        <div className="card">
          <p className="text-4xl font-bold gradient-text">98%</p>
          <p className="text-gray-600 mt-2">Satisfaction Rate</p>
        </div>
        <div className="card">
          <p className="text-4xl font-bold gradient-text">150+</p>
          <p className="text-gray-600 mt-2">Happy Clients</p>
        </div>
      </div>
    </section>
  )
}
