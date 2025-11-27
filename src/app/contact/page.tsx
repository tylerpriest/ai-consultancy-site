'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  process: z.string().min(10, 'Please provide more details about the process (minimum 10 characters)'),
  package: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real implementation, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-20 min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-accent-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank you for reaching out!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;ve received your message and will get back to you within 24 hours. 
            Our team is excited to discuss how we can help with your AI implementation.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              <strong>Next steps:</strong>
            </p>
            <ul className="text-sm text-gray-600 space-y-2 text-left max-w-md mx-auto">
              <li>• We&apos;ll review your requirements and prepare recommendations</li>
              <li>• One of our experts will contact you to schedule a call</li>
              <li>• We&apos;ll provide a customized approach for your specific needs</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Ready to unlock AI&apos;s potential?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tell us about your business challenge and we&apos;ll show you how AI can solve it. 
            All consultations are free and confidential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-2 border-primary-200">
              <CardHeader>
                <CardTitle className="text-xl">Get started today</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      {...register('name')}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      {...register('email')}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your company name"
                      {...register('company')}
                      className={errors.company ? 'border-red-500' : ''}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="process" className="block text-sm font-medium text-gray-700 mb-2">
                      What process should your first agent handle? *
                    </label>
                    <Textarea
                      id="process"
                      placeholder="Describe the business process, task, or workflow you'd like to automate with AI..."
                      rows={4}
                      {...register('process')}
                      className={errors.process ? 'border-red-500' : ''}
                    />
                    {errors.process && (
                      <p className="mt-1 text-sm text-red-600">{errors.process.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred engagement (optional)
                    </label>
                    <select
                      id="package"
                      {...register('package')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a package</option>
                      <option value="sprint">Agent Sprint (2 weeks)</option>
                      <option value="scale">Integrate & Scale (8-12 weeks)</option>
                      <option value="operate">AgentOps Care (ongoing)</option>
                      <option value="custom">Custom solution</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional details (optional)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your goals, timeline, or any specific requirements..."
                      rows={3}
                      {...register('message')}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Book a call <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Prefer to call or email?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">hello@ai-consultancy.com</p>
                      <p className="text-sm text-gray-600">We respond within 4 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-600">Mon-Fri 9AM-6PM local time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Our offices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Sydney, Australia</p>
                      <p className="text-sm text-gray-600">Level 15, 1 Market St<br />Sydney NSW 2000</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">London, UK</p>
                      <p className="text-sm text-gray-600">25 Old Broad Street<br />London EC2N 1HN</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Austin, Texas</p>
                      <p className="text-sm text-gray-600">301 Congress Ave, Suite 1400<br />Austin, TX 78701</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-lg">What to expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3 text-xs font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Initial consultation (30 min)</p>
                        <p className="text-xs text-gray-600">We&apos;ll discuss your challenges and explore potential solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3 text-xs font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Custom proposal</p>
                        <p className="text-xs text-gray-600">Detailed implementation plan with timeline and pricing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-accent-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3 text-xs font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Project kickoff</p>
                        <p className="text-xs text-gray-600">Begin implementation with regular progress updates</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}