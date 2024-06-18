import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { VOICECUSTOMIZATION_TITLE_FIELD } from "./VoiceCustomizationTitle";

export const VoiceCustomizationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="aiGeneratedVoice" source="aiGeneratedVoice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="voiceClonedFrom" source="voiceClonedFrom" />
        <ReferenceManyField
          reference="VirtualArtist"
          target="voiceCustomizationId"
          label="VirtualArtists"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
