import { Link } from 'react-router-dom'
import { IsometricFactory } from './components'
import { FadeUp, FadeIn, FadeLeft, FadeRight, ScaleUp, StaggerChildren, StaggerSlow, StaggerItem } from './animations'

const strengths = [
  {
    num: '01',
    title: 'Thermal & Mechanical Design Expertise',
    description:
      'In-house engineering team with deep domain knowledge in thermal and mechanical design for heat transfer equipment across power, steel, and petrochemical sectors.',
  },
  {
    num: '02',
    title: 'Full-Service Vendor Model',
    description:
      'End-to-end capabilities spanning fabrication, machining, assembly, and commissioning — all under one roof with in-house resources and advanced machinery.',
  },
  {
    num: '03',
    title: 'Guaranteed Performance',
    description:
      'Every project is backed by third-party testing and verification capabilities, ensuring guaranteed thermal and mechanical performance of delivered equipment.',
  },
  {
    num: '04',
    title: 'Substantial Repeat Customer Base',
    description:
      'A testament to our reliability, a significant share of our business comes from repeat orders by blue-chip clients who trust our consistency and quality.',
  },
  {
    num: '05',
    title: 'Industry Expertise from Hundreds of Projects',
    description:
      'Decades of accumulated experience across hundreds of successfully delivered projects provides us unmatched insight into real-world engineering challenges.',
  },
  {
    num: '06',
    title: 'Continuous Improvement Mindset',
    description:
      'We invest in superior facilities, advanced software tools, skilled workforce development, and process upgrades to stay ahead of evolving industry demands.',
  },
]

const clients = [
  'BHEL',
  'NTPC',
  'L&T',
  'Toshiba',
  'Alstom',
  'GE Triveni',
  'Thermax',
  'GAIL',
  'IOCL',
  'ONGC',
  'Hindalco',
  'Jindal Steel',
  'Power Machines',
  'ISGEC',
  'Dodsal',
  'Andritz',
  'Voith',
  'Doosan Skoda',
  'NALCO',
  'RCF',
  'NEEPCO',
  'ACC',
  'Godawari Power',
]

