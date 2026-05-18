"use client";

import { useEffect, useState } from "react";

export default function PortfolioTracker() {
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    console.log('🔍 PortfolioTracker mounted');
    
    // Only track once per session
    const hasTracked = sessionStorage.getItem("portfolio_tracked");
    console.log('📝 Has tracked before?', hasTracked);
    
    if (!hasTracked && !tracked) {
      console.log('🚀 Starting visitor tracking...');
      trackVisitor();
      sessionStorage.setItem("portfolio_tracked", "true");
      setTracked(true);
    } else {
      console.log('⏭️ Already tracked this session, skipping');
    }
  }, [tracked]);

  const trackVisitor = async () => {
    console.log('📧 Preparing to send email notification...');
    try {
      const timestamp = new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      });
      console.log('⏰ Timestamp:', timestamp);
      
      // Get visitor info
      const visitorInfo = {
        timestamp,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || 'Direct visit',
        url: window.location.href,
      };

      console.log('📊 Visitor info collected:', visitorInfo);
      console.log('🌐 Sending request to Web3Forms...');

      // Using Web3Forms (works with static sites, no CORS issues)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9f2fa322-9c8c-439b-9e57-6ed45493570c',
          subject: '🔔 Portfolio Viewed - New Visitor!',
          from_name: 'Portfolio Tracker',
          email: 'bakkashettianilkumar@gmail.com',
          message: `
📊 Portfolio View Notification

🕐 Time: ${visitorInfo.timestamp}
🌐 URL: ${visitorInfo.url}
🔗 Referrer: ${visitorInfo.referrer}
💻 Browser: ${visitorInfo.userAgent}
🌍 Language: ${visitorInfo.language}
📱 Screen: ${visitorInfo.screenResolution}

---
This is an automated notification from your portfolio tracking system.
          `.trim(),
        }),
      });
      
      console.log('📬 Response received. Status:', response.status);

      if (response.ok) {
        console.log('✅ Visit tracked successfully - Email sent!');
        const data = await response.json();
        console.log('Response:', data);
      } else {
        console.error('❌ Failed to send email. Status:', response.status);
        const errorData = await response.text();
        console.error('Error details:', errorData);
      }
    } catch (error) {
      console.error('❌ Tracking error:', error);
      console.error('This might be due to CORS restrictions or network issues');
    }
  };

  // This component doesn't render anything visible
  return null;
}
