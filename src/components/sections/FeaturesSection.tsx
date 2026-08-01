import { 
  CloudDownload, 
  PauseCircle, 
  Bookmark, 
  Video, 
  FileText, 
  FileArchive, 
  Smartphone, 
  PlayCircle, 
  ListOrdered, 
  ArrowUpCircle, 
  Activity, 
  Bell 
} from "lucide-react"

const features = [
  { icon: <CloudDownload />, title: "Background Downloads", description: "Keep downloading even when the app is closed." },
  { icon: <PauseCircle />, title: "Pause & Resume", description: "Full control over your active downloads." },
  { icon: <Bookmark />, title: "Saved Messages", description: "Directly sync and download from your saved messages." },
  { icon: <Video />, title: "Video Downloads", description: "Support for large MKV, MP4, and WEBM files." },
  { icon: <FileText />, title: "Document Downloads", description: "PDFs, Word docs, and heavy spreadsheets." },
  { icon: <FileArchive />, title: "ZIP Downloads", description: "Large archives and split ZIP files." },
  { icon: <Smartphone />, title: "APK Downloads", description: "Direct APK extraction and installation support." },
  { icon: <PlayCircle />, title: "Automatic Resume", description: "Auto-reconnects when connection drops." },
  { icon: <ListOrdered />, title: "Download Queue", description: "Batch downloads managed efficiently." },
  { icon: <ArrowUpCircle />, title: "Priority Manager", description: "Choose which file finishes first." },
  { icon: <Activity />, title: "Real-time Progress", description: "Accurate speed and time estimates." },
  { icon: <Bell />, title: "Notifications", description: "Get alerted when your heavy files finish." },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Everything you need in a download manager</h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of tools designed specifically for handling large files from Telegram.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-foreground border border-border/50">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
