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

export const AiStudioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="composition" source="composition" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="mixing" source="mixing" />
        <TextField label="production" source="production" />
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
