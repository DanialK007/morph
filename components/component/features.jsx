import Lefter from "./Lefter";
import Righter from "./Righter";

export function Features() {
  return (
    <section className="w-full text-secondary pb-12 overflow-hidden">
      {/* part 1 */}
      <div className="container flex flex-col-reverse lg:grid max-w-7xl mx-auto items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 pb-12">
        <div className="flex flex-col items-start justify-center space-y-4">
          <Lefter>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Highlights
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Powerful Features for Your Business
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-lg">
                Discover the innovative features that will transform your
                business and drive success.
              </p>
            </div>
          </Lefter>
          <div className="grid gap-4">
            <Lefter>
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Streamlined Workflows</h3>
                  <p className="text-muted-foreground text-sm">
                    Automate repetitive tasks and optimize your processes for
                    maximum efficiency.
                  </p>
                </div>
              </div>
            </Lefter>
            <Lefter>
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <RocketIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Rapid Deployment</h3>
                  <p className="text-muted-foreground text-sm">
                    Get your products and services to market faster with our
                    streamlined deployment tools.
                  </p>
                </div>
              </div>
            </Lefter>
            <Lefter>
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BriefcaseIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Protect your data and assets with our robust security
                    measures and compliance features.
                  </p>
                </div>
              </div>
            </Lefter>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 z-[-1] h-full w-full rounded-xl bg-muted/40 blur-xl" />
          <img
            src="/features.svg"
            // width="550"
            // height="550"
            alt="Mockup"
            className="mx-auto aspect-square overflow-hidden rounded-xl sm:w-full scale-125 lg:scale-100 lg:p-5 h-[250px] lg:h-[450px]"
          />
        </div>
      </div>
      {/* part 2 */}
      <div className="container flex flex-col lg:grid max-w-7xl mx-auto items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 pb-12 mt-12">
        <div className="relative">
          <div className="absolute inset-0 z-[-1] h-full w-full rounded-xl bg-muted/40 blur-xl" />
          <img
            src="/finance.svg"
            // width="550"
            // height="550"
            alt="Mockup"
            className="mx-auto aspect-square overflow-hidden rounded-xl sm:w-full scale-125 lg:scale-100 lg:p-5 h-[250px] lg:h-[450px]"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-4">
          <Righter>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Highlights
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Unlock Your Business Potential
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-lg">
                Discover how our innovative features can transform your business
                and drive success.
              </p>
            </div>
          </Righter>
          <div className="grid gap-4">
            <Righter>
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BriefcaseIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Scalable Infrastructure</h3>
                  <p className="text-muted-foreground text-sm">
                    Easily scale your infrastructure to meet growing demands and
                    adapt to changing business needs.
                  </p>
                </div>
              </div>
            </Righter>
            <Righter>
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <LayersIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Customizable Solutions</h3>
                  <p className="text-muted-foreground text-sm">
                    Tailor our platform to your unique business requirements and
                    workflows.
                  </p>
                </div>
              </div>
            </Righter>
            <Righter>
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BoltIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    Blazing-Fast Performance
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Experience lightning-fast response times and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </Righter>
          </div>
        </div>
      </div>
      {/* part 3 */}
      <div className="container flex flex-col-reverse lg:grid max-w-7xl mx-auto items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 pb-12 mt-12">
        <div className="flex flex-col items-start justify-center space-y-4">
          <Lefter>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Highlights
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Elevate Your Business with Our Solutions
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-lg">
                Discover how our innovative features can transform your business
                and drive success.
              </p>
            </div>
          </Lefter>
          <div className="grid gap-4">
            <Lefter>
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CpuIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Advanced Analytics</h3>
                  <p className="text-muted-foreground text-sm">
                    Gain deep insights into your business performance with our
                    powerful analytics tools.
                  </p>
                </div>
              </div>
            </Lefter>
            <Lefter>
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HeadphonesIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Dedicated Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Rely on our expert team to provide personalized support and
                    guidance every step of the way.
                  </p>
                </div>
              </div>
            </Lefter>
            <Lefter>
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ApertureIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Seamless Integrations</h3>
                  <p className="text-muted-foreground text-sm">
                    Easily connect our platform with your existing tools and
                    workflows for a seamless experience.
                  </p>
                </div>
              </div>
            </Lefter>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 z-[-1] h-full w-full rounded-xl bg-muted/40 blur-xl" />
          <img
            src="/interview.svg"
            // width="550"
            // height="550"
            alt="Mockup"
            className="mx-auto aspect-square overflow-hidden rounded-xl sm:w-full scale-125 lg:scale-100 lg:p-5 h-[250px] lg:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}

function ApertureIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m14.31 8 5.74 9.94" />
      <path d="M9.69 8h11.48" />
      <path d="m7.38 12 5.74-9.94" />
      <path d="M9.69 16 3.95 6.06" />
      <path d="M14.31 16H2.83" />
      <path d="m16.62 12-5.74 9.94" />
    </svg>
  );
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function HeadphonesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function LayersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
