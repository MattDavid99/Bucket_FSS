import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

const servicesItems = [
  {
    id: 'client-profile',
    title: 'Client Profile',
    icon: '/buckets-pro/icon1.svg',
    content:
      'Customize your client profiles to save the details that matter most to your business, then search for them easily from the office or field.',
  },
  {
    id: 'job-history-logs',
    title: 'Job History and Logs',
    icon: '/buckets-pro/icon2.svg',
    content:
      "Have the full history of a client's past jobs available at your fingertips—no more scrambling for info in the middle of a phone call.",
  },
  {
    id: 'lead-management',
    title: 'Lead Management',
    icon: '/buckets-pro/icon3.svg',
    content: 'Track leads from first contact to final sale, and turn more prospects into customers with automated follow-ups',
  },
];

import { Button } from '@components/common';
const Service1 = () => {
  const [expanded, setExpanded] = useState([]);

  const onChange = (uuids) => {
    if (expanded.length > 0 && expanded[0] === uuids[0]) {
      setExpanded([]);
    } else {
      setExpanded(uuids);
    }
  };

  return (
    <div className="container relative m-auto mt-12 px-4 py-10 md:px-14">
      <div className="mb-2 text-center">
        <p className="font-fontOpen text-base text-heading6 font-medium text-palletteColor5">TRUSTED BY 400+ BUSINESSES</p>
        <h1 className="font-fontOpen text-headingMobile font-bold text-palletteColor9 md:text-heading2">
          How does client management work with My FIeld Service?
        </h1>
      </div>
      <div className="mt-5 grid grid-cols-1 grid-rows-1 items-start gap-6 md:grid-cols-2">
        <div className="relative">
          <h1 className="text-center font-fontOpen text-headingMobile font-bold text-palletteColor9 md:text-left md:text-heading3">
            Automate all of business operations
          </h1>
          <div className="my-4">
            <p className="text-center font-fontOpen text-base text-palletteColor6 md:text-left">
              Create detailed client profiles you can access fast, quickly find details from past jobs, keep organized records of client
              communication, and turn sales leads into customers
            </p>

            <p className="my-6 text-center font-fontOpen text-base text-palletteColor6 md:text-left">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            </p>
          </div>
          <div className="overflow-hidden">
            <Accordion onChange={onChange} allowZeroExpanded preExpanded={[]} className="accordion-custom">
              {servicesItems.map((item, index) => (
                <AccordionItem uuid={item.id} key={index} className="mb-4" dangerouslySetExpanded={expanded.includes(item.id)}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <button
                        className="accordion-toggle group inline-flex w-full items-center justify-between rounded-[0.625rem] border border-white p-4 text-left text-lg font-normal leading-8 text-palletteColor5 shadow-[0_0_1px_0_rgba(0,0,0,0.63)] hover:bg-palletteColor10"
                        aria-controls={`accordion-${index}`}>
                        <div className="flex items-center gap-2">
                          <img src={item.icon} className="size-3" alt="" />
                          <h5 className="font-fontOpen text-14 font-semibold">{item.title}</h5>
                        </div>
                        <motion.div
                          initial={false}
                          animate={{ rotate: expanded.includes(item.id) ? 180 : 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}>
                          {expanded.includes(item.id) ? (
                            <svg className="h-6 w-6 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M6 12H18"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"></path>
                            </svg>
                          ) : (
                            <svg className="h-6 w-6 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M6 12H18M12 18V6"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"></path>
                            </svg>
                          )}
                        </motion.div>
                      </button>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="!block">
                    <AnimatePresence mode="wait">
                      {expanded.includes(item.id) && (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: 'auto',
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                          }}
                          style={{ overflow: 'hidden' }}>
                          <div className="ml-2 p-2">
                            <p className="mb-3">{item.content}</p>
                            <Button variant="secondary">Start Free Trial {'>'}</Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="sticky top-0">
          <img src="/buckets-pro/service1.png" width="100%" height="100%" alt="" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Service1;
