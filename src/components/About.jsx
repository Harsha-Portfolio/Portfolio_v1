import { motion } from 'framer-motion'
import { FiDatabase, FiBarChart2, FiPieChart, FiGrid } from 'react-icons/fi'
import { FaAws } from 'react-icons/fa'
import { TbBrandVscode } from 'react-icons/tb'
import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiApachespark,
  SiApacheairflow,
  SiApachekafka,
  SiApachehadoop,
  SiApachehive,
  SiApachenifi,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
  SiSnowflake,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiLinux,
  SiJupyter,
  SiPycharm,
} from 'react-icons/si'
import profilePic from '../assets/Portfolio_picture.png'

const TECH_STACK = [
  { name: 'Python', icon: SiPython },
  { name: 'SQL', icon: FiDatabase },
  { name: 'NumPy', icon: SiNumpy },
  { name: 'Pandas', icon: SiPandas },
  { name: 'Scikit-learn', icon: SiScikitlearn },
  { name: 'Apache Spark', icon: SiApachespark },
  { name: 'Apache Airflow', icon: SiApacheairflow },
  { name: 'Apache Kafka', icon: SiApachekafka },
  { name: 'Hadoop', icon: SiApachehadoop },
  { name: 'Hive', icon: SiApachehive },
  { name: 'Nifi', icon: SiApachenifi },
  { name: 'Docker', icon: SiDocker },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'AWS', icon: FaAws },
  { name: 'GCP', icon: SiGooglecloud },
  { name: 'Snowflake', icon: SiSnowflake },
  { name: 'Tableau', icon: FiBarChart2 },
  { name: 'Power BI', icon: FiPieChart },
  { name: 'Excel', icon: FiGrid },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Bitbucket', icon: SiBitbucket },
  { name: 'Linux', icon: SiLinux },
  { name: 'VS Code', icon: TbBrandVscode },
  { name: 'PyCharm', icon: SiPycharm },
  { name: 'Jupyter', icon: SiJupyter },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          About
        </motion.p>

        <div className="mt-6 grid grid-cols-1 gap-14 md:grid-cols-[280px_1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="glow-champagne overflow-hidden rounded-2xl border border-line">
              <img src={profilePic} alt="Harsha Manjunatha" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl text-paper"
            >
              Hello!
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 space-y-4 text-mist leading-relaxed"
            >
              <p>
                I'm Harsha, a data enthusiast from Bangalore, currently pursuing my Master's in Data
                Analytics at Northeastern University, Boston.
              </p>
              <p>
                I come from a Data Engineering background and have hands-on experience with tools like
                Apache Spark, Kafka, Airflow, and cloud platforms like AWS and GCP. I love building ETL
                pipelines, working with large-scale datasets, and creating ML models that solve
                real-world problems.
              </p>
              <p>
                This portfolio showcases a range of projects, from cloud-based data workflows and
                time-series forecasting models to interactive dashboards and NLP applications.
              </p>
              <p>
                When I'm not coding, you'll probably find me on a cricket field or trying out new
                productivity tools. Feel free to explore, and let's connect if you find something
                interesting!
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16"
        >
          <p className="text-xs uppercase tracking-widest text-mist mb-6">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map(({ name, icon: Icon }) => (
              <div
                key={name}
                title={name}
                className="glass-panel group flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-xl transition-colors hover:border-champagne/40"
              >
                <Icon className="h-5 w-5 text-mist transition-colors group-hover:text-champagne" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
