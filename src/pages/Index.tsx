import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, Shield, Handshake, ArrowRight, TrendingUp, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroBanner from "@/assets/hero-banner.jpg";

const stats = [
  { icon: Users, value: "50,000+", label: "People Served" },
  { icon: TrendingUp, value: "120+", label: "Active Programs" },
  { icon: Award, value: "18", label: "Years of Service" },
  { icon: Globe, value: "35+", label: "Partner Organizations" },
];

const services = [
  { icon: Shield, title: "Disability Support", desc: "Comprehensive rehabilitation and assistive services for persons with disabilities." },
  { icon: BookOpen, title: "Education Programs", desc: "Inclusive education initiatives and skill development for all ages." },
  { icon: Handshake, title: "Vocational Training", desc: "Job-ready training programs to empower economic independence." },
  { icon: Heart, title: "Community Health", desc: "Healthcare outreach and wellness programs for underserved communities." },
];

const news = [
  { date: "Feb 5, 2026", title: "Annual Inclusion Summit 2026 Announced", desc: "Join us for our largest gathering yet, celebrating diversity and inclusion." },
  { date: "Jan 20, 2026", title: "New Vocational Center Opens in Lahore", desc: "Expanding our training facilities to reach more communities across Punjab." },
  { date: "Jan 8, 2026", title: "Partnership with Global Accessibility Fund", desc: "A new partnership to enhance assistive technology access nationwide." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Community members being supported by social workers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay/75" />
        </div>
        <div className="relative container-custom px-4 md:px-8 text-center md:text-left max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Empowering Lives,<br />
            <span className="text-secondary">Building Futures</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-xl">
            We create inclusive opportunities for persons with disabilities and underserved communities through education, rehabilitation, and advocacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8">
              <Link to="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-teal-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Purpose</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Driven by compassion and commitment to social justice.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-serif text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower marginalized communities through accessible education, rehabilitation services, and advocacy — ensuring no one is left behind in the journey toward an inclusive society.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-serif text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every individual, regardless of ability or background, has equal access to opportunities, dignity, and a fulfilling life within their community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive programs designed to uplift and empower.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Card key={i} className="group hover:shadow-lg transition-shadow border-none bg-muted/50 hover:bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/services">View All Services <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest News</h2>
            <p className="text-muted-foreground">Stay updated with our latest initiatives and announcements.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {news.map((item, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-medium text-secondary">{item.date}</span>
                  <h3 className="text-lg font-bold font-serif text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
