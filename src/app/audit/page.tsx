'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, ArrowRight, Target, Users, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const auditFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  role: z.string().min(2, 'Role is required'),
  industry: z.string().min(2, 'Industry is required'),
  companySize: z.string().min(1, 'Please select company size'),
  // Assessment questions
  dataReadiness: z.string().min(1, 'Please select an option'),
  processMaturity: z.string().min(1, 'Please select an option'),
  techInfrastructure: z.string().min(1, 'Please select an option'),
  teamSkills: z.string().min(1, 'Please select an option'),
  budgetRange: z.string().min(1, 'Please select an option'),
  timeline: z.string().min(1, 'Please select an option'),
  primaryGoal: z.string().min(1, 'Please select an option'),
  complianceRequirements: z.string().min(1, 'Please select an option'),
  currentAI: z.string().min(1, 'Please select an option'),
  biggestChallenge: z.string().min(10, 'Please provide more detail (minimum 10 characters)'),
  successMetrics: z.string().min(1, 'Please select an option'),
  riskTolerance: z.string().min(1, 'Please select an option'),
});

type AuditFormData = z.infer<typeof auditFormSchema>;

export default function AuditPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditFormSchema),
  });

  const totalSteps = 4;

  const calculateReadinessScore = (data: AuditFormData) => {
    let totalScore = 0;
    
    // Scoring logic based on responses
    const scoreMap: { [key: string]: number } = {
      'excellent': 10, 'very-good': 8, 'good': 6, 'fair': 4, 'poor': 2,
      'high': 8, 'medium': 5, 'low': 2,
      'yes-advanced': 10, 'yes-basic': 6, 'planning': 3, 'no': 0,
      '500+': 8, '100-499': 6, '50-99': 4, '10-49': 2, '1-9': 1,
      'immediately': 8, '3-months': 6, '6-months': 4, '12-months': 2, 'exploring': 1
    };

    Object.values(data).forEach(value => {
      if (typeof value === 'string' && scoreMap[value]) {
        totalScore += scoreMap[value];
      }
    });

    // Normalize to percentage
    return Math.min(Math.round((totalScore / 100) * 100), 100);
  };

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);
    
    try {
      // Calculate readiness score
      const readinessScore = calculateReadinessScore(data);
      setScore(readinessScore);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Audit submitted:', { ...data, score: readinessScore });
      setIsCompleted(true);
    } catch (error) {
      console.error('Audit submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  if (isCompleted) {
    return (
      <div className="py-20 min-h-screen">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-accent-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your AI Readiness Assessment is Complete!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Based on your responses, here&apos;s your personalized AI readiness score and recommendations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Score Card */}
            <Card className="border-2 border-primary-200 bg-primary-50">
              <CardHeader className="text-center">
                <div className="text-6xl font-bold text-primary-600 mb-2">{score}%</div>
                <CardTitle className="text-xl">AI Readiness Score</CardTitle>
                <CardDescription>
                  {score && score >= 80 ? 'Excellent - Ready for advanced AI implementation' :
                   score && score >= 60 ? 'Good - Ready for structured AI adoption' :
                   score && score >= 40 ? 'Moderate - Some preparation needed' :
                   'Early stage - Foundation building required'}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended Next Steps</CardTitle>
                <CardDescription>
                  Based on your assessment, here&apos;s what we recommend:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                    Schedule a 30-minute strategy consultation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                    Review our {score && score >= 60 ? 'Integrate & Scale' : 'Agent Sprint'} package
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                    Download our Responsible AI Checklist
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                    Receive detailed recommendations via email
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Ready to discuss your results?
              </h3>
              <p className="text-gray-600 mb-6">
                Our AI strategists will contact you within 24 hours to discuss your personalized roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">Book Strategy Call</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/resources/checklist">Download Checklist</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            AI Readiness Audit
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover your organization&apos;s AI readiness with our comprehensive 12-question assessment. 
            Get personalized recommendations and a 30-minute consultation with our experts.
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Step 1: Contact Information */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Tell us about yourself and your organization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
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
                    <Input
                      {...register('role')}
                      placeholder="Your role/title"
                      className={errors.role ? 'border-red-500' : ''}
                    />
                    {errors.role && <p className="text-sm text-red-600 mt-1">{errors.role.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select
                      {...register('industry')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="financial-services">Financial Services</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="logistics">Logistics</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.industry && <p className="text-sm text-red-600 mt-1">{errors.industry.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size *
                    </label>
                    <select
                      {...register('companySize')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select size</option>
                      <option value="1-9">1-9 employees</option>
                      <option value="10-49">10-49 employees</option>
                      <option value="50-99">50-99 employees</option>
                      <option value="100-499">100-499 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                    {errors.companySize && <p className="text-sm text-red-600 mt-1">{errors.companySize.message}</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Data & Process Readiness */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  Data & Process Readiness
                </CardTitle>
                <CardDescription>
                  Assess your data quality and process maturity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How would you rate your data quality and accessibility?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'excellent', label: 'Excellent - Clean, structured, easily accessible' },
                      { value: 'good', label: 'Good - Mostly clean with some manual work needed' },
                      { value: 'fair', label: 'Fair - Data exists but needs significant cleanup' },
                      { value: 'poor', label: 'Poor - Data is scattered, unstructured, or incomplete' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          {...register('dataReadiness')}
                          value={option.value}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.dataReadiness && <p className="text-sm text-red-600 mt-1">{errors.dataReadiness.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How would you describe your current business process documentation?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'excellent', label: 'Excellent - Well documented and standardized' },
                      { value: 'good', label: 'Good - Documented but could be more detailed' },
                      { value: 'fair', label: 'Fair - Some documentation but incomplete' },
                      { value: 'poor', label: 'Poor - Most processes are undocumented' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          {...register('processMaturity')}
                          value={option.value}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.processMaturity && <p className="text-sm text-red-600 mt-1">{errors.processMaturity.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How would you rate your current technology infrastructure?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'excellent', label: 'Excellent - Modern, cloud-based, APIs available' },
                      { value: 'good', label: 'Good - Recent systems with some integration capabilities' },
                      { value: 'fair', label: 'Fair - Mix of old and new systems' },
                      { value: 'poor', label: 'Poor - Legacy systems, limited integration' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          {...register('techInfrastructure')}
                          value={option.value}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.techInfrastructure && <p className="text-sm text-red-600 mt-1">{errors.techInfrastructure.message}</p>}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Team & Resources */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Team & Resources
                </CardTitle>
                <CardDescription>
                  Evaluate your team capabilities and project resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What&apos;s your team&apos;s current AI/tech skill level?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'high', label: 'High - We have data scientists or AI specialists' },
                      { value: 'medium', label: 'Medium - Some technical skills but not AI-specific' },
                      { value: 'low', label: 'Low - Limited technical expertise' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          {...register('teamSkills')}
                          value={option.value}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.teamSkills && <p className="text-sm text-red-600 mt-1">{errors.teamSkills.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What&apos;s your approximate budget range for AI implementation?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'under-10k', label: 'Under $10k' },
                      { value: '10k-25k', label: '$10k - $25k' },
                      { value: '25k-50k', label: '$25k - $50k' },
                      { value: '50k-100k', label: '$50k - $100k' },
                      { value: 'over-100k', label: 'Over $100k' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          {...register('budgetRange')}
                          value={option.value}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.budgetRange && <p className="text-sm text-red-600 mt-1">{errors.budgetRange.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What&apos;s your ideal timeline for implementation?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'immediately', label: 'Immediately - We need to start now' },
                      { value: '3-months', label: 'Within 3 months' },
                      { value: '6-months', label: 'Within 6 months' },
                      { value: '12-months', label: 'Within 12 months' },
                      { value: 'exploring', label: 'Just exploring options' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          {...register('timeline')}
                          value={option.value}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.timeline && <p className="text-sm text-red-600 mt-1">{errors.timeline.message}</p>}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Goals & Requirements */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Goals & Requirements
                </CardTitle>
                <CardDescription>
                  Define your objectives and compliance requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What&apos;s your primary goal for AI implementation?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'cost-reduction', label: 'Cost reduction and efficiency' },
                      { value: 'revenue-growth', label: 'Revenue growth and new opportunities' },
                      { value: 'customer-experience', label: 'Improved customer experience' },
                      { value: 'competitive-advantage', label: 'Competitive advantage' },
                      { value: 'compliance', label: 'Better compliance and risk management' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          {...register('primaryGoal')}
                          value={option.value}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.primaryGoal && <p className="text-sm text-red-600 mt-1">{errors.primaryGoal.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Do you have specific compliance requirements? (GDPR, HIPAA, SOX, etc.)
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'high', label: 'Yes, strict compliance requirements' },
                      { value: 'medium', label: 'Some compliance considerations' },
                      { value: 'low', label: 'Minimal compliance requirements' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          {...register('complianceRequirements')}
                          value={option.value}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.complianceRequirements && <p className="text-sm text-red-600 mt-1">{errors.complianceRequirements.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Are you currently using any AI tools or services?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'yes-advanced', label: 'Yes, advanced AI implementations' },
                      { value: 'yes-basic', label: 'Yes, basic AI tools (ChatGPT, Copilot, etc.)' },
                      { value: 'planning', label: 'No, but we have plans' },
                      { value: 'no', label: 'No, this would be our first AI initiative' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          {...register('currentAI')}
                          value={option.value}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.currentAI && <p className="text-sm text-red-600 mt-1">{errors.currentAI.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What&apos;s your biggest challenge or concern about AI implementation?
                  </label>
                  <textarea
                    {...register('biggestChallenge')}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Describe your main concerns or challenges..."
                  />
                  {errors.biggestChallenge && <p className="text-sm text-red-600 mt-1">{errors.biggestChallenge.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How will you measure success?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'cost-savings', label: 'Cost savings and efficiency metrics' },
                      { value: 'revenue-impact', label: 'Revenue impact and growth' },
                      { value: 'time-savings', label: 'Time savings and productivity' },
                      { value: 'quality-improvement', label: 'Quality improvement and accuracy' },
                      { value: 'customer-satisfaction', label: 'Customer satisfaction scores' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          {...register('successMetrics')}
                          value={option.value}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.successMetrics && <p className="text-sm text-red-600 mt-1">{errors.successMetrics.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What&apos;s your organization&apos;s risk tolerance for new technology?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'high', label: 'High - We embrace cutting-edge technology' },
                      { value: 'medium', label: 'Medium - We adopt proven technologies' },
                      { value: 'low', label: 'Low - We prefer established, low-risk solutions' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          {...register('riskTolerance')}
                          value={option.value}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.riskTolerance && <p className="text-sm text-red-600 mt-1">{errors.riskTolerance.message}</p>}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6">
            <div>
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                >
                  Previous
                </Button>
              )}
            </div>
            
            <div>
              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                >
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Calculating Score...
                    </>
                  ) : (
                    <>
                      Get My Results <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}