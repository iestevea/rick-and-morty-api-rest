import { Lookup } from 'common/models';
import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { Character } from './api';
import { CharacterComponent } from './character.component';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { createEmptyCharacter } from './character.vm';

export const CharacterContainer = () => {

  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const [locations, setLocations] = React.useState<Lookup[]>([]);
  const { id }: any = useParams();
  const history = useHistory();

  const handleLoadLocationCollection = async () => {
    const apiLocations = await api.getLocations();
    setLocations(apiLocations);
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    handleLoadLocationCollection();
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} locations={locations} onSave={handleSave} />;
};
