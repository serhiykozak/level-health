import { useCallback, useEffect } from 'react';

const useAnalytics = () => {
  useEffect(() => {
    // Initialize analytics here
    if (typeof window !== 'undefined' && process.env.REACT_APP_GA_ID) {
      // Example: Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', process.env.REACT_APP_GA_ID);
    }
  }, []);

  const trackEvent = useCallback((category, action, label = '', value = '') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }, []);

  const trackPageView = useCallback((page) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.REACT_APP_GA_ID, {
        page_path: page,
      });
    }
  }, []);

  const trackError = useCallback((error, errorInfo) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'error', {
        event_category: 'Error',
        event_label: error.toString(),
        event_value: JSON.stringify(errorInfo),
      });
    }
  }, []);

  const trackTiming = useCallback((category, variable, value) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'timing_complete', {
        event_category: category,
        name: variable,
        value: value,
      });
    }
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackError,
    trackTiming,
  };
};

export default useAnalytics; 