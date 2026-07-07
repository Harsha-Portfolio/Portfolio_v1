import { motion } from 'framer-motion'

const JOBS = [
  {
    company: 'FreshDirect',
    location: 'Bronx, New York',
    title: 'Supply Chain Strategy Data Analyst (Co-op)',
    duration: 'Oct 2025 — Mar 2026',
    achievements: [
      'Recovered $400K+ in annual billback revenue by auditing vendor billing logic across all product categories, tracing systematic Oracle SQL calculation errors to a date-field mismatch and correcting the underlying pipeline.',
      'Engineered a SQL-based promotional calculations ETL pipeline replacing legacy Excel workflows, cutting query latency by 90% and enabling real-time analytics across 14 product categories.',
      'Applied K-Means clustering (Python, scikit-learn) to segment 10,000+ SKUs into 4 performance tiers, driving targeted inventory and markdown strategies across 8 seasonal events.',
      'Integrated Claude (Opus 4.6) LLM via MCP server into a Power BI and SQL pipeline to automate billback and rebate forecast tracking across 14 product categories, delivering interactive dashboards with daily trends and YoY comparisons for annual vendor negotiations.',
      'Conducted A/B test analysis across 6 customer cohorts using DiD regression and z-tests, identifying a 1.4-2.5pp shift in express routing and ~1% net order loss, to guide leadership’s rollout decision.',
    ],
    stack: ['Oracle SQL', 'Python', 'Power BI', 'Claude / MCP', 'A/B Testing'],
  },
  {
    company: 'IDFC FIRST BANK',
    location: 'Bangalore, India',
    title: 'Data Engineer',
    duration: 'Jan 2022 — Aug 2024',
    achievements: [
      'Engineered real-time data pipelines using Apache Kafka and Spark Streaming to ingest JSON data from AWS MSK into HDFS, enhancing data availability by 25% and ensuring robust ETL processes with diligent data validation.',
      'Built a monitoring dashboard using SQL and Python with automated validations and 30-minute email alerts (CloudWatch-integrated), enabling proactive pipeline issue detection and resolution.',
      'Collaborated on dynamic Apache Airflow DAG wrappers to facilitate incremental data fetching, staging, encryption, and seamless loading into Hive and AWS S3, improving overall pipeline efficiency by 30%.',
      'Partnered with the migration team to restructure and optimize 5+ data engineering projects during the transition from Kubernetes clusters to the Cloudera platform, boosting system performance by 30% and scalability by 40%.',
      'Automated complex SQL queries for daily airport lounge access reporting, securely distributing results via SFTP to stakeholders for timely, data-driven decision-making.',
    ],
    stack: ['PySpark', 'Kafka', 'Hadoop', 'AWS', 'Nifi', 'Apache Airflow', 'Bitbucket'],
  },
  {
    company: 'Pole To Win',
    location: 'Bangalore, India',
    title: 'Data Analyst',
    duration: 'Oct 2020 — Jan 2022',
    achievements: [
      'Enhanced real-time dashboards in Tableau to monitor key metrics (DAU, MAU, ARPU, retention rates), facilitating data-driven decision-making and improving player retention by 15%.',
      'Leveraged SQL and Python (Pandas, NumPy) to aggregate and transform 10M+ rows of game data from Amazon S3, ensuring data accuracy and performing exploratory analysis to identify actionable trends.',
      'Coordinated with cross-functional teams including product managers, marketing, and game designers to deliver interactive visualizations that drove a 20% increase in player engagement.',
    ],
    stack: ['Tableau', 'Python', 'SQL', 'AWS S3'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Experience() {
  return (
    <section id="work" className="relative bg-ink-soft py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          Experience
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-4 font-display text-3xl md:text-4xl text-paper"
        >
          Where I've built
        </motion.h2>

        <div className="mt-16 space-y-10 border-l border-line pl-8 md:pl-12">
          {JOBS.map((job, idx) => (
            <motion.div
              key={job.company}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[41px] md:-left-[57px] top-1 h-3 w-3 rounded-full bg-champagne shadow-[0_0_16px_4px_rgba(201,167,106,0.4)]" />

              <div className="glass-panel rounded-2xl p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-champagne">
                      {job.company} &middot; {job.location}
                    </p>
                    <h3 className="mt-1 font-display text-2xl text-paper">{job.title}</h3>
                  </div>
                  <p className="text-sm text-mist">{job.duration}</p>
                </div>

                <ul className="mt-5 space-y-3">
                  {job.achievements.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-mist">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-3 py-1 text-xs text-mist"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
