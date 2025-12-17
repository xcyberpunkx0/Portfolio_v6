"use client";

import { experiences } from "@/lib/constants";

export default function WorkSection() {
  return (
    <section className="py-32 border-t border-[#303030]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-8xl font-bold text-right mb-16">Work Experience</h2>
        
        <div className="space-y-4">
          {experiences.map((work, index) => (
            <div
              key={index}
              className="work-row cursor-pointer"
            >
              <div>
                <p className="text-sm mb-1 text-text-secondary">
                  {work.duration}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">{work.company}</h3>
                <p className="text-text-secondary text-sm mt-1">{work.role}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
          ))}

          <div className="text-right mt-8">
            <p className="text-text-secondary text-sm">Total Experience</p>
            <p className="text-xl italic">2+ years</p>
          </div>
        </div>
      </div>
    </section>
  );
}

