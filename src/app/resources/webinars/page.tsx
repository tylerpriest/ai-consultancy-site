'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Video, Calendar, Clock, Users, CheckCircle, Play, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const registrationFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  role: z.string().min(2, 'Role is required'),
  interests: z.array(z.string()).optional(),
});

type RegistrationFormData = z.infer<typeof registrationFormSchema>;

interface Webinar {
  id: string;
  title: string;
  description: string;
  presenter: string;
  presenterTitle: string;
  date: string;
  time: string;
  duration: string;
  topics: string[];
  isUpcoming: boolean;
  registrationLink?: string;
  recordingLink?: string;
  attendeeCount?: number;
}

const webinars: Webinar[] = [
  {
    id: 'crm-agents-sep-2024',
    title: 'CRM AI Agents: HubSpot vs Zoho Implementation Deep-dive',
    description: 'Live demonstration of CRM agent implementations, comparing HubSpot and Zoho approaches, with real-world use cases and ROI analysis.',
    presenter: 'Sarah Chen',
    presenterTitle: 'Head of Solutions',
    date: 'September 15, 2024',
    time: '2:00 PM AEST / 6:00 AM EST',
    duration: '45 minutes',
    topics: ['CRM Integration Strategies', 'Lead Scoring & Automation', 'ROI Measurement', 'Implementation Best Practices'],
    isUpcoming: true,
    attendeeCount: 156
  },
  {
    id: 'copilot-governance-oct-2024',
    title: 'Making Microsoft Copilot Actually Useful: Governance & Extensions',
    description: 'Learn how to set up proper governance for Microsoft 365 Copilot and build custom extensions that deliver real business value.',
    presenter: 'Marcus Thompson',
    presenterTitle: 'Technical Lead',
    date: 'October 20, 2024',
    time: '2:00 PM AEST / 6:00 AM EST',
    duration: '45 minutes',
    topics: ['Copilot Governance Framework', 'Custom Extensions Development', 'Security & Compliance', 'User Training Programs'],
    isUpcoming: true,
    attendeeCount: 89
  },
  {
    id: 'voice-ai-nov-2024',
    title: 'Voice AI for Customer Service: Implementation & Best Practices',
    description: 'Comprehensive guide to implementing voice AI systems for customer service, including integration with existing phone systems and quality monitoring.',
    presenter: 'Dr. Priya Patel',
    presenterTitle: 'AI Research Director',
    date: 'November 17, 2024',
    time: '2:00 PM AEST / 6:00 AM EST',
    duration: '45 minutes',
    topics: ['Voice AI Architecture', 'Twilio Integration', 'Quality Monitoring', 'Multi-language Support'],
    isUpcoming: true,
    attendeeCount: 67
  },
  {
    id: 'ai-operations-aug-2024',
    title: 'AgentOps: Monitoring & Managing AI in Production',
    description: 'Past webinar covering best practices for monitoring AI systems in production, including performance tracking, bias detection, and incident response.',
    presenter: 'James Liu',
    presenterTitle: 'AgentOps Engineer',
    date: 'August 18, 2024',
    time: '2:00 PM AEST / 6:00 AM EST',
    duration: '45 minutes',
    topics: ['Production Monitoring', 'Performance Metrics', 'Bias Detection', 'Incident Response'],
    isUpcoming: false,
    recordingLink: '#',
    attendeeCount: 203
  },
  {
    id: 'responsible-ai-jul-2024',
    title: 'Responsible AI Implementation: Compliance & Ethics',
    description: 'Deep dive into responsible AI practices, covering GDPR compliance, bias mitigation, and ethical considerations for business AI implementations.',
    presenter: 'Dr. Priya Patel',
    presenterTitle: 'AI Research Director',
    date: 'July 21, 2024',
    time: '2:00 PM AEST / 6:00 AM EST',
    duration: '45 minutes',
    topics: ['GDPR Compliance', 'Bias Mitigation', 'Ethical Frameworks', 'Risk Assessment'],
    isUpcoming: false,
    recordingLink: '#',
    attendeeCount: 287
  },
  {
    id: 'roi-measurement-jun-2024',
    title: 'Measuring AI ROI: Metrics That Matter',
    description: 'Learn how to properly measure and report on AI ROI, including frameworks for tracking business impact and demonstrating value to stakeholders.',
    presenter: 'Sarah Chen',
    presenterTitle: 'Head of Solutions',
    date: 'June 16, 2024',
    time: '2:00 PM AEST / 6:00 AM EST',
    duration: '45 minutes',
    topics: ['ROI Measurement Frameworks', 'KPI Selection', 'Business Impact Tracking', 'Stakeholder Reporting'],
    isUpcoming: false,
    recordingLink: '#',
    attendeeCount: 178
  }
];

