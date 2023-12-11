'use client';

import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { capitalize } from '@/utils';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

type Month = 'month';
type Year = 'year';

type Pricing = {
  price: number;
  unit: Month | Year;
};

interface PlanProps {
  name: string;
  description: string;
  pricing: Pricing;
  features: string[];
}

export default function Plan({
  name,
  description,
  pricing,
  features,
}: PlanProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const { data: session } = useSession();

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  const handlePurchase = () => {
    if (!session) {
      signIn();
    }
  };

  return (
    <li
      className={twMerge(
        'flex flex-1 flex-col gap-8 rounded-3xl border-[1px] border-solid border-gray-200 p-8',
        isMouseOver && 'border-indigo-600',
      )}
      data-testid="plan-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="flex flex-col gap-6">
        <article className="flex flex-col gap-4">
          <strong
            className={twMerge(
              'text-gray-90 text-lg font-semibold leading-8',
              isMouseOver && 'text-indigo-600',
            )}
          >
            {name}
          </strong>
          <p className="text-sm leading-6 text-gray-600">{description}</p>
        </article>
        <article className="flex flex-col gap-6">
          <div>
            <span className="text-4xl font-bold -tracking-tight text-gray-900">
              ${pricing.price.toLocaleString()}
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600">
              /{pricing.unit}
            </span>
          </div>
          <button
            style={{
              boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px inset',
            }}
            className={twMerge(
              'rounded-md border-[1px] border-solid border-gray-200 px-3 py-2 text-sm font-semibold leading-6 text-indigo-600',
              isMouseOver && 'bg-indigo-600 text-white',
            )}
            onClick={handlePurchase}
          >
            Buy plan
          </button>
        </article>
      </div>
      {features.length > 0 && (
        <ul className="flex list-none flex-col gap-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center justify-start gap-3">
              <Image src="/check.svg" width={20} height={24} alt="" />
              <span className="text-sm leading-6 text-gray-600">
                {capitalize(feature)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
