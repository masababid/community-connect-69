import { Link } from "react-router-dom";
import { Shield, BookOpen, Handshake, Heart, Megaphone, Accessibility, ClipboardCheck, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const services = [
  { icon: Accessibility, title: "Disability Rehabilitation", desc: "Physical therapy, mobility aids, and rehabilitation programs tailored to individual needs. We work with certified therapists to provide comprehensive recovery plans." },
  { icon: BookOpen, title: "Inclusive Education", desc: "Sign language classes, accessible learning materials, and scholarships for students with disabilities. Our programs cover primary through higher education." },
  { icon: Handshake, title: "Vocational Training", desc: "Job-ready skills in IT, tailoring, crafts, and more. We partner with employers to ensure placement opportunities for graduates." },
  { icon: Heart, title: "Community Health", desc: "Free medical camps, mental health support, and healthcare referrals for underserved communities across multiple cities." },
  { icon: Megaphone, title: "Advocacy & Awareness", desc: "Policy advocacy, public awareness campaigns, and corporate training to promote disability rights and social inclusion." },
  { icon: Shield, title: "Social Protection", desc: "Emergency relief, financial assistance, and legal support for vulnerable families facing crisis situations." },
];

const steps = [
  { num: "1", title: "Contact Us", desc: "Reach out via phone, email, or visit our nearest office." },
  { num: "2", title: "Assessment", desc: "Our team evaluates your needs and recommends suitable programs." },
  { num: "3", title: "Enrollment", desc: "Get enrolled in the appropriate program at no cost." },
  { num: "4", title: "Ongoing Support", desc: "Receive continuous guidance and follow-up throughout your journey." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Comprehensive programs designed to empower, rehabilitate, and include.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all border-none bg-muted/40 hover:bg-card hover:border hover:border-border">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="section-padding bg-teal-light">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">How to Access Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {s.num}
                </div>
                <h3 className="font-bold font-serif text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Need Help or Want to Contribute?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Whether you need our services or want to support our mission, we'd love to hear from you.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
            <Link to="/contact">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
