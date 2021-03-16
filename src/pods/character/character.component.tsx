import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import { TextFieldComponent } from 'common/components';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { formValidation } from './character.validations';
import * as classes from './character.styles';
import { Character } from './character.vm';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

interface Props {
  character: Character;
  onGoBack: () => void;
}

export const CharacterComponent: React.FC<Props> = ({
  character,
  onGoBack,
}) => {
  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('');

  const statusColors = {
    alive: 'primary',
    dead: 'error',
    unknown: 'secondary',
  };

  return (
    <div className={classes.root}>
      <IconButton onClick={() => onGoBack()}>
        <ArrowBackIcon />{' '}
      </IconButton>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Hotel">{getInitials(character.name)}</Avatar>
          }
          title={character.name}
          subheader={
            <>
              <Badge
                style={{ marginRight: '8px' }}
                color={statusColors[character.status.toLocaleLowerCase()]}
                variant="dot"
              />
              {character.status}
            </>
          }
        />
        <CardContent>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            Species: {character.species}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Origin: {character.originName}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
