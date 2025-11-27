import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Clock, CheckCircle, Building2, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Case Studies | AI Consultancy",
  description: "Real outcomes, not just demos. See how we've delivered measurable AI results for retail, healthcare, and logistics companies.",
};

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "retail",
      industry: "Retail",
      company: "Mid-size E-commerce Platform",
      icon: TrendingUp,
      iconBg: "bg-accent-100",
      iconColor: "text-accent-600",
      metric: "+20%",
      metricDesc: "conversion rate increase",
      challenge: "Manual lead qualification was slowing down sales cycles and missing high-value prospects.",
      solution: "Deployed AI agents for lead scoring, personalized product recommendations, and automated follow-up sequences.",
      results: [
        "20% increase in conversion rates",
        "35% reduction in lead response time", 
        "50% decrease in manual qualification work",
        "AI identified 15% more qualified leads than manual process"
      ],
      timeline: "2 weeks (Agent Sprint)",
      investment: "AU$12k",
      technologies: ["CRM Integration", "Lead Scoring AI", "Recommendation Engine", "Email Automation"]
    },
    {
      id: "healthcare", 
      industry: "Healthcare",
      company: "Regional Medical Network",
      icon: Shield,
      iconBg: "bg-primary-100", 
      iconColor: "text-primary-600",
      metric: "−25%",
      metricDesc: "diagnostic errors reduced",
      challenge: "Radiologists were overwhelmed with case volume, leading to fatigue-related diagnostic errors.",
      solution: "AI-powered diagnostic support system with confidence scoring and anomaly flagging.",
      results: [
        "25% reduction in diagnostic errors",
        "40% faster initial screening",
        "85% accuracy in flagging critical cases",
        "30% improvement in radiologist confidence scores"
      ],
      timeline: "10 weeks (Integrate & Scale)",
      investment: "AU$85k", 
      technologies: ["Medical AI Models", "PACS Integration", "Audit Logging", "Compliance Framework"]
    },
    {
      id: "logistics",
      industry: "Logistics", 
      company: "Regional Distribution Network",
      icon: Clock,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600", 
      metric: "−30% / −15%",
      metricDesc: "delivery time / ops cost",
      challenge: "Route optimization was manual and reactive, leading to inefficient deliveries and high fuel costs.",
      solution: "AI-driven route optimization with real-time traffic and weather integration, plus predictive maintenance.",
      results: [
        "30% reduction in average delivery time",
        "15% decrease in operational costs",
        "25% improvement in on-time deliveries", 
        "20% reduction in fuel consumption"
      ],
      timeline: "8 weeks (Integrate & Scale)",
      investment: "AU$55k",
      technologies: ["Route Optimization AI", "Fleet Management", "Weather APIs", "Predictive Analytics"]
    }
  ];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Real outcomes, not just demos.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how we've delivered measurable AI results across industries, with detailed metrics 
            and insights you can apply to your own business.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            
            return (
              <section key={study.id} id={study.id} className={`${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'} rounded-2xl p-8 lg:p-12`}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${study.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className={`h-6 w-6 ${study.iconColor}`} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{study.industry}</h2>
                        <p className="text-gray-600">{study.company}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className={`text-4xl font-bold ${study.iconColor} mb-2`}>
                        {study.metric}
                      </div>
                      <p className="text-lg text-gray-600">{study.metricDesc}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">The Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Our Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results Card */}
                  <Card className={`${index % 2 === 1 ? 'order-1' : ''} border-2 ${study.iconColor.replace('text', 'border').replace('600', '200')}`}>
                    <CardHeader>
                      <CardTitle className="text-xl">Results Delivered</CardTitle>
                      <CardDescription>
                        {study.timeline} • {study.investment}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="border-t pt-4">
                        <h4 className="font-medium text-gray-900 mb-2 text-sm">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contact?case_study=true">
                          Book a results review <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </section>
            );
          })}
        </div>

        {/* Implementation Approach */}
        <section className="mt-20">
          <div className="bg-primary-900 text-white rounded-2xl px-8 py-12 lg:px-12">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Our proven implementation approach
            </h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary-200" />
                </div>
                <h3 className="font-semibold mb-2">Business-First</h3>
                <p className="text-sm text-primary-100">
                  We start with your KPIs and work backwards to the tech, ensuring every solution drives real business value.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary-200" />
                </div>
                <h3 className="font-semibold mb-2">Human-Centered</h3>
                <p className="text-sm text-primary-100">
                  Our solutions augment your team's capabilities rather than replacing them, ensuring smooth adoption.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary-200" />
                </div>
                <h3 className="font-semibold mb-2">Rapid Results</h3>
                <p className="text-sm text-primary-100">
                  We deliver working solutions in weeks, not months, so you see ROI quickly and can iterate based on real usage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="border-2 border-dashed border-gray-300 rounded-2xl px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to create your own success story?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Every successful AI implementation starts with understanding your unique challenges. 
              Let's discuss how we can deliver similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book a strategy call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/audit">
                  Get AI readiness audit
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Industries we specialize in
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="text-left p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Mid-sized B2B companies</h3>
                <p className="text-sm text-gray-600">
                  50-500 employees with established processes ready for intelligent automation.
                </p>
              </div>
              
              <div className="text-left p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Service-based businesses</h3>
                <p className="text-sm text-gray-600">
                  Professional services, agencies, and consultancies looking to scale operations.
                </p>
              </div>
              
              <div className="text-left p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Healthcare & compliance-heavy</h3>
                <p className="text-sm text-gray-600">
                  Industries requiring safety, auditability, and regulatory compliance built-in.
                </p>
              </div>
              
              <div className="text-left p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Operations-focused companies</h3>
                <p className="text-sm text-gray-600">
                  Logistics, manufacturing, and distribution with process optimization needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}