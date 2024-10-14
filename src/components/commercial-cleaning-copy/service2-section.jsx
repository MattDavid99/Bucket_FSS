const Service2Section = () => {
  return (
    <div className="container relative m-auto mt-12 px-4 py-10 md:px-14">
      <div className="grid grid-cols-1 grid-rows-1 items-center gap-6 md:grid-cols-2">
        <div className="">
          <h1 className="font-fontOpen text-heading3 font-bold text-palletteColor9">Simplify scheduling and dispatching</h1>
          <p className="mt-4 font-fontRoboto text-base text-palletteColor9">
            Let our plumbing scheduling software work for you with online booking, enabling fast and easy scheduling. Easily dispatch the
            right plumber to each job while keeping customers in the loop with real-time updates.
          </p>
          <ul className="mt-4 space-y-2 font-fontOpen text-base text-palletteColor9">
            <li className="flex gap-2">
              <svg className="size-4" style={{ fill: '#82ce51' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              <div>
                <span className="font-bold text-palletteColor9">Quickly schedule appointments </span>
                with online booking or drag-and-drop calendar view in the app
              </div>
            </li>
            <li className="flex gap-2">
              <svg className="size-4" style={{ fill: '#82ce51' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Give your customers the convenience they crave with the ability to book your services 24/7
            </li>
            <li className="flex gap-2">
              <svg className="size-4" style={{ fill: '#82ce51' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
              Dispatch the right person to the right job based on their real-time location and status
            </li>
          </ul>
          <button className="mt-2 transform font-fontOpen text-palletteColor1 transition duration-500 hover:scale-125 hover:text-palletteColor5">
            {' '}
            Get Started {'>'}
          </button>
        </div>
        <div>
          <img src="/commercial-cleaning-copy/service2.jpg" width="100%" height="100%" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service2Section;
