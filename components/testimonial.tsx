"use client";
import { cn } from "@/lib/utils";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export function Testimonial() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 overflow-hidden h-full ">
      <div className="pb-20">
        <h1 className="pt-4 font-bold text-black text-lg md:text-2xl dark:text-white">
          Used by builders around the world
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          Proactiv is used by serial entrepreneurs and overachievers.
        </p>
      </div>

      <div className=" relative">
        <TestimonialsSlider />
        <div className="h-full max-h-screen md:max-h-none overflow-hidden w-full bg-charcoal opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_99%)]">
          <TestimonialsGrid />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-charcoal to-transparent"></div>
    </div>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto ">
      {grid.map((testimonialsCol, index) => (
        <div key={`testimonials-col-${index}`} className="grid gap-4">
          {testimonialsCol.map((testimonial) => (
            <Card key={`testimonial-${testimonial.src}-${index}`}>
              <Quote>{testimonial.quote}</Quote>
              <div className="flex gap-2 items-center mt-8">
                <Image
                  src={testimonial.src}
                  alt="Manu Arora"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <QuoteDescription>{testimonial.name}</QuoteDescription>
                  <QuoteDescription className="text-[10px]">
                    {testimonial.designation}
                  </QuoteDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-neutral-100 bg-neutral-200 dark:border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.30)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-xs font-semibold dark:text-white text-black py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs font-normal dark:text-neutral-400 text-neutral-600 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    quote: "Chaotic has revolutionized our QA process. As a product owner, I can now write and run tests without relying on our dev team. It's empowering!",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Product Owner, TechInnovate Inc.",
  },
  {
    name: "Michael Chen",
    quote: "The AI-powered test suggestions are spot-on. Chaotic catches issues I wouldn't have thought to test for. It's like having an expert QA engineer on call 24/7.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "Lead Developer, WebSphere Solutions",
  },
  {
    name: "Emily Rodriguez",
    quote: "Writing tests in plain English? Game-changer. Chaotic has streamlined our workflow and improved collaboration between our tech and non-tech teams.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Project Manager, Agile Dynamics",
  },
  {
    name: "David Okonkwo",
    quote: "The visual regression testing in Chaotic is incredible. It catches the smallest UI changes that we might have missed. Our site's consistency has never been better.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "UX Designer, VisualPlus",
  },
  {
    name: "Lisa Tanaka",
    quote: "As a non-technical founder, Chaotic has been a lifesaver. I can now ensure our web app's quality without constantly bothering our dev team. Highly recommended!",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "CEO, StartUp Nexus",
  },
  {
    name: "Alex Kowalski",
    quote: "The AI chatbot in Chaotic is like having a QA expert on your shoulder. It's helped our junior devs write better tests and understand testing principles.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Senior QA Engineer, CodeCrafters Ltd.",
  },
  {
    name: "Priya Patel",
    quote: "Chaotic's ability to generate test cases based on user behavior has improved our test coverage dramatically. We're catching bugs before they even reach staging.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "CTO, DataDriven Systems",
  },
  {
    name: "Thomas Bergström",
    quote: "The ease of integrating Chaotic into our CI/CD pipeline was impressive. It's now an indispensable part of our development process.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "DevOps Lead, Nordic Tech Innovations",
  },
  {
    name: "Maria Gomez",
    quote: "Chaotic's AI-powered root cause analysis has saved us countless hours of debugging. It pinpoints issues with remarkable accuracy.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Software Architect, Cloud9 Solutions",
  },
  {
    name: "James Wilson",
    quote: "The self-healing tests in Chaotic are a game-changer. Our test suite stays reliable even as our UI evolves, reducing maintenance headaches.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "QA Manager, Resilient Systems Inc.",
  },
];

export const TestimonialsSlider = () => {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const slicedTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === slicedTestimonials.length ? 0 : (active) => active + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [active, autorotate, slicedTestimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        heightFix();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="absolute inset-0 mt-20 md:mt-60">
      <div className="max-w-3xl mx-auto  relative z-40 h-80">
        <div className="relative pb-12 md:pb-20">
          {/* Particles animation */}

          {/* Carousel */}
          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-neutral-400/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-neutral-200 after:dark:bg-neutral-900 after:m-px before:-z-20 after:-z-20">
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -translate-x-10"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-10"
                    beforeEnter={() => heightFix()}
                  >
                    <div className="absolute inset-0 h-full -z-10">
                      <Image
                        className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                        src={item.src}
                        width={56}
                        height={56}
                        alt={item.name}
                      />
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out px-8 sm:px-6">
              <div className="relative flex flex-col" ref={testimonialsRef}>
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                  >
                    <div className="text-base text-black dark:text-white md:text-xl font-bold">
                      {item.quote}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5 px-8 sm:px-6">
              {slicedTestimonials.map((item, index) => (
                <button
                  className={cn(
                    `px-2 py-1 rounded-full m-1.5 text-xs border border-transparent text-neutral-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.neutral.900),_theme(colors.neutral.900))_padding-box,_conic-gradient(theme(colors.neutral.400),_theme(colors.neutral.700)_25%,_theme(colors.neutral.700)_75%,_theme(colors.neutral.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-neutral-800/30 before:rounded-full before:pointer-events-none ${
                      active === index
                        ? "border-secondary/50"
                        : "border-transparent opacity-70"
                    }`
                  )}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="relative">
                    <span className="text-neutral-50 font-bold">
                      {item.name}
                    </span>{" "}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
