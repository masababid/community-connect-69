import { useState } from "react";
import { X, Quote, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop", alt: "Community support program" },
  { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop", alt: "Education workshop" },
  { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop", alt: "Volunteers working together" },
  { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop", alt: "Fundraising event" },
  { src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop", alt: "Community gathering" },
  { src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop", alt: "Training session" },
  { src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop", alt: "Health camp" },
];

const testimonials = [
  { quote: "SocialCare changed my life. Through their vocational training, I now have a stable career and can support my family.", name: "Ahmed R.", role: "Program Graduate" },
  { quote: "The inclusive education program gave my daughter opportunities we never thought possible. We are forever grateful.", name: "Fatima S.", role: "Parent of Beneficiary" },
  { quote: "Working with SocialCare has been transformative. Their commitment to accessibility is unmatched.", name: "James L.", role: "Partner Organization" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery & Testimonials</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            See our impact through images, stories, and voices of our community.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="aspect-[3/2] rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setLightbox(img.src.replace("w=600&h=400", "w=1200&h=800"))}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-background hover:text-secondary transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={lightbox} alt="Gallery image enlarged" className="max-w-full max-h-[85vh] rounded-xl object-contain" />
        </div>
      )}

      {/* Testimonials */}
      <section className="section-padding bg-teal-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-secondary/40 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Watch Our Impact</h2>
          <p className="text-muted-foreground mb-8">See how our programs are making a difference in communities across Pakistan.</p>
          <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm">Video placeholder — embed YouTube or Vimeo here</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
