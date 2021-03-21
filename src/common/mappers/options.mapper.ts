export interface Option {
  key: string;
  value: string | number;
}

export const mapOptions = (options: Option[]) => {
  return options.reduce((acc: any, { key, value }: Option) => {
    return { ...acc, [key]: value };
  }, {})
}
