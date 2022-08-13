import SubscribeTemplate from '../components/template/SubscribeTemplate'
import AboutTemplate from '../components/template/AboutTemplate'
import TestimonialsTemplate from '../components/template/TestimonialsTemplate'
import FooterTemplate from '../components/template/FooterTemplate'

export default function Home() {
  const handleBackClick = (type) => {
    if (type === 'about')
      return document
        .querySelector('#about-id')
        .scrollIntoView({ behavior: 'smooth' })
    if (type === 'values')
      return document
        .querySelector('#values-id')
        .scrollIntoView({ behavior: 'smooth' })
    if (type === 'accomplishments')
      return document
        .querySelector('#accomplishments-id')
        .scrollIntoView({ behavior: 'smooth' })
    if (type === 'stake')
      return document
        .querySelector('#stake-id')
        .scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <SubscribeTemplate onNavClick={(type) => handleBackClick(type)} />
      <AboutTemplate />
      <TestimonialsTemplate />
      <FooterTemplate />
    </>
  )
}
