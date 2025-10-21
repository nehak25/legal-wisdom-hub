import { Card, CardContent } from "../ui/card";
import { Target, Eye, Heart, Award, TrendingUp, Users, Shield, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AboutPage() {
  const coreValues = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, delivering exceptional legal services.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold the highest ethical standards and maintain transparency in all our dealings.",
    },
    {
      icon: Eye,
      title: "Client Focus",
      description: "Your needs and objectives are at the center of everything we do.",
    },
    {
      icon: Award,
      title: "Results",
      description: "We're committed to achieving the best possible outcomes for our clients.",
    },
  ];

  const strengths = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Deep analysis and structured thinking to solve complex problems.",
    },
    {
      icon: Shield,
      title: "Independent Decision-Making",
      description: "Clear judgment based on experience and professional insight.",
    },
    {
      icon: Users,
      title: "Diplomatic Handling",
      description: "Sensitive matters handled with discretion and professionalism.",
    },
    {
      icon: TrendingUp,
      title: "Adaptability",
      description: "Thriving in dynamic environments with changing requirements.",
    },
  ];

  const credentials = [
    "LL.M, LL.B, M.Com, CAIIB",
    "Registered Advocate with the Bar Council",
    "Insolvency Professional (IBBI)",
    "Oath Commissioner, Chandigarh",
    "Former Chief Manager, Punjab National Bank",
    "Over 40 years of banking & legal experience",
  ];

  const expertise = [
    "High-value banking disputes",
    "Complex loan recovery cases",
    "Corporate Insolvency Resolution (CIRP) & liquidation matters",
    "Strategic advisory for individuals, firms, and institutions",
  ];

  return (
    <div className="flex-1">
      {/* Hero Section with Background */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-blue-900/95 z-10" />
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjA3MjAwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Legal Documents"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">About Legal Wisdom Hub</h1>
            <p className="text-lg text-white/90 mb-4">
              Welcome to Kakkar Wisdom Hub — a space where legal clarity, financial wisdom, and personal growth converge.
            </p>
            <p className="text-white/80">
              Founded by Ashok Kakkar, a seasoned legal advisor, mentor, and former senior banker, this platform is built on over four decades of experience in banking operations, dispute resolution, and insolvency law. But beyond credentials, it's driven by a deeper purpose: to guide individuals and institutions through complexity with integrity, empathy, and strategic foresight.
            </p>
          </div>
        </div>
      </section>

      {/* Ashok Kakkar Profile Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl transform rotate-3" />
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1595880961482-c68f6456a921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwanVzdGljZXxlbnwxfHx8fDE3NjA3MDY4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Justice and Law"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-4">Ashok Kakkar</h2>
              <p className="text-lg text-blue-600 mb-4">
                Chandigarh, India
              </p>
              <p className="mb-6 text-muted-foreground">
                Registered Advocate | Insolvency Professional | Oath Commissioner | Former Banker
              </p>
              
              <div className="mb-8">
                <h3 className="mb-4">Academic & Professional Credentials</h3>
                <div className="space-y-2">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2" />
                      <p className="text-muted-foreground">{credential}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Decades of experience in banking, law, and strategic advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {expertise.map((item, index) => (
              <Card key={index} className="border-blue-200 bg-gradient-to-br from-white to-blue-50/50 hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600" />
                    </div>
                    <p>{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Outlook Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc2MDYxNjg0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Team"
                className="w-full h-full object-cover aspect-video"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6">Personality & Professional Outlook</h2>
              <p className="mb-6 text-muted-foreground">
                Ashok's professional style aligns with "The Strategic Visionary." Known for deep analysis, structured thinking, and independent judgment, he brings clarity to chaos and solutions to complexity.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="mb-2">Growth Focus</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <Lightbulb className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Enhancing emotional expression for deeper connection</span>
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <Lightbulb className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Prioritizing balance and mindfulness</span>
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <Lightbulb className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Embracing continuous learning across law, finance, and human behavior</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Professional Strengths</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key qualities that define our approach to legal practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-white to-blue-50/50 border-blue-200 hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <strength.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{strength.title}</h3>
                  <p className="text-muted-foreground">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Kakkar Wisdom Hub?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This isn't just a consultancy — it's a movement toward informed, empowered living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-white to-blue-50/50 border-blue-200 hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white max-w-4xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="mb-6 text-center">Our Offerings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p>Trusted expertise</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p>Transparent guidance</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p>Motivational insights</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p>A commitment to ethical service</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-8">Our Mission</h2>
          <div className="space-y-6">
            <p className="text-xl text-blue-600">
              To simplify the complex.
            </p>
            <p className="text-xl text-blue-600">
              To inspire the uncertain.
            </p>
            <p className="text-xl text-blue-600">
              To serve with wisdom, warmth, and unwavering professionalism.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
