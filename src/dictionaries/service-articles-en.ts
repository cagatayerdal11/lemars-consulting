import type { ServiceArticle } from '@/lib/types'

export const serviceArticlesEn: ServiceArticle[] = [
  {
    slug: 'catering-haccp',
    category: 'Food & Catering',
    icon: 'utensils',
    title: 'HACCP and Food Safety Management in Corporate Catering',
    subtitle: 'Food safety in workplace cafeterias is not just a regulatory requirement — it directly determines employee health, satisfaction, and corporate reputation. Effective HACCP implementation controls invisible risks.',
    heroStats: [
      { value: '7', label: 'HACCP Principles' },
      { value: '60%', label: 'Foodborne Illness Risk Reduction' },
      { value: '852/2004', label: 'EU Food Hygiene Regulation' },
      { value: 'ISO 22000', label: 'Food Safety Standard' },
    ],
    overview: {
      title: 'What is HACCP and Why is it Critical?',
      content: `HACCP (Hazard Analysis and Critical Control Points) is a systematic approach to identifying and controlling potential hazards in food production and service processes. Adopted as an international standard by the Codex Alimentarius Commission, it has become the fundamental framework for food safety worldwide.

In corporate food services, HACCP is not just about kitchen hygiene. It requires an end-to-end safety architecture from supply chain to portioning, temperature control to allergen management.

Under EU Regulation 852/2004, all food businesses must operate in compliance with HACCP principles. In Turkey, Law No. 5996 imposes similar requirements aligned with EU standards.`,
    },
    sections: [
      {
        title: 'The 7 Fundamental HACCP Principles',
        content: 'Every corporate food service must be built on these 7 principles. However, their existence on paper is insufficient — they must be a living system in daily operations.',
        items: [
          'Hazard Analysis: Systematic identification of biological, chemical, and physical hazards',
          'Critical Control Points (CCPs): Determining process steps where hazards can be controlled',
          'Critical Limits: Defining acceptable upper and lower boundaries for each CCP',
          'Monitoring Procedures: Measurement and observation systems for continuous CCP tracking',
          'Corrective Actions: Emergency response protocols when critical limits are exceeded',
          'Verification Procedures: Periodic testing of system effectiveness',
          'Record Keeping & Documentation: Maintaining all monitoring, correction, and verification data',
        ],
        highlight: 'Research shows effective HACCP implementation reduces foodborne illness risk by up to 60%.',
      },
      {
        title: 'Common HACCP Gaps in Corporate Cafeterias',
        content: `Most companies know their catering vendor holds HACCP certification. However, having a certificate does not guarantee daily operational compliance. The most common gaps include:

Temperature chain breaks: Especially during long-distance transport and extended service periods, cold chain or hot holding temperature deviations occur.

Cross-contamination: Contamination risk between food groups due to kitchen layout, staff training, and allergen management deficiencies.

Supplier raw material control: Incoming material quality and safety parameter compliance is inadequately audited. Invoice verification gets confused with food safety verification.

Staff hygiene: Lack of regular auditing of kitchen staff hand hygiene, uniform changes, and health examination tracking.

Record discipline: Record keeping — HACCP's most critical pillar — becomes a retrospective formality under time pressure.`,
        items: [
          'Temperature logs filled retrospectively',
          'Allergen information boards not updated',
          'Pest control reports not tracked',
          'Staff health certificates expired',
          'Cleaning and disinfection plans not followed',
          'Food waste management not recorded',
        ],
      },
      {
        title: 'Food Safety and Employee Experience Connection',
        content: `Food quality ranks among the top 3 complaint areas in most employee satisfaction surveys. Yet companies typically view food issues as "the caterer\'s problem" and delegate operational control to the vendor.

In reality:
- Food quality decline directly impacts employee satisfaction
- Food safety violations create corporate reputation risk
- Hygiene standard deviations generate legal liability
- Menu variety and nutritional balance affect employee productivity

The administrative affairs function\'s role is not to replace the caterer but to manage the vendor with proper KPIs, establish audit discipline, and transform employee feedback into operational action.`,
        highlight: 'Global research indicates employees satisfied with food quality report 23% higher job satisfaction.',
      },
      {
        title: 'Regulatory Framework: EU and Turkey',
        content: `Turkey\'s food safety legislation has been shaped in alignment with EU standards. Key legal framework:

Turkey:
- Law No. 5996: Mandates HACCP compliance for all food businesses
- Turkish Food Codex: Detailed regulations on hygiene, labeling, additives
- Food Business Registration and Approval Regulation

European Union:
- Regulation 852/2004: HACCP requirement for all food businesses
- Regulation 178/2002: Traceability and rapid alert system
- ISO 22000: International food safety management system standard
- BRCGS / IFS / FSSC 22000: Supplier audit standards`,
        items: [
          'HACCP plan currency and revisions',
          'Food safety team establishment',
          'Internal audit calendar and reporting',
          'Supplier audit protocol',
          'Emergency procedures (food recall)',
          'Training records and competency tracking',
        ],
      },
    ],
    blindSpots: {
      title: 'Invisible Blind Spots in Corporate Catering',
      items: [
        { title: 'Certificate vs. Practice Gap', description: 'A vendor\'s ISO 22000 or HACCP certificate does not mean standards are applied daily. Certification is obtained through periodic audits; daily compliance requires different control mechanisms.' },
        { title: 'Cost Pressure Quality Erosion', description: 'Under per-person meal cost pressure, vendors silently compromise quality. Raw material quality, portion weights, and menu variety gradually erode.' },
        { title: 'Complaint Data-Action Disconnect', description: 'Employee complaints are collected but not transformed into operational corrective action. The complaint database is disconnected from catering performance evaluation.' },
        { title: 'Multi-Location Quality Variance', description: 'The same vendor delivers different quality at different locations. Significant application variances emerge between headquarters and field locations.' },
      ],
    },
    framework: {
      title: 'LEMARS Catering Quality Control Framework',
      subtitle: 'Structured approach to food safety and quality management in catering services.',
      steps: [
        { number: '01', title: 'Current State Analysis', description: 'Comprehensive assessment of HACCP plans, vendor certifications, audit reports, and employee feedback.' },
        { number: '02', title: 'Risk Mapping', description: 'Gap identification at critical control points, location-based risk assessment and prioritization.' },
        { number: '03', title: 'Control Mechanism Design', description: 'Audit checklists, temperature monitoring protocols, raw material acceptance criteria, and corrective action procedures.' },
        { number: '04', title: 'Vendor Performance Scorecard', description: 'Measurable performance indicators across hygiene, quality, cost, satisfaction, and compliance dimensions.' },
        { number: '05', title: 'Continuous Monitoring & Improvement', description: 'Monthly audit cycles, employee satisfaction tracking, and corrective action meetings with vendors.' },
      ],
    },
    ctaMessage: 'Let\'s build a food safety and quality control system for your catering services together.',
  },
  {
    slug: 'ulasim-mevzuat',
    category: 'Transportation & Compliance',
    icon: 'truck',
    title: 'Road Transport Regulations and Compliance in Employee Shuttle Services',
    subtitle: 'Employee shuttles are not just a logistics service. They carry serious legal obligations under road transport regulations. Non-compliance creates both legal and operational risks.',
    heroStats: [
      { value: 'EU', label: 'Passenger Transport Regulations' },
      { value: 'D2', label: 'Authorization Certificate' },
      { value: 'SRC', label: 'Driver Competency Certificate' },
      { value: '35%', label: 'Non-Compliance Rate' },
    ],
    overview: {
      title: 'Legal Framework for Corporate Employee Transportation',
      content: `Employee shuttle services are regulated under road transport legislation in most jurisdictions. In Turkey, Law No. 4925 (Road Transport Law) governs these services, while EU Regulation 1073/2009 covers international passenger transport.

Key compliance requirements include driver qualifications, vehicle safety standards, insurance obligations, route permits, and periodic technical inspections. Companies must ensure their transportation vendors maintain full compliance — outsourcing the service does not outsource the liability.`,
    },
    sections: [
      {
        title: 'Authorization and Vendor Compliance Audit',
        content: `Transportation vendors must hold valid operating licenses. In Turkey, the D2 authorization certificate is mandatory for urban irregular passenger transport, covering employee shuttle services.

Companies must verify: vendor license validity and scope, vehicle count matching, subcontractor compliance, and license suspension tracking. Most companies check during vendor selection but fail to conduct periodic re-verification during the contract period.`,
        items: [
          'Periodic authorization certificate verification',
          'Subcontractor compliance audit procedure',
          'Vehicle plate and certificate matching',
          'Transport registry system verification',
        ],
        highlight: 'Unauthorized transport operations can result in significant administrative fines and vehicle impoundment.',
      },
      {
        title: 'Driver Competency and Safety Requirements',
        content: `Employee shuttle drivers must meet comprehensive legal competency requirements including professional competency certificates, periodic psychotechnical evaluations, health reports, criminal record checks, and substance testing.

Whether the vendor maintains all these requirements is the company\'s audit responsibility. Trusting the vendor is insufficient — a verification mechanism is essential.`,
        items: [
          'Professional competency certificate verification',
          'Periodic psychotechnical test tracking',
          'Driver health report update calendar',
          'Substance testing policy',
          'Criminal record verification',
          'Driver training records tracking',
        ],
      },
      {
        title: 'Vehicle Safety and Technical Compliance',
        content: `Technical requirements for employee shuttle vehicles include age limits (typically 10-15 years depending on local regulations), periodic technical inspections, comprehensive insurance coverage, in-vehicle safety equipment, and GPS tracking systems.

Vehicle-related workplace accidents can result in employer liability even when a transportation contract exists with the vendor.`,
        items: [
          'Vehicle age limit compliance check',
          'Technical inspection calendar and reminders',
          'Insurance policy scope and validity verification',
          'In-vehicle safety equipment audit checklist',
          'GPS tracking system data verification',
          'Tire, brake, and maintenance records',
        ],
        highlight: 'In vehicle-related workplace accidents, the employer may bear liability under occupational health and safety regulations even when using contracted transport providers.',
      },
      {
        title: 'Shuttle Service and Employee Experience',
        content: `The employee shuttle is one of the corporate service touchpoints where many employees spend the most time. Shuttle experience directly impacts employee satisfaction and trust in management.

Shuttle-related employee experience issues include delays, overcrowding, route inefficiency, driver behavior, vehicle cleanliness, and stop point adequacy. Each of these directly reflects in HR surveys, yet most companies treat shuttle issues as "the transportation department\'s problem."`,
      },
    ],
    blindSpots: {
      title: 'Invisible Risks in Employee Transportation',
      items: [
        { title: 'Subcontractor Chain', description: 'Even if the primary vendor is compliant, subcontractor vehicles and drivers may not meet the same standards. Audit coverage doesn\'t extend to the subcontractor chain.' },
        { title: 'Regulation Change Tracking', description: 'Municipal service regulations and central legislation change frequently. Periodic compliance verification against current regulations is not performed.' },
        { title: 'Post-Accident Legal Liability', description: 'Employer legal liability in shuttle accidents is broader than most companies realize. The "we use a contractor" defense doesn\'t always hold.' },
        { title: 'Route Optimization Gap', description: 'Routes are set initially but employee counts and addresses change over years. Without periodic route optimization, both cost and time waste increase.' },
      ],
    },
    framework: {
      title: 'LEMARS Transportation Compliance Framework',
      subtitle: 'Structured approach to regulatory compliance and operational quality in employee transportation.',
      steps: [
        { number: '01', title: 'Regulation Scan & Gap Analysis', description: 'Assessment of current operations against road transport law, municipal regulations, and OHS legislation.' },
        { number: '02', title: 'Vendor Compliance Audit', description: 'Detailed verification of authorization certificates, driver competencies, vehicle technical condition, and insurance coverage.' },
        { number: '03', title: 'Control Mechanism Setup', description: 'Periodic audit calendar, certificate renewal reminder system, and non-compliance escalation procedure.' },
        { number: '04', title: 'Route & Capacity Optimization', description: 'Route redesign based on employee address, shift time, and vehicle capacity data.' },
        { number: '05', title: 'Employee Experience Integration', description: 'Shuttle satisfaction measurement, feedback mechanisms, and HR data correlation.' },
      ],
    },
    ctaMessage: 'Let\'s elevate regulatory compliance and employee experience quality in your transportation services together.',
  },
  {
    slug: 'seyahat-yonetimi',
    category: 'Travel & Accommodation',
    icon: 'plane',
    title: 'Corporate Travel Management and Agency Governance Model',
    subtitle: 'Corporate travel is one of the largest controllable expense items for companies. Yet most organizations are unaware that 15-25% of travel spending stems from invisible inefficiencies.',
    heroStats: [
      { value: '$1.5T', label: 'Global Business Travel Market (2025)' },
      { value: '15-25%', label: 'Hidden Cost Rate' },
      { value: '40%', label: 'Average Policy Violation Rate' },
      { value: '3x', label: 'Savings with Proper TMC Governance' },
    ],
    overview: {
      title: 'Strategic Approach to Travel Management',
      content: `The global business travel market reached $1.5 trillion in 2025. Most companies view travel management as "booking tickets and hotels." Professional travel management encompasses policy design, agency governance, cost control, duty of care, and traveler experience as a holistic discipline.

Most companies negotiate commission rates with their travel agency but fail to systematically measure agency performance. The real savings opportunities — advance booking, lowest fare policies, unused ticket management, hotel contract optimization — remain unaddressed.`,
    },
    sections: [
      {
        title: 'Travel Policy Design and Compliance',
        content: `An effective travel policy is not just a list of flight class restrictions and hotel rate caps. A comprehensive policy should include position-based entitlements, advance booking incentives, exception management workflows, and preferred supplier programs.

Research shows that flights booked 14 days in advance are on average 20-35% cheaper.`,
        items: [
          'Position-based authority and entitlement matrix',
          'Advance booking incentive and control mechanism',
          'Policy violation monitoring and reporting',
          'Exception approval workflow and authority thresholds',
          'Preferred supplier contract management',
          'Online booking tool (OBT) usage mandate',
        ],
        highlight: 'Well-managed travel programs can achieve 15-30% cost savings compared to unmanaged programs.',
      },
      {
        title: 'TMC (Travel Agency) Governance Model',
        content: `Travel agency management is where most companies are weakest. Agency selection happens, commission rates are set, and the relationship becomes an "order-invoice" cycle.

Professional TMC governance includes performance KPIs (average ticket cost by route, online booking rate, advance booking rate, policy compliance, unused ticket rate, first-call resolution), and quarterly business reviews.`,
        items: [
          'TMC performance scorecard design',
          'Monthly/quarterly business review meetings',
          'Cost benchmark and trend analysis',
          'Unused ticket management procedure',
          'Hotel RFP and contract management',
          'Duty of care compliance tracking',
        ],
      },
      {
        title: 'Hidden Travel Costs',
        content: `The visible portion of travel budget (tickets + hotels + per diem) represents only part of total cost. Hidden costs include unused tickets (3-8% of total ticket spend), wrong channel usage, last-minute bookings, policy violations (affecting ~40% of companies on average), and duty of care gaps.`,
        highlight: 'Systematic tracking and recovery of unused tickets alone can save 3-5% of annual travel budget.',
      },
    ],
    blindSpots: {
      title: 'Hidden Losses in Travel Management',
      items: [
        { title: 'Agency Dependency', description: 'Single-agency dependency eliminates price comparison and performance benchmarking. Fear of agency change perpetuates inefficient relationships.' },
        { title: 'Data Ownership Gap', description: 'Travel data remaining with the agency prevents the company from conducting its own spend analysis. Without contractual data ownership, historical data is lost during agency changes.' },
        { title: 'Traveler Profile Management', description: 'Failure to maintain current employee travel profiles, loss of loyalty program points, and inability to manage personal preferences.' },
        { title: 'Approval Workflow Gaps', description: 'Slow or inconsistent approval processes push employees toward out-of-policy channels. The approval mechanism should be enabling, not deterring.' },
      ],
    },
    framework: {
      title: 'LEMARS Travel Management Framework',
      subtitle: 'Holistic approach to cost control, policy compliance, and traveler experience in corporate travel.',
      steps: [
        { number: '01', title: 'Travel Spend Analysis', description: 'Analysis of 12-month travel data across route, class, agency, advance booking, and policy compliance dimensions.' },
        { number: '02', title: 'Policy Revision', description: 'Updating travel policy against benchmarks, exception management and approval workflow design.' },
        { number: '03', title: 'TMC Governance Setup', description: 'Agency performance KPIs, QBR calendar, cost reporting standards, and SLA definition.' },
        { number: '04', title: 'Loss Detection & Recovery', description: 'Measuring unused tickets, wrong channel usage, and policy violations with corrective actions.' },
        { number: '05', title: 'Continuous Improvement Cycle', description: 'Monthly cost tracking, quarterly performance review, and annual program reassessment.' },
      ],
    },
    ctaMessage: 'Let\'s optimize your travel management program together and uncover hidden costs.',
  },
  {
    slug: 'tesis-yonetimi',
    category: 'Facility Management',
    icon: 'building',
    title: 'Operational Excellence in Multi-Location Facility Management',
    subtitle: 'Facility management is the physical infrastructure of employee experience. Workplace quality directly impacts productivity, health, and satisfaction. In multi-location structures, this impact multiplies.',
    heroStats: [
      { value: '$1.3T', label: 'Global FM Market Size' },
      { value: '7.8%', label: 'Annual Growth Rate (CAGR)' },
      { value: '30%', label: 'Productivity Difference (Good vs. Poor FM)' },
      { value: 'ISO 41001', label: 'FM Management System Standard' },
    ],
    overview: {
      title: 'Modern Facility Management Approach',
      content: `The global facility management market reached $1.3 trillion in 2025 with annual growth of 7-8%. IFMA and RICS research shows well-managed facilities can increase employee productivity by up to 30%.

ISO 41001:2018 defines the international framework for systematic FM process management. For multi-location companies, the greatest FM challenge is closing the quality gap between headquarters and field locations.`,
    },
    sections: [
      {
        title: 'Core Challenges in Multi-Location FM',
        content: `In single-location companies, facility management is relatively straightforward. In multi-location structures, challenges include standardization difficulty (different vendors, quality levels, and expectations at each location), remote audit limitations, local regulatory compliance, and vendor management complexity.`,
        items: [
          'Location-based service quality standard definition',
          'Remote audit and control mechanism',
          'Local regulation compliance tracking',
          'HQ-field communication and escalation procedure',
          'Vendor model selection (national vs. local)',
          'Cross-location benchmark and comparison',
        ],
      },
      {
        title: 'Sustainability and ESG Integration in FM',
        content: `Facility management is the most tangible application area of ESG goals. Key areas include energy management (30-40% of facility budget), waste management, water management, carbon footprint calculation, and green building certifications.`,
        items: [
          'Energy consumption monitoring and reporting',
          'Waste management and recycling tracking',
          'Water consumption analysis and optimization',
          'Carbon emission calculation and reporting',
          'Green building certification assessment',
          'ESG reporting FM data collection',
        ],
        highlight: 'Effective energy management programs can reduce facility energy costs by 15-25%.',
      },
      {
        title: 'Work Environment and Employee Experience',
        content: `The least evaluated dimension of facility management is the workspace\'s impact on employee experience. Research shows office temperature, ventilation, and lighting quality directly affect productivity; cleanliness standards impact health and absenteeism; common area quality is a key satisfaction component; and security management affects employee sense of trust.`,
      },
    ],
    blindSpots: {
      title: 'Hidden Losses in Facility Management',
      items: [
        { title: 'Reactive vs. Proactive Maintenance', description: 'Most FM operations run in "fix when broken" mode. Low planned maintenance rates increase emergency response costs 3-5x and degrade employee experience.' },
        { title: 'Space Utilization Inefficiency', description: 'In the hybrid work era, office occupancy rates run 40-60%. Equal-level service continues for all areas without space optimization.' },
        { title: 'FM Data Visibility Gap', description: 'Work order durations, vendor response times, maintenance cost trends, and employee complaints are not connected.' },
        { title: 'Regulatory Compliance Risk', description: 'Gaps in periodic tracking of fire safety, elevator inspection, electrical installation checks, and environmental permits.' },
      ],
    },
    framework: {
      title: 'LEMARS Facility Management Framework',
      subtitle: 'Structured approach to elevating FM quality in multi-location structures.',
      steps: [
        { number: '01', title: 'Facility Condition Assessment', description: 'Physical condition, service quality, regulatory compliance, and employee satisfaction analysis across all locations.' },
        { number: '02', title: 'Service Catalog & SLA', description: 'Facility service standardization, service level agreements, and performance indicator definition.' },
        { number: '03', title: 'Planned Maintenance System', description: 'Transition from reactive to proactive maintenance, periodic maintenance calendar, and work order management.' },
        { number: '04', title: 'Vendor Performance Management', description: 'FM vendor scorecards, periodic audits, and corrective action mechanisms.' },
        { number: '05', title: 'ESG & Experience Integration', description: 'Sustainability metrics, employee experience feedback, and continuous improvement cycles.' },
      ],
    },
    ctaMessage: 'Let\'s standardize your facility management quality across locations and elevate employee experience together.',
  },
  {
    slug: 'tedarikci-yonetimi',
    category: 'Vendor Management',
    icon: 'shield',
    title: 'Vendor Performance Management and Governance in Administrative Services',
    subtitle: 'Vendor management is the most critical and least structured area of administrative affairs. Transitioning from opinion-based to data-driven performance management fundamentally changes service quality and cost control.',
    heroStats: [
      { value: '70%', label: 'Admin Services Outsourcing Rate' },
      { value: '12', label: 'Key Control Points' },
      { value: '25%', label: 'Cost Savings Potential' },
      { value: '360°', label: 'Performance Evaluation' },
    ],
    overview: {
      title: 'Paradigm Shift in Vendor Management',
      content: `60-80% of administrative services are provided by external vendors. Most companies are stuck in a cycle of: tender, select lowest price, sign contract, complain when issues arise, re-tender when serious.

What\'s missing: systematic performance measurement, proactive auditing, data-based evaluation, and continuous improvement mechanisms.`,
    },
    sections: [
      {
        title: 'Vendor Performance Scorecard Design',
        content: `An effective scorecard transforms subjective evaluations into objective measurements across 5 dimensions:

Quality (30%): Service quality standard compliance, audit results, deviation rate.
Compliance (20%): Legal requirements, contract terms, SLA compliance, reporting timeliness.
Cost (20%): Budget adherence, cost trend analysis, price/performance ratio.
People (15%): Staff turnover rate, training records, field staff quality, response time.
Innovation (15%): Improvement suggestions, technology adoption, proactive problem-solving, sustainability contribution.`,
        items: [
          'Quality: Audit score, deviation rate, satisfaction',
          'Compliance: SLA delivery, reporting, legal conformity',
          'Cost: Budget variance, unit cost trend, extras',
          'People: Staff turnover, training, response time, communication',
          'Innovation: Improvement proposals, technology, sustainability',
        ],
        highlight: 'Companies transitioning to data-driven vendor management report 20-30% quality improvement and 10-15% cost reduction.',
      },
      {
        title: 'Audit and Control Mechanism',
        content: `Auditing is an improvement tool, not a punishment tool. An effective system includes planned audits (pre-scheduled, standardized checklists), unannounced audits (measuring real performance), vendor self-assessment, corrective action management, and escalation mechanisms.`,
        items: [
          'Audit checklist standardization',
          'Planned and unannounced audit calendar',
          'Corrective action tracking system',
          'Escalation matrix and sanction procedure',
          'Audit findings trend analysis',
          'Vendor self-assessment procedure',
        ],
      },
      {
        title: 'SLA Design and Management',
        content: `SLA is the backbone of the vendor relationship. Most SLAs are written with general expressions and are not measurable. A good SLA must be measurable (numerical targets), realistic (achievable goals), trackable (regularly measured and reported), and have consequences (sanctions for violations, incentives for exceeding targets).`,
      },
    ],
    blindSpots: {
      title: 'Blind Spots in Vendor Management',
      items: [
        { title: 'Price-Focused Selection Trap', description: 'Lowest price is selected during tender, but the impact of low price on service quality, staff quality, and compliance risk is not evaluated.' },
        { title: 'Post-Contract Attention Drop', description: 'The tender process is intensive, contract is signed, then resources and time allocated to performance tracking dramatically decrease.' },
        { title: 'Single Vendor Risk', description: 'Single-vendor dependency for critical services eliminates bargaining power and contingency plans. Even when vendor performance declines, switching costs deter change.' },
        { title: 'Subcontractor Invisibility', description: 'While the primary vendor is controlled, subcontractor quality and compliance remains outside oversight.' },
      ],
    },
    framework: {
      title: 'LEMARS Vendor Governance Framework',
      subtitle: 'Systematic approach to managing vendor performance in administrative services.',
      steps: [
        { number: '01', title: 'Vendor Portfolio Analysis', description: 'Assessment of current vendor relationships across risk, cost, and performance dimensions.' },
        { number: '02', title: 'Scorecard & SLA Design', description: 'Measurable performance indicators and service level agreements for each service category.' },
        { number: '03', title: 'Audit System Setup', description: 'Planned and unannounced audit procedures, checklists, and corrective action management.' },
        { number: '04', title: 'Periodic Business Review', description: 'Monthly/quarterly vendor performance meeting format and escalation mechanism.' },
        { number: '05', title: 'Continuous Improvement & Benchmark', description: 'Vendor performance trend analysis, market benchmarking, and annual strategic review.' },
      ],
    },
    ctaMessage: 'Let\'s transform your vendor management system into a data-driven, measurable, and sustainable structure together.',
  },
  {
    slug: 'dijital-donusum',
    category: 'Digital Transformation',
    icon: 'chart',
    title: 'Smart Digitalization with Existing Systems in Administrative Affairs',
    subtitle: 'Digitalization does not mean buying new software. First, process discipline and data visibility are established with existing systems; new tool requirements are only evaluated with clear ROI.',
    heroStats: [
      { value: '40%', label: 'Manual Effort Reduction Potential' },
      { value: '4+', label: 'Existing System Integrations' },
      { value: '80%', label: 'Data Visibility Increase' },
      { value: '<6 mo', label: 'ROI Payback Period' },
    ],
    overview: {
      title: 'Existing Systems First Approach',
      content: `Most companies define the digitalization gap in administrative affairs as "not having the right software." The real problem is usually not software but lack of process discipline and data management.

Tools like SAP, HROne, ServiceNow, SharePoint, and Microsoft Forms already exist in most companies. Adapting these tools to administrative processes produces faster and lower-risk results than new software investment.`,
    },
    sections: [
      {
        title: 'Quick Wins with Existing Systems',
        content: `Digitalization gains achievable with tools every large company already has:

SharePoint & Teams: Vendor document management, audit report archives, approval workflows, and team communication.
Microsoft Forms: Employee satisfaction surveys, service feedback, field audit forms, and service request forms.
Power Automate: Approval workflows, reminder emails, form data routing, and simple automation.
Excel / Power BI: Vendor scorecards, cost tracking, SLA performance, and trend analysis.`,
        items: [
          'SharePoint for vendor document management',
          'Forms for field audit digitalization',
          'Power Automate for approval workflow automation',
          'Power BI for FM dashboard design',
          'Teams for vendor communication management',
          'Excel for KPI/SLA performance tracking',
        ],
        highlight: 'With existing Microsoft 365 licenses, 60-70% of administrative processes can be digitalized at no additional software cost.',
      },
      {
        title: 'Data Visibility and Dashboard Design',
        content: `Decision-making quality is directly proportional to data visibility. Typical data darkness areas include cost data (trapped in accounting), performance data (scattered across sources), and experience data (HR and admin data disconnected).

Dashboard design principle: different detail levels for each management tier. Senior management sees summary KPIs, operational management sees detailed metrics, field teams see action-oriented lists.`,
        items: [
          'Senior management: Summary KPI dashboard',
          'Operational management: Detailed performance metrics',
          'Field teams: Action and task lists',
          'Vendors: Self-service performance reports',
          'HR integration: Satisfaction-operations correlation',
        ],
      },
      {
        title: 'Manual Effort Mapping and Automation',
        content: `One of the largest loss sources in administrative affairs is time white-collar employees spend on operational coordination. This time is largely unmeasured and appears in no KPI.

Manual effort mapping reveals time spent, tools used, and value-add ratio for each process. High effort/low value activities (email information gathering, manual data entry, phone status tracking) are prime automation candidates.`,
        highlight: 'Manual effort mapping typically reveals that 30-40% of white-collar time spent on admin coordination can be reduced through automation or simple digitalization.',
      },
    ],
    blindSpots: {
      title: 'Hidden Traps in Digitalization',
      items: [
        { title: 'Software Solution Fallacy', description: 'Buying software without process discipline merely digitalizes disorder. Process first, then tools.' },
        { title: 'Lost in Data Silos', description: 'Each department has its own Excel files and reporting formats. Integrated visibility cannot be achieved without data standardization.' },
        { title: 'Dashboard Without Action', description: 'Beautiful visual panels are created but data isn\'t converted to action. A dashboard is a decision-making tool, not decoration.' },
        { title: 'Digital Fatigue', description: 'Too many tools and platforms creates digital fatigue in field teams. Reducing tool count increases adoption.' },
      ],
    },
    framework: {
      title: 'LEMARS Digitalization Framework',
      subtitle: 'Phased digitalization approach with existing systems for administrative affairs.',
      steps: [
        { number: '01', title: 'System & Process Inventory', description: 'Mapping available tools, existing processes, and manual effort areas.' },
        { number: '02', title: 'Quick Win Identification', description: 'Prioritizing digitalization opportunities that deliver highest impact with lowest effort.' },
        { number: '03', title: 'Pilot Implementation', description: 'Digitalization pilot with existing tools in a selected process and result measurement.' },
        { number: '04', title: 'Dashboard & Reporting', description: 'Data visibility platform design and implementation for managerial decision support.' },
        { number: '05', title: 'Scale & Roll-out', description: 'Scaling successful pilots to other processes and locations.' },
      ],
    },
    ctaMessage: 'Let\'s discover digitalization opportunities with your existing systems together and achieve quick wins.',
  },
]
