import Link from "next/link";
import { ArrowRight, Shield, Target, Users, Zap, CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About | AI Consultancy",
  description: "AI with integrity and impact. Meet our team of AI implementation experts serving mid-sized businesses across APAC, UK, and US.",
};

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Transparent",
      description: "Clear pricing, honest timelines, and regular progress updates. No black boxes or surprise costs."
    },
    {
      icon: Target,
      title: "Pragmatic", 
      description: "We focus on solutions that work in the real world, not just impressive demos or theoretical possibilities."
    },
    {
      icon: CheckCircle,
      title: "Responsible",
      description: "Every solution includes safety guardrails, monitoring, and ethical AI practices built from the ground up."
    },
    {
      icon: Zap,
      title: "Outcome-obsessed",
      description: "Success is measured by your business results, not by the complexity of the technology we deploy."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Head of Solutions",
      location: "Sydney, Australia",
      expertise: "CRM automation, process optimization",
      background: "Former McKinsey consultant with 8+ years in business process automation. Led AI transformations for 50+ mid-sized businesses.",
      image: "/team/sarah.jpg" // Placeholder - would need actual images
    },
    {
      name: "Marcus Thompson", 
      role: "Technical Lead",
      location: "London, UK",
      expertise: "Microsoft 365, enterprise integrations",
      background: "Ex-Microsoft engineer specializing in Copilot implementations. Built custom AI solutions for Fortune 500 companies.",
      image: "/team/marcus.jpg"
    },
    {
      name: "Dr. Priya Patel",
      role: "AI Research Director", 
      location: "Austin, Texas",
      expertise: "Healthcare AI, compliance frameworks",
      background: "PhD in Machine Learning from Stanford. Former Google Health researcher with expertise in responsible AI deployment.",
      image: "/team/priya.jpg"
    },
    {
      name: "James Liu",
      role: "AgentOps Engineer",
      location: "Sydney, Australia", 
      expertise: "Monitoring, evaluations, MLOps",
      background: "Former Uber ML engineer. Built production monitoring systems for AI applications serving millions of users.",
      image: "/team/james.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "Change Management Lead",
      location: "London, UK",
      expertise: "Training, adoption, organizational change",
      background: "Former Deloitte change management consultant. Specialized in technology adoption for mid-market companies.",
      image: "/team/emma.jpg"
    },
    {
      name: "David Kim",
      role: "Solutions Architect",
      location: "Austin, Texas",
      expertise: "Voice AI, telecommunications integration", 
      background: "Former Twilio technical architect. Built voice AI systems processing 100M+ calls annually.",
      image: "/team/david.jpg"
    }
  ];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Mission Block */}
        <section className="mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              AI with integrity and impact.
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-12">
              We believe AI should augment human capabilities, not replace them. Our mission is to help 
              mid-sized businesses implement AI solutions that are transparent, reliable, and deliver 
              measurable business outcomes.
            </p>
            
            <div className="bg-primary-50 rounded-2xl px-8 py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Our approach</h2>
              <div className="text-left max-w-2xl mx-auto space-y-4">
                <p className="text-gray-700">
                  <strong>Business-first:</strong> We start with your KPIs and work backwards to the technology, 
                  ensuring every AI implementation drives real business value.
                </p>
                <p className="text-gray-700">
                  <strong>Responsible by design:</strong> Safety guardrails, monitoring, and ethical considerations 
                  are built into every solution from day one, not added as an afterthought.
                </p>
                <p className="text-gray-700">
                  <strong>Pragmatic implementation:</strong> We deliver working solutions in weeks, not months, 
                  so you can see ROI quickly and iterate based on real usage data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Our values</h2>
            <p className="text-lg text-gray-600">
              These principles guide every decision we make and every solution we build.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="text-center border-2 border-gray-100 hover:border-primary-200 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Meet the team</h2>
            <p className="text-lg text-gray-600">
              AI implementation experts with deep experience across consulting, engineering, 
              and change management serving clients globally.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary-600" />
                  </div>
                  <CardTitle className="text-lg text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center">
                    <div className="font-medium text-primary-600">{member.role}</div>
                    <div className="flex items-center justify-center mt-1 text-sm text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      {member.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900 mb-2">Expertise</div>
                    <p className="text-sm text-gray-600 mb-4">{member.expertise}</p>
                    
                    <div className="text-sm font-medium text-gray-900 mb-2">Background</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{member.background}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Global Presence */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-2xl px-8 py-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Global expertise, local understanding
              </h2>
              
              <div className="grid gap-8 md:grid-cols-3 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-2xl">🇦🇺</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sydney, Australia</h3>
                  <p className="text-sm text-gray-600">APAC headquarters serving Australia, New Zealand, and Southeast Asia</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-2xl">🇬🇧</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">London, UK</h3>
                  <p className="text-sm text-gray-600">European operations covering UK, Ireland, and EU markets</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Austin, Texas</h3>
                  <p className="text-sm text-gray-600">North American hub serving US, Canada, and Latin America</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                With team members across three continents, we provide 24/7 support and understand 
                the unique regulatory and business requirements of each region.
              </p>
              
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Find your local team <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="mb-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              By the numbers
            </h2>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
                <p className="text-sm text-gray-600">Successful AI implementations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">85%</div>
                <p className="text-sm text-gray-600">Client satisfaction score</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">3.2M</div>
                <p className="text-sm text-gray-600">Hours automated annually</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">24/7</div>
                <p className="text-sm text-gray-600">Global support coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="border-2 border-primary-200 bg-primary-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ready to work with us?</CardTitle>
              <CardDescription className="text-base">
                Whether you&apos;re just starting to explore AI or ready to scale existing implementations, 
                our team is here to help you succeed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Book a strategy call <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/audit">
                    Start with free audit
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}