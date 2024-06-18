import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VirtualArtistTitle } from "../virtualArtist/VirtualArtistTitle";

export const RecordLabelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
