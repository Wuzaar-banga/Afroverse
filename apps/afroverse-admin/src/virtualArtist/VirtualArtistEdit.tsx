import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { AiStudioTitle } from "../aiStudio/AiStudioTitle";
import { MusicChallengeTitle } from "../musicChallenge/MusicChallengeTitle";
import { RecordLabelTitle } from "../recordLabel/RecordLabelTitle";
import { VoiceCustomizationTitle } from "../voiceCustomization/VoiceCustomizationTitle";

export const VirtualArtistEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="aiStudios"
          reference="AiStudio"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AiStudioTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="genre"
          label="genre"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="musicChallenges"
          reference="MusicChallenge"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MusicChallengeTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="recordLabels"
          reference="RecordLabel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecordLabelTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="voiceCustomization.id"
          reference="VoiceCustomization"
          label="VoiceCustomization"
        >
          <SelectInput optionText={VoiceCustomizationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
