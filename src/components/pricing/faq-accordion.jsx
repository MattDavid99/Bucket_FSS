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
        question: "How much does My Field Service cost?",
        answer: "Plans start at $49 per user per month. Choose Basic, Essentials, or MAX depending on your team size and needs. All plans include core features like scheduling, dispatching, and invoicing.",
    },
    {
        question: "What's included in each plan?",
        answer: "Every plan includes scheduling, dispatching, estimates, invoicing, and customer management. Higher tiers add features like advanced reporting, integrations, and priority support. See the feature comparison above for details.",
    },
    {
        question: "How does pricing compare to other tools?",
        answer: "We're priced competitively with other field service software, but we include more features at each tier. Most customers find they can replace 2-3 separate tools with My Field Service.",
    },
    {
        question: "Do I have to sign a contract?",
        answer: "No. All plans are month-to-month and you can cancel anytime. We believe you'll stay because the product works, not because you're locked in.",
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
