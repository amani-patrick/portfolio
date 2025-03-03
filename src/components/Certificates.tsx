
import { useState } from "react";
import { certificates } from "@/utils/data";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(certificates.length).fill(false));

  const handleImageLoad = (index: number) => {
    const newIsLoaded = [...isLoaded];
    newIsLoaded[index] = true;
    setIsLoaded(newIsLoaded);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="certificates" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Certificates</h2>
        </div>

        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative aspect-[2/1] md:aspect-[3/1]">
              {certificates.map((certificate, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    currentIndex === index
                      ? "opacity-100 translate-x-0"
                      : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div
                    className={`blur-load ${isLoaded[index] ? "loaded" : ""}`}
                    style={{ backgroundImage: `url(${certificate.image}?blur=200&w=100)` }}
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="object-cover w-full h-full"
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {certificate.title}
                      </h3>
                      <p className="text-white/80 mb-1">{certificate.issuer}</p>
                      <p className="text-white/80 mb-4">Issued: {certificate.date}</p>
                      <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-md inline-block">
                        {certificate.credential}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            onClick={handlePrevious}
            aria-label="Previous certificate"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            onClick={handleNext}
            aria-label="Next certificate"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-white"
                    : "bg-white/40"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animate">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-xl animated-card cursor-pointer animate-fade-in ${
                currentIndex === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Award size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold line-clamp-1">{certificate.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {certificate.issuer}
              </p>
              <p className="text-sm text-muted-foreground">{certificate.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
