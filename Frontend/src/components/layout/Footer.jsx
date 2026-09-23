import { ContactDetails } from '../common/ContactDetails'

export function Footer() {
  return (
    <footer className="app-footer">
      <span className="footer-label">Contact us @</span>
      <ContactDetails compact />
    </footer>
  )
}
