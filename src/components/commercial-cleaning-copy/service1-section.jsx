const Service1Section = () => {
  return (
    <div className="container relative m-auto mt-12 px-4 py-10 md:px-14">
      <div className="mb-2 text-center">
        <p className="text-base text-heading6 font-medium text-palletteColor5">TRUSTED BY 40,000+ BUSINESSES</p>
        <h1 className="font-fontOpen text-heading2 font-bold text-palletteColor9">Software features made for plumbing businesses</h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 items-center gap-6 md:grid-cols-2">
        <div className="order-2">
          <h1 className="font-fontOpen text-heading3 font-bold text-palletteColor9">All-in-one plumbing management software</h1>
          <p className="mt-4 font-fontOpen text-base text-palletteColor9">
            Whether your biggest challenge is scheduling jobs, dispatching techs, or collecting payments, our plumbing software can help you
            manage it all. Buckets Pro has all the cutting-edge features you need to manage plumbing operations, enhance productivity, and
            improve customer service.
          </p>
          <ul className="mt-4 space-y-2 font-fontOpen text-base text-palletteColor9">
            <li className="flex gap-2">
              <svg className="size-4" style={{ fill: '#82ce51' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Make informed, data-driven decisions with real-time business performance reporting and analytics
            </li>
            <li className="flex gap-2">
              <svg className="size-4" style={{ fill: '#82ce51' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Easily keep track of jobs and your team, no matter where you are
            </li>
            <li className="flex gap-2">
              <svg className="size-4" style={{ fill: '#82ce51' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              No more manual data entry, streamline team management from time tracking to payroll
            </li>
            <li className="flex gap-2">
              <svg className="size-4" style={{ fill: '#82ce51' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Easily connect Best Scheduling with your other software tools
            </li>
          </ul>
          <button className="mt-3 transform font-fontOpen text-palletteColor1 transition duration-500 hover:scale-125 hover:text-palletteColor5">
            {' '}
            Get Started {'>'}
          </button>
        </div>
        <div>
          <img src="/commercial-cleaning-copy/service1.jpg" width="100%" height="100%" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Service1Section;
