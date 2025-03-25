import { memo } from 'react';
import NavMenu from '@pages/layout/menu/navMenu';

const Header = () => {
  return (
    <header>
      {/* Top Banner Section */}
      <section className="hidden bg-palletteColor3 font-fontbase md:block" role="banner" aria-label="Promotional banner">
        <div className="container-width container m-auto flex h-[2.31rem] max-w-screen-2xl flex-row items-center gap-[2.688rem] text-white">
          <article className="basis-3/4">
            <a
              href="/pricing"
              className="cursor-pointer text-14 underline hover:text-[#82ce51]"
              aria-label="View limited time offer details">
              Limited time offer: Save up to 40% <span className="font-bold text-[#82ce51]">Save now</span>
            </a>
          </article>
          {/* Contact Information */}
          <address className="flex items-center gap-[0.939rem]" role="contentinfo">
            <a href="tel:578-393-4937" className="flex items-center gap-[0.939rem]" aria-label="Call our support team">
              <svg className="size-[0.813rem]" style={{ fill: 'white' }} viewBox="0 0 15 15" aria-hidden="true">
                <path d="M12.3 15h-.2c-2.1-.2-4.1-1-5.9-2.1-1.6-1-3.1-2.5-4.1-4.1C1 7 .2 5 0 2.9-.1 1.8.7.8 1.8.7H4c1 0 1.9.7 2 1.7.1.6.2 1.1.4 1.7.3.7.1 1.6-.5 2.1l-.4.4c.7 1.1 1.7 2.1 2.9 2.9l.4-.5c.6-.6 1.4-.7 2.1-.5.6.3 1.1.4 1.7.5 1 .1 1.8 1 1.7 2v2c0 .5-.2 1-.6 1.4-.3.4-.8.6-1.4.6z"></path>
              </svg>
              <span className="w-24 text-[0.813rem]">573-393-4973</span>
            </a>
            <a href="mailto:support@myfieldservice.com" className="flex items-center gap-[0.939rem]" aria-label="Email our support team">
              <svg style={{ fill: 'white' }} className="size-[0.813rem]" viewBox="0 0 512 512" aria-hidden="true">
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
              </svg>
              <span className="text-[0.813rem]">support@myfieldservice.com</span>
            </a>
          </address>
        </div>
      </section>
      {/* Main Navigation */}
      <NavMenu />
    </header>
  );
};

// Memoize the header to prevent unnecessary re-renders
export default memo(Header);
