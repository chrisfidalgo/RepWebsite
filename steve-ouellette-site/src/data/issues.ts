export type Issue = {
  title: string;
  description: string;
  icon?: string;
};

export const issues: Issue[] = [
  {
    title: 'Infrastructure & Transportation',
    description:
      'Supporting long-term investments in roads, public facilities, transportation systems, and resilient infrastructure that strengthen communities across the South Coast.',
  },
  {
    title: 'Local Government & Municipal Partnerships',
    description:
      'Working collaboratively with cities, towns, and regional organizations to support effective municipal operations and sustainable community planning.',
  },
  {
    title: 'Public Safety & Emergency Preparedness',
    description:
      'Supporting first responders, emergency preparedness initiatives, and policies that strengthen public safety and community resilience.',
  },
  {
    title: 'Workforce Development & Skilled Trades',
    description:
      'Promoting vocational education, workforce opportunities, and skilled trades that help support strong local economies and career pathways.',
  },
  {
    title: 'Coastal Communities, Agriculture & Fisheries',
    description:
      'Advocating for the industries, infrastructure, and natural resources that remain vital to South Coast communities.',
  },
  {
    title: 'Economic & Community Development',
    description:
      'Supporting local businesses, regional economic growth, and initiatives that help communities remain vibrant and sustainable.',
  },
];
