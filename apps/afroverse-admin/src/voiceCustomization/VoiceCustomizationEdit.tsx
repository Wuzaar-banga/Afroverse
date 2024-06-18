import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { VirtualArtistTitle } from "../virtualArtist/VirtualArtistTitle";

export const VoiceCustomizationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
