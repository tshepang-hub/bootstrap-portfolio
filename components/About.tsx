import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <Reveal>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl transform rotate-6" />
                <Image
                  src="/me12.jpg"
                  alt="Tshepang Baloyi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="relative z-10 object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-400 rounded-full opacity-20 animate-pulse-slow" />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-400 rounded-full opacity-20 animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={150}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-primary-600 dark:text-primary-400">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                Driven by a deep curiosity for technology, I am passionate about
                leveraging code to solve real-world problems and create innovative
                digital experiences. I enjoy exploring new programming languages,
                developing dynamic web applications, and continuously refining my
                skills.
              </p>
              <p>
                With a focus on clean, efficient code and user-centric design, I am
                committed to turning complex ideas into functional, impactful
                solutions that make a difference.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  2+
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  19+
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Projects Completed
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  Location
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300">South Africa</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  Email
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Tshepangbaloyi26@gmail.com
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
