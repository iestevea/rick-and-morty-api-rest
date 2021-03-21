import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import * as classes from './character.styles';
import { Character } from './character.vm';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

interface Props {
  character: Character;
  onGoBack: () => void;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FC<Props> = ({
  character,
  onGoBack,
  onSave,
}) => {
  const [comment, setComment] = React.useState('');

  React.useEffect(() => {
    setComment(character.comment);
  }, [character.comment]);

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
    <>
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
        <div
          style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}
        >
          <TextField
            name="comment"
            label="Comentario"
            multiline={true}
            rows={3}
            rowsMax={5}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <Button
            onClick={() => onSave({ ...character, comment })}
            variant="contained"
            color="primary"
            style={{ marginTop: '8px' }}
          >
            Save
          </Button>
        </div>
      </Card>
    </>
  );
};
