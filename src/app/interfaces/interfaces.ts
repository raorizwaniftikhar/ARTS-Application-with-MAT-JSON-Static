
export interface NationsFeatured {
  nation: string;
}

export interface ArtDetail {
  id: number;
  description: string;
  title: string;
  creator: string;
  creation_date: string;
  nation: string;
  technique: string;
  url: string;
}

export interface MyDetails {
  A4Name: string;
  A4Email: string;
  A4Login: string;
  A4ID: string;
  A4Photo: string;
}

export interface RootJson {
  myDetails: MyDetails;
  nationsFeatured: NationsFeatured[];
  artDetails: ArtDetail[];
}

