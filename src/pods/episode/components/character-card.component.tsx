import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Character } from '../episode.vm';
import * as classes from './character-card.styles';
import { Badge, Button } from '@material-ui/core';

interface Props {
  character: Character;
  onEdit: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

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
        <div className={classes.content}>
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
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
