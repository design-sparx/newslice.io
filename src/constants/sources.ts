export interface Sources {
  status: string;
  sources: [
    {
      id: string | number;
      name: string;
      description: string;
      url: string;
      category: string;
      language: string;
      country: string;
    },
  ];
}
