import { Link } from 'react-router-dom'
import { IsometricMap } from './components'
import { FadeUp, FadeIn, ScaleUp, StaggerChildren, StaggerSlow, StaggerItem } from './animations'

const stats = [
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Years Experience', value: '38+' },
  { label: 'Major Clients', value: '23+' },
  { label: 'Industry Sectors', value: '8+' },
]

type IndustryTag =
  | 'Hydroelectric'
  | 'Thermal Power'
  | 'Supercritical Thermal'
  | 'Power Generation'
  | 'Petrochemical'

const tagColors: Record<IndustryTag, string> = {
  'Hydroelectric': 'bg-sky-100 text-sky-800 border-sky-300',
  'Thermal Power': 'bg-red-100 text-red-800 border-red-300',
  'Supercritical Thermal': 'bg-purple-100 text-purple-800 border-purple-300',
  'Power Generation': 'bg-amber-100 text-amber-800 border-amber-300',
  'Petrochemical': 'bg-emerald-100 text-emerald-800 border-emerald-300',
}

const projects = [
  {
    name: 'Bearing Oil Cooler for 4x125 MW Teesta Hydroelectric Project',
    client: null,
    capacity: '500 MW',
    industry: 'Hydroelectric' as IndustryTag,
    location: 'Teesta, Sikkim',
    product: 'Bearing Oil Cooler',
  },
  {
    name: 'Twin Oil Coolers for 600 MW Project',
    client: null,
    capacity: '600 MW',
    industry: 'Power Generation' as IndustryTag,
    location: 'India',
    product: 'Twin Oil Coolers',
  },
  {
    name: 'Main Oil Coolers for 210 MW Unit, Bhusawal TPS',
    client: null,
    capacity: '210 MW',
    industry: 'Thermal Power' as IndustryTag,
    location: 'Bhusawal, Maharashtra',
    product: 'Main Oil Cooler',
  },
  {
    name: 'Gland Steam Condenser for RRVUNL 2x660 MW Chhabra Supercritical TPS Units 5 & 6',
    client: 'L&T MHI Turbine Generators Pvt. Ltd., Surat',
    capacity: '1,320 MW',
    industry: 'Supercritical Thermal' as IndustryTag,
    location: 'Chhabra, Rajasthan',
    product: 'Gland Steam Condenser',
  },
  {
    name: 'Gland Steam Condenser for 5x200 MW OBRA TPS',
    client: null,
    capacity: '1,000 MW',
    industry: 'Thermal Power' as IndustryTag,
    location: 'Obra, Uttar Pradesh',
    product: 'Gland Steam Condenser',
  },
  {
    name: 'Gland Steam Condenser for 660 MW Jaypee Units 1 & 2',
    client: 'L&T MHI',
    capacity: '1,320 MW',
    industry: 'Thermal Power' as IndustryTag,
    location: 'India',
    product: 'Gland Steam Condenser',
  },
  {
    name: 'Hydrogen Gas Coolers for 700 MW Rajpura Units 1 & 2',
    client: 'L&T MHI',
    capacity: '1,400 MW',
    industry: 'Power Generation' as IndustryTag,
    location: 'Rajpura, Punjab',
    product: 'Hydrogen Gas Cooler (4 units)',
  },
  {
    name: 'Hydrogen Gas Coolers for 660 MW Jaypee Units 2 & 3',
    client: null,
    capacity: '1,320 MW',
    industry: 'Power Generation' as IndustryTag,
    location: 'India',
    product: 'Hydrogen Gas Cooler',
  },
  {
    name: 'Propylene Refrigerant Condenser for GAIL (India) Ltd., Pata',
    client: 'GAIL (India) Ltd.',
    capacity: null,
    industry: 'Petrochemical' as IndustryTag,
    location: 'Pata, Uttar Pradesh',
    product: 'Propylene Refrigerant Condenser',
  },
]

