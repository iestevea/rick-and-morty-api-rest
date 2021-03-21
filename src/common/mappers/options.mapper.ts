export interface Option {
  key: string;
  value: string | number;
}

export const mapOptions = (options: Option[]) => {
  return options.reduce((acc: string, option: Option) => {
    return option.value ? `${acc}&${option.key}=${option.value}` : acc;
  }, '')
}
