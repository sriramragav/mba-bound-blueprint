import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const earlyCerts = [
  '/certificates/CourseEra/2016-IntroToMarketingFromWharton.jpg',
  '/certificates/CourseEra/2016-Entrepreneurship1FromWharton.jpg',
  '/certificates/CourseEra/2019-Entrepreneurship2FromWharto.jpg'
];

const laterCerts = [
  '/certificates/CourseEra/2024-MLFromStanford.jpg',
  '/certificates/CourseEra/2025-DataEngFromDeepLearning.jpg',
  '/certificates/CourseEra/2025-ETLfromDeepLearning.jpg',
  '/certificates/CourseEra/2025-SpringBootFromaPackt.jpg'
];

// Preload images
const preloadImages = (certGroups: string[][]) => {
  certGroups.flat().forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const Lightbox = ({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) => {
  return createPortal(
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Zoomed certificate"
        className="max-h-[90vh] max-w-[90vw] object-contain border rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
};

const CertificationCard = ({ title, certs }: { title: string; certs: string[] }) => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [animateDirection, setAnimateDirection] = useState<'left' | 'right' | ''>('');

  const next = () => {
    if (index < certs.length - 1) {
      setAnimateDirection('left');
      setLoading(true);
      setTimeout(() => setIndex(index + 1), 50);
    }
  };

  const prev = () => {
    if (index > 0) {
      setAnimateDirection('right');
      setLoading(true);
      setTimeout(() => setIndex(index - 1), 50);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (delta > 50) prev();
    else if (delta < -50) next();
    setTouchStartX(null);
  };

  const iconButtonStyle = (disabled: boolean) =>
    `text-lg font-bold px-2 ${disabled ? 'text-muted-foreground opacity-50 cursor-not-allowed' : 'text-primary hover:text-accent-foreground'}`;

  return (
    <>
      <Card className="text-center group hover:shadow-primary transition-all duration-300 h-full flex flex-col justify-between">
        <CardContent className="p-4 flex flex-col h-full">
          <div className="w-full mb-2 flex justify-between items-center text-sm text-foreground font-semibold">
            <span>{title}</span>
          </div>

          <div
            className="relative aspect-[4/3] w-full rounded border flex items-center justify-center bg-muted overflow-hidden touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/70 z-10">
                <div className="animate-spin h-6 w-6 border-2 border-t-transparent border-primary rounded-full" />
              </div>
            )}
            <img
              src={certs[index]}
              alt={`Certificate ${index + 1}`}
              onClick={() => setLightboxOpen(true)}
              className={`
                cursor-zoom-in
                transition-all duration-500 ease-in-out transform
                ${loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                ${animateDirection === 'left' ? 'translate-x-4' : ''}
                ${animateDirection === 'right' ? '-translate-x-4' : ''}
                max-h-full max-w-full object-contain
              `}
              onLoad={() => {
                setLoading(false);
                setAnimateDirection('');
              }}
            />
          </div>

          <div className="flex justify-center items-center gap-4 mt-4">
            <button onClick={prev} className={iconButtonStyle(index === 0)} disabled={index === 0}>
              &lt;
            </button>
            <span className="text-xs text-muted-foreground">
              {index + 1} of {certs.length}
            </span>
            <button onClick={next} className={iconButtonStyle(index === certs.length - 1)} disabled={index === certs.length - 1}>
              &gt;
            </button>
          </div>
        </CardContent>
      </Card>

      {lightboxOpen && <Lightbox src={certs[index]} onClose={() => setLightboxOpen(false)} />}
    </>
  );
};

const CertificationsSection = () => {
  useEffect(() => {
    preloadImages([earlyCerts, laterCerts]);
  }, []);

  return (
    <section id="certifications" className="py-12 section-tinted scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3 relative section-divider pb-4">Certifications</h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Where I kept showing up to learn more.
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
