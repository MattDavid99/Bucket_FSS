import { FooterMenu } from './footer-items';

const Footer = () => {
  return (
    <footer className="w-full bg-primary-950 pt-12">
      <div className="container mx-auto w-full max-w-screen-xl">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col items-center justify-center gap-7 border-b border-primary-800 pb-12 px-4 lg:flex-row lg:justify-between lg:gap-0">
          <a href="/" className="flex justify-center lg:justify-start" aria-label="Buckets home">
            <img src="/footer/AAA-MAIN-WHITE.png" alt="Buckets logo" className="w-60" />
          </a>

          <nav className="flex gap-3" aria-label="Social media links">
            <a href="facebook" aria-label="Visit our Facebook page">
              <svg
                width="15"
                height="15"
                className="fill-palletteColor8 transition-all duration-300 ease-in-out hover:fill-white"
                viewBox="0 0 20 20"
                aria-hidden="true">
                <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"></path>
              </svg>
            </a>

            <a href="facebook" aria-label="Visit our Twitter page">
              <svg
                width="15"
                height="15"
                className="fill-palletteColor8 transition-all duration-300 ease-in-out hover:fill-white"
                viewBox="0 0 20 20"
                aria-hidden="true">
                <path d="M2.9 0C1.3 0 0 1.3 0 2.9v14.3C0 18.7 1.3 20 2.9 20h14.3c1.6 0 2.9-1.3 2.9-2.9V2.9C20 1.3 18.7 0 17.1 0H2.9zm13.2 3.8L11.5 9l5.5 7.2h-4.3l-3.3-4.4-3.8 4.4H3.4l5-5.7-5.3-6.7h4.4l3 4 3.5-4h2.1zM14.4 15 6.8 5H5.6l7.7 10h1.1z"></path>
              </svg>
            </a>

            <a href="facebook" aria-label="Visit our Instagram page">
              <svg
                width="15"
                height="15"
                className="fill-palletteColor8 transition-all duration-300 ease-in-out hover:fill-white"
                viewBox="0 0 20 20"
                aria-hidden="true">
                <circle cx="10" cy="10" r="3.3"></circle>
                <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z"></path>
              </svg>
            </a>
          </nav>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
          {/* Menu Items */}
          {FooterMenu.map((menu, index) => (
            <nav key={index} className="flex flex-col items-center sm:items-start">
              <h4 className="mb-4 font-fontInter text-sm font-semibold uppercase tracking-wider text-textMuted">{menu.title}</h4>
              <ul className="flex flex-col items-center gap-2 sm:items-start">
                {menu.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="font-fontInter text-sm text-slate-300 transition-colors hover:text-accent">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact Information */}
          <address className="flex flex-col items-center sm:items-start" style={{ fontStyle: 'normal' }}>
            <h4 className="mb-4 font-fontInter text-sm font-semibold uppercase tracking-wider text-textMuted">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center rounded-xl bg-primary-900/50 p-2 font-fontInter transition-colors hover:bg-primary-800/50">
                <div className="p-2">
                  <img className="size-5" src="/footer/Calling.png" alt="" aria-hidden="true" />
                </div>
                <div className="border-l border-primary-700 pl-3">
                  <p className="text-xs text-textMuted">Phone</p>
                  <a href="tel:(222)222-2222" className="text-sm text-white hover:text-accent transition-colors">
                    (222)222-2222
                  </a>
                </div>
              </div>

              <div className="flex items-center rounded-xl bg-primary-900/50 p-2 font-fontInter transition-colors hover:bg-primary-800/50">
                <div className="p-2">
                  <img className="size-5" src="/footer/Message.png" alt="" aria-hidden="true" />
                </div>
                <div className="border-l border-primary-700 pl-3">
                  <p className="text-xs text-textMuted">Email</p>
                  <a href="mailto:support@myfieldservice.com" className="text-sm text-white hover:text-accent transition-colors">
                    support@myfieldservice.com
                  </a>
                </div>
              </div>
            </div>
          </address>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full bg-black/20">
        <div className="container mx-auto max-w-screen-xl flex flex-col items-center justify-center gap-4 px-4 py-5 sm:flex-row sm:justify-between sm:gap-0">
          <p className="font-fontInter text-sm text-slate-400">
            © 2024 All rights reserved by{' '}
            <a href="/" className="text-white hover:text-accent transition-colors">
              My Field Service
            </a>
          </p>
          <nav className="flex space-x-6" aria-label="Legal links">
            <a href="#" className="font-fontInter text-sm text-slate-400 hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="font-fontInter text-sm text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
