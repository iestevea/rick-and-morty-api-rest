import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { EpisodeEntityVm } from '../episode-collection.vm';
import * as classes from './episode-card.styles';
import { Badge, Button } from '@material-ui/core';

interface Props {
  episode: EpisodeEntityVm;
  onEdit: (id: string) => void;
}

export const EpisodeCard: React.FunctionComponent<Props> = (props) => {
  const { episode, onEdit } = props;

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
        avatar={<Avatar aria-label="Hotel">{getInitials(episode.id)}</Avatar>}
        title={episode.episode}
        subheader={episode.air_date}
      />
      <CardContent>
        <div className={classes.content}>
          <Typography variant="subtitle1" gutterBottom>
            Episode: {episode.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Characters:
          </Typography>
          <ul>
            {episode.characters.map((character: string) => (
              <li>{character}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(episode.id)}>
          <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
