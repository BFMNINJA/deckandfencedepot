export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1E1810] py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#FF5100]/20 text-[#FF7A3D] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-[#9CA3AF] leading-relaxed">
              Have a question or ready to start your project? We're here to help. Fill out the form below or visit us in Stouffville.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FF5100] mb-4">
                  Location
                </h3>
                <p className="text-[#1E1810] font-medium">Stouffville, Ontario</p>
                <p className="mt-2 text-sm text-[#575250]">
                  Serving Stouffville and surrounding areas
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FF5100] mb-4">
                  Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#575250]">Monday - Friday</span>
                    <span className="text-[#1E1810] font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#575250]">Saturday</span>
                    <span className="text-[#1E1810] font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#575250]">Sunday</span>
                    <span className="text-[#1E1810] font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FF5100] mb-4">
                  Connect
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-[#575250] hover:text-[#FF5100] transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm font-medium">(123) 456-7890</span>
                  </a>
                  <a
                    href="mailto:info@deckandfencedepot.com"
                    className="flex items-center gap-3 text-[#575250] hover:text-[#FF5100] transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">info@deckandfencedepot.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* GHL Form Embed Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-[#F8F5F4] rounded-xl p-8 md:p-12 border border-[#EDE8E6]">
                <h2 className="text-2xl font-bold text-[#1E1810] mb-2">
                  Send us a Message
                </h2>
                <p className="text-[#575250] mb-8">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>

                {/* GHL Embed Placeholder */}
                <div className="bg-white rounded-lg p-8 border-2 border-dashed border-[#EDE8E6] text-center">
                  <svg className="w-12 h-12 text-[#9CA3AF] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="font-semibold text-[#1E1810] mb-2">
                    GoHighLevel Form Embed
                  </h3>
                  <p className="text-sm text-[#575250] max-w-md mx-auto mb-4">
                    Replace this placeholder with your GHL form embed code or iframe.
                  </p>
                  <code className="inline-block bg-[#F8F5F4] text-[#FF5100] text-xs px-3 py-1.5 rounded font-mono">
                    {`<div id="ghl-form-embed"></div>`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-[#F8F5F4]">
        <div className="container-main">
          <div className="bg-[#EDE8E6] rounded-2xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-[#9CA3AF] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-[#575250] font-medium">Google Maps Embed</p>
              <p className="text-sm text-[#9CA3AF] mt-1">Add your location iframe here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
