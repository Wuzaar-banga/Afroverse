import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { VIRTUALARTIST_TITLE_FIELD } from "../virtualArtist/VirtualArtistTitle";

export const MusicChallengeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="rewards" source="rewards" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="VirtualArtist"
          source="virtualartist.id"
          reference="VirtualArtist"
        >
          <TextField source={VIRTUALARTIST_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
