import { motion } from 'framer-motion'
import sparkHadoopImg from '../assets/certs/spark-hadoop.png'

const FEATURED = [
  {
    title: 'Developer Training for Apache Spark and Hadoop',
    issuer: 'Cloudera',
    issued: 'Issued January 2023',
    image: sparkHadoopImg,
    href: null,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-ink-soft py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          Credentials
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-4 font-display text-3xl md:text-4xl text-paper"
        >
          Certifications
        </motion.h2>

        <div className="mt-16 max-w-xl">
          {FEATURED.map((cert, idx) => {
            const Wrapper = cert.href ? motion.a : motion.div
            return (
              <Wrapper
                key={cert.title}
                {...(cert.href ? { href: cert.href, target: '_blank', rel: 'noreferrer' } : {})}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel flex items-center gap-5 rounded-2xl p-6 transition-colors hover:border-champagne/40"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-16 w-16 shrink-0 rounded-lg object-contain bg-white/5 p-2"
                />
                <div>
                  <h3 className="font-display text-base text-paper leading-snug">{cert.title}</h3>
                  <p className="mt-1 text-sm text-mist">{cert.issuer} &middot; {cert.issued}</p>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