const industries = [
  {
    name: 'Thermal Power (Coal, Gas, Supercritical)',
    description: 'Heat exchangers, oil coolers, gland steam condensers, and hydrogen gas coolers for thermal power stations across India.',
    examples: 'NTPC, BHEL, Bhusawal TPS, OBRA TPS, Chhabra TPS',
  },
  {
    name: 'Hydroelectric Power',
    description: 'Bearing oil coolers, lube oil coolers, and cooling systems for hydroelectric projects in mountainous terrain.',
    examples: 'Teesta Hydroelectric Project',
  },
  {
    name: 'Steel & Metals',
    description: 'Heat exchangers, cooling systems, and pressure vessels for steel plants and smelters.',
    examples: 'Hindalco, Jindal Steel Power, NALCO, Godawari Power Ispat',
  },
  {
    name: 'Petrochemical & Refinery',
    description: 'Refrigerant condensers, shell and tube heat exchangers, and process equipment for petrochemical complexes.',
    examples: 'GAIL Pata, IOCL',
  },
  {
    name: 'Oil & Gas',
    description: 'Pressure vessels, heat exchangers, and process equipment for upstream and downstream oil and gas operations.',
    examples: 'ONGC, IOCL, Dodsal',
  },
  {
    name: 'Cement',
    description: 'Coolers, heat recovery systems, and heavy fabrication equipment for cement manufacturing plants.',
    examples: 'ACC',
  },
  {
    name: 'Chemical & Fertilizer',
    description: 'Corrosion-resistant heat exchangers, condensers, and reactor vessels for chemical processing.',
    examples: 'RCF, Thermax',
  },
  {
    name: 'Sugar & Process Industry',
    description: 'Evaporators, juice heaters, condensers, and heat recovery equipment for sugar mills and process plants.',
    examples: 'Multiple sugar mills across India',
  },
]

const tier1Clients = ['BHEL', 'NTPC', 'L&T (L&T MHI)', 'Toshiba']

const tier2Clients = [
  'Alstom', 'GE Triveni', 'Thermax', 'GAIL', 'IOCL', 'ONGC',
  'Hindalco', 'Jindal Steel Power', 'Power Machines', 'ISGEC',
  'Dodsal', 'Andritz', 'Voith', 'Doosan Skoda', 'NALCO', 'RCF',
  'NEEPCO', 'ACC', 'Godawari Power Ispat',
]

const regions = [
  {
    name: 'India',
    label: 'Primary Market',
    countries: ['Installation base across most Indian states'],
    accent: true,
  },
  {
    name: 'South Asia',
    label: 'Established Exports',
    countries: ['Bangladesh', 'Pakistan'],
    accent: false,
  },
  {
    name: 'Southeast Asia',
    label: 'Growing Presence',
    countries: ['Indonesia', 'Vietnam'],
    accent: false,
  },
  {
    name: 'Middle East',
    label: 'Export Market',
    countries: ['UAE'],
    accent: false,
  },
  {
    name: 'Africa',
    label: 'Export Market',
    countries: ['South Africa'],
    accent: false,
  },
]

