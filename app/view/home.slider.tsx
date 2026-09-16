"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";

type Props = {
  images: (string | StaticImageData)[];
};

export default function HomeSlider({ images }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 3000, // ⏱ 3 seconds is better for reading screenshots
      stopOnInteraction: false,
    }),
  ]);

  return (
    <section className="w-full max-w-4xl mx-auto py-6">
      <div
        className="overflow-hidden rounded-[--radius] border border-border bg-card/30"
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 flex justify-center p-4 md:p-8"
            >
              <div className="relative w-full h-[300px] md:h-[500px]">
                <Image
                  src={src}
                  alt={`HU777 App Gameplay ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-xl shadow-2xl object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                  priority={index === 0} // Load first image immediately
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Indicator (Optional) */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent transition-colors"
          />
        ))}
      </div>
    </section>
  );
}
