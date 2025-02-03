# Best Scheduling
## Project Structure 🏗

```
.
└── gobukets
    ├── Dockerfile
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── Pasted image.png
    ├── postcss.config.js
    ├── public
    ├── README.md
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── components
    │   │   ├── buckets-pro
    │   │   │   ├── features.jsx
    │   │   │   ├── get-in-touch.jsx
    │   │   │   ├── grid-services.jsx
    │   │   │   ├── hero-section.jsx
    │   │   │   ├── index.jsx
    │   │   │   ├── service1.jsx
    │   │   │   ├── service2.jsx
    │   │   │   └── testimonials.jsx
    │   │   ├── commercial-cleaning-copy
    │   │   │   ├── free-trail-section.jsx
    │   │   │   ├── index.jsx
    │   │   │   ├── service1-section.jsx
    │   │   │   ├── service2-section.jsx
    │   │   │   └── service3-section.jsx
    │   │   ├── common
    │   │   │   ├── button.jsx
    │   │   │   ├── calendly.jsx
    │   │   │   ├── card-slider.jsx
    │   │   │   ├── email-input.jsx
    │   │   │   ├── get-in-touch2.jsx
    │   │   │   ├── get-in-touch.jsx
    │   │   │   ├── index.jsx
    │   │   │   ├── stars.jsx
    │   │   │   └── testimonial.jsx
    │   │   ├── contact
    │   │   │   ├── call-us-now-section.jsx
    │   │   │   ├── features1.jsx
    │   │   │   ├── features2.jsx
    │   │   │   ├── google-map.jsx
    │   │   │   └── index.jsx
    │   │   ├── Counter.jsx
    │   │   ├── landing-page
    │   │   │   ├── get-in-touch.jsx
    │   │   │   ├── index.jsx
    │   │   │   ├── services.jsx
    │   │   │   ├── showcase-solutions.jsx
    │   │   │   ├── slider.jsx
    │   │   │   └── testimonials.jsx
    │   │   └── pricing
    │   │       ├── faq-accordion.jsx
    │   │       ├── index.jsx
    │   │       ├── pick-plan.jsx
    │   │       └── showcase-solutions.jsx
    │   ├── index.css
    │   ├── lib
    │   │   └── utils.js
    │   ├── main.jsx
    │   ├── pages
    │   │   ├── bucketsProPage.jsx
    │   │   ├── commercialCleaningCopyPage.jsx
    │   │   ├── contactPage.jsx
    │   │   ├── index.jsx
    │   │   ├── landingPage.jsx
    │   │   ├── layout
    │   │   │   ├── footer-items.js
    │   │   │   ├── footer.jsx
    │   │   │   ├── header.jsx
    │   │   │   ├── layout.jsx
    │   │   │   └── menu
    │   │   │       ├── menu-items.js
    │   │   │       ├── navMenu.jsx
    │   │   │       └── navMenu-mobile.jsx
    │   │   └── pricingPage.jsx
    │   └── routes
    │       └── router.jsx
    ├── tailwind.config.js
    ├── vercel.json
    └── vite.config.js

```

` 📦 src/components/`

contain all the components used in the project

` 📦 src/pages/`

contain all the pages used in the project

` 📦 src/routes/`

contain the router file

` 📦 src/lib/`

contain the utils file

` 📦 src/pages/layout/`

contain the layout files like the header and footer

` 📦 src/pages/layout/menu/`

contain the menu items and the menu components

` 📦 src/components/common/`

contain the common components used in the project

## Technologies Used 🛠

```json

   "dependencies": {
       "@szhsin/react-accordion": "^1.2.4",
       "class-variance-authority": "^0.7.0",
       "eslint-config-prettier": "^9.1.0",
       "framer-motion": "^11.2.13",
       "prettier": "^3.3.2",
       "prettier-plugin-tailwindcss": "^0.6.5",
       "react": "^18.3.1",
       "react-accessible-accordion": "^5.0.0",
       "react-calendly": "^4.3.1",
       "react-dom": "^18.3.1",
       "react-multi-carousel": "^2.8.5",
       "react-player": "^2.16.0",
       "react-router": "^6.24.1",
       "react-router-dom": "^6.24.1",
       "tailwind-merge": "^2.4.0"
   },
   "devDependencies": {
       "@types/react": "^18.3.3",
       "@types/react-dom": "^18.3.0",
       "@vitejs/plugin-react": "^4.3.1",
       "autoprefixer": "^10.4.19",
       "eslint": "^8.57.0",
       "eslint-plugin-react": "^7.34.2",
       "eslint-plugin-react-hooks": "^4.6.2",
       "eslint-plugin-react-refresh": "^0.4.7",
       "postcss": "^8.4.39",
       "tailwindcss": "^3.4.4",
       "vite": "^5.3.1"
   }
```

`Framer motion` - Used for animations

`React Calendly` - Used for the calendly component

`React Multi Carousel` - Used for the carousel component

`React Player` - Used for the video player component

`React Router` - Used for the routing

`Tailwind Merge` - Used for the tailwindcss

`Tailwindcss` - Used for the styling

`Vite` - Used for the bundling

`Eslint` - Used for the linting

`Prettier` - Used for the formatting

`React Accessible Accordion` - Used for the accordion component

`React Accordion` - Used for the accordion component

`Class Variance Authority` - Used for the class variance

`React Router Dom` - Used for the routing

## Table Guide 📚

### How To Run it Locally

2- Install the dependencies

```bash
npm install
```

3- Run the Development Server

```bash
npm run dev
```

### How To Host it on Docker

I already created a Dockerfile for you, you can use it to host the website on docker

1- Build the Image

```bash
docker build -t gobuckets .
```

2- Run the Container

```bash
docker run -p 8080:8080 gobuckets
```

