import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const earlyCerts = [
  '/certificates/CourseEra/2016-IntroToMarketingFromWharton.jpg',
  '/certificates/CourseEra/2016-Entrepreneurship1FromWharton.jpg',
  '/certificates/CourseEra/2019-Entrepreneurship2FromWharto.jpg',
];

const laterCerts = [
  '/certificates/CourseEra/2024-MLFromStanford.jpg',
  '/certificates/CourseEra/2025-DataEngFromDeepLearning.jpg',
  '/certificates/CourseEra/2025-ETLfromDeepLearning.jpg',
  '/certificates/CourseEra/2025-SpringBootFromaPackt.jpg',
];

// Preload all certificate images
const preloadImages = (certGroups: string[][]) => {
  certGroups.flat().forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const CertificationCard = ({ title, certs }: { title: string; certs: string[] }) => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showHint, setShowHint] = useState(true);

  const next = () => {
    if (index < certs.length - 1) {
      setLoading(true);
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setLoading(true);
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const buttonStyle = (disabled: boolean) =>
    `text-lg font-bold px-2 ${disabled ? 'text-muted-foreground opacity-50 cursor-not-allowed' : 'text-primary'}`;

  return (
    <Card className="text-center group hover:shadow-primary transition-all duration-300 h-full flex flex-col justify-between">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="w-full mb-2 flex justify-between items-center text-sm text-foreground font-semibold">
          <span>{title}</span>
        </div>

        <div className="relative aspect-[4/3] w-full rounded border flex items-center justify-center bg-muted overflow-hidden">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/70 z-10">
              <div className="animate-spin h-6 w-6 border-2 border-t-transparent border-primary rounded-full" />
            </div>
          )}

          {/* Zoom Hint on Mobile */}
          {showHint && !loading && (
            <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-2 py-[2px] rounded pointer-events-none z-10 transition-opacity duration-1000">
              Tap to Zoom 🔍
            </div>
          )}

          <img
            src={certs[index]}
            alt={`Certificate ${index + 1}`}
            onClick={() => alert('Open lightbox here')}
            className={`cursor-zoom-in transition-all duration-500 ease-in-out transform ${
              loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            } max-h-full max-w-full object-contain`}
            onLoad={() => setLoading(false)}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-4 space-x-4 text-sm">
          <button onClick={prev} className={buttonStyle(index === 0)} disabled={index === 0}>
            &lt;
          </button>
          <span className="text-xs text-muted-foreground">
            {index + 1} of {certs.length}
          </span>
          <button onClick={next} className={buttonStyle(index === certs.length - 1)} disabled={index === certs.length - 1}>
            &gt;
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const CertificationsSection = () => {
  useEffect(() => {
    preloadImages([earlyCerts, laterCerts]);
  }, []);

  return (
    <section id="certifications" className="py-12 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Certifications</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-4" />
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            A journey in learning — from early curiosity to technical depth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <CertificationCard title="Early Years: 12 – 16" certs={earlyCerts} />
          <CertificationCard title="Later Years: 19+" certs={laterCerts} />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
