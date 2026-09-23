import { ContactDetails } from '../components/common/ContactDetails'

export function ContactPage() {
  return (
    <main className="contact-page">
      <p className="screen-label">BREWLY CUSTOMER AREA</p>
      <h1>Contact us</h1>
      <p className="contact-intro">Have a question about an order or need a hand choosing your coffee? Reach out to our team.</p>
      <section className="contact-card" aria-label="Brewly contact details">
        <div className="contact-card-heading">
          <span className="contact-icon" aria-hidden="true">@</span>
          <div>
            <h2>We’d love to hear from you</h2>
            <p>Our team is ready to help during café hours.</p>
          </div>
        </div>
        <ContactDetails />
      </section>
    </main>
  )
}
