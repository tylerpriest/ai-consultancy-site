import Link from "next/link";
import { ArrowRight, FileText, Calculator, Video, CheckSquare, Download, Play, ExternalLink, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Resources | AI Consultancy",
  description: "Free AI resources including readiness audit, responsible AI checklist, ROI calculator, and monthly webinars.",
};

export default function Resources() {
  const resources = [
    {
      id: "audit",
      title: "AI Readiness Audit",
      subtitle: "12-question assessment + 30-min consult",
      description: "Discover if your business is ready for AI and get a personalized roadmap with specific recommendations for your industry and use case.",
      icon: CheckSquare,
      iconBg: "bg-primary-100",
      iconColor: "text-primary-600",
      type: "Assessment",
      duration: "15 min assessment + 30 min call",
      features: [
        "Business process maturity scoring",
        "Data readiness evaluation",
        "Technology infrastructure check",
        "ROI potential estimation",
        "Personalized implementation roadmap",
        "1-on-1 consultation with AI strategist"
      ],
      cta: "Start free assessment",
      ctaHref: "/audit",
      featured: true
    },
    {
      id: "checklist", 
      title: "Responsible-AI Checklist",
      subtitle: "Your 10-point guardrail pack",
      description: "Complete DPIA template, RBAC matrix, evaluation plan, and incident response playbook to ensure your AI implementations are safe and compliant.",
      icon: FileText,
      iconBg: "bg-accent-100", 
      iconColor: "text-accent-600",
      type: "Templates",
      duration: "Instant download",
      features: [
        "Data Protection Impact Assessment template",
        "Role-based access control matrix",
        "AI evaluation framework",
        "Incident response playbook",
        "Risk assessment worksheets",
        "Compliance checklist for GDPR/SOX"
      ],
      cta: "Download free pack",
      ctaHref: "/resources/checklist",
      featured: false
    },
    {
      id: "calculator",
      title: "ROI Calculator", 
      subtitle: "Estimate hours saved & model spend vs license/ops",
      description: "Interactive calculator to model the financial impact of AI implementation, including time savings, operational costs, and total cost of ownership.",
      icon: Calculator,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600", 
      type: "Tool",
      duration: "5-10 minutes",
      features: [
        "Time savings calculation by role",
        "AI model cost estimation", 
        "License vs. operations cost comparison",
        "Break-even analysis timeline",
        "Sensitivity analysis for different scenarios",
        "Exportable business case summary"
      ],
      cta: "Open calculator",
      ctaHref: "/resources/calculator",
      featured: false
    },
    {
      id: "webinars",
      title: "Monthly Webinars",
      subtitle: "45-min live demos & Q&A", 
      description: "Join our monthly deep-dives into AI implementation best practices, featuring live demos of our latest solutions and Q&A with our experts.",
      icon: Video,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      type: "Live Event", 
      duration: "45 minutes",
      features: [
        "Live solution demonstrations",
        "Industry-specific case studies",
        "Q&A with AI implementation experts", 
        "Latest AI trends and tools review",
        "Recorded sessions for later viewing",
        "Exclusive attendee-only resources"
      ],
      cta: "Register for next session",
      ctaHref: "/resources/webinars",
      featured: false
    }
  ];

  const upcomingWebinars = [
    {
      date: "Sept 15, 2024",
      time: "2:00 PM AEST / 6:00 AM EST", 
      title: "CRM AI Agents: HubSpot vs Zoho Implementation Deep-dive",
      presenter: "Sarah Chen, Head of Solutions"
    },
    {
      date: "Oct 20, 2024", 
      time: "2:00 PM AEST / 6:00 AM EST",
      title: "Making Microsoft Copilot Actually Useful: Governance & Extensions",
      presenter: "Marcus Thompson, Technical Lead"
    },
    {
      date: "Nov 17, 2024",
      time: "2:00 PM AEST / 6:00 AM EST", 
      title: "Voice AI for Customer Service: Implementation & Best Practices",
      presenter: "Dr. Priya Patel, AI Research Director"
    }
  ];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Free AI implementation resources
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to plan, implement, and operate AI solutions responsibly. 
            All resources are free and designed for mid-sized businesses.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            
            return (
              <Card 
                key={resource.id} 
                className={`transition-all hover:shadow-lg ${resource.featured ? 'border-2 border-primary-200 bg-primary-50' : 'border border-gray-200'}`}
              >
                {resource.featured && (
                  <div className="bg-primary-600 text-white px-4 py-2 text-sm font-medium text-center">
                    Most Popular Resource
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${resource.iconBg} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`h-6 w-6 ${resource.iconColor}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {resource.type}
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {resource.duration}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-gray-700">
                    {resource.subtitle}
                  </CardDescription>
                  <p className="text-sm text-gray-600 mt-2">
                    {resource.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">What's included:</h4>
                    <ul className="space-y-1">
                      {resource.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-start text-xs text-gray-600">
                          <CheckSquare className="h-3 w-3 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {resource.features.length > 3 && (
                        <li className="text-xs text-gray-500">
                          + {resource.features.length - 3} more features...
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${resource.featured ? 'bg-primary-600 hover:bg-primary-700' : ''}`} asChild>
                    <Link href={resource.ctaHref}>
                      {resource.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Upcoming Webinars */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Upcoming webinars
            </h2>
            
            <div className="space-y-4 max-w-4xl mx-auto">
              {upcomingWebinars.map((webinar, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="text-sm font-medium text-primary-600">
                          {webinar.date}
                        </div>
                        <div className="text-sm text-gray-500">
                          {webinar.time}
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {webinar.title}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {webinar.presenter}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/resources/webinars">
                          <Play className="h-3 w-3 mr-1" />
                          Register
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild>
                <Link href="/resources/webinars">
                  View all webinars <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Resource Library Stats */}
        <section className="mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Trusted by AI implementers worldwide
            </h2>
            
            <div className="grid gap-8 sm:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2,500+</div>
                <p className="text-sm text-gray-600">Audits completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">1,200+</div>
                <p className="text-sm text-gray-600">Checklists downloaded</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">800+</div>
                <p className="text-sm text-gray-600">ROI calculations run</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">450+</div>
                <p className="text-sm text-gray-600">Webinar attendees/month</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section>
          <Card className="border-2 border-dashed border-gray-300">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Stay updated on AI best practices</CardTitle>
              <CardDescription>
                Get our monthly newsletter with practical AI implementation tips, 
                case studies, and early access to new resources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Button>
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-3">
                No spam. Unsubscribe anytime. Read our{" "}
                <Link href="/privacy" className="underline">
                  privacy policy
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}