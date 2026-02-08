import { Link } from 'react-router-dom'
import { useRef } from 'react'
import {
  IsometricHeatExchanger,
  IsometricCoolingTower,
  IsometricBoiler,
  IsometricPressureVessel,
  IsometricDeaerator,
  IsometricFinnedTube,
  IsometricCondenser,
  IsometricAirCooler,
} from './components'
import { FadeUp, FadeIn, ScaleUp, StaggerChildren, StaggerSlow, StaggerItem } from './animations'

const categories = [
  { id: 'heat-transfer', label: 'Heat Transfer Solutions' },
  { id: 'fabrication', label: 'Specialized Fabrication' },
  { id: 'finned-tubes', label: 'Finned Tubes' },
  { id: 'services', label: 'Services' },
]

const heatTransferProducts = [
  {
    name: 'Shell & Tube Heat Exchangers',
    description:
      'Most versatile type for industrial heating and cooling. Used in power, petrochemical, and refinery applications. Design per TEMA/ASME standards.',
    icon: <IsometricHeatExchanger />,
  },
  {
    name: 'Surface Condensers',
    description:
      'Large heat exchangers that condense exhaust steam from turbines. Critical for thermal power plants. Designed per HEI standards.',
    icon: <IsometricCondenser />,
  },
  {
    name: 'High Pressure Heaters (HP Heaters)',
    description:
      'Feed water heaters operating at high pressure in thermal power plants. Improve cycle efficiency significantly.',
    icon: <IsometricBoiler />,
  },
  {
    name: 'Low Pressure Heaters (LP Heaters)',
    description:
      'Feed water heaters in the LP extraction system. Designed per ASME/TEMA standards for reliable performance.',
    icon: <IsometricCoolingTower />,
  },
  {
    name: 'Gas Coolers / Hydrogen Gas Coolers',
    description:
      'Cool hydrogen gas in generators. Critical for power generation turbines and ensuring safe, efficient operation.',
    icon: <IsometricHeatExchanger />,
  },
  {
    name: 'Air Cooled Heat Exchangers',
    description:
      'Use ambient air for cooling. Ideal where water is scarce. Fan-driven with finned tube banks for maximum efficiency.',
    icon: <IsometricAirCooler />,
  },
  {
    name: 'Air Cooled Condensers',
    description:
      'Condense steam using air instead of water. Used in water-scarce regions for power plants and process industries.',
    featured: false,
  },
  {
    name: 'CACW Coolers',
    description:
      'Closed Air Circuit Water Cooled coolers. Cool generator air using a water circuit for optimal thermal management.',
    featured: false,
  },
  {
    name: 'CACA Coolers',
    description:
      'Closed Air Circuit Air Cooled coolers. Remove excess heat from continuously operated generators using air circuit.',
    featured: false,
  },
  {
    name: 'Inter Coolers and After Coolers',
    description:
      'Cool compressed air or gas between compressor stages (inter) and after final stage (after) for process optimization.',
    featured: false,
  },
  {
    name: 'Steam Coil Air Pre-Heaters',
    description:
      'Pre-heat combustion air using steam to improve boiler efficiency and overall thermal plant performance.',
    featured: false,
  },
  {
    name: 'Extended Surface Heat Exchangers',
    description:
      'Heat exchangers with finned or extended surfaces for enhanced heat transfer rates in demanding applications.',
    featured: false,
  },
  {
    name: 'Plain Tube Heat Exchangers',
    description:
      'Standard tube-based heat exchangers for various general industrial heating and cooling applications.',
    featured: false,
  },
]

const fabricationProducts = [
  {
    name: 'Deaerators',
    description:
      'Remove dissolved gases such as oxygen and CO2 from boiler feed water. Essential for preventing corrosion in boiler systems.',
    icon: <IsometricDeaerator />,
  },
  {
    name: 'Exhaust Diffusers',
    description:
      'Convert kinetic energy of turbine exhaust to pressure. Improve turbine efficiency and overall plant performance.',
    featured: false,
  },
  {
    name: 'Flash Tanks',
    description:
      'Separate steam from condensate in steam systems. Essential for efficient heat recovery and condensate management.',
    featured: false,
  },
  {
    name: 'Pressure Vessels',
    description:
      'ASME Section VIII compliant vessels for storage and processing of fluids under pressure. Custom-engineered for each application.',
    icon: <IsometricPressureVessel />,
  },
  {
    name: 'Heavy Fabrication in Stainless & Carbon Steel',
    description:
      'Custom structural steel fabrication, large equipment, tanks, and ducts. Comprehensive welding and machining capabilities.',
    featured: false,
  },
]

