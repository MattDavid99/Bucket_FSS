import { useState } from "react"
import { Button } from "@components/common"
const PickPlan = () => {
    const [checked, setChecked] = useState(true)
    return (
        <section className="mt-10 bg-white py-6 sm:py-8 md:mt-24 lg:py-12">
            <div className="mx-auto px-2 md:max-w-screen-xl md:px-4 lg:max-w-screen-2xl">
                <div className="mb-6 text-center">
                    <p className="text-heading6 text-palletteColor5">
                        PICK YOUR PLAN
                    </p>
                    <h1 className="font-fontOpen text-heading2 font-bold text-palletteColor9">
                        Invest in easy to use solutions
                    </h1>

                    <label className="mx-auto flex cursor-pointer flex-row justify-center space-x-4 pl-24">
                        <span className="font-fontOpen text-palletteColor5">
                            Monthly
                        </span>

                        <div className=" ">
                            <input
                                type="checkbox"
                                value={checked}
                                onChange={() => setChecked(!checked)}
                                className="peer sr-only"
                                defaultChecked
                            />
                            <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700"></div>
                        </div>
                        <div>
                            <span className="flex flex-col font-fontOpen text-palletteColor5 md:flex-row">
                                Yearly
                                <span className="ml-4 rounded bg-yellow-400 px-2.5 py-0.5 text-sm font-medium">
                                    20% discount
                                </span>
                            </span>
                        </div>
                    </label>
                </div>

                <div className="mb-6 grid w-max max-w-fit gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
                    <div className="flex flex-col">
                        <div className="mb-12 2xl:w-[30rem]">
                            <div className="bg-palletteColor10">
                                <div className="p-4 pt-6">
                                    <div className="my-2 text-left font-fontOpen text-2xl font-bold text-palletteColor9">
                                        Basic
                                    </div>

                                    <p className="mx-auto mb-8 text-left font-fontOpen text-palletteColor5">
                                        Solutions to optimize and streamline
                                        your business.
                                    </p>

                                    <div className="mb-4 flex flex-col justify-start">
                                        <span className="font-fontOpen text-heading2 font-bold text-palletteColor9">
                                            {checked ? (
                                                <span>$49</span>
                                            ) : (
                                                <span>$69</span>
                                            )}
                                        </span>
                                        <span className="font-fontOpen text-14 text-palletteColor5">
                                            per agent per month
                                        </span>
                                    </div>

                                    <a href="#">
                                        <Button size="full">Get Started</Button>
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-3 p-4">
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Credit card rates as low as{" "}
                                        <span className="font-bold">2.59%</span>
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Drag & drop scheduling
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Real-time dispatching
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Paperless invoicing
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Easy estimates
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Customizable text notifications
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        In-app employee chat
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Track & report cost of jobs
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col ring-2 ring-palletteColor1">
                        <div className="mb-12">
                            <div className="bg-[#C5E2FF]">
                                <div className="p-4 pt-6">
                                    <div className="my-2 flex items-center gap-4 text-left font-fontOpen text-2xl font-bold text-palletteColor9">
                                        Essentials
                                        <span className="me-2 rounded bg-white px-2.5 py-0.5 font-fontOpen text-sm font-semibold text-palletteColor1">
                                            MOST POPULAR
                                        </span>
                                    </div>

                                    <p className="mx-auto mb-8 text-left font-fontOpen text-palletteColor5">
                                        Advanced tools to simplify and scale
                                        your operations.
                                    </p>

                                    <div className="mb-4 flex flex-col justify-start">
                                        <span className="font-fontOpen text-heading2 font-bold text-palletteColor9">
                                            {checked ? (
                                                <span>$129</span>
                                            ) : (
                                                <span>$169</span>
                                            )}
                                        </span>
                                        <span className="font-fontOpen text-14 text-palletteColor5">
                                            per agent per month
                                        </span>
                                    </div>

                                    <a href="#">
                                        <Button size="full">Get Started</Button>
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-3 p-4">
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen font-bold text-palletteColor5">
                                        All Basic features
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Drag & drop scheduling
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Real-time dispatching
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Paperless invoicing
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Easy estimates
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Customizable text notifications
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        In-app employee chat
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Track & report cost of jobs
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-12">
                            <div className="bg-palletteColor10">
                                <div className="p-4 pt-6">
                                    <div className="my-2 text-left font-fontOpen text-2xl font-bold text-palletteColor9">
                                        MAX
                                    </div>

                                    <p className="mx-auto mb-8 text-left font-fontOpen text-palletteColor5">
                                        Ultimate plans for established and
                                        growing businesses.
                                    </p>

                                    <div className="mb-4 flex flex-col justify-start">
                                        <span className="font-fontOpen text-heading2 font-bold text-palletteColor9">
                                            {checked ? (
                                                <span>$329</span>
                                            ) : (
                                                <span>$394</span>
                                            )}
                                        </span>
                                        <span className="font-fontOpen text-14 text-palletteColor5">
                                            per agent per month
                                        </span>
                                    </div>

                                    <a href="#">
                                        <Button size="full">Get Started</Button>
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-3 p-4">
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen font-bold text-palletteColor5">
                                        All Esseintials features
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Drag & drop scheduling
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Real-time dispatching
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Paperless invoicing
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Easy estimates
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Customizable text notifications
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        In-app employee chat
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-palletteColor1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="font-fontOpen text-palletteColor5">
                                        Track & report cost of jobs
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PickPlan
