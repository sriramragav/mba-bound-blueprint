<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-12">
    
    {/* Cartoon Sam on Left - Right aligned within its column */}
    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
      <img
        src="/avatar/hero-samjpg"
        alt="Cartoon Samyuctaa waving"
        className="w-40 md:w-44 lg:w-52 max-w-full h-auto"
        loading="lazy"
      />
    </div>

    {/* Main Text Block */}
    <div className="text-center md:text-left w-full md:w-2/3">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        <span className="gradient-text">Samyuctaa Sriram</span>
        <span className="block text-3xl md:text-4xl text-primary font-normal mt-2">
          Computer Science Engineering Student
        </span>
      </h1>
      <br />
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
        <em>"Eighty percent of success is showing up."</em>
        <br />– Woody Allen
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-4">
        <a href="/Samyuctaa_Resume.pdf" download="Samyuctaa_Resume.pdf">
          <Button variant="default" size="lg" className="group">
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </a>
        <Button
          variant="outline"
          size="lg"
          onClick={() => {
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const isInApp = /FBAN|FBAV|Instagram|Line|Twitter|MicroMessenger|LinkedInApp|Edge/i.test(navigator.userAgent);
            if (isMobile || isInApp) {
              window.open('/Samyuctaa_Resume.pdf', '_blank');
            } else {
              setIsModalOpen(true);
            }
          }}
        >
          View Resume
        </Button>
      </div>

      {/* Arrow Down */}
      <div className="mt-8 flex justify-center md:justify-start">
        <button
          onClick={scrollToAbout}
          className="text-primary hover:text-foreground transition"
          aria-label="Scroll to About"
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>

      {/* Status */}
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm text-muted-foreground pt-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span>Engineer in Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span>Leader in Training</span>
        </div>
      </div>
    </div>
  </div>
</div>
