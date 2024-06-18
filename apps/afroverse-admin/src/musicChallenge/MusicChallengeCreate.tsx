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

export const MusicChallengeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
