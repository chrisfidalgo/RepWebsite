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
  // Add sourceUrl with citation link when available
  sourceUrl?: string;
  verificationStatus: 'Verified' | 'Needs verification' | 'Draft';
};

export const districtWins: DistrictWin[] = [
  {
    title: 'Floating Dock Repair at Westport State Boat Ramp',
    community: 'Westport',
    category: 'Earmark',
    amount: '$50,000',
    fiscalYear: 'FY2026',
    description:
      'Secured a $50,000 earmark to repair and replace the damaged floating dock at the state boat ramp — protecting a key public access point for Westport\'s working waterfront and recreational boaters.',
    verificationStatus: 'Verified',
  },
  {
    title: 'Desmarias Park Upgrades',
    community: 'Fall River',
    category: 'Earmark',
    amount: '$20,000',
    fiscalYear: 'FY2026',
    description:
      'Secured $20,000 to fund upgrades at Desmarias Park, expanding outdoor recreational opportunities for Fall River residents.',
    verificationStatus: 'Verified',
  },
  {
    title: 'HVAC Replacement at Acushnet Council on Aging & Community Center',
    community: 'Acushnet',
    category: 'Municipal Support',
    amount: '$10,000',
    fiscalYear: 'FY2026',
    description:
      'Secured $10,000 toward replacing one of four aging HVAC units at the Acushnet Council on Aging and Community Center, ensuring year-round comfort for community programming and senior gatherings.',
    verificationStatus: 'Verified',
  },
  {
    title: 'Clean Air Improvements at Acushnet Public Schools',
    community: 'Acushnet',
    category: 'Education',
    amount: '$10,000',
    fiscalYear: 'FY2026',
    description:
      'Secured $10,000 for the replacement of parts and filters to improve air quality within Acushnet Public Schools.',
    verificationStatus: 'Verified',
  },
  {
    title: 'Clean Air Improvements at Westport Public Schools',
    community: 'Westport',
    category: 'Education',
    amount: '$10,000',
    fiscalYear: 'FY2026',
    description:
      'Secured $10,000 for the replacement of parts and filters to improve air quality within Westport Public Schools.',
    verificationStatus: 'Verified',
  },
  {
    title: 'New Well at Westport Transfer Station',
    community: 'Westport',
    category: 'Municipal Support',
    amount: '$25,000',
    fiscalYear: 'FY2025',
    description:
      'Secured state funding for a new well at the Westport transfer station, improving water access for a key municipal facility.',
    verificationStatus: 'Verified',
  },
  {
    title: 'Structural Repairs at Acushnet Elementary School',
    community: 'Acushnet',
    category: 'Education',
    amount: '$25,000',
    fiscalYear: 'FY2025',
    description:
      'Arranged state funding to repair structural issues at Acushnet Elementary School, keeping the building safe for students and staff.',
    verificationStatus: 'Verified',
  },
  {
    title: 'HVAC Repair at Acushnet Council on Aging',
    community: 'Acushnet',
    category: 'Municipal Support',
    amount: '$20,000',
    fiscalYear: 'FY2025',
    description:
      'Secured funding to repair the HVAC system at the Acushnet Council on Aging building, improving comfort for senior programming.',
    verificationStatus: 'Verified',
  },
  {
    title: 'Lighting & Security at Freetown Town Beach',
    community: 'Freetown',
    category: 'Municipal Support',
    amount: '$10,000',
    fiscalYear: 'FY2025',
    description:
      'Arranged state funding for lighting and security improvements at Freetown\'s town beach.',
    verificationStatus: 'Verified',
  },
];
