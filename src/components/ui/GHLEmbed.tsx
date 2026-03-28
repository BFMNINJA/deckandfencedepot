"use client";

import { useEffect } from "react";

interface GHLEmbedProps {
  formId?: string;
  calenderId?: string;
  type: "form" | "calendar";
  className?: string;
}

/**
 * GoHighLevel Embed Component
 *
 * Usage:
 * 1. For Forms: <GHLEmbed type="form" formId="your-form-id" />
 * 2. For Calendar: <GHLEmbed type="calendar" calenderId="your-calendar-id" />
 *
 * Instructions to get your GHL embed code:
 * 1. Log into your GoHighLevel account
 * 2. Go to Sites > Forms (or Calendar)
 * 3. Find your form/calendar and click "Embed"
 * 4. Copy the embed code/script
 * 5. Replace the placeholder below with your actual embed script
 */
export default function GHLEmbed({ formId, calenderId, type, className = "" }: GHLEmbedProps) {
  useEffect(() => {
    // This is where GHL scripts would be loaded
    // Example for forms:
    // const script = document.createElement('script');
    // script.src = 'https://link.msgsndr.com/js/form_embed.js';
    // script.async = true;
    // document.body.appendChild(script);

    // Return cleanup
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, [formId, calenderId]);

  return (
    <div className={`ghl-embed-container ${className}`}>
      {type === "form" ? (
        <div className="bg-white rounded-lg p-8 border-2 border-dashed border-[#EDE8E6] text-center">
          <svg className="w-12 h-12 text-[#9CA3AF] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="font-semibold text-[#1E1810] mb-2">
            GoHighLevel Form Placeholder
          </h3>
          <p className="text-sm text-[#575250] max-w-md mx-auto mb-4">
            Replace this component with your actual GHL form embed code.
          </p>
          {formId && (
            <code className="inline-block bg-[#F8F5F4] text-[#FF5100] text-xs px-3 py-1.5 rounded font-mono">
              Form ID: {formId}
            </code>
          )}
          <div className="mt-6 text-left bg-[#F8F5F4] rounded-lg p-4">
            <p className="text-xs font-semibold text-[#1E1810] mb-2">Implementation Steps:</p>
            <ol className="text-xs text-[#575250] space-y-1 list-decimal list-inside">
              <li>Get your form embed code from GHL</li>
              <li>Add the script tag to this component's useEffect</li>
              <li>Replace this placeholder div with the GHL container div</li>
            </ol>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-8 border-2 border-dashed border-[#EDE8E6] text-center">
          <svg className="w-12 h-12 text-[#9CA3AF] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="font-semibold text-[#1E1810] mb-2">
            GoHighLevel Calendar Placeholder
          </h3>
          <p className="text-sm text-[#575250] max-w-md mx-auto mb-4">
            Replace this component with your actual GHL calendar embed code.
          </p>
          {calenderId && (
            <code className="inline-block bg-[#F8F5F4] text-[#FF5100] text-xs px-3 py-1.5 rounded font-mono">
              Calendar ID: {calenderId}
            </code>
          )}
        </div>
      )}
    </div>
  );
}
