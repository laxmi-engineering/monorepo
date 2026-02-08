import { Link } from 'react-router-dom'
import {
  IsometricFactory,
  IsometricPipeline,
  IsometricHeatExchanger,
  IsometricCoolingTower,
  IsometricBoiler,
  IsometricPressureVessel,
  IsometricMap,
} from './components'
import { FadeUp, FadeLeft, FadeRight, ScaleUp, StaggerChildren, StaggerSlow, StaggerItem } from './animations'

const stats = [
  { value: '38+', label: 'Years', sublabel: 'Excellence' },
  { value: '100,000', label: 'sq ft', sublabel: 'Manufacturing' },
  { value: 'ISO 9001:2015', label: '', sublabel: 'Certified' },
  { value: '500+', label: 'TPM', sublabel: 'Capacity' },
]

const processSteps = [
  {
    number: '01',
    title: 'Design & Engineering',
    description:
      'CAD/CAM design with comprehensive thermal and structural analysis to meet exact project specifications.',
  },
  {
    number: '02',
    title: 'Material Processing',
    description:
      'Quality material selection and precision cutting using advanced CNC and plasma cutting equipment.',
  },
  {
    number: '03',
    title: 'Fabrication',
    description:
      'Advanced welding techniques and precision assembly by certified welders and skilled technicians.',
  },
  {
    number: '04',
    title: 'Quality Testing',
    description:
      'Rigorous inspection including NDT, hydrostatic testing, and performance validation before dispatch.',
  },
]

const products = [
  {
    title: 'Shell & Tube Heat Exchangers',
    description:
      'Precision-engineered for efficient thermal management across power, petrochemical, and refinery applications.',
    Icon: IsometricHeatExchanger,
  },
  {
    title: 'Air Cooled Systems',
    description:
      'Optimized heat rejection systems with finned tube technology for demanding industrial environments.',
    Icon: IsometricCoolingTower,
  },
  {
    title: 'Boilers & Economizers',
    description:
      'High-efficiency waste heat recovery boilers and economizers for thermal power plants and process industries.',
    Icon: IsometricBoiler,
  },
  {
    title: 'Pressure Vessels',
    description:
      'ASME-compliant pressure vessels designed and fabricated for critical high-pressure applications.',
    Icon: IsometricPressureVessel,
  },
]

