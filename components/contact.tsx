import { Phone, Mail, Linkedin } from 'lucide-react'
import Link from 'next/link'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    content: '917-656-9179',
    href: 'tel:917-656-9179'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'raza.rabbani2@gmail.com',
    href: 'mailto:raza.rabbani2@gmail.com'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    content: 'Connect with me',
    href: 'https://www.linkedin.com/in/raza-rabbani-74a13a192/'
  }
]

export function Contact() {
  return (
    <section className="py-12">
      <div className="max-w-[1400px] mx-auto px-12">
        <h2 className="text-[32px] font-light mb-12 gradient-text pl-0">
          Let's Connect
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
            <Link
              key={method.title}
              href={method.href}
              className="group block transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 h-full flex flex-col items-center justify-center py-8 px-4 bg-white group-hover:bg-gradient-to-br group-hover:from-[#eff6ff] group-hover:to-[#cffafe]">
                <method.icon className="w-8 h-8 mb-4 stroke-1 text-blue-500 transition-colors duration-300" />
                <h3 className="text-[22px] font-light mb-2 text-gray-800">{method.title}</h3>
                <p className="text-gray-600 font-light text-center">{method.content}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* Reduced padding at the bottom */}
        <div className="pb-6"></div>
      </div>
    </section>
  )
}

