import Link from "next/link";
import { Shield, Zap, Calendar, DollarSign, ArrowRight, CheckCircle, TrendingUp, Clock, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/80 via-white to-white py-24 sm:py-36">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(217_91%_95%/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(217_91%_95%/0.5)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance">
              Agents that do the work.
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto text-balance">
              AI solutions for mid-sized businesses — delivered responsibly from strategy to scale.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Book a 20-minute fit call</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/audit">Get the AI Readiness Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Band */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <p className="text-sm font-semibold text-gray-900">Responsible by design</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-4 group-hover:bg-accent-100 transition-colors">
                <Zap className="h-6 w-6 text-accent-600" />
              </div>
              <p className="text-sm font-semibold text-gray-900">AgentOps built-in</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <Calendar className="h-6 w-6 text-primary-600" />
              </div>
              <p className="text-sm font-semibold text-gray-900">Ship in weeks</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-4 group-hover:bg-accent-100 transition-colors">
                <DollarSign className="h-6 w-6 text-accent-600" />
              </div>
              <p className="text-sm font-semibold text-gray-900">Transparent pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 sm:py-28 bg-gray-50/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-balance">
              What you get
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
              Complete AI solutions that integrate with your existing workflows
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>AI agents & automated workflows</CardTitle>
                <CardDescription>
                  Custom agents that handle repetitive tasks and complex processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                    Process automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                    Decision support systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                    Intelligent routing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI-powered apps & integrations</CardTitle>
                <CardDescription>
                  Custom applications that enhance your existing tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                    CRM integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                    Knowledge search
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                    Voice interfaces
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AgentOps</CardTitle>
                <CardDescription>
                  Monitoring, evaluations, versioning, and rollback capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                    Performance monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                    Quality evaluations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                    Safe deployment
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-balance">
              Choose your package
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
              Flexible engagement models to match your needs and timeline
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Agent Sprint */}
            <Card className="border-2 border-primary-200">
              <CardHeader>
                <CardTitle className="text-2xl">Agent Sprint</CardTitle>
                <CardDescription>Perfect for testing AI with a focused use case</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary-900">AU$9.5k–14k</div>
                  <div className="text-lg text-gray-600">(US$6.5k–9.5k)</div>
                  <div className="text-sm text-gray-500">2 weeks</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    Pick 1 process + KPI to optimize
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    Ship 1–2 agents with real functionality
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    Train your team on AI workflows
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    Guardrails (HITL, logging, rollback)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    Deliverables: agents + quickstart docs + KPI dashboard
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact?package=sprint">Start a Sprint</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Integrate & Scale */}
            <Card className="border-2 border-accent-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Integrate & Scale</CardTitle>
                <CardDescription>Full AI transformation for your operations</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary-900">AU$45k–120k</div>
                  <div className="text-lg text-gray-600">(US$30k–80k)</div>
                  <div className="text-sm text-gray-500">8–12 weeks</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    3–5 agents across departments
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    CRM/helpdesk integrations
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    AgentOps stack (telemetry/evals/RBAC/versioning)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    Change management & training
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    Reliability SLOs and monitoring
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact?package=scale">Scope my build</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Operate */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Operate — AgentOps Care</CardTitle>
                <CardDescription>Ongoing optimization and maintenance</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary-900">AU$4k–12k/mo</div>
                  <div className="text-lg text-gray-600">(US$2.7k–8k/mo)</div>
                  <div className="text-sm text-gray-500">Monthly service</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    24/7 monitoring & alerts
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    Eval suites & quality assurance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    Drift detection & cost control
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    Monthly optimization reviews
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    Compliance reporting
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact?package=operate">Talk to an AI operator</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 sm:py-28 bg-gray-50/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-balance">
              Real results from real clients
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
              Measurable outcomes across industries
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent-600" />
                </div>
                <CardTitle className="text-xl">Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent-600 mb-2">+20%</div>
                <p className="text-sm text-gray-600 mb-4">conversion rate increase</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="mx-auto" asChild>
                  <Link href="/case-studies#retail">See how we delivered it <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-xl">Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary-600 mb-2">−25%</div>
                <p className="text-sm text-gray-600 mb-4">diagnostic errors reduced</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="mx-auto" asChild>
                  <Link href="/case-studies#healthcare">See how we delivered it <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent-600" />
                </div>
                <CardTitle className="text-xl">Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center gap-2 text-lg font-bold text-accent-600 mb-2">
                  <span>−30% delivery time</span>
                  <Minus className="h-4 w-4" />
                  <span>−15% ops cost</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">operational improvements</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="mx-auto" asChild>
                  <Link href="/case-studies#logistics">See how we delivered it <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Magnet Banner */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-900 to-primary-950 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(217_91%_30%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(217_91%_30%/0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Responsible-AI checklist — your 10-point guardrail pack
              </h3>
              <p className="text-primary-200 text-lg">
                DPIA templates, RBAC matrix, eval plans, and incident playbook
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button variant="secondary" size="lg" asChild className="shadow-lg">
                <Link href="/resources/checklist">Download free checklist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
