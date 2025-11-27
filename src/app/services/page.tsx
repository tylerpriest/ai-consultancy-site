import Link from "next/link";
import { CheckCircle, ArrowRight, Zap, Building2, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Services | AI Consultancy",
  description: "End-to-end AI services tailored to your stage. From rapid sprints to full-scale transformations and ongoing operations.",
};

export default function Services() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            End-to-end AI services tailored to your stage
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're testing AI potential, scaling operations, or need ongoing optimization — we meet you where you are.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 lg:gap-16">
          
          {/* Agent Sprint */}
          <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Agent Sprint</h2>
                  <p className="text-lg text-gray-600">2 weeks • AU$9.5k–14k (US$6.5k–9.5k)</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Perfect for testing AI with a focused use case. Get your first AI agent deployed with full guardrails 
                and team training in just two weeks.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">What you get:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Pick 1 process + KPI to optimize
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Ship 1–2 agents with real functionality
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Train your team on AI workflows
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Deliverables:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Guardrails (HITL, logging, rollback)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Agents + quickstart docs
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      KPI dashboard
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <Card className="border-2 border-primary-200">
              <CardHeader>
                <CardTitle className="text-xl">Ready to start?</CardTitle>
                <CardDescription>
                  Let's identify your best first AI use case and get it deployed in two weeks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-gray-600">
                    <strong>Ideal for:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• First-time AI implementations</li>
                      <li>• Proving ROI before larger investment</li>
                      <li>• Testing specific use cases</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg" asChild>
                  <Link href="/contact?package=sprint">
                    Start a Sprint <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </section>

          <hr className="border-gray-200" />

          {/* Integrate & Scale */}
          <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="border-2 border-accent-200 relative">
                <div className="absolute -top-3 left-4">
                  <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl">Ready to transform?</CardTitle>
                  <CardDescription>
                    Full AI transformation across your operations with enterprise-grade reliability.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                      <strong>Ideal for:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Scaling after successful pilot</li>
                        <li>• Department-wide AI adoption</li>
                        <li>• Complex integration requirements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/contact?package=scale">
                      Scope my build <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                  <Building2 className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Integrate & Scale</h2>
                  <p className="text-lg text-gray-600">8–12 weeks • AU$45k–120k (US$30k–80k)</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Full AI transformation for your operations. Deploy multiple agents with complete integrations, 
                enterprise monitoring, and change management support.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">What you get:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      3–5 agents across departments
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      CRM/helpdesk integrations
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Change management & training
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Enterprise features:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      AgentOps stack (telemetry/evals/RBAC)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Reliability SLOs and monitoring
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Version control & rollback
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Operate */}
          <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <HeartHandshake className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Operate — AgentOps Care</h2>
                  <p className="text-lg text-gray-600">Monthly • AU$4k–12k/mo (US$2.7k–8k/mo)</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Ongoing optimization and maintenance for your AI systems. Keep your agents performing 
                at peak efficiency with proactive monitoring and regular improvements.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Monitoring & alerts:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      24/7 system monitoring
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Performance drift detection
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Cost control & optimization
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Continuous improvement:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Eval suites & quality assurance
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Monthly optimization reviews
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Compliance reporting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">Keep systems optimal</CardTitle>
                <CardDescription>
                  Ensure your AI investments continue delivering value with expert ongoing support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-gray-600">
                    <strong>Ideal for:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Post-deployment maintenance</li>
                      <li>• Performance optimization</li>
                      <li>• Compliance requirements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link href="/contact?package=operate">
                    Talk to an AI operator <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </section>
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl px-6 py-12 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which service fits your needs?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a 20-minute fit call and we'll help you choose the right approach based on your goals, 
              timeline, and current AI maturity.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Book a free consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}