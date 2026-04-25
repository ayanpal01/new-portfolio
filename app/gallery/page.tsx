import GallerySection from "@/components/galaryview";

export const metadata = {
  title: "Gallery | Ayan Pal",
  description: "View the gallery and moments from Ayan Pal's development journey.",
};

export default function GalleryPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <GallerySection />
    </main>
  );
}
