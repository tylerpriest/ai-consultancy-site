import Link from "next/link";
import { ArrowRight, Database, Users, Phone, Search, CheckCircle, Zap, Shield, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Solutions | AI Consultancy",
  description: "AI solutions for CRM, Microsoft 365, Voice & Phone, and Search/RAG. Pre-built integrations that work with your existing tools.",
};

export default function Solutions() {
  const solutions = [
    {
      icon: Database,
      title: "CRM Agents for Zoho/HubSpot",
      description: "Intelligent agents that work directly within your CRM to handle lead triage, quote generation, and follow-ups.",
      features: [
        "Lead triage and scoring",
        "Automated quote drafting", 
        "Smart follow-up sequences",
        "Service ticket deflection",
        "Native data integration",
        "Permissions-aware operations",
        "Complete activity logging"
      ],
      cta: "See CRM agent recipes",
      ctaHref: "/solutions/crm",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: Users,
      title: "Microsoft 365 Copilot Enablement", 
      description: "Make Copilot actually useful with proper governance, data preparation, and custom extensions.",
      features: [
        "Governance framework setup",
        "Data readiness assessment",
        "Custom Copilot extensions",
        "Team training programs",
        "Security & compliance alignment",
        "Usage monitoring & optimization",
        "Change management support"
      ],
      cta: "Make Copilot useful",
      ctaHref: "/solutions/copilot",
      bgColor: "bg-green-50", 
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: Phone,
      title: "Voice & Phone AI",
      description: "Intelligent call handling with real-time routing, knowledge lookup, and automated summaries.",
      features: [
        "Smart call routing",
        "Real-time knowledge lookup", 
        "After-call summaries",
        "Sentiment analysis",
        "Twilio integration",
        "Microsoft Teams compatible",
        "Multi-language support"
      ],
      cta: "Try a voice agent pilot",
      ctaHref: "/solutions/voice",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600", 
      borderColor: "border-purple-200"
    },
    {
      icon: Search,
      title: "Search/RAG on your data",
      description: "Private, secure search across all your documents, wikis, and tickets with built-in guardrails.",
      features: [
        "Private search over PDFs/docs",
        "Wiki knowledge integration",
        "Ticket history search",
        "Source attribution",
        "Evaluation & guardrails included",
        "Relevance scoring",
        "Safe content filtering"
      ],
      cta: "Search your knowledge, safely",
      ctaHref: "/solutions/search",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pre-built AI solutions for your business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ready-to-deploy AI agents and integrations that work with the tools you already use. 
            All include monitoring, evaluations, and safety guardrails.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            
            return (
              <Card key={solution.title} className={`border-2 ${solution.borderColor} ${solution.bgColor} transition-all hover:shadow-lg`}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg ${solution.bgColor} border ${solution.borderColor} flex items-center justify-center mr-4`}>
                      <IconComponent className={`h-6 w-6 ${solution.iconColor}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={solution.ctaHref}>
                      {solution.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Why These Solutions */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl px-8 py-12 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why our solutions work
            </h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pre-built & Tested</h3>
                <p className="text-sm text-gray-600">
                  Battle-tested solutions deployed across dozens of clients, not experimental prototypes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
                <p className="text-sm text-gray-600">
                  Built-in guardrails, evaluations, and monitoring so you can deploy with confidence.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Workflow className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Native Integration</h3>
                <p className="text-sm text-gray-600">
                  Work directly within your existing tools — no forcing users to learn new interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Solutions CTA */}
        <section className="text-center">
          <div className="border-2 border-dashed border-gray-300 rounded-2xl px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need something custom?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Every business is unique. If our pre-built solutions don't fit your exact needs, 
              we can build custom AI agents tailored to your specific workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Discuss custom solution <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">
                  See custom implementations
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="mt-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How we implement solutions
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Discovery & Assessment</h3>
                  <p className="text-gray-600">We analyze your current workflows, data sources, and integration requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Customization & Setup</h3>
                  <p className="text-gray-600">We configure the solution to match your specific business rules and data structure.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Testing & Validation</h3>
                  <p className="text-gray-600">Thorough testing with your real data and processes before going live.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-sm font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Deployment & Training</h3>
                  <p className="text-gray-600">Launch with full team training and ongoing support to ensure adoption success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}