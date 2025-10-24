import React from "react";

interface BlackSectionProps {
  title?: string;
  children: React.ReactNode;
}

export function BlackSection({ title, children }: BlackSectionProps) {
  return (
    <section className="bg-black text-white py-6 px-4 shadow-lg max-w-4xl mx-auto mb-4 mt-3 leading-relaxed">
      {title && (
        <h2 className="text-white text-2xl sm:text-2xl font-bold mb-4 text-left">
          {title}
        </h2>
      )}
      <div className="text-white leading-relaxed text-justify">{children}</div>
    </section>
  );
}