export default function WebinarsPage() {
  const [selectedWebinar, setSelectedWebinar] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsRegistering(true);
    
    try {
      // Simulate registration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Webinar registration:', { ...data, webinarId: selectedWebinar });
      setIsRegistered(true);
      reset();
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsRegistering(false);
    }
  };

  const upcomingWebinars = webinars.filter(w => w.isUpcoming);
  const pastWebinars = webinars.filter(w => !w.isUpcoming);

  if (isRegistered) {
    return (
      <div className="py-20 min-h-screen">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-accent-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Registration Confirmed!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            You&apos;re all set for the webinar. You&apos;ll receive a calendar invite and joining instructions via email shortly.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
            <ul className="text-left space-y-2 max-w-md mx-auto">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Live demonstration with real examples</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Interactive Q&A session with our experts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Exclusive resources and templates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Recording available for 30 days</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">While You Wait</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/audit">
                  Take AI Readiness Audit <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/resources/checklist">
                  Download AI Checklist
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Video className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Monthly AI Webinars
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our monthly deep-dives into AI implementation best practices. 
            45-minute live demos with real-world examples, plus Q&A with our experts.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">1,200+</div>
            <p className="text-sm text-gray-600">Total Attendees</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-600 mb-2">450+</div>
            <p className="text-sm text-gray-600">Monthly Average</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.8/5</div>
            <p className="text-sm text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-600 mb-2">45 min</div>
            <p className="text-sm text-gray-600">Perfect Length</p>
          </div>
        </div>

        {/* Upcoming Webinars */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Sessions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingWebinars.map((webinar) => (
              <Card key={webinar.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-accent-100 text-accent-600 text-xs font-medium px-2 py-1 rounded">
                      UPCOMING
                    </div>
                    <div className="text-sm text-gray-500">{webinar.attendeeCount} registered</div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{webinar.title}</CardTitle>
                  <CardDescription className="text-sm">{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      {webinar.time} • {webinar.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                      {webinar.presenter}, {webinar.presenterTitle}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {webinar.topics.slice(0, 2).map((topic, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-center">
                          <CheckCircle className="h-3 w-3 text-accent-500 mr-1 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                      {webinar.topics.length > 2 && (
                        <li className="text-xs text-gray-500">
                          +{webinar.topics.length - 2} more topics
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={() => setSelectedWebinar(webinar.id)}
                  >
                    Register Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Registration Form Modal */}
        {selectedWebinar && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Register for Webinar</CardTitle>
                    <button
                      onClick={() => setSelectedWebinar(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  </div>
                  <CardDescription>
                    {webinars.find(w => w.id === selectedWebinar)?.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        {...register('name')}
                        placeholder="Your name"
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <Input
                        type="email"
                        {...register('email')}
                        placeholder="you@company.com"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company *
                      </label>
                      <Input
                        {...register('company')}
                        placeholder="Company name"
                        className={errors.company ? 'border-red-500' : ''}
                      />
                      {errors.company && <p className="text-sm text-red-600 mt-1">{errors.company.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Role *
                      </label>
                      <select
                        {...register('role')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Select your role</option>
                        <option value="ceo-founder">CEO/Founder</option>
                        <option value="cto-vp-engineering">CTO/VP Engineering</option>
                        <option value="data-scientist">Data Scientist</option>
                        <option value="product-manager">Product Manager</option>
                        <option value="business-analyst">Business Analyst</option>
                        <option value="consultant">Consultant</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.role && <p className="text-sm text-red-600 mt-1">{errors.role.message}</p>}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setSelectedWebinar(null)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isRegistering}
                        className="flex-1"
                      >
                        {isRegistering ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Registering...
                          </>
                        ) : (
                          'Register Free'
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Past Webinars */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Recording Archive</h2>
            <div className="text-sm text-gray-500">All recordings available for 30 days</div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastWebinars.map((webinar) => (
              <Card key={webinar.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                      RECORDED
                    </div>
                    <div className="text-sm text-gray-500">{webinar.attendeeCount} attended</div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{webinar.title}</CardTitle>
                  <CardDescription className="text-sm">{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                      {webinar.presenter}, {webinar.presenterTitle}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {webinar.topics.slice(0, 2).map((topic, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                      {webinar.topics.length > 2 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{webinar.topics.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="mr-2 h-4 w-4" />
                      Watch
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Resources
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Never Miss a Session</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get notified about upcoming webinars, receive exclusive resources, and join our community of AI practitioners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
            <Input
              type="email"
              placeholder="your@email.com"
              className="flex-1"
            />
            <Button>
              Subscribe <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-xs text-gray-500">
            Join 2,500+ AI professionals. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}