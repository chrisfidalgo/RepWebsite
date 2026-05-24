export type DistrictWin = {
  title: string;
  community: string;
  category:
    | 'Earmark'
    | 'Grant Support'
    | 'Constituent Service'
    | 'Municipal Support'
    | 'Food Security'
    | 'Education'
    | 'Arts & Culture'
    | 'Other';
  amount?: string;
  fiscalYear?: string;
  description: string;
  sourceUrl?: string;
  verificationStatus: 'Verified' | 'Needs verification' | 'Draft';
};

export const districtWins: DistrictWin[] = [
  {
    title: 'Local Funding Win Placeholder',
    community: 'TBD',
    category: 'Earmark',
    amount: 'TBD',
    fiscalYear: 'TBD',
    description:
      'Placeholder for a verified district funding win. Add amount, fiscal year, description, and citation before launch.',
    verificationStatus: 'Needs verification',
  },
  {
    title: 'Grant Support Placeholder',
    community: 'TBD',
    category: 'Grant Support',
    amount: 'TBD',
    fiscalYear: 'TBD',
    description:
      'Placeholder for a verified grant support story. Add details and source before launch.',
    verificationStatus: 'Needs verification',
  },
  {
    title: 'Food Security Support Placeholder',
    community: 'TBD',
    category: 'Food Security',
    amount: 'TBD',
    fiscalYear: 'TBD',
    description:
      'Placeholder for a verified food security support item. Add details and source before launch.',
    verificationStatus: 'Needs verification',
  },
  {
    title: 'Arts & Culture Support Placeholder',
    community: 'TBD',
    category: 'Arts & Culture',
    amount: 'TBD',
    fiscalYear: 'TBD',
    description:
      'Placeholder for a verified arts or culture support item. Add details and source before launch.',
    verificationStatus: 'Needs verification',
  },
];
