import type { Dictionary } from '@/lib/types'
import { serviceArticlesEn } from './service-articles-en'

const en: Dictionary = {
  meta: {
    title: 'LEMARS | Operating Systems That Make Blind Spots in Administrative Affairs Visible',
    description: 'We transform administrative affairs from a fragmented support function into an operating system that is standardized, data-managed, connected to employee experience, and aligned with HR priorities.',
  },
  nav: {
    services: 'Services',
    whyUs: 'Why Us',
    model: 'Methodology',
    insights: 'Insights',
    contact: 'Contact',
    cta: 'Get in Touch',
    langSwitch: 'TR',
  },
  hero: {
    tag: 'Operational Excellence & Employee Experience',
    title: 'Operating Systems That Make Blind Spots in Admin Affairs',
    titleHighlight: 'Visible',
    subtitle: 'We transform administrative affairs from a fragmented support function into an operating system that is standardized, data-managed, connected to employee experience, and aligned with HR priorities.',
    cta: 'Explore',
    ctaSecondary: 'Our Services',
    stats: [
      { value: '360°', label: 'Holistic View' },
      { value: '4', label: 'Service Pillars' },
      { value: '∞', label: 'Continuous Improvement' },
    ],
  },
  themes: {
    tag: 'Core Approach',
    title: 'We Don\'t See Operations as Just Operations',
    subtitle: 'We evaluate every service touchpoint through the lens of employee experience, managerial control, and corporate performance.',
    items: [
      {
        icon: 'eye',
        title: 'Making the Invisible Visible',
        description: 'We uncover hidden time losses, unmeasured service friction, and field realities invisible from headquarters.',
      },
      {
        icon: 'users',
        title: 'Connecting Service Quality to Human Experience',
        description: 'Shuttle delays, food quality, travel friction, and facility services are not just operational — they are employee experience issues.',
      },
      {
        icon: 'settings',
        title: 'From Ad Hoc to Operating System',
        description: 'We transform person-dependent practices, location-based variances, and weak exception management into standardized, measurable control systems.',
      },
      {
        icon: 'cpu',
        title: 'Smart Modernization with Existing Systems',
        description: 'Process discipline first with SAP, HROne, ServiceNow, SharePoint, and Forms; new tools only when ROI is clear.',
      },
      {
        icon: 'heart',
        title: 'Admin Affairs Aligned with HR',
        description: 'Satisfaction, engagement, internal service experience, trust, and fairness perception — never disconnected from HR goals.',
      },
    ],
  },
  about: {
    tag: 'Who We Are',
    title: 'Operating Systems That Make the Invisible Visible in Administrative Affairs',
    description: 'Administrative services in most organizations generate invisible workforce losses, unmeasurable quality gaps, location-based application variances, and friction that directly impacts employee experience. We approach this domain not merely as an operational support function, but as an operating system directly tied to employee satisfaction, engagement, productivity, and corporate management quality.',
    points: [
      'We don\'t just advise — we build operating models',
      'We don\'t just report — we design continuously functioning systems',
      'We deliver measurable and scalable frameworks',
    ],
  },
  services: {
    tag: 'Service Scope',
    title: 'Four-Pillar Operating Architecture',
    subtitle: 'Each pillar represents a different dimension of operational excellence. Together, they form a holistic operating system.',
    pillars: [
      {
        id: 'standardization',
        icon: 'layers',
        title: 'Service Standardization',
        description: 'We establish consistent, measurable, and auditable standards across all support services.',
        items: [
          'Shuttle / Employee Transportation',
          'Fleet & Pool Vehicle Management',
          'Executive Vehicles',
          'Travel & Accommodation',
          'Taxi & Chauffeured Services',
          'Cleaning & Pest Control',
          'Landscaping',
          'Catering & Food Services',
        ],
      },
      {
        id: 'control',
        icon: 'shield',
        title: 'Management & Control System',
        description: 'We design processes, set rules, and establish control mechanisms.',
        items: [
          'Process Design & Optimization',
          'Policy & Procedure Development',
          'Roles & Responsibilities Matrix',
          'KPI / SLA Definition',
          'Audit & Control Mechanisms',
          'Vendor Performance Management',
          'Exception Management',
        ],
      },
      {
        id: 'digital',
        icon: 'monitor',
        title: 'Digital & Visible Management',
        description: 'We enable digitalization and data visibility through existing systems.',
        items: [
          'Digitalization with Existing Systems',
          'Approval & Tracking Workflows',
          'Data Visibility & Dashboards',
          'Workforce & Time Loss Analysis',
          'Service Quality Measurement',
        ],
      },
      {
        id: 'experience',
        icon: 'sparkles',
        title: 'Human & Experience Dimension',
        description: 'We bridge operations with employee experience and HR objectives.',
        items: [
          'Employee Satisfaction Integration',
          'Employee Engagement Analysis',
          'Internal Service Experience Design',
          'Communication Standards',
          'Service Rule Adoption',
          'HR-Service Quality Bridge',
        ],
      },
    ],
  },
  whyDifferent: {
    tag: 'Difference',
    title: 'Why We\'re Different',
    subtitle: 'We structurally and strategically differentiate from traditional operations consulting.',
    items: [
      {
        icon: 'zap',
        title: 'Operations + Human Impact',
        description: 'We evaluate every operational outcome alongside its impact on employee experience. Process excellence without human impact is incomplete.',
      },
      {
        icon: 'eye',
        title: 'Making the Invisible Visible',
        description: 'We surface unmeasured time losses, invisible white-collar coordination burdens, and location-based application variances.',
      },
      {
        icon: 'code',
        title: 'Operating System Language',
        description: 'We don\'t just write reports. We build operating models and design continuously functioning, measurable systems.',
      },
      {
        icon: 'database',
        title: 'Existing Systems First',
        description: 'Process discipline first, then data visibility, then management rhythm, and only then new tool investment. No unnecessary technology spend.',
      },
      {
        icon: 'link',
        title: 'Direct HR Connection',
        description: 'Shuttle, food, travel, facility services, and vehicle access — none of these are handled disconnected from HR objectives.',
      },
    ],
  },
  gaps: {
    tag: 'Blind Spots',
    title: 'Silently Eroding Value',
    subtitle: 'The loss isn\'t just budget — time, attention, trust, and adoption are silently eroding too.',
    items: [
      {
        title: 'Unmeasured Time Loss',
        description: 'Manual tracking, email chains, phone coordination — invisible workforce loss in daily operations.',
        impact: '15-25% loss in white-collar productivity',
      },
      {
        title: 'Invisible White-Collar Effort',
        description: 'Managerial time spent on admin affairs coordination doesn\'t appear in any KPI.',
        impact: 'Loss of managerial attention and strategic focus',
      },
      {
        title: 'Opinion-Based Vendor Management',
        description: 'Vendor evaluations based on personal impressions rather than performance data.',
        impact: 'Inconsistent service quality and cost control',
      },
      {
        title: 'HR Data-Root Cause Disconnect',
        description: 'Operational root causes of employee dissatisfaction remain unidentified.',
        impact: 'Wrong actions and recurring problems',
      },
    ],
  },
  employee: {
    tag: 'Employee Experience',
    title: 'The Bridge Between Admin Services and HR',
    subtitle: 'Administrative services are not just operational support — they are part of employee experience, HR objectives, and the architecture of managerial trust.',
    chain: [
      { step: 'Service Friction', description: 'Delays, quality gaps, inconsistency' },
      { step: 'Daily Employee Experience', description: 'Motivation loss, increased complaints' },
      { step: 'HR Signal', description: 'Satisfaction decline, engagement erosion' },
      { step: 'Engagement & Trust', description: 'Management perception, corporate quality' },
    ],
    message: 'Every operational disruption creates a breaking point in employee experience and reflects in HR metrics.',
  },
  workingModel: {
    tag: 'Methodology',
    title: 'Working Model',
    subtitle: 'A structured, phased, and measurable transformation approach.',
    phases: [
      {
        period: '0 — 30 Days',
        title: 'Diagnostic & Visibility',
        description: 'Deep analysis of current state and quick wins.',
        items: [
          'Mapping critical services',
          'Identifying existing gaps',
          'Determining quick wins',
          'Creating managerial risk list',
        ],
      },
      {
        period: '30 — 90 Days',
        title: 'Standard & Control Design',
        description: 'Building processes, rules, and measurement structures.',
        items: [
          'Policy and procedure development',
          'Service catalog design',
          'KPI / SLA definition',
          'Scorecard and audit checklist',
          'Decision threshold setting',
        ],
      },
      {
        period: '90+ Days',
        title: 'Deployment & Scale',
        description: 'Embedding the model into the organization and ensuring sustainability.',
        items: [
          'Local adaptation',
          'Management rhythm setup',
          'Dashboard and reporting',
          'Employee experience feedback loop',
        ],
      },
    ],
  },
  insights: {
    tag: 'Knowledge Hub',
    title: 'Free Insights',
    subtitle: 'Thought leadership and practical approaches in administrative affairs.',
    cta: 'View All Insights',
    items: [
      {
        title: 'Blind Spot Atlas in Administrative Affairs',
        description: 'A comprehensive framework mapping the inefficiency areas that companies fail to recognize in their admin functions.',
        slug: 'kor-nokta-atlasi',
      },
      {
        title: 'Multi-Location Service Gap Map',
        description: 'An analysis model detecting service quality differences and application variances across locations.',
        slug: 'gap-haritasi',
      },
      {
        title: '12 Control Points for Vendor Performance Management',
        description: 'A systematic approach moving vendor evaluation from opinion-based to data-driven performance management.',
        slug: 'tedarikci-performansi',
      },
      {
        title: 'From Employee Satisfaction to Operational Action',
        description: 'A bridge model transforming satisfaction data into operational improvement actions.',
        slug: 'calisan-deneyimi',
      },
      {
        title: 'Smart Modernization with Existing Systems',
        description: 'An approach showing what can be achieved with existing systems before new technology investment.',
        slug: 'akilli-modernizasyon',
      },
      {
        title: 'Service Quality Bridge Between Admin and HR',
        description: 'A framework linking administrative service quality to HR metrics and employee engagement.',
        slug: 'ik-hizalama',
      },
    ],
  },
  contact: {
    tag: 'Contact',
    title: 'Let\'s Work Together',
    subtitle: 'Let\'s discover the blind spots in your administrative affairs function together.',
    email: 'cagatayerdal@icloud.com',
    phone: '+90 545 278 2747',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    cta: 'Get in Touch',
  },
  footer: {
    brand: 'LEMARS',
    tagline: 'Operating systems that make the invisible visible in administrative affairs.',
    rights: '© 2026 LEMARS. All rights reserved.',
    sections: [
      {
        title: 'Services',
        links: [
          { label: 'Service Standardization', href: '#services' },
          { label: 'Management & Control', href: '#services' },
          { label: 'Digital Management', href: '#services' },
          { label: 'Human Experience', href: '#services' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Insights', href: '/icerikler' },
          { label: 'Blind Spot Atlas', href: '/resources/kor-nokta-atlasi' },
          { label: 'Gap Map', href: '/resources/gap-haritasi' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'cagatayerdal@icloud.com', href: 'mailto:cagatayerdal@icloud.com' },
          { label: '+90 545 278 2747', href: 'tel:+905452782747' },
        ],
      },
    ],
  },
  servicesPage: {
    title: 'Service Scope',
    subtitle: 'Every service area is approached through the lens of operational excellence and employee experience.',
    categories: [
      {
        id: 'transportation',
        title: 'Transportation & Vehicle Management',
        description: 'A comprehensive standards and control system covering all transportation operations from employee shuttles to fleet management, chauffeured vehicles to taxi services.',
        icon: 'truck',
        services: [
          { name: 'Shuttle / Employee Transportation', description: 'Route optimization, capacity management, occupancy analysis, and employee satisfaction integration.' },
          { name: 'Fleet & Pool Vehicle Management', description: 'Vehicle allocation rules, usage tracking, maintenance planning, and cost control.' },
          { name: 'Executive Vehicles', description: 'Allocation criteria, policy standardization, and budget management.' },
          { name: 'Taxi & Chauffeured Services', description: 'Usage rules, approval mechanisms, and cost analysis.' },
        ],
      },
      {
        id: 'travel',
        title: 'Travel & Accommodation',
        description: 'End-to-end travel management from travel policy design to accommodation standards, process optimization to cost control.',
        icon: 'plane',
        services: [
          { name: 'Travel Policy & Process Design', description: 'Authority matrix, approval flows, class rules, and exception management.' },
          { name: 'Accommodation Management', description: 'Hotel selection criteria, contract management, and standard setting.' },
        ],
      },
      {
        id: 'facility',
        title: 'Facility & Environmental Services',
        description: 'Quality standards, vendor management, and audit systems for cleaning, pest control, and landscaping services.',
        icon: 'building',
        services: [
          { name: 'Cleaning Services', description: 'Quality standards, audit checklists, vendor performance management.' },
          { name: 'Pest Control', description: 'Periodic control planning, reporting standards, and compliance tracking.' },
          { name: 'Landscaping', description: 'Maintenance planning, seasonal programs, and quality measurement.' },
        ],
      },
      {
        id: 'catering',
        title: 'Food & Catering',
        description: 'Quality management, employee satisfaction, and cost optimization in food services.',
        icon: 'utensils',
        services: [
          { name: 'Catering Quality Management', description: 'Menu standardization, hygiene audits, employee feedback, and vendor performance.' },
          { name: 'Cost & Portion Control', description: 'Per-person cost analysis, waste tracking, and optimization.' },
        ],
      },
      {
        id: 'management',
        title: 'Management & Control Systems',
        description: 'Management infrastructure covering process design, policy development, KPI definition, and vendor performance management.',
        icon: 'settings',
        services: [
          { name: 'Process Design & Optimization', description: 'Workflows, approval mechanisms, and roles-responsibilities matrix.' },
          { name: 'Policy & Procedure Development', description: 'Organization-wide applicable, implementable, and auditable documents.' },
          { name: 'KPI & SLA Definition', description: 'Measurable performance indicators and service level agreements.' },
          { name: 'Vendor Performance Management', description: 'Data-driven evaluation, scorecards, and corrective action systems.' },
        ],
      },
      {
        id: 'digital',
        title: 'Digital Transformation & Data Management',
        description: 'Digitalization with existing systems, data visibility, and decision support mechanisms.',
        icon: 'chart',
        services: [
          { name: 'Digitalization Strategy', description: 'Process digitalization with SAP, ServiceNow, SharePoint, and Forms.' },
          { name: 'Dashboard & Reporting', description: 'Visual data platform design for managerial decision support.' },
          { name: 'Workforce & Time Loss Analysis', description: 'Manual effort mapping and automation opportunity identification.' },
        ],
      },
    ],
  },
  serviceArticles: serviceArticlesEn,
}

export default en
