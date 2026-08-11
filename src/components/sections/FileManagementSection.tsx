export function FileManagementSection() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-5 md:px-12 max-w-[1240px]">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#090909] leading-[1.1] mb-6">
              Your files,<br />properly organized.
            </h2>
            <p className="text-[17px] text-[#6B6B6B] leading-[1.6] max-w-[480px]">
              Browse your files with clear categories, file information, thumbnails and download status.
            </p>
          </div>

          {/* Right: Screenshot */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[340px] aspect-[1/2.16] bg-black rounded-[32px] border-[8px] border-[#090909] shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden">
              <img src="/app_settings.png" alt="Saved Screen" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
