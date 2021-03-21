import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { LocationEntityVm } from '../location-collection.vm';
import * as classes from './location-card.styles';

interface Props {
  location: LocationEntityVm;
  onEdit: (id: string) => void;
}

export const LocationCard: React.FunctionComponent<Props> = (props) => {
  const { location, onEdit } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="Hotel">{location.id}</Avatar>
        }
        title={location.name}
        subheader={location.type}
      />
      <CardContent>
        <div className={classes.content}>
        <Typography variant="subtitle1" gutterBottom>
            Dimension: {location.dimension}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Number of residents: {location.residents.length}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
