export default function AboutPage() {
  return (
    <div className="bg-[#000000] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-5 md:px-12 max-w-[800px] prose prose-invert">
        <h1 className="text-[36px] md:text-[48px] font-bold text-[#F5F5F5] mb-8">
          About TeleTorrent
        </h1>
        
        <p className="text-[18px] text-[#F5F5F5] font-semibold leading-relaxed mb-8">
          TeleTorrent is a modern Android application designed to make downloading and managing files simple, organized, and transparent.
        </p>

        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-12">
          TeleTorrent provides a focused experience for users who want to access files available through their Telegram Saved Messages and manage downloads from one convenient application.
        </p>

        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-8">
          The product is built around three simple principles:
        </p>

        <h3 className="text-[20px] font-bold text-[#F5F5F5] mb-4">Simple</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-8">
          TeleTorrent keeps the downloading experience straightforward. Users can find their available files, choose what they want to download, and monitor the progress without unnecessary complexity.
        </p>

        <h3 className="text-[20px] font-bold text-[#F5F5F5] mb-4">Organized</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-8">
          Files are presented with useful information such as file name, type, size, thumbnail availability, download status, and completion state, making it easier to find and manage downloaded content.
        </p>

        <h3 className="text-[20px] font-bold text-[#F5F5F5] mb-4">Transparent</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-12">
          TeleTorrent is designed to clearly communicate what is happening during a download. Users can view download progress, current status, downloaded size, and available controls instead of relying on hidden background activity.
        </p>

        <h3 className="text-[20px] font-bold text-[#F5F5F5] mb-4">Designed for Android</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-12">
          TeleTorrent is designed specifically around the Android mobile experience, with an interface optimized for touch interaction, different screen sizes, and everyday file management.
        </p>

        <h3 className="text-[20px] font-bold text-[#F5F5F5] mb-4">Telegram Integration</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          TeleTorrent uses the Telegram API to provide functionality related to Telegram content and Saved Messages.
        </p>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          TeleTorrent is an independent third-party application and is <strong>not affiliated with, endorsed by, or officially sponsored by Telegram</strong>.
        </p>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-12">
          Users must continue to comply with Telegram's Terms of Service and applicable laws when using TeleTorrent.
        </p>

        <h3 className="text-[20px] font-bold text-[#F5F5F5] mb-4">Your Content, Your Responsibility</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          TeleTorrent provides tools for accessing and downloading files available to the user.
        </p>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          Users are responsible for ensuring that they have the necessary rights and permissions to access, download, store, or use any content through the application.
        </p>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-12">
          TeleTorrent does not encourage copyright infringement, unauthorized distribution, or unlawful use of content.
        </p>

        <h3 className="text-[20px] font-bold text-[#F5F5F5] mb-4">Our Goal</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-6">
          Our goal is simple:
        </p>
        <blockquote className="border-l-4 border-[#B7FF32] pl-4 italic text-[#F5F5F5] mb-6">
          "Make file downloading easier to understand, easier to manage, and easier to use."
        </blockquote>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-8">
          TeleTorrent focuses on the user experience rather than unnecessary complexity.
        </p>
      </div>
    </div>
  )
}
