import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We will contact you shortly.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Chandigarh, India"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 99969 09992"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["akkakkar.58@gmail.com", "advakkkakkar@gmail.com"],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Globe,
      title: "Website",
      details: ["legalwisdomhub.in"],
      color: "from-sky-500 to-sky-600",
    },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section with Background */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-blue-900/95 z-10" />
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1493134799591-2c9eed26201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjA2NjQwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">Contact — Legal Wisdom Hub</h1>
            <p className="text-lg text-white/90 mb-4">
              Connect for Legal Clarity, Strategic Guidance, and Trusted Advisory
            </p>
            <p className="text-white/80">
              With over 40 years of experience in banking, law, and insolvency practice, I offer strategic solutions rooted in integrity, insight, and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Profile Banner */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-blue-200 bg-gradient-to-br from-white to-blue-50/50">
            <CardContent className="pt-6">
              <div className="text-center">
                <h2 className="mb-2">Ashok Kakkar</h2>
                <p className="text-muted-foreground mb-4">
                  Registered Advocate | Insolvency Professional (IBBI) | Oath Commissioner | Former Chief Manager, Punjab National Bank
                </p>
                <p className="text-muted-foreground">
                  Chandigarh, India
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-blue-200 shadow-xl">
                <CardContent className="pt-6">
                  <h2 className="mb-2">Send a Message</h2>
                  <p className="text-muted-foreground mb-6">
                    Every query is treated with confidentiality, care, and commitment.
                  </p>
                  <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          className="border-blue-200 focus:border-blue-500"
                          required
                          name={"firstName"}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          className="border-blue-200 focus:border-blue-500"
                          required
                          name={"lastName"}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="border-blue-200 focus:border-blue-500"
                          required
                          name={"email"}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            name={"phone"}
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="border-blue-200 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <Select
                          name={"service"}
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger id="service" className="border-blue-200">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="banking">Banking & Financial Dispute Resolution</SelectItem>
                          <SelectItem value="loan">Loan Recovery & Litigation Support</SelectItem>
                          <SelectItem value="insolvency">Corporate Insolvency Resolution (CIRP)</SelectItem>
                          <SelectItem value="advisory">Strategic Legal Advisory</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="border-blue-200 focus:border-blue-500"
                        placeholder="Please describe your legal matter or inquiry..."
                        required
                        name={"message"}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="mb-2">Contact Details</h3>
                <p className="text-sm text-muted-foreground">
                  Feel free to reach out for consultations, collaborations, or speaking engagements.
                </p>
              </div>
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-blue-200 hover:shadow-xl transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} shadow-lg`}>
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground break-words">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Services Offered</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal services across multiple practice areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Banking & financial dispute resolution",
              "Loan recovery and litigation support",
              "Corporate Insolvency Resolution (CIRP) & liquidation matters",
              "Strategic legal advisory for individuals, firms, and institutions",
            ].map((service, index) => (
              <Card key={index} className="border-blue-200 bg-gradient-to-br from-white to-blue-50/50 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2" />
                    <p>{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-xl">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-6">
                  <Mail className="h-8 w-8" />
                </div>
              </div>
              <blockquote className="text-2xl text-blue-900 mb-6">
                "Wisdom begins with clarity. Let's build it together."
              </blockquote>
              <p className="text-muted-foreground mb-8">
                Every query is treated with confidentiality, care, and commitment.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:akkakkar.58@gmail.com">Email Us</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+919996909992">Call Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Professional Excellence</h2>
              <p className="text-muted-foreground mb-6">
                Located in Chandigarh, India, our practice combines decades of banking expertise with comprehensive legal knowledge to provide strategic solutions for complex matters.
              </p>
              <p className="text-muted-foreground mb-8">
                As a former Chief Manager at Punjab National Bank and a registered Insolvency Professional, Ashok Kakkar brings unique insights to financial and legal challenges.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3MDg3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Office"
                className="w-full h-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