const finnedTubeProducts = [
  {
    name: 'Crimped Finned Tubes',
    description:
      'Mechanically bonded fins for moderate temperature applications. Cost-effective and reliable performance.',
  },
  {
    name: 'Finned Tubes for Air Cooled Heat Exchangers',
    description:
      'Optimized fin geometry for ACHE applications. Designed for maximum air-side heat transfer coefficient.',
  },
  {
    name: 'Finned Tubes for Oil/Compressor Coolers',
    description:
      'Designed specifically for oil cooling circuits. Durable construction for harsh operating conditions.',
  },
  {
    name: 'Integral Low Finned Tubes',
    description:
      'Fins machined from tube wall providing excellent thermal contact. Superior performance for condensation services.',
  },
  {
    name: 'Wire Wound Finned Tubes',
    description:
      'Wire wound helically for enhanced heat transfer. Suitable for a wide range of temperature and pressure conditions.',
  },
]

const serviceItems = [
  {
    name: 'Re-Manufacturing and Re-Engineering Solutions',
    description:
      'Upgrade existing equipment with modern design, improved materials, and enhanced performance characteristics. Extend equipment life while meeting current standards.',
  },
  {
    name: 'Refurbishing',
    description:
      'Restore worn or damaged equipment to original specifications. Comprehensive inspection, repair, and testing to ensure reliable return to service.',
  },
  {
    name: 'Spares and Services',
    description:
      'Supply of replacement parts and field services. Rapid response for critical spares, planned maintenance support, and on-site technical assistance.',
  },
]

const designStandards = [
  { code: 'ASME Section VIII', label: 'Pressure Vessel Code' },
  { code: 'TEMA', label: 'Tubular Exchanger Standards' },
  { code: 'API', label: 'Petroleum Industry Standards' },
  { code: 'IBR', label: 'Indian Boiler Regulations' },
  { code: 'HEI', label: 'Heat Exchange Institute' },
  { code: 'IS', label: 'Indian Standards' },
]

