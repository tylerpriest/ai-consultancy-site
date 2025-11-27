// Analytics utilities - ready for Google Analytics, Mixpanel, etc.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events
export const event = (action: string, { event_category, event_label, value }: {
  event_category?: string;
  event_label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category,
      event_label,
      value,
    });
  }
  
  // Also log to console for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', { action, event_category, event_label, value });
  }
};

// Common event trackers
export const trackButtonClick = (buttonName: string, location?: string) => {
  event('click', {
    event_category: 'engagement',
    event_label: `${buttonName}${location ? ` - ${location}` : ''}`,
  });
};

export const trackFormSubmit = (formName: string) => {
  event('form_submit', {
    event_category: 'conversion',
    event_label: formName,
  });
  
  // Track specific form completions
  if (formName === 'contact_form') {
    event('generate_lead', {
      event_category: 'conversion',
      event_label: 'contact_form_submission',
      value: 1,
    });
  }
};

export const trackDownload = (resourceName: string) => {
  event('download', {
    event_category: 'engagement',
    event_label: resourceName,
  });
};

export const trackAuditStart = () => {
  event('audit_start', {
    event_category: 'engagement',
    event_label: 'ai_readiness_audit',
  });
};

export const trackAuditComplete = (score: number) => {
  event('audit_complete', {
    event_category: 'conversion',
    event_label: 'ai_readiness_audit',
    value: score,
  });
};

export const trackROICalculation = (roiData: { roiPercentage: number }) => {
  event('roi_calculation', {
    event_category: 'engagement',
    event_label: 'roi_calculator',
    value: Math.round(roiData.roiPercentage),
  });
};

export const trackWebinarRegistration = (webinarId: string) => {
  event('webinar_registration', {
    event_category: 'conversion',
    event_label: webinarId,
  });
};

export const trackResourceRequest = (resourceType: string) => {
  event('resource_request', {
    event_category: 'engagement',
    event_label: resourceType,
  });
};