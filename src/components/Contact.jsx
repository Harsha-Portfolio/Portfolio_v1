import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          Get in Touch
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-4 font-display text-3xl md:text-5xl text-paper"
        >
          Let's build something <span className="text-gradient-champagne">worth shipping.</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-mist"
        >
          Open to data engineering roles, collaborations, and interesting problems.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <a
            href="mailto:harsha.manjunatha98@gmail.com"
            className="flex items-center gap-2 rounded-full bg-champagne px-7 py-3 text-sm font-medium text-ink transition hover:bg-champagne-soft"
          >
            <FiMail /> harsha.manjunatha98@gmail.com
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/HarshaManjunatha-DataScience"
              target="_blank"
              rel="noreferrer"
              className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-paper transition hover:border-champagne/40 hover:text-champagne"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/HarshaM98"
              target="_blank"
              rel="noreferrer"
              className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-paper transition hover:border-champagne/40 hover:text-champagne"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
          </div>
        </motion.div>

        <p className="mt-20 text-xs text-mist/60">
          &copy; {new Date().getFullYear()} Harsha Manjunatha
        </p>
      </div>
    </section>
  )
}
