import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ayan Pal Images | ayanpal01 Portfolio Gallery',
  description: 'View images of Ayan Pal (ayanpal01) - Flutter & Full-Stack Web Developer. Professional photos, project screenshots, and developer portfolio images.',
  keywords: [
    'ayanpal01 images',
    'Ayan Pal images',
    'Ayan Pal photos',
    'ayanpal01 gallery',
    'developer photos',
    'portfolio images'
  ],
}

export default function ImagesPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            Ayan Pal Images | ayanpal01 Gallery
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Professional images of Ayan Pal (ayanpal01) - Flutter & Full-Stack Web Developer. 
            View portfolio images, project screenshots, and developer photos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Profile Image */}
          <div className="bg-slate-800 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/ayan-pal-profile.jpg"
              alt="Ayan Pal - Flutter & Full-Stack Web Developer Profile Image"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Ayan Pal - Profile Image
              </h3>
              <p className="text-slate-300">
                Professional profile photo of Ayan Pal (ayanpal01), Flutter & Full-Stack Web Developer
              </p>
              <div className="mt-4 text-sm text-slate-400">
                <p><strong>Keywords:</strong> Ayan Pal, ayanpal01, developer photo, profile image</p>
              </div>
            </div>
          </div>

          {/* Add more images as they become available */}
          <div className="bg-slate-800 rounded-lg p-6 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                Project Screenshots Coming Soon
              </h3>
              <p className="text-slate-300">
                More images from Ayan Pal's projects and development work will be added here.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                Developer Workspace
              </h3>
              <p className="text-slate-300">
                Behind-the-scenes images of Ayan Pal's development environment and workflow.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">About Ayan Pal (ayanpal01)</h2>
            <p className="text-slate-300 leading-relaxed">
              Ayan Pal, also known as ayanpal01, is a professional Flutter & Full-Stack Web Developer 
              specializing in React, Next.js, Node.js, and MongoDB. These images showcase his 
              professional presence and development work. For more information about his projects 
              and services, visit his portfolio.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
              >
                View Full Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}