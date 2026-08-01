export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-center">About TeleTorrent</h2>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              TeleTorrent is the ultimate download manager built specifically for users who rely on their saved messages and group chats for media consumption. Whether you are archiving important documents or downloading large video files, our platform is engineered to give you complete control over your media.
            </p>
            <p>
              Many users struggle with connection drops when attempting to download large courses, movies, or heavy ZIP archives. TeleTorrent solves this by providing persistent background downloads. You can queue up multiple large files, lock your screen, and let the manager handle the heavy lifting without draining your battery unnecessarily.
            </p>
            <p>
              It is the perfect companion for students downloading lecture videos, professionals archiving heavy project files, and casual users saving their favorite offline media. With smart pause and resume capabilities, your progress is always safe. Build your personal offline library with confidence, speed, and absolute reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
