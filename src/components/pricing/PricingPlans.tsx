'use client';

import { useState } from 'react';
import Toggle from '../Toggle';
import Plan from './Plan';
import { plan_month, plan_year } from '@/mocks';

enum Plan_Type {
  'MONTH' = 1,
  'YEAR',
}

const plans = {
  [Plan_Type.MONTH]: plan_month,
  [Plan_Type.YEAR]: plan_year,
};

export default function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState(Plan_Type.MONTH);

  const handleSelectMonth = () => {
    setSelectedPlan(Plan_Type.MONTH);
  };

  const handleSelectYear = () => {
    setSelectedPlan(Plan_Type.YEAR);
  };

  const options = {
    option1: {
      text: 'Monthly',
      onClick: handleSelectMonth,
    },
    option2: {
      text: 'Annually',
      onClick: handleSelectYear,
    },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Toggle {...options} />
      <ul className="item-center flex justify-center gap-8">
        {plans[selectedPlan].map((plan, i) => (
          <Plan key={i} {...plan} />
        ))}
      </ul>
    </div>
  );
}
