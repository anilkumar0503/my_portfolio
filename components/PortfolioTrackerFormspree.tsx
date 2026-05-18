"use client";

import { useEffect, useState } from "react";

export default function PortfolioTracker() {
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    // Only track once per session
    const hasTracked = sessionStorage.getItem("portfolio_tracked");
    
    if (!hasTracked && !tracked) {
      trackVisitor();
      sessionStorage.setItem("portfolio_tracked", "true");
      setTracked(true);
    }
  }, [tracked]);

  const trackVisitor = async () => {
    try {
      const timestamp = new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      });
      
      // Get visitor info
      const visitorInfo = {
        timestamp,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || 'Direct visit',
        url: window.location.href,
      };

      // Using Formspree (works with static sites, no CORS issues)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: '🔔 Portfolio Viewed',
          timestamp: visitorInfo.timestamp,
          url: visitorInfo.url,
          referrer: visitorInfo.referrer,
          browser: visitorInfo.userAgent,
          language: visitorInfo.language,
          screen: visitorInfo.screenResolution,
        }),
      });

      if (response.ok) {
        console.log('✅ Visit tracked successfully - Email sent!');
      } else {
        console.error('❌ Failed to send email. Status:', response.status);
      }
    } catch (error) {
      console.error('❌ Tracking error:', error);
    }
  };

  // This component doesn't render anything visible
  return null;
}
