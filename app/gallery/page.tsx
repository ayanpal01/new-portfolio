import GallerySection from "@/components/galaryview";

export const metadata = {
  title: "Gallery | Ayan Pal",
  description: "View the gallery, events, achievements, and moments from Ayan Pal's development journey.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-slate-900 selection:text-white pt-24 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/40 rounded-full blur-3xl" />
          {/* Dotted Grid */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 mt-8">
            <h1 className="text-5xl md:text-7xl tracking-wide font-extrabold text-slate-900 mb-6 font-sans">
                GALLERY
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                A visual timeline of my journey, including events, certifications, achievements, and major project milestones.
            </p>
        </div>

        <GallerySection />
      </div>
    </main>
  );
}
