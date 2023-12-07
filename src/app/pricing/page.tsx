import PricingPlans from '@/components/pricing/PricingPlans';

export default function PricingRoot() {
  return (
    <section className="flex flex-col gap-16 px-8 py-32">
      <article className="flex flex-col items-center justify-center gap-[24px]">
        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </p>
          <h1 className="text-5xl font-bold -tracking-[0.025em] text-gray-900">
            Pricing plans for teams of all sizes
          </h1>
        </div>
        <p className="max-w-[42rem] text-center text-lg leading-8 -tracking-[0.025em] text-gray-600">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </article>
      <PricingPlans />
    </section>
  );
}
