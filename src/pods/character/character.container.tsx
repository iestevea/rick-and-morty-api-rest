import { Lookup } from 'common/models';
import { linkRoutes } from 'core/router';
import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { CharacterComponent } from './character.component';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Character, createEmptyCharacter } from './character.vm';

export const CharacterContainer = () => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id }: any = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleGoBack = () => {
    history.push(linkRoutes.characterCollection);
  }

  return <CharacterComponent character={character} onGoBack={handleGoBack}/>;
};
