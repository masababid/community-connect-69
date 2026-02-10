import { Users, Target, Eye, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const team = [
  { name: "Dr. Ayesha Khan", title: "Executive Director", initials: "AK" },
  { name: "Rashid Ahmed", title: "Head of Programs", initials: "RA" },
  { name: "Sarah Malik", title: "Director of Advocacy", initials: "SM" },
  { name: "Imran Hussain", title: "Operations Manager", initials: "IH" },
];

const milestones = [
  { year: "2005", title: "Founded", desc: "Established with a mission to serve persons with disabilities in Karachi." },
  { year: "2010", title: "First Vocational Center", desc: "Opened our first skills training center, serving 200+ individuals." },
  { year: "2015", title: "National Expansion", desc: "Extended programs to Lahore, Islamabad, and Peshawar." },
  { year: "2020", title: "Digital Inclusion", desc: "Launched online accessibility programs during the pandemic." },
  { year: "2024", title: "50,000 Lives Impacted", desc: "Reached a milestone of serving over 50,000 beneficiaries." },
];

const partners = ["UNICEF", "WHO", "USAID", "British Council", "World Bank", "JICA"];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Learn about our journey, mission, and the people driving change.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed text-center mb-4">
            SocialCare is a non-profit social welfare organization dedicated to empowering persons with disabilities and underserved communities across Pakistan. Since our founding in 2005, we have worked tirelessly to create inclusive spaces where everyone can thrive.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center">
            Through our comprehensive programs in education, rehabilitation, vocational training, and advocacy, we aim to break barriers and build bridges toward a more equitable society.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-teal-light">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower marginalized communities through accessible education, rehabilitation, and advocacy — ensuring dignity and opportunity for all.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A fully inclusive society where every individual has equal access to opportunities and can live with dignity and independence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Leadership</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((t, i) => (
              <Card key={i} className="text-center border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{t.initials}</span>
                  </div>
                  <h3 className="font-bold font-serif text-foreground">{t.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Journey</h2>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-primary-foreground" />
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="pb-6">
                  <span className="text-sm font-bold text-secondary">{m.year}</span>
                  <h3 className="text-lg font-bold font-serif text-foreground">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-foreground mb-10">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((p, i) => (
              <div key={i} className="px-8 py-4 rounded-lg bg-muted/50 text-muted-foreground font-semibold text-lg">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
