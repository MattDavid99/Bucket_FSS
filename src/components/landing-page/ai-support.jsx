const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const AiSupport = () => {
  const benefits = [
    'Responds instantly to common questions',
    'Helps customers take next steps',
    'Reduces back-and-forth emails',
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-fontInter text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 leading-tight mb-6">
              Built-in support, available anytime
            </h2>

            <p className="font-fontInter text-lg text-textSecondary mb-8 max-w-xl">
              The built-in AI assistant helps answer questions, guide visitors, and support customers without adding to your workload.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 font-fontInter text-primary-950">
                  <CheckIcon />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Chat bubble illustration */}
              <div className="bg-white rounded-2xl shadow-soft p-8 max-w-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary-100 rounded-full p-3">
                    <ChatIcon />
                  </div>
                  <div>
                    <h3 className="font-fontInter font-semibold text-primary-950 mb-1">
                      AI Assistant
                    </h3>
                    <p className="font-fontInter text-sm text-textSecondary">
                      Always ready to help
                    </p>
                  </div>
                </div>

                {/* Sample conversation */}
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg rounded-tl-none p-3">
                    <p className="font-fontInter text-sm text-primary-950">
                      How do I schedule a service call?
                    </p>
                  </div>
                  <div className="bg-accent/10 rounded-lg rounded-tr-none p-3 ml-4">
                    <p className="font-fontInter text-sm text-primary-950">
                      I can help with that. Would you like me to walk you through the scheduling process, or connect you with our team?
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSupport;
