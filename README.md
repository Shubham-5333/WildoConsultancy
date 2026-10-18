# Willdo Job Consultancy - Website

A modern, fast, and SEO-optimized frontend website for **Willdo Job Consultancy**, located in **Thamarassery, Kozhikode, Kerala, India**.

Designed to help job seekers discover the consultancy through Google searches, build trust, explore career guidance and recruitment services, and contact the consultancy directly via WhatsApp.

---

## 🚀 Technology Stack
- **Framework:** React 19 + Vite (TypeScript)
- **Styling:** Tailwind CSS (Custom Willdo navy blue `#1b3b87`, vibrant green `#22c55e`, and cyan accents)
- **Icons:** Lucide React
- **SEO & Metadata:** React Helmet Async + Native Pre-rendered Semantic HTML
- **Structured Data:** JSON-LD schema (`EmploymentAgency` & `LocalBusiness`)

---

## 🏢 Business Identity & Contact Information
- **Company Name:** Willdo Job Consultancy
- **Location:** Thamarassery, Kozhikode, Kerala, India - 673573
- **Primary Phone:** `+91 85903 00976` ([tel:+918590300976](tel:+918590300976))
- **Official WhatsApp:** [https://wa.me/918590300976](https://wa.me/918590300976)
- **Business Hours:** Monday – Saturday: 9:00 AM – 5:00 PM (Sunday: Closed / WhatsApp inquiries welcome)

---

## 📑 Website Sections Implemented

1. **Sticky Header & Responsive Navigation**
   - Official Willdo brand logo preserved in original proportions and colors
   - Navigation links: Home, About Us, Services, Job Opportunities, Testimonials, Contact
   - Direct telephone link and green WhatsApp button: *"Contact Us on WhatsApp"*
   - Accessible mobile slide-out menu

2. **Hero Section**
   - High-impact headline: *"Find the Right Job Opportunity with Willdo Job Consultancy"*
   - Naturally integrated primary keyword clusters:
     - `Job Consultancy in Thamarassery`
     - `Job Consultancy in Kozhikode`
     - `Jobs in Thamarassery`
   - Primary Calls to Action: *"Find Job Opportunities"* and *"Chat on WhatsApp"*
   - Authentic, high-resolution consultation photograph (`hero-consultation.jpg`)

3. **Verifiable Trust Indicators**
   - Local career guidance
   - Personalized job assistance
   - Easy WhatsApp communication
   - Support for job seekers
   - Strict transparency: No fabricated placement statistics, years, or exaggerated claims

4. **About Willdo Job Consultancy**
   - Heading: *"Your Local Career Partner in Thamarassery"*
   - Dedicated narrative explaining candidate-first guidance, interview preparation, and employer connections across Kozhikode and Malabar

5. **Our Services**
   - Job Search Assistance
   - Career Guidance
   - Recruitment Assistance
   - Employment Opportunity Guidance
   - Candidate-Employer Connections
   - Local Job Opportunity Support
   - Each card includes bulleted benefits and a direct WhatsApp inquiry button

6. **Interactive Job Opportunities Explorer**
   - Filterable categories: All, Sales & Retail, Finance & Accounts, Administration, Marketing, Customer Support, Operations
   - Live location badges (Thamarassery Town, Kozhikode, Calicut)
   - One-tap *"Apply via WhatsApp"* button with prefilled role title and location

7. **SEO-Focused Local Service Section**
   - Heading: *"Looking for a Job Consultancy Near You?"*
   - Separate, informative paragraphs for every target keyword theme:
     - `Job Consultancy in Thamarassery`
     - `Best Job Consultancy in Thamarassery`
     - `Job Placement Agency Thamarassery`
     - `Recruitment Agency in Thamarassery`
     - `Job Consultancy in Calicut`
     - `Job Consultancy in Kozhikode`
     - `Employment Agency Thamarassery`
     - `Jobs in Thamarassery`
     - `Job opportunities in Kozhikode`

8. **How It Works**
   - Step 1: Contact Willdo Job Consultancy
   - Step 2: Share career interests and relevant details
   - Step 3: Discuss suitable opportunities with the consultancy

9. **Testimonials with Realistic Imagery**
   - 3 authentic portrait headshots of candidates
   - Quotation cards with ratings and roles
   - Clear disclosure notice indicating sample status, with instructions on replacing with real permission-approved reviews before launch

10. **Dedicated WhatsApp Contact Hub**
    - Prominent WhatsApp number display: `+91 85903 00976`
    - Clickable telephone link `tel:+918590300976`
    - 4 one-tap prefilled message buttons
    - Custom message input field opening directly in WhatsApp / WhatsApp Web

11. **Contact & Location Section**
    - Centered in Thamarassery, Kozhikode, Kerala
    - Interactive Google Maps embed focused on Thamarassery
    - Editable business hours and consultation schedule

12. **Footer & Compliance**
    - Company logo, navigation links, quick contacts, and copyright
    - Interactive Privacy Policy & Terms modal

13. **Floating WhatsApp Button**
    - Fixed at the bottom-right corner with subtle pulse animation
    - Interactive quick-chat drawer with popular candidate inquiry prompts

---

## ⚙️ Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled assets will be placed in the `dist/` directory.

4. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🔍 Local SEO & Configuration Files
- **`index.html`**: Contains title tag, meta descriptions, OpenGraph tags, Twitter cards, canonical link, and JSON-LD structured data for `EmploymentAgency`. Also contains pre-rendered fallback markup so search engines can read core keywords before JavaScript hydration.
- **`public/robots.txt`**: Standard crawler instructions allowing search bots and linking to the sitemap.
- **`public/sitemap.xml`**: XML sitemap with all page section anchors and priorities.
- **`src/data/consultancyData.ts`**: Centralized, editable configuration file for company details, services, job opportunities, and testimonials.
