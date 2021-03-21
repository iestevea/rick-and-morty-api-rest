import { linkRoutes } from 'core/router';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Option } from 'common/mappers';
import { LocationCollectionComponent } from './location-collection.component';
import { useLocationCollection } from './location-collection.hook';

export const LocationCollectionContainer = () => {
  const {
    locationCollection,
    loadLocationCollection,
    totalLocations,
  } = useLocationCollection();
  const history = useHistory();

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editLocation(id));
  };

  const handleSearchBy = (options: Option[]) => {
    loadLocationCollection(options);
  };

  return (
    <LocationCollectionComponent
      total={totalLocations}
      locationCollection={locationCollection}
      onSearchBy={handleSearchBy}
      onEdit={handleEdit}
    />
  );
};
