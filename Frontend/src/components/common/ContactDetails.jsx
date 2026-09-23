import { contactDetails } from '../../data/contactData'

export function ContactDetails({ compact = false }) {
  if (compact) {
    return (
      <div className="contact-details contact-details--compact">
        <a href={`tel:${contactDetails.phone.replaceAll(' ', '')}`}>{contactDetails.phone}</a>
        <span className="contact-details-separator" aria-hidden="true">,</span>
        <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
      </div>
    )
  }

  return (
    <div className="contact-details">
      <a href={`tel:${contactDetails.phone.replaceAll(' ', '')}`}>
        <span>Phone No</span>
        <strong>{contactDetails.phone}</strong>
      </a>
      <a href={`mailto:${contactDetails.email}`}>
        <span>Email</span>
        <strong>{contactDetails.email}</strong>
      </a>
    </div>
  )
}
