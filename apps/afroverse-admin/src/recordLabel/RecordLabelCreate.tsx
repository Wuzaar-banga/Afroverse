import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VirtualArtistTitle } from "../virtualArtist/VirtualArtistTitle";

export const RecordLabelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="name" source="name" />
        <div />
        <ReferenceInput
          source="virtualArtist.id"
          reference="VirtualArtist"
          label="VirtualArtist"
        >
          <SelectInput optionText={VirtualArtistTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
