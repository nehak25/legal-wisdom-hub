import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Scale, Shield, Users, Award, ArrowRight, CheckCircle, Briefcase, Target, BookOpen } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HomePage() {
  const features = [
    {
      icon: Scale,
      title: "40+ Years Experience",
      description: "Over four decades of experience in banking operations, dispute resolution, and insolvency law.",
    },
    {
      icon: Shield,
      title: "Strategic Visionary",
      description: "Deep analysis, structured thinking, and independent judgment to bring clarity to complex matters.",
    },
    {
      icon: Users,
      title: "Client-Focused Approach",
      description: "Every query treated with confidentiality, care, and unwavering commitment.",
    },
    {
      icon: Award,
      title: "Proven Credentials",
      description: "Registered Advocate, Insolvency Professional (IBBI), and Oath Commissioner.",
    },
  ];

  const expertiseAreas = [
    {
      title: "Banking Disputes",
      description: "High-value banking disputes and complex financial matters with strategic insight.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjA3MjAwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Loan Recovery",
      description: "Complex loan recovery cases and litigation support with professional excellence.",
      image: "https://images.unsplash.com/photo-1758310999515-645097b709db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYwNjMxNDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Insolvency Resolution",
      description: "Corporate Insolvency Resolution (CIRP) and liquidation matters handled with expertise.",
      image: "https://images.unsplash.com/photo-1595880961482-c68f6456a921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwanVzdGljZXxlbnwxfHx8fDE3NjA3MDY4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Trusted Expertise",
      description: "Decades of experience in banking, law, and strategic advisory.",
    },
    {
      icon: Shield,
      title: "Transparent Guidance",
      description: "Clear, honest communication throughout every engagement.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Embracing growth across law, finance, and human behavior.",
    },
    {
      icon: Briefcase,
      title: "Ethical Service",
      description: "Unwavering commitment to professional ethics and integrity.",
    },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-blue-900/95 z-10" />
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FsZXMlMjBqdXN0aWNlfGVufDF8fHx8MTc2MDcyMDA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Legal Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-20">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">
              Legal Wisdom Hub
            </h1>
            <p className="mb-4 text-xl text-white">
              Where Legal Clarity, Financial Wisdom, and Personal Growth Converge
            </p>
            <p className="mb-8 text-lg text-white/90">
              Founded by Ashok Kakkar, a seasoned legal advisor, mentor, and former senior banker with over 40 years of experience in banking operations, dispute resolution, and insolvency law. Bringing clarity to chaos and solutions to complexity with integrity, empathy, and strategic foresight.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Blue Gradient Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Legal Wisdom Hub?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A space built on decades of experience, driven by a purpose to guide individuals and institutions through complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-blue-200 bg-gradient-to-br from-white to-blue-50/50 hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
                    <feature.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Ashok Kakkar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl transform rotate-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjA2MzUxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional Partnership"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-6">Ashok Kakkar</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Chandigarh, India
              </p>
              <p className="mb-6 text-muted-foreground">
                Registered Advocate | Insolvency Professional | Oath Commissioner | Former Senior Banker (Punjab National Bank)
              </p>
              <div className="mb-6">
                <h3 className="mb-3">Academic & Professional Credentials</h3>
                <ul className="space-y-2">
                  {["LL.M, LL.B, M.Com, CAIIB", "Registered Advocate with the Bar Council", "Insolvency Professional (IBBI)", "Oath Commissioner, Chandigarh"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal services backed by decades of banking and legal experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all border-blue-100">
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-10" />
                  <ImageWithFallback
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="mb-2">{area.title}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-blue-600 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Commitment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This isn't just a consultancy — it's a movement toward informed, empowered living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-blue-200 bg-gradient-to-br from-white to-blue-50/50 hover:shadow-xl transition-all text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
                    <value.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                To simplify the complex.
              </p>
              <p className="text-lg mb-6">
                To inspire the uncertain.
              </p>
              <p className="text-lg mb-8">
                To serve with wisdom, warmth, and unwavering professionalism.
              </p>
              <Button size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3MDg3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Office"
                className="w-full h-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 z-10" />
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1493134799591-2c9eed26201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjA2NjQwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h2 className="mb-4 text-white">Ready for Legal Clarity?</h2>
          <p className="mb-2 text-lg text-white/90 max-w-2xl mx-auto">
            "Wisdom begins with clarity. Let's build it together."
          </p>
          <p className="mb-8 text-white/80 max-w-2xl mx-auto">
            Contact us today for a confidential consultation. Every query is treated with confidentiality, care, and commitment.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
