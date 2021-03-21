interface UrlEntity {
  name: string,
  url: string
}
export interface LocationEntityApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: UrlEntity[];
  url: UrlEntity;
  created: string;
}
