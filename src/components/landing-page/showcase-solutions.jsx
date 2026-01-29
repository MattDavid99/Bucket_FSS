const primaryFeatures = [
  {
    icon: '/landing-page/scheduling.png',
    title: 'Scheduling that keeps work on track',
    description: 'Plan jobs, avoid conflicts, and keep your team aligned with a clear, shared schedule.',
  },
  {
    icon: '/landing-page/dispatching.png',
    title: 'Dispatching that saves drive time',
    description: 'Send the right person to the right job based on their location.',
  },
  {
    icon: '/landing-page/payments.png',
    title: 'Invoicing that gets you paid faster',
    description: 'Send invoices on-site and accept cards before you leave.',
  },
  {
    icon: '/landing-page/reporting.png',
    title: "Reports that show what's working",
    description: 'See job profitability, team performance, and business trends.',
  },
  {
    icon: '/landing-page/call-booking.png',
    title: 'Customer records you can actually find',
    description: 'Job history, contact info, and notes—all in one place.',
  },
  {
    icon: '/landing-page/mobile.png',
    title: 'Mobile access from anywhere',
    description: 'Your full schedule, customers, and invoices on any device.',
  },
];

const secondaryFeatures = [
  'QuickBooks sync',
  'Service agreements',
  'Job costing',
  'Call booking',
  'Payroll tracking',
  'Financing options',
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
  </svg>
);

const ShowCaseSolutions = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-fontInter text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 leading-tight mb-4">
            Built to support your day-to-day operations
          </h2>
          <p className="font-fontInter text-lg text-textSecondary max-w-2xl mx-auto">
            Our all-in-one solution means you no longer have to sign into multiple platforms.
            Everything you need to run your business is in one convenient location.
          </p>
        </div>

        {/* Primary Features - 2x3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {primaryFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col
                         bg-gradient-to-br from-primary-800 to-primary-950
                         rounded-xl p-6 text-white cursor-pointer
                         hover:from-accent hover:to-green-600
                         transform hover:scale-[1.02] hover:-translate-y-1
                         transition-all duration-300 shadow-soft hover:shadow-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-10 h-10 filter brightness-0 invert opacity-90
                             group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-fontInter text-lg font-bold leading-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="font-fontInter text-sm text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary Features - Bullet List */}
        <div className="bg-gray-50 rounded-xl p-6 md:p-8">
          <h3 className="font-fontInter text-lg font-semibold text-primary-950 mb-4">
            Plus everything else you need:
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {secondaryFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 font-fontInter text-primary-950">
                <CheckIcon />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSolutions;
