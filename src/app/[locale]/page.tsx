import { getDictionary } from '@/lib/dictionary'
import { Hero } from '@/components/Hero'
import { CoreThemes } from '@/components/CoreThemes'
import { ServicePillars } from '@/components/ServicePillars'
import { WhyDifferent } from '@/components/WhyDifferent'
import { GapAreas } from '@/components/GapAreas'
import { EmployeeExperience } from '@/components/EmployeeExperience'
import { WorkingModel } from '@/components/WorkingModel'
import { FreeInsights } from '@/components/FreeInsights'
import { Contact } from '@/components/Contact'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <>
      <Hero dict={dict} />
      <div className="separator" />
      <CoreThemes dict={dict} />
      <div className="separator" />
      <ServicePillars dict={dict} locale={locale} />
      <div className="separator" />
      <WhyDifferent dict={dict} />
      <div className="separator" />
      <GapAreas dict={dict} />
      <div className="separator" />
      <EmployeeExperience dict={dict} />
      <div className="separator" />
      <WorkingModel dict={dict} />
      <div className="separator" />
      <FreeInsights dict={dict} locale={locale} />
      <div className="separator" />
      <Contact dict={dict} locale={locale} />
    </>
  )
}
