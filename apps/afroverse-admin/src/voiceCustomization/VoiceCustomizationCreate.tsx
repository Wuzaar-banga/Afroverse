import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { VirtualArtistTitle } from "../virtualArtist/VirtualArtistTitle";

export const VoiceCustomizationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceArrayInput
          source="virtualArtists"
          reference="VirtualArtist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VirtualArtistTitle} />
        </ReferenceArrayInput>
        <TextInput label="voiceClonedFrom" source="voiceClonedFrom" />
      </SimpleForm>
    </Create>
  );
};
