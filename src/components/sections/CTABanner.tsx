import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="bg-[#FF5100]">
      <div className="container-main py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="mt-3 text-white/80 max-w-lg">
              Visit us in Stouffville or get in touch today. We'll help you find
              the right materials for your deck or fence project.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button
              href="/shop"
              size="lg"
              className="bg-white !text-[#FF5100] hover:bg-[#F8F5F4]"
            >
              Browse Products
            </Button>
            <Button
              href="/contact"
              size="lg"
              className="bg-transparent border-2 border-white !text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