export default function AboutPage() {
  return (
    <div>
      {/* ===== 1. Page Header ===== */}
      <section className="border-b border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-brand-600">
              Home
            </Link>{' '}
            / About
          </p>
          <h1 className="text-4xl font-bold text-gray-900 text-balance sm:text-5xl">
            About Laxmi Engineering
          </h1>
        </div>
      </section>

      {/* ===== 2. Company Story ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Narrative */}
            <FadeLeft>
              <div>
                <div className="mb-6 inline-flex items-center gap-2 border border-brand-200 bg-brand-50 px-4 py-2">
                  <div className="size-2 bg-brand-500" />
                  <span className="text-sm font-medium text-brand-900">
                    Established 1987
                  </span>
                </div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 text-balance">
                  38 Years of Engineering Excellence
                </h2>
                <p className="mb-4 text-lg text-gray-600 text-pretty">
                  Founded in 1987 in Bhopal, Madhya Pradesh, Laxmi Engineering
                  Industries (Bhopal) Pvt. Ltd. has grown over more than three
                  decades into one of India's leading manufacturers and suppliers
                  of made-to-order Heat Transfer Solutions and Equipment for Heavy
                  Industries.
                </p>
                <p className="mb-4 text-gray-600 text-pretty">
                  From a focused local operation to an enterprise that exports to
                  the UAE, Vietnam, Bangladesh, Pakistan, and Southeast Asian
                  countries, the company's trajectory reflects a deep commitment
                  to engineering precision and customer satisfaction.
                </p>
                <p className="text-gray-600 text-pretty">
                  Serving marquee clients across power, steel, petrochemical, and
                  refinery sectors, Laxmi Engineering has built a reputation for
                  delivering complex, high-specification equipment on time and to
                  exacting standards. Our substantial repeat customer base is a
                  direct reflection of the trust we have earned over 38 years.
                </p>

                {/* Client logos strip */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <p className="mb-3 text-xs font-medium uppercase text-gray-500">
                    Trusted by industry leaders
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {clients.slice(0, 12).map((c) => (
                      <span
                        key={c}
                        className="border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700"
                      >
                        {c}
                      </span>
                    ))}
                    <span className="border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-500">
                      +{clients.length - 12} more
                    </span>
                  </div>
                </div>
              </div>
            </FadeLeft>

            {/* Isometric Factory + Quality Badge */}
            <FadeRight>
              <div className="relative">
                <div className="border border-gray-200 bg-white p-8 shadow-xl">
                  <IsometricFactory />
                </div>
                <div className="absolute -bottom-6 -left-6 border-2 border-brand-500 bg-white p-6 shadow-lg">
                  <div className="mb-1 text-sm font-medium text-gray-900">
                    Quality Certified
                  </div>
                  <div className="text-2xl font-bold text-brand-600">
                    ISO 9001:2015
                  </div>
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ===== 3. Vision & Mission ===== */}
      <section className="border-y border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <FadeUp>
            <div className="mb-16">
              <p className="mb-3 text-sm font-medium uppercase text-brand-600">
                Our Vision
              </p>
              <blockquote className="max-w-4xl border-l-4 border-brand-500 pl-6 text-2xl font-bold text-gray-900 text-balance sm:text-3xl">
                "To become world leader in Heat Transfer Technology and bring
                positive impact in everyone's life through sustainable and ethical
                practices."
              </blockquote>
            </div>
          </FadeUp>

          {/* Mission Pillars */}
          <div>
            <p className="mb-6 text-sm font-medium uppercase text-brand-600">
              Our Mission
            </p>
            <StaggerChildren className="grid gap-6 md:grid-cols-3">
              {/* Pillar 1 */}
              <StaggerItem>
                <div className="border-2 border-gray-200 bg-gray-50 p-8">
                  <div className="mb-4 flex size-12 items-center justify-center bg-brand-500 text-lg font-bold text-white">
                    1
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900 text-balance">
                    Customers & Investors
                  </h3>
                  <p className="text-sm text-gray-600 text-pretty">
                    Value creation through continuous design upgrades and robust
                    quality systems that deliver measurable returns and long-term
                    partnerships.
                  </p>
                </div>
              </StaggerItem>

              {/* Pillar 2 */}
              <StaggerItem>
                <div className="border-2 border-gray-200 bg-gray-50 p-8">
                  <div className="mb-4 flex size-12 items-center justify-center bg-brand-500 text-lg font-bold text-white">
                    2
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900 text-balance">
                    Employees
                  </h3>
                  <p className="text-sm text-gray-600 text-pretty">
                    Long-term prosperity through high-performing teams,
                    transparent governance, and an environment that nurtures
                    professional growth.
                  </p>
                </div>
              </StaggerItem>

              {/* Pillar 3 */}
              <StaggerItem>
                <div className="border-2 border-gray-200 bg-gray-50 p-8">
                  <div className="mb-4 flex size-12 items-center justify-center bg-brand-500 text-lg font-bold text-white">
                    3
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900 text-balance">
                    Environment & Society
                  </h3>
                  <p className="text-sm text-gray-600 text-pretty">
                    Responsible resource use and zero-tolerance for hazardous
                    practices, ensuring our operations leave a positive footprint
                    on the communities we serve.
                  </p>
                </div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ===== 4. MD Quote ===== */}
      <section className="bg-gray-900 py-16">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <svg
              className="mx-auto mb-6 size-10 text-brand-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <blockquote className="mb-6 text-2xl font-bold text-white text-balance sm:text-3xl">
              "We bring technical knowledge, experience and resourcefulness to
              every project we undertake."
            </blockquote>
            <div>
              <p className="text-lg font-bold text-brand-400">KK Gurjar</p>
              <p className="text-sm text-gray-400">Managing Director</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ===== 5. Key Strengths / Why Choose Us ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12">
              <p className="mb-3 text-sm font-medium uppercase text-brand-600">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-bold text-gray-900 text-balance sm:text-4xl">
                Key Strengths
              </h2>
            </div>
          </FadeUp>

          <StaggerSlow className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s) => (
              <StaggerItem key={s.num}>
                <div
                  className="border-2 border-gray-200 bg-white p-8"
                >
                  <span className="mb-4 block font-bold text-brand-500 tabular-nums text-sm">
                    {s.num}
                  </span>
                  <h3 className="mb-3 text-lg font-bold text-gray-900 text-balance">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-pretty">
                    {s.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerSlow>
        </div>
      </section>

      {/* ===== 6. Manufacturing Facilities ===== */}
      <section className="border-y border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12">
              <p className="mb-3 text-sm font-medium uppercase text-brand-600">
                Infrastructure
              </p>
              <h2 className="text-3xl font-bold text-gray-900 text-balance sm:text-4xl">
                Manufacturing Facilities
              </h2>
            </div>
          </FadeUp>

          {/* Two Facility Cards */}
          <StaggerChildren className="mb-10 grid gap-6 md:grid-cols-2">
            {/* Unit I */}
            <StaggerItem>
              <div className="border-2 border-gray-200 bg-gray-50 p-8">
                <div className="mb-4 inline-flex items-center gap-2 border border-brand-200 bg-brand-50 px-3 py-1">
                  <div className="size-2 bg-brand-500" />
                  <span className="text-xs font-medium text-brand-900">
                    Unit I
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Head Office
                </h3>
                <p className="text-sm text-gray-600 text-pretty">
                  Plot No. 72-A&B, Sector-I, Industrial Area, Govindpura, Bhopal
                  (M.P.) 462023
                </p>
              </div>
            </StaggerItem>

            {/* Unit II */}
            <StaggerItem>
              <div className="border-2 border-gray-200 bg-gray-50 p-8">
                <div className="mb-4 inline-flex items-center gap-2 border border-brand-200 bg-brand-50 px-3 py-1">
                  <div className="size-2 bg-brand-500" />
                  <span className="text-xs font-medium text-brand-900">
                    Unit II
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Factory</h3>
                <p className="text-sm text-gray-600 text-pretty">
                  Industrial Area, Jhalar Kalan, Mandideep (Bhopal) 462046
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>

          {/* Capability Stat Cards */}
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StaggerItem>
              <div className="border-l-4 border-brand-500 bg-gray-50 p-6">
                <h4 className="mb-1 text-sm font-medium text-gray-500">
                  Advanced Machinery
                </h4>
                <p className="text-sm text-gray-700 text-pretty">
                  CNC machines, plasma cutters, rolling machines, and automated
                  welding equipment
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border-l-4 border-brand-500 bg-gray-50 p-6">
                <h4 className="mb-1 text-sm font-medium text-gray-500">
                  Quality Testing Lab
                </h4>
                <p className="text-sm text-gray-700 text-pretty">
                  In-house NDT, hydrostatic testing, and material analysis
                  facilities
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border-l-4 border-brand-500 bg-gray-50 p-6">
                <h4 className="mb-1 text-sm font-medium text-gray-500">
                  Skilled Workforce
                </h4>
                <p className="text-sm text-gray-700 text-pretty">
                  Team of certified welders, engineers, and quality control
                  professionals
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border-l-4 border-brand-500 bg-gray-50 p-6">
                <h4 className="mb-1 text-sm font-medium text-gray-500">
                  Heavy Lifting Capacity
                </h4>
                <p className="text-sm text-gray-700 text-pretty">
                  EOT cranes with up to 20-ton capacity for handling large
                  components
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>

          {/* Combined Floor Area Stat */}
          <FadeUp>
            <div className="mt-10 flex items-center gap-6 border-2 border-gray-200 bg-white p-8">
              <div className="text-5xl font-bold text-gray-900 tabular-nums">
                100,000
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">
                  Sq Ft Combined Manufacturing Floor
                </p>
                <p className="text-sm text-gray-600 text-pretty">
                  Across two facilities in Bhopal, equipped with advanced
                  machinery and in-house testing infrastructure
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== 7. Quality & Certifications ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12">
              <p className="mb-3 text-sm font-medium uppercase text-brand-600">
                Quality Assurance
              </p>
              <h2 className="text-3xl font-bold text-gray-900 text-balance sm:text-4xl">
                Quality & Certifications
              </h2>
            </div>
          </FadeUp>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* ISO Highlight Box */}
            <FadeLeft>
              <div className="border-2 border-brand-500 bg-brand-50 p-8">
                <div className="mb-4 flex items-start gap-4">
                  <svg
                    className="size-8 shrink-0 text-brand-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      ISO 9001:2015 Certified
                    </h3>
                    <p className="mt-2 text-sm text-gray-700 text-pretty">
                      Our quality management system is certified to ISO 9001:2015,
                      reflecting our commitment to maintaining the highest
                      standards across every phase of manufacturing.
                    </p>
                  </div>
                </div>
              </div>
            </FadeLeft>

            {/* Quality Control Description */}
            <FadeRight>
              <div className="border-2 border-gray-200 bg-white p-8">
                <h3 className="mb-4 text-lg font-bold text-gray-900">
                  Stringent Quality Control
                </h3>
                <p className="mb-4 text-sm text-gray-600 text-pretty">
                  Our quality assurance process spans the entire project lifecycle
                  — from the delivery of raw material to final dispatch. Every
                  stage is inspected and documented to ensure compliance with
                  specifications.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 block size-1.5 shrink-0 bg-brand-500" />
                    Structural integrity verification
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 block size-1.5 shrink-0 bg-brand-500" />
                    Performance validation and testing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 block size-1.5 shrink-0 bg-brand-500" />
                    Durability and appearance standards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 block size-1.5 shrink-0 bg-brand-500" />
                    Full product traceability
                  </li>
                </ul>
              </div>
            </FadeRight>
          </div>

          {/* Compliance Standards */}
          <StaggerChildren className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { code: 'ASME', label: 'Boiler & Pressure Vessel Code' },
              { code: 'TEMA', label: 'Tubular Exchanger Standards' },
              { code: 'API', label: 'American Petroleum Institute' },
              { code: 'IBR', label: 'Indian Boiler Regulations' },
            ].map((std) => (
              <StaggerItem key={std.code}>
                <div
                  className="border-2 border-gray-200 bg-white p-6 text-center"
                >
                  <p className="text-2xl font-bold text-gray-900">{std.code}</p>
                  <p className="mt-1 text-xs text-gray-500">{std.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== 8. CTA ===== */}
      <section className="border-t border-gray-200 bg-gray-900 py-20">
        <FadeUp>
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-white text-balance sm:text-4xl">
              Partner With Us
            </h2>
            <p className="mb-8 text-lg text-gray-300 text-pretty">
              Whether you need a custom heat exchanger, a turnkey fabrication
              solution, or expert engineering consultation, our team is ready to
              deliver.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-coral-500 px-10 py-4 text-lg font-medium text-white hover:bg-coral-600"
            >
              Get in Touch
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  )
}
