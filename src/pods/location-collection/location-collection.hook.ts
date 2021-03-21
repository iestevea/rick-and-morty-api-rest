import * as React from 'react';
import { Option } from 'common/mappers';
import { LocationEntityVm } from './location-collection.vm';
import { getLocationCollection } from './api';
import { mapFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<LocationEntityVm[]>(
    []
  );
  const [totalLocations, setTotalLocations] = React.useState(0);

  const loadLocationCollection = (options: Option[]) => {
    getLocationCollection(options).then(({ results, count }) => {
      setLocationCollection(mapToCollection(results, mapFromApiToVm))
      setTotalLocations(count);
    });
  };

  return { locationCollection, loadLocationCollection, totalLocations };
};
