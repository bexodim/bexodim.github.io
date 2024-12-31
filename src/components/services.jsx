export function Services() {
  const services = [
    {
      title: "ENABLING CREATIVE BUSINESSES",
      description:
        "Turn your creative passions into sustainable business plays that align with your goals.",
      details: "pitch decks, financial models, go to market strategy",
    },
    {
      title: "OPTIMIZING OPERATIONS",
      description:
        "Work smarter, not harder so you can focus on your most impactful work.",
      details: "process templates, tooling optimization, custom tooling",
    },
    {
      title: "TECH / PRODUCT STRATEGY",
      description:
        "Build the right thing, at the right time, and meet your customers where they are.",
      details: "user interviews, roadmapping, go to market strategy",
    },
    {
      title: "DATA & DECISION MAKING",
      description:
        "Understand the range and depth of opportunity for your product or service offering.",
      details: "data collection, research reports, business dashboards",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service) => (
          <div key={service.title} className="space-y-4 text-[#3B432B]">
            <h3 className="font-medium text-lg">{service.title}</h3>
            <p className="">{service.description}</p>
            <p className="text-sm italic">{service.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

