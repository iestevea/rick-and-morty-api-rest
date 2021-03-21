export interface LocationEntityApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Resident[];
  url: string;
  created: string;
}

interface Resident {
  name: string;
}
