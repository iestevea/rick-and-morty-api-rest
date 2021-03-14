import { Button } from '@material-ui/core';
import {
  TextFieldComponent,
  RatingComponent,
  SelectComponent,
} from 'common/components';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { formValidation } from './character.validations';
import * as classes from './character.styles';
import { Character } from './character.vm';
import { Lookup } from 'common/models';

interface Props {
  character: Character;
  locations: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FC<Props> = ({ character, locations, onSave }) => {
  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="address" label="Address" />
          <RatingComponent name="rating" max={5} />
          <SelectComponent name="city" label="City" items={locations} />
          <TextFieldComponent
            name="description"
            label="Description"
            multiline={true}
            rows={3}
            rowsMax={5}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
