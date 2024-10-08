import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

export function FAQ() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 text-secondary bg-muted">
      <div className="grid gap-12 px-4 md:px-6">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
          <p
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get answers to the most common questions about our product.
          </p>
        </div>
        <div
          className="mx-auto w-full max-w-3xl divide-y-2 divide-[#0000001d] rounded-[10px] shadow-md shadow-[#0000002d]">
          <Collapsible className="space-y-2">
            <div className="flex items-center justify-between space-x-4 py-2 px-4">
              <h4 className="font-semibold">What is your product?</h4>
              <CollapsibleTrigger asChild>
                <Button variant="" className="text-lg rounded-[50px] aspect-square size-8 outline-none">
                  -
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 py-2 text-secondary-foreground">
              Our product is a powerful platform that helps teams of all sizes streamline their workflows and accelerate
              innovation. It provides automated CI/CD, built-in testing, and integrated collaboration tools to help you
              focus on shipping features instead of managing infrastructure.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2">
            <div className="flex items-center justify-between space-x-4 py-2 px-4">
              <h4 className="font-semibold">How does your product work?</h4>
              <CollapsibleTrigger asChild>
                <Button variant="" className="text-lg rounded-[50px] aspect-square size-8 outline-none">
                  -
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 py-2 text-secondary-foreground">
              Our product is designed to be easy to use and integrate with your existing workflows. Simply connect your
              code repository, and our platform will handle the rest. It automatically builds, tests, and deploys your
              application, allowing you to focus on writing code instead of managing infrastructure.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2">
            <div className="flex items-center justify-between space-x-4 py-2 px-4">
              <h4 className="font-semibold">What are the key features of your product?</h4>
              <CollapsibleTrigger asChild>
                <Button variant="" className="text-lg rounded-[50px] aspect-square size-8 outline-none">
                  -
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 py-2 text-secondary-foreground">
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Automated CI/CD:</span> Our platform automatically builds, tests, and
                  deploys your application, reducing the time and effort required to manage your infrastructure.
                </li>
                <li>
                  <span className="font-semibold">Built-in Testing:</span>
                  Integrated testing tools ensure your code is reliable and bug-free before it's deployed.
                </li>
                <li>
                  <span className="font-semibold">Collaboration Tools:</span>
                  Streamline your team's workflow with built-in code review, issue tracking, and communication features.
                </li>
                <li>
                  <span className="font-semibold">Scalability:</span> Our platform is designed to scale with your
                  business, allowing you to easily handle increased traffic and user demands.
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2">
            <div className="flex items-center justify-between space-x-4 py-2 px-4">
              <h4 className="font-semibold">How much does your product cost?</h4>
              <CollapsibleTrigger asChild>
                <Button variant="" className="text-lg rounded-[50px] aspect-square size-8 outline-none">
                  -
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 py-2 text-secondary-foreground">
              We offer a range of pricing plans to fit the needs of businesses of all sizes. Our basic plan starts at
              $99 per month, with additional features and support available in our Pro and Enterprise plans. We also
              offer a free trial so you can try our product before committing to a paid plan.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2">
            <div className="flex items-center justify-between space-x-4 py-2 px-4">
              <h4 className="font-semibold">How do I get started with your product?</h4>
              <CollapsibleTrigger asChild>
                <Button variant="" className="text-lg rounded-[50px] aspect-square size-8 outline-none">
                  -
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 py-2 text-secondary-foreground">
              Getting started with our product is easy. Simply sign up for an account on our website, connect your code
              repository, and our platform will handle the rest. We also provide detailed documentation and a helpful
              support team to guide you through the setup process.
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>)
  );
}

function MinusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
