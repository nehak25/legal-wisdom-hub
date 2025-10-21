import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Scale,
  Building2,
  TrendingUp,
  FileText,
  Users,
  MessageSquare,
  Award
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: "Banking & Financial Dispute Resolution",
      description: "Expert handling of high-value banking disputes with strategic insight and deep understanding of financial institutions.",
      features: [
        "High-value banking disputes",
        "Financial dispute resolution",
        "Bank-customer conflict management",
        "Regulatory compliance matters",
        "Banking operations advisory",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Scale,
      title: "Loan Recovery & Litigation Support",
      description: "Complex loan recovery cases handled with professionalism and strategic litigation support.",
      features: [
        "Complex loan recovery cases",
        "NPA management and resolution",
        "Litigation strategy and support",
        "Debt recovery proceedings",
        "Settlement negotiations",
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: FileText,
      title: "Corporate Insolvency Resolution (CIRP)",
      description: "Comprehensive insolvency and liquidation services as a registered IBBI Insolvency Professional.",
      features: [
        "Corporate Insolvency Resolution Process",
        "Liquidation matters",
        "Creditor committee management",
        "Resolution plan evaluation",
        "Insolvency advisory",
      ],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Briefcase,
      title: "Strategic Legal Advisory",
      description: "Strategic guidance for individuals, firms, and institutions navigating complex legal and financial matters.",
      features: [
        "Business legal strategy",
        "Risk assessment and mitigation",
        "Corporate advisory services",
        "Compliance and governance",
        "Contract review and drafting",
      ],
      color: "from-sky-500 to-sky-600",
    },
  ];

  const approachSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Every query is treated with confidentiality, care, and commitment. We begin with understanding your unique situation.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Strategic Analysis",
      description: "Deep analysis and structured thinking to identify the best path forward with clarity and precision.",
      icon: TrendingUp,
    },
    {
      step: "03",
      title: "Professional Execution",
      description: "Independent judgment and diplomatic handling of matters with unwavering ethical standards.",
      icon: Award,
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous guidance and adaptation to ensure the best possible outcomes for your situation.",
      icon: Users,
    },
  ];

  const benefits = [
    "Over 40 years of combined banking and legal experience",
    "Former senior banker with deep industry insight",
    "Registered Insolvency Professional (IBBI)",
    "Strategic visionary approach to problem-solving",
    "Commitment to transparency and ethical service",
    "Personalized attention to every case",
  ];

  return (
    <div className="flex-1">
      {/* Hero Section with Background */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-blue-900/95 z-10" />
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3MDg3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Legal Services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">Our Services</h1>
            <p className="text-lg text-white/90 mb-4">
              Connect for Legal Clarity, Strategic Guidance, and Trusted Advisory
            </p>
            <p className="text-white/80">
              With over 40 years of experience in banking, law, and insolvency practice, we offer strategic solutions rooted in integrity, insight, and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Services Offered</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal services backed by decades of banking and legal expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all group border-blue-200 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <CardContent className="pt-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} mb-4 text-white`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A strategic, client-focused methodology that brings clarity to complex matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((item, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all border-blue-200">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-3">
                    <span>{item.step}</span>
                  </div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Image */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjA2MzUxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Partnership"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div>
              <h2 className="mb-6">Why Choose Legal Wisdom Hub?</h2>
              <p className="text-muted-foreground mb-6">
                Whether you're navigating a legal challenge, seeking financial clarity, or simply looking for thoughtful guidance, Legal Wisdom Hub offers a unique combination of experience, insight, and ethical commitment.
              </p>
              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Professional Excellence</h2>
              <p className="text-muted-foreground mb-6">
                As a former Chief Manager at Punjab National Bank with over 40 years of banking experience, combined with credentials as a Registered Advocate and Insolvency Professional (IBBI), Ashok Kakkar brings a unique perspective to legal matters.
              </p>
              <p className="text-muted-foreground mb-8">
                This dual expertise in banking operations and legal practice provides clients with comprehensive solutions that address both the practical and legal dimensions of complex financial matters.
              </p>
              <Button size="lg" asChild>
                <Link to="/about">Learn More About Our Practice</Link>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjA3MjAwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Legal Documents"
                className="w-full h-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 z-10" />
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1493134799591-2c9eed26201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjA2NjQwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h2 className="mb-4 text-white">Ready for Strategic Guidance?</h2>
          <p className="mb-2 text-lg text-white/90 max-w-2xl mx-auto">
            "Wisdom begins with clarity. Let's build it together."
          </p>
          <p className="mb-8 text-white/80 max-w-2xl mx-auto">
            Feel free to reach out for consultations, collaborations, or speaking engagements.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
