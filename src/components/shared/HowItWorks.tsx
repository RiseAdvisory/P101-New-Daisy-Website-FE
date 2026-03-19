interface HowItWorksProps {
  steps: Array<{ title: string; description: string }>;
}

export const HowItWorks = ({ steps }: HowItWorksProps) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#172524] text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-[#172524] font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-[#455150] text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
