import type { Metadata } from "next"
import { ReportProblemClient } from "./ReportProblemClient"

export const metadata: Metadata = {
  title: "Report a Problem – TeleTorrent Support",
  description: "Report an issue, bug, or connection problem with TeleTorrent to help us improve the application.",
  alternates: {
    canonical: "https://www.teletorrent.me/report-problem",
  },
  openGraph: {
    title: "Report a Problem – TeleTorrent Support",
    description: "Report an issue, bug, or connection problem with TeleTorrent to help us improve the application.",
    url: "https://www.teletorrent.me/report-problem",
    type: "website",
  },
}

export default function ReportProblemPage() {
  return <ReportProblemClient />
}