export default function ProductsPage() {
  const heatTransferRef = useRef<HTMLDivElement>(null)
  const fabricationRef = useRef<HTMLDivElement>(null)
  const finnedTubesRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  const scrollTo = (id: string) => {
    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'heat-transfer': heatTransferRef,
      fabrication: fabricationRef,
      'finned-tubes': finnedTubesRef,
      services: servicesRef,
    }
    refMap[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-200 mb-6">
                <div className="size-2 bg-brand-500" />
                <span className="text-sm font-medium text-brand-900">
                  Complete Product Catalog
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance leading-tight">
                Products &amp; Solutions
              </h1>
              <p className="text-xl text-gray-600 text-pretty">
                Comprehensive range of heat transfer equipment, specialized
                fabrication, finned tubes, and engineering services for power,
                petrochemical, refinery, and steel industries.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className="px-5 py-3 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 whitespace-nowrap"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category 1: Heat Transfer Solutions */}
      <section
        ref={heatTransferRef}
        className="scroll-mt-32 py-16 sm:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-center gap-4 mb-4">
              <div className="size-3 bg-brand-500" />
              <span className="text-sm font-medium text-brand-600">
                Category 1
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Heat Transfer Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl text-pretty">
              Our flagship range of heat exchangers, condensers, heaters, and
              coolers engineered for demanding industrial environments across
              power, petrochemical, and refinery sectors.
            </p>
          </FadeUp>

          {/* Featured Products with Isometric Icons (first 6) */}
          <StaggerSlow className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {heatTransferProducts.slice(0, 6).map((product) => (
              <StaggerItem key={product.name}>
                <div
                  className="bg-white border-2 border-gray-200 hover:border-brand-500"
                >
                  <div className="p-6 bg-gray-50 h-48 flex items-center justify-center border-b border-gray-200">
                    <div className="w-36 h-36">
                      {product.icon}
                    </div>
                  </div>
                  <div className="p-6 border-t-4 border-brand-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-balance">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-5 text-pretty">
                      {product.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-coral-500 text-white text-sm font-medium hover:bg-coral-600"
                    >
                      Enquire Now
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerSlow>

          {/* Remaining Products (7-13) - simpler card style */}
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {heatTransferProducts.slice(6).map((product) => (
              <StaggerItem key={product.name}>
                <div
                  className="bg-white border border-gray-200 p-6 hover:border-brand-500"
                >
                  <div className="size-10 bg-brand-50 border border-brand-200 flex items-center justify-center mb-4">
                    <div className="size-4 bg-brand-500" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 text-balance">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-pretty">
                    {product.description}
                  </p>
                  <Link
                    to="/contact"
                    className="text-sm font-medium text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                  >
                    Enquire Now
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Category 2: Specialized Fabrication */}
      <section
        ref={fabricationRef}
        className="scroll-mt-32 py-16 sm:py-20 bg-white border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-center gap-4 mb-4">
              <div className="size-3 bg-brand-500" />
              <span className="text-sm font-medium text-brand-600">
                Category 2
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Specialized Fabrication
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl text-pretty">
              Custom-engineered deaerators, pressure vessels, exhaust diffusers,
              and heavy fabrication in stainless and carbon steel for critical
              industrial applications.
            </p>
          </FadeUp>

          <StaggerSlow className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabricationProducts.map((product) => (
              <StaggerItem key={product.name}>
                <div
                  className="bg-gray-50 border-2 border-gray-200 hover:border-brand-500"
                >
                  {product.icon ? (
                    <div className="p-6 bg-white h-48 flex items-center justify-center border-b border-gray-200">
                      <div className="w-36 h-36">{product.icon}</div>
                    </div>
                  ) : (
                    <div className="p-6 bg-white h-28 flex items-center border-b border-gray-200">
                      <div className="size-12 bg-brand-50 border border-brand-200 flex items-center justify-center">
                        <div className="size-5 bg-brand-500" />
                      </div>
                    </div>
                  )}
                  <div
                    className={`p-6 ${product.icon ? 'border-t-4 border-brand-500' : ''}`}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-balance">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-5 text-pretty">
                      {product.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-coral-500 text-white text-sm font-medium hover:bg-coral-600"
                    >
                      Enquire Now
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerSlow>
        </div>
      </section>

      {/* Category 3: Standard Products - Finned Tubes */}
      <section
        ref={finnedTubesRef}
        className="scroll-mt-32 py-16 sm:py-20 bg-gray-50 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-center gap-4 mb-4">
              <div className="size-3 bg-brand-500" />
              <span className="text-sm font-medium text-brand-600">
                Category 3
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Standard Products &mdash; Finned Tubes
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl text-pretty">
              High-quality finned tubes manufactured to precise specifications for
              use in heat exchangers, air coolers, and oil coolers across
              industries.
            </p>
          </FadeUp>

          {/* Hero finned tube illustration */}
          <ScaleUp>
            <div className="bg-white border-2 border-gray-200 p-8 sm:p-12 mb-10 flex flex-col sm:flex-row items-center gap-8">
              <div className="w-56 flex-shrink-0">
                <IsometricFinnedTube />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-balance">
                  Precision-Engineered Finned Tubes
                </h3>
                <p className="text-gray-600 text-pretty">
                  Our finned tubes are manufactured using advanced processes to
                  deliver superior heat transfer performance, dimensional
                  accuracy, and long service life. Available in a variety of
                  configurations to suit your specific application requirements.
                </p>
              </div>
            </div>
          </ScaleUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {finnedTubeProducts.map((product, idx) => (
              <StaggerItem key={product.name}>
                <div
                  className="bg-white border border-gray-200 p-6 hover:border-brand-500"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-10 bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-brand-600 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 text-balance pt-2">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-5 text-pretty">
                    {product.description}
                  </p>
                  <Link
                    to="/contact"
                    className="text-sm font-medium text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                  >
                    Enquire Now
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Category 4: Services */}
      <section
        ref={servicesRef}
        className="scroll-mt-32 py-16 sm:py-20 bg-white border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-center gap-4 mb-4">
              <div className="size-3 bg-brand-500" />
              <span className="text-sm font-medium text-brand-600">
                Category 4
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Services
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl text-pretty">
              Comprehensive engineering services to extend equipment life, improve
              performance, and minimize downtime across your operations.
            </p>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {serviceItems.map((service) => (
              <StaggerItem key={service.name}>
                <div
                  className="bg-gray-50 border-l-4 border-brand-500 p-8"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-balance">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 text-pretty">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 text-gray-900 text-sm font-medium hover:border-brand-500 hover:text-brand-600"
                  >
                    Learn More
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Design Standards Bar */}
      <FadeIn>
        <section className="bg-gray-900 py-12 border-t-4 border-brand-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-2 text-center text-balance">
              Design Codes &amp; Standards
            </h2>
            <p className="text-sm text-gray-400 mb-8 text-center text-pretty">
              All products are designed and manufactured in compliance with
              international codes and standards
            </p>
            <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {designStandards.map((std) => (
                <StaggerItem key={std.code}>
                  <div
                    className="bg-gray-800 border border-gray-700 px-4 py-5 text-center"
                  >
                    <div className="text-lg font-bold text-brand-400 mb-1">
                      {std.code}
                    </div>
                    <div className="text-xs text-gray-400">{std.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      </FadeIn>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
                  Need a custom solution?
                </h2>
                <p className="text-lg text-gray-600 text-pretty">
                  Our engineering team specializes in designing made-to-order
                  equipment tailored to your exact process requirements and site
                  conditions. Get in touch for a detailed technical discussion.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-coral-500 text-white font-medium hover:bg-coral-600 text-center"
                >
                  Contact Our Engineers
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-medium hover:border-gray-400 text-center"
                >
                  View Past Projects
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
