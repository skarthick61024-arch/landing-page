import type { Metadata } from "next"
import { ContactClient } from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Us – TeleTorrent Support & Inquiries",
  description: "Get in touch with the TeleTorrent team for general support, technical inquiries, feedback, or business questions.",
  alternates: {
    canonical: "https://www.teletorrent.me/contact",
  },
  openGraph: {
    title: "Contact Us – TeleTorrent Support & Inquiries",
    description: "Get in touch with the TeleTorrent team for general support, technical inquiries, feedback, or business questions.",
    url: "https://www.teletorrent.me/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactClient />
}
