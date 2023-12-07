'use client';

import Toggle from '../Toggle';

export default function PricingPlans() {
  const options = {
    option1: {
      text: 'Monthly',
      onClick: () => undefined,
    },
    option2: {
      text: 'Annually',
      onClick: () => undefined,
    },
  };

  return (
    <div className="flex items-center justify-center">
      <Toggle {...options} />
    </div>
  );
}
