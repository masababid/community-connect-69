import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Send a Message</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={5} className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "Address", value: "123 Welfare Avenue, Clifton, Karachi 75600, Pakistan" },
                    { icon: Phone, label: "Phone", value: "+92 21 1234 5678" },
                    { icon: Mail, label: "Email", value: "info@socialcare.org" },
                    { icon: Clock, label: "Office Hours", value: "Mon–Fri: 9:00 AM – 5:00 PM" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-lg font-bold font-serif text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-muted-foreground" aria-label="Social link">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden bg-muted h-48 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Map placeholder — embed Google Maps here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
