import { useState } from "react"
import { Button } from "@components/common"

const PickPlan = () => {
    const [checked, setChecked] = useState(true)
    return (
        <section className="py-16 md:py-24 lg:py-32 bg-white">
            <div className="container max-w-screen-xl mx-auto px-4 flex flex-col items-center">
                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="inline-block font-fontInter text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                        PICK YOUR PLAN
                    </span>
                    <h1 className="font-fontInter text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mb-6">
                        Simple pricing. No contracts.
                    </h1>

                    {/* Toggle */}
                    <label className="mx-auto flex cursor-pointer flex-row justify-center items-center space-x-4">
                        <span className={`font-fontInter transition-colors ${!checked ? 'text-primary-950 font-semibold' : 'text-textSecondary'}`}>
                            Monthly
                        </span>

                        <div className="relative">
                            <input
                                type="checkbox"
                                value={checked}
                                onChange={() => setChecked(!checked)}
                                className="peer sr-only"
                                defaultChecked
                            />
                            <div className="w-14 h-7 rounded-full bg-slate-200 peer-checked:bg-accent
                                          after:absolute after:start-[3px] after:top-[3px]
                                          after:h-[22px] after:w-[22px] after:rounded-full
                                          after:bg-white after:shadow-md
                                          after:transition-all after:content-['']
                                          peer-checked:after:translate-x-7
                                          transition-colors duration-300"></div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className={`font-fontInter transition-colors ${checked ? 'text-primary-950 font-semibold' : 'text-textSecondary'}`}>
                                Yearly
                            </span>
                            <span className="rounded-full bg-accent/10 text-accent px-3 py-1 text-sm font-semibold">
                                Save 20%
                            </span>
                        </div>
                    </label>
                </div>

                {/* Pricing Cards */}
                <div className="mb-8 grid w-full max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {/* Basic Plan */}
                    <div className="flex flex-col bg-white rounded-2xl shadow-soft hover:shadow-hover
                                  transition-all duration-300 overflow-hidden border border-slate-100">
                        <div className="bg-surface p-6 lg:p-8">
                            <h3 className="font-fontInter text-2xl font-bold text-primary-950 mb-2">
                                Basic
                            </h3>
                            <p className="font-fontInter text-textSecondary mb-6">
                                For solo operators and small teams getting started.
                            </p>
                            <div className="mb-6">
                                <span className="font-fontBebas text-5xl font-bold text-primary-950">
                                    {checked ? "$49" : "$69"}
                                </span>
                                <span className="font-fontInter text-sm text-textSecondary ml-2">
                                    /agent/month
                                </span>
                            </div>
                            <Button size="full">Get Started</Button>
                        </div>

                        {/* Features */}
                        <div className="p-6 lg:p-8 space-y-4">
                            {[
                                'Credit card rates as low as 2.59%',
                                'Drag & drop scheduling',
                                'Real-time dispatching',
                                'Paperless invoicing',
                                'Easy estimates',
                                'Customizable text notifications',
                                'In-app employee chat',
                                'Track & report cost of jobs',
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-fontInter text-sm text-textSecondary">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Essentials Plan - Most Popular */}
                    <div className="flex flex-col bg-white rounded-2xl shadow-hover
                                  ring-2 ring-accent
                                  transition-all duration-300 overflow-hidden relative">
                        {/* Popular Badge */}
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                            MOST POPULAR
                        </div>

                        <div className="bg-primary-100 p-6 lg:p-8">
                            <h3 className="font-fontInter text-2xl font-bold text-primary-950 mb-2">
                                Essentials
                            </h3>
                            <p className="font-fontInter text-textSecondary mb-6">
                                For growing teams that need more automation.
                            </p>
                            <div className="mb-6">
                                <span className="font-fontBebas text-5xl font-bold text-primary-950">
                                    {checked ? "$129" : "$169"}
                                </span>
                                <span className="font-fontInter text-sm text-textSecondary ml-2">
                                    /agent/month
                                </span>
                            </div>
                            <Button size="full">Get Started</Button>
                        </div>

                        {/* Features */}
                        <div className="p-6 lg:p-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-fontInter text-sm text-primary-950 font-semibold">All Basic features</span>
                            </div>
                            {[
                                'Drag & drop scheduling',
                                'Real-time dispatching',
                                'Paperless invoicing',
                                'Easy estimates',
                                'Customizable text notifications',
                                'In-app employee chat',
                                'Track & report cost of jobs',
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-fontInter text-sm text-textSecondary">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MAX Plan */}
                    <div className="flex flex-col bg-white rounded-2xl shadow-soft hover:shadow-hover
                                  transition-all duration-300 overflow-hidden border border-slate-100">
                        <div className="bg-surface p-6 lg:p-8">
                            <h3 className="font-fontInter text-2xl font-bold text-primary-950 mb-2">
                                MAX
                            </h3>
                            <p className="font-fontInter text-textSecondary mb-6">
                                For established businesses with multiple crews.
                            </p>
                            <div className="mb-6">
                                <span className="font-fontBebas text-5xl font-bold text-primary-950">
                                    {checked ? "$329" : "$394"}
                                </span>
                                <span className="font-fontInter text-sm text-textSecondary ml-2">
                                    /agent/month
                                </span>
                            </div>
                            <Button size="full">Get Started</Button>
                        </div>

                        {/* Features */}
                        <div className="p-6 lg:p-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-fontInter text-sm text-primary-950 font-semibold">All Essentials features</span>
                            </div>
                            {[
                                'Drag & drop scheduling',
                                'Real-time dispatching',
                                'Paperless invoicing',
                                'Easy estimates',
                                'Customizable text notifications',
                                'In-app employee chat',
                                'Track & report cost of jobs',
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-fontInter text-sm text-textSecondary">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PickPlan
