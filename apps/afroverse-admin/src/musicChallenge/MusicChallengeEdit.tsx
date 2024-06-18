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

export const MusicChallengeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="title" source="title" />
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
