import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { VIRTUALARTIST_TITLE_FIELD } from "../virtualArtist/VirtualArtistTitle";

export const RecordLabelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="analytics" source="analytics" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="promotions" source="promotions" />
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