The App should be running on `http://localhost:8080`

### How To Add a New Section

Add a new Component in `src/components/` folder and create a folder for the page and add the components there
and don't forget to export the new component in `src/components/{folder}/index.jsx` like this

```js
export { default as FreeTrailSection } from "./free-trail-section"
export { default as Service1Section } from "./service1-section"
export { default as Service2Section } from "./service2-section"
export { default as Service3Section } from "./service3-section"

export { default as ExampleSection } from "./example-section"
```

Registring the components provide a better way to import the components in the page and make the code more readable

```jsx
import {
    FreeTrailSection,
    Service1Section,
    Service2Section,
    Service3Section,
} from "@components/commercial-cleaning-copy/"
```

### How To Add a New Page

1- Go to `src/pages` and create a new Component Page

2- Register it in `src/pages/index.js` like this

```js
export { default as LandingPage } from "./landingPage"
export { default as CommercialCleaningPage } from "./commercialCleaningCopyPage"
export { default as BucketsProPage } from "./bucketsProPage"
export { default as ContactPage } from "./contactPage"
export { default as PricingPage } from "./pricingPage"

// Add Here 👇
export { default as Example } from "./examplePage"
```

3- go to `src/routes/router.js` and add the new route

```jsx

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route
                    path="/commercial-cleaning-copy"
                    element={<CommercialCleaningPage />}
                />

                <Route path="/buckets-pro" element={<BucketsProPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/pricing" element={<PricingPage />} />

                // Add Here 👇

                <Route path="/example" element={<ExamplePage />} />
            </Route>
        </Route>,
    ),
```

### How to Update Footer Menu

go to `src/pages/layout/footer-items.js` and update the items

```js

export const FooterMenu = [
    {
        title: "Home Services",
        links: [
            {
                title: "Plumbing",
                link: "javascript:;",
            },
            {
                title: "Electrical Services",
                link: "javascript:;",
            },
            {
                title: "HVAC",
                link: "javascript:;",
            },
            {
```

### How to add a new menu item

1- Go to `src/layout/menu/menu-items` and add the new item
same as the Menu From GoBuckets there' is a title and items which is an array of objects that contains the subItems

```js

export const MenuItems = [
    {
        title: "Industries",
        link: "/commercial-cleaning-copy",
        items: [
            {
                title: "Home Service",
                subItems: [
                    {
                        title: "Plumbing",
                        icon: "/navMenu/plumbing.svg",
                        link: "/commercial-cleaning-copy",
                    },
                    {

```

### Tailwind Config

```js
    theme: {
        extend: {
            fontFamily: {
                fontOpen: ["Open Sans", "sans-serif"],
                fontBebas: ["Bebas Neue", "sans-serif"],
                fontRoboto: ["Roboto", "sans-serif"],
                fontInter: ["Inter", "sans-serif"],
                fontPoppins: ["Poppins", "sans-serif"],
            },
            colors: {
                palletteColor1: "#008CFF",
                palletteColor2: "#ECF8FF",
                palletteColor3: "#252525",
                palletteColor4: "#2C2C32",
                palletteColor5: "#333333",
                palletteColor6: "#7A7A93",
                palletteColor7: "#ffffff",
                palletteColor8: "rgba(255, 255, 255, 0.8)",
                palletteColor9: "#383940",
                palletteColor10: "#F3F7FB",
                palletteColor11: "rgba(255, 255, 255, 0.8)",
                palletteColor12: "#E8EDF0",
                palletteColor13: "#6d7882",
                palletteColor14: "#666666",
            },
            fontSize: {
                fontbase: "1rem",
                buttonFont: "0.9375rem",
                14: "0.875rem",
                18: "1.125rem",
                headingLarge: "4.375rem",
                heading1: "2.5rem",
                heading2: "2.188rem",
                heading3: "1.875rem",
                heading4: "1.563rem",
                heading5: "1.25rem",
                heading6: "0.9380rem",
                headingLargeMobile: "2.125rem",
                headingMobile: "1.75rem",
            },
            lineHeight: {
                fontline: "1.65rem",
            },
            fontWeight: {
                fontbase: 400,
                buttonFont: 600,
            },
            scale: {
                110: "1.1",
            },
            backgroundImage: {
                "hero-buckets-pro": "url('/buckets-pro/bg.jpg')",
            },
        },
    },

```

There's a lot of font sizes in the project i manage to use other than this but this is the main font sizes

### How to handle nested routes

Go to `src/pages/layout/menu/menu-items` and add the nested routes

```js
  {
    title: "Products",
    // Don't Forget to add the link so The Blue Color will be applied when the sub Item is clicked
    link: "/buckets-pro",

    items: [
      {
        title: "JOB MANAGEMENT",
        subItems: [
          { title: "Contractor Software", link: "" },
          { title: "Dispatch and Scheduling Software", link: "" },
        ],
      },
      // Here 👇
      {
        title: "CUSTOMER SERVICE",
        subItems: [{ title: "Buckets Pro+", link: "/buckets-pro/d" }],
      },
      {
        title: "BUSINESS OPERATIONS",
        subItems: [
          { title: "Tools and Shop Software", link: "" },
          { title: "Field Service Software", link: "" },
        ],
      },
    ],
  },
```

aswell as in `src/routes/router.js` add the nested routes

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route
          path="/commercial-cleaning-copy"
          element={<CommercialCleaningPage />}
        />

      { /* Add Here Nested Routes */ }
        <Route path="buckets-pro">
          <Route path="d" element={<BucketsProPage />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Route>
    </Route>,
  ),

```

![Pasted image](https://github.com/DoffuXx/gobukets/assets/96635567/b7c9ac69-e1fe-403e-b225-40b91a9e7bea)
