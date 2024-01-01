export interface Props {
  dataSource: DataSource[];
}

export interface DataSource {
  id: string;
  media: {
    image: string;
  };
  enName: string;
  year: string;
  yearUnitText: string;
  companyName: string;
  jobTitle: string;
  technologies: Array<{
    id: string;
    text: string;
  }>;
}
