interface VideoHeroProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export function VideoHero({ videoSrc, title, subtitle, description, ctaText, ctaLink }: VideoHeroProps) {
  return (
    <section className="relative overflow-hidden text-white min-h-[50vh]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#921bb2]/60"></div>
      <div className="relative max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20 lg:py-24">
        <p className="uppercase tracking-wider text-sm text-white/80 font-medium mb-4">
          {subtitle}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
          {title}
        </h1>
        <p className="max-w-prose text-white/90 mb-8" style={{ lineHeight: '1.7' }}>
          {description}
        </p>
        <a
          href={ctaLink}
          className="inline-block px-6 py-3 bg-white text-[#921bb2] font-medium rounded-lg hover:bg-white/90 transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
