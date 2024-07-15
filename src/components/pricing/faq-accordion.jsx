/* eslint-disable react/prop-types */
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion"
import chevron from "/faq/chevron-down.svg"

const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={({ state: { isEnter } }) => (
            <>
                <img
                    className={`mr-4 transition-transform duration-200 ease-out ${
                        isEnter ? "rotate-180" : "-rotate-90"
                    }`}
                    src={chevron}
                    alt="Chevron"
                />

                <div
                    className="font-fontOpen font-semibold text-palletteColor9"
                    style={{ fontWeight: isEnter ? "bolder" : "" }}
                >
                    {header}
                </div>
            </>
        )}
        className="border-b"
        buttonProps={{
            className: () =>
                `flex w-full p-4 text-left bg-slate-200"
        }`,
        }}
        contentProps={{
            className: "transition-height duration-300 ease-out",
        }}
        panelProps={{ className: "p-4" }}
    />
)

const faqData = [
    {
        question: "How much does Buckets cost per month ?",
        answer: "Buckets costs vary by plan. Customers can choose from Basic, Essentials, or Max plan, with pricing starting at $49 per month.",
    },
    {
        question: "What does my Buckets plan include?",
        answer: "Features vary by plan, but every Buckets customer gets access to estimates, scheduling, and invoicing tools that make running a service business easier. If you have questions about specifics included in our plans, call us at 123-456-7891 to get started with the right plan for you.",
    },
    {
        question:
            "How does Buckets’s pricing compare against other field service management software?",
        answer: "Buckets is competitively-priced against other field service management apps. And, with Buckets, you get the features you need to grow your business so you can still make a profit while investing in software that helps you track jobs, keep up to date with employees, and view reporting data you can use to be more profitable. You won’t find a better company to work with to grow your business.",
    },
    {
        question:
            "Will I be locked into a contract when I sign up for Buckets?",
        answer: "We don’t force a contract on you like other field service management companies will. If you’re ever dissatisfied (which we doubt that you will be) there’ll be no contractual details to deal with.",
    },
]

const FaqAccordion = () => {
    return (
        <section className="container mx-auto p-8 md:p-12">
            <div className="mx-2 my-4 border-t">
                {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
                <Accordion transition transitionTimeout={200}>
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            header={faq.question}
                            className="border-b"
                        >
                            <p>{faq.answer}</p>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
export default FaqAccordion
