import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VOICECUSTOMIZATION_TITLE_FIELD } from "../voiceCustomization/VoiceCustomizationTitle";

export const VirtualArtistList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VirtualArtists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="genre" source="genre" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="VoiceCustomization"
          source="voicecustomization.id"
          reference="VoiceCustomization"
        >
          <TextField source={VOICECUSTOMIZATION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
