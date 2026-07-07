import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { SiGooglecloud } from 'react-icons/si'
import spotifyImg from '../assets/projects/spotify.jpg'
import weatherImg from '../assets/projects/weather_api.png'
import churnImg from '../assets/projects/customer_churn.jpg'

const PROJECTS = [
  {
    title: 'PeakCart GCP Data Platform',
    description:
      'Production-grade Medallion Architecture (Bronze/Silver/Gold) on BigQuery using dbt Core — SCD Type 2 dimensions, incremental fact tables, a star schema across 6 business entities, 92 automated data quality tests, and advanced SQL patterns including RFM segmentation and cohort analysis.',
    icon: SiGooglecloud,
    href: 'https://github.com/HarshaM98/peakcart-gcp-data-platform/tree/main',
  },
  {
    title: 'Spotify Data Pipeline on AWS',
    description: 'Data pipeline using AWS services for Spotify data processing and analytics.',
    image: spotifyImg,
    href: 'https://github.com/HarshaM98/spotify-data-pipeline-aws',
  },
  {
    title: 'Weather API Ingestion with Docker',
    description: 'Containerized weather data ingestion system using Docker and public APIs.',
    image: weatherImg,
    href: 'https://github.com/HarshaM98/weather_api_ingestion',
  },
  {
    title: 'Telecom Customer Churn Prediction',
    description: 'Machine learning model to predict customer churn in the telecom industry.',
    image: churnImg,
    href: 'https://github.com/HarshaM98/telco-customer-churn-analysis-ml',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-ink py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-4 font-display text-3xl md:text-4xl text-paper"
        >
          Projects
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project, idx) => {
            const Icon = project.icon
            return (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group glass-panel overflow-hidden rounded-2xl transition-colors hover:border-champagne/40"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  {Icon ? (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-soft to-ink">
                      <Icon className="h-16 w-16 text-champagne transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg text-paper">{project.title}</h3>
                    <FiArrowUpRight className="mt-1 shrink-0 text-champagne opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{project.description}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
