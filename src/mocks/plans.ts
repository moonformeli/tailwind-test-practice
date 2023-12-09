export const plan_month = [
  {
    name: 'Hobby',
    description: 'The essentials to provide your best work for clients.',
    pricing: {
      price: 14,
      unit: 'month',
    },
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics'],
  },
  {
    name: 'Freelancer',
    description: 'The essentials to provide your best work for clients.',
    pricing: {
      price: 30,
      unit: 'month',
    },
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
  },
  {
    name: 'Startup',
    description: 'A plan that scales with your rapidly growing business.',
    pricing: {
      price: 60,
      unit: 'month',
    },
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Dedicated support and infrastructure for your company.',
    pricing: {
      price: 90,
      unit: 'month',
    },
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
  },
] as Array<{
  name: string;
  description: string;
  pricing: {
    price: number;
    unit: 'month' | 'year';
  };
  features: string[];
}>;

export const plan_year = [
  {
    name: 'Hobby',
    description: 'The essentials to provide your best work for clients.',
    pricing: {
      price: 144,
      unit: 'year',
    },
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics'],
  },
  {
    name: 'Freelancer',
    description: 'The essentials to provide your best work for clients.',
    pricing: {
      price: 288,
      unit: 'year',
    },
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
  },
  {
    name: 'Startup',
    description: 'A plan that scales with your rapidly growing business.',
    pricing: {
      price: 576,
      unit: 'year',
    },
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Dedicated support and infrastructure for your company.',
    pricing: {
      price: 864,
      unit: 'year',
    },
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
  },
] as Array<{
  name: string;
  description: string;
  pricing: {
    price: number;
    unit: 'month' | 'year';
  };
  features: string[];
}>;
