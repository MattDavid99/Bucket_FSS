import { motion } from 'framer-motion';

const ProblemSolution = () => {
  const problems = [
    {
      problem: 'Jobs fall through the cracks',
      solution: 'See every job, who\'s assigned, and what\'s next—on one screen.',
    },
    {
      problem: 'Customers don\'t show up',
      solution: 'Automatic reminders keep your schedule full.',
    },
    {
      problem: 'Invoices pile up at the end of the month',
      solution: 'Send invoices the moment the work is done.',
    },
    {
      problem: 'You don\'t know who\'s where',
      solution: 'See your whole team\'s location and status in real time.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-fontInter text-3xl md:text-4xl font-bold text-primary-950">
            Sound familiar?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-surface rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="font-fontInter text-textSecondary line-through decoration-red-300">
                  {item.problem}
                </p>
              </div>

              <div className="flex items-start gap-4 mt-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-fontInter text-primary-950 font-medium">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