export default function ProjectsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-200 mb-6">
              <div className="size-2 bg-brand-500" />
              <span className="text-sm font-medium text-brand-900">Project Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 text-pretty">
              Over three decades of delivering complex heat transfer solutions and industrial equipment for power generation, petrochemical, steel, and process industries across India and international markets.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="py-8 lg:py-10 px-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-2 font-medium">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-pretty">
              A selection of landmark projects demonstrating our engineering capability across diverse industrial applications.
            </p>
          </FadeUp>

          <StaggerSlow className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="bg-white border-2 border-gray-200 hover:border-brand-500 group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium border ${tagColors[project.industry]}`}
                      >
                        {project.industry}
                      </span>
                      {project.capacity && (
                        <span className="text-sm font-bold text-gray-900 tabular-nums whitespace-nowrap">
                          {project.capacity}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-gray-900 mb-3 text-balance leading-snug min-h-[3rem]">
                      {project.name}
                    </h3>

                    <div className="space-y-2 text-sm text-gray-600">
                      {project.client && (
                        <div className="flex gap-2">
                          <span className="font-medium text-gray-500 shrink-0">Client:</span>
                          <span className="text-pretty">{project.client}</span>
                        </div>
                      )}
                      <div className="flex gap-2">
                        <span className="font-medium text-gray-500 shrink-0">Location:</span>
                        <span>{project.location}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-medium text-gray-500 shrink-0">Product:</span>
                        <span>{project.product}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 group-hover:border-brand-200 px-6 py-3 bg-gray-50 group-hover:bg-brand-50">
                    <span className="text-sm font-medium text-gray-500 group-hover:text-brand-700">
                      View Details
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerSlow>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Proven expertise across eight major industrial sectors with tailored heat transfer and process equipment solutions.
            </p>
          </FadeUp>

          <StaggerSlow className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="bg-gray-50 border-2 border-gray-200 p-6 hover:border-brand-500"
                >
                  <div className="size-10 bg-brand-500 flex items-center justify-center text-white font-bold text-sm mb-4">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3 text-balance leading-snug">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-pretty">
                    {industry.description}
                  </p>
                  <div className="pt-3 border-t border-gray-200">
                    <span className="text-xs font-medium text-gray-500 uppercase">Key Clients</span>
                    <p className="text-sm text-gray-700 mt-1 text-pretty">{industry.examples}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerSlow>
        </div>
      </section>

      {/* Client Network */}
      <section className="py-20 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Our Client Network
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              Trusted by India's leading industrial corporations and multinational OEMs for critical heat transfer equipment.
            </p>
          </FadeUp>

          {/* Tier 1 Clients */}
          <div className="mb-6">
            <span className="text-xs font-medium text-gray-400 uppercase mb-4 block">
              Strategic Partners
            </span>
            <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {tier1Clients.map((client) => (
                <StaggerItem key={client}>
                  <div
                    className="border-2 border-brand-500 bg-gray-800 px-6 py-8 text-center"
                  >
                    <span className="text-2xl font-bold text-white">{client}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          {/* Tier 2 Clients */}
          <div>
            <span className="text-xs font-medium text-gray-400 uppercase mb-4 block">
              Key Clients
            </span>
            <StaggerSlow className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {tier2Clients.map((client) => (
                <StaggerItem key={client}>
                  <div
                    className="border border-gray-700 bg-gray-800 hover:border-brand-500 px-4 py-5 text-center"
                  >
                    <span className="text-sm font-medium text-gray-200">{client}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerSlow>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Geographic Reach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Headquartered in Bhopal with installations across India and exports to South Asia, Southeast Asia, the Middle East, and Africa.
            </p>
          </FadeUp>

          <ScaleUp className="bg-gray-50 p-8 lg:p-12 border-2 border-gray-200 mb-12">
            <IsometricMap />
          </ScaleUp>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {regions.map((region) => (
              <StaggerItem key={region.name}>
                <div
                  className={`p-6 border-2 ${
                    region.accent
                      ? 'border-brand-500 bg-brand-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{region.name}</h3>
                  <span
                    className={`text-xs font-medium ${
                      region.accent ? 'text-brand-700' : 'text-gray-500'
                    }`}
                  >
                    {region.label}
                  </span>
                  <ul className="mt-3 space-y-1">
                    {region.countries.map((country) => (
                      <li key={country} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className={`mt-1.5 size-1.5 shrink-0 ${region.accent ? 'bg-brand-500' : 'bg-gray-400'}`} />
                        {country}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="bg-gray-900 p-10 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              Discuss Your Project
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 text-pretty">
              Whether you need a custom heat exchanger, gland steam condenser, or any industrial process equipment, our engineering team is ready to deliver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-coral-500 text-white font-medium hover:bg-coral-600 text-base"
              >
                Get In Touch
              </Link>
              <Link
                to="/products"
                className="inline-block px-10 py-4 border-2 border-gray-600 text-gray-200 font-medium hover:border-gray-400 hover:text-white text-base"
              >
                View Products
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