const capabilities = [
  {
    title: 'Custom Fabrication',
    description:
      'Specialized heavy fabrication services including structural steel work, storage tanks, ducts, dampers, and bespoke industrial equipment tailored to your project requirements.',
  },
  {
    title: 'Turnkey Solutions',
    description:
      'Complete project execution from concept engineering and detailed design through manufacturing, site installation, and commissioning support.',
  },
  {
    title: 'Maintenance & Support',
    description:
      'Comprehensive after-sales service, scheduled maintenance programs, spare parts supply, and equipment refurbishment to maximize asset life.',
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
  'Dodsal',
  'Andritz',
  'Voith',
]

const industrySectors = [
  {
    title: 'Power Sector',
    description:
      'Heat exchangers, surface condensers, HP/LP heaters, economizers, and cooling systems for thermal power plants, combined cycle facilities, and renewable energy projects.',
  },
  {
    title: 'Steel Industry',
    description:
      'Heavy fabrication equipment, cooling towers, heat recovery systems, blast furnace coolers, and process vessels for integrated steel plants.',
  },
  {
    title: 'Oil & Gas',
    description:
      'Pressure vessels, storage tanks, air fin coolers, waste heat recovery units, and specialized heat transfer equipment for refineries and petrochemical complexes.',
  },
]

const regions = [
  {
    title: 'Bhopal, India',
    subtitle: 'Manufacturing HQ',
    description: 'Two manufacturing units with 100,000 sq ft combined facility in Govindpura and Mandideep industrial areas.',
    highlighted: true,
  },
  {
    title: 'Pan-India',
    subtitle: 'Service Network',
    description: 'Supplying equipment and services to power plants, steel mills, and refineries across all major Indian states.',
    highlighted: false,
  },
  {
    title: 'Middle East / UAE',
    subtitle: 'Export Markets',
    description: 'Growing export footprint with equipment supplied to process industries and EPC contractors in the Gulf region.',
    highlighted: false,
  },
  {
    title: 'Southeast Asia',
    subtitle: 'Growing Presence',
    description: 'Expanding into Bangladesh, Vietnam, and Pakistan through partnerships with international EPC firms.',
    highlighted: false,
  },
]

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - Content */}
            <FadeLeft>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-200 mb-6">
                <div className="size-2 bg-brand-500" />
                <span className="text-sm font-medium text-brand-900">
                  Established 1987
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
                Engineering Excellence in Heat Transfer Solutions
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 mb-8 text-pretty">
                A leading OEM manufacturer of industrial heat exchangers, pressure
                vessels, and heavy fabrication equipment since 1987. Serving power,
                steel, petrochemical, and refinery sectors with precision-engineered
                solutions.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 bg-coral-500 text-white font-medium hover:bg-coral-600"
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-medium hover:border-gray-400"
                >
                  Contact Us
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="border-l-2 border-brand-500 pl-4">
                    <div className="text-xl font-bold text-gray-900 tabular-nums">
                      {stat.value}
                    </div>
                    {stat.label && (
                      <div className="text-sm font-medium text-gray-700">
                        {stat.label}
                      </div>
                    )}
                    <div className="text-xs text-gray-500 mt-0.5">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </FadeLeft>

            {/* Right column - Illustration */}
            <FadeRight className="relative">
              <div className="bg-white p-6 lg:p-8 shadow-xl border border-gray-200">
                <IsometricFactory />
              </div>
              {/* Floating badge */}
              <ScaleUp delay={0.3}>
                <div className="absolute -bottom-6 -left-4 lg:-left-6 bg-white p-4 lg:p-6 shadow-lg border-2 border-brand-500">
                  <div className="text-xs font-medium text-gray-500 mb-1">
                    Quality Certified
                  </div>
                  <div className="text-lg lg:text-2xl font-bold text-brand-600">
                    ISO 9001:2015
                  </div>
                </div>
              </ScaleUp>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ===== PROCESS FLOW SECTION ===== */}
      <section className="py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Precision engineering at every stage -- from initial design and
              material selection through fabrication and rigorous quality testing.
            </p>
          </FadeUp>

          {/* Pipeline SVG */}
          <ScaleUp className="bg-gray-50 p-6 lg:p-12 border border-gray-200 mb-12">
            <IsometricPipeline />
          </ScaleUp>

          {/* Process Steps */}
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-12 bg-brand-500 text-white flex items-center justify-center text-lg font-bold shrink-0">
                      {step.number}
                    </div>
                    <div className="h-px flex-1 bg-gray-300 hidden lg:block" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-balance">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-pretty">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== PRODUCTS OVERVIEW SECTION ===== */}
      <section className="py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Industrial Equipment Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Comprehensive range of heat transfer and heavy fabrication equipment
              designed for the most demanding industrial applications.
            </p>
          </FadeUp>

          {/* Product Cards */}
          <StaggerSlow className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <StaggerItem key={product.title}>
                <div className="bg-white border-2 border-gray-200 hover:border-brand-500 group">
                  <div className="p-6 bg-gray-50 h-48 flex items-center justify-center border-b border-gray-200">
                    <div className="w-32 h-32">
                      <product.Icon />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="h-1 w-12 bg-brand-500 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-balance">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 text-pretty">
                      {product.description}
                    </p>
                    <Link
                      to="/products"
                      className="text-brand-600 font-medium text-sm hover:text-brand-700 inline-flex items-center gap-1"
                    >
                      Learn More <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerSlow>

          {/* Additional Capability Cards */}
          <StaggerChildren className="mt-12 grid sm:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="bg-white p-8 border-l-4 border-brand-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-balance">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-pretty">
                    {cap.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== CLIENTS SECTION ===== */}
      <section className="py-20 lg:py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-pretty">
              Proud to serve India's leading corporations across power generation,
              steel manufacturing, oil and gas, and process industries.
            </p>
          </FadeUp>

          {/* Client Name Cards */}
          <StaggerSlow className="flex flex-wrap justify-center gap-4 mb-16">
            {clients.map((client) => (
              <StaggerItem key={client}>
                <div className="bg-gray-800 border-2 border-gray-700 hover:border-brand-500 px-6 py-4 text-lg font-bold text-white">
                  {client}
                </div>
              </StaggerItem>
            ))}
          </StaggerSlow>

          {/* Industry Sector Cards */}
          <StaggerChildren className="grid sm:grid-cols-3 gap-8">
            {industrySectors.map((sector) => (
              <StaggerItem key={sector.title}>
                <div className="border-2 border-gray-700 p-8 hover:border-gray-500">
                  <div className="h-1 w-10 bg-brand-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-balance">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-gray-400 text-pretty">
                    {sector.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== GLOBAL REACH SECTION ===== */}
      <section className="py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Global Presence, Local Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Headquartered in Bhopal, India, we serve clients across domestic and
              international markets with reliable delivery and responsive support.
            </p>
          </FadeUp>

          {/* Map SVG */}
          <ScaleUp className="bg-gray-50 p-6 lg:p-12 border-2 border-gray-200 mb-12">
            <IsometricMap />
          </ScaleUp>

          {/* Region Cards */}
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <StaggerItem key={region.title}>
                <div
                  className={`p-6 border-2 ${
                    region.highlighted
                      ? 'bg-brand-50 border-brand-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div
                    className={`size-10 mb-4 ${
                      region.highlighted ? 'bg-brand-500' : 'bg-gray-400'
                    }`}
                  />
                  <h3 className="font-bold text-gray-900 mb-1 text-balance">
                    {region.title}
                  </h3>
                  <p className="text-sm font-medium text-brand-600 mb-3">
                    {region.subtitle}
                  </p>
                  <p className="text-xs text-gray-600 text-pretty">
                    {region.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 lg:py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <FadeUp className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Ready to Engineer Your Next Project?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto text-pretty">
            Get in touch with our engineering team for custom solutions, technical
            specifications, or project quotations. We respond within 24 business
            hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-coral-500 text-white font-medium hover:bg-coral-600"
            >
              Contact Our Team
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-500 text-white font-medium hover:border-gray-300"
            >
              View All Products
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  )
}
