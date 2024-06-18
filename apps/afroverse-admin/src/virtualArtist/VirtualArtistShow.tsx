import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { VIRTUALARTIST_TITLE_FIELD } from "./VirtualArtistTitle";
import { VOICECUSTOMIZATION_TITLE_FIELD } from "../voiceCustomization/VoiceCustomizationTitle";

export const VirtualArtistShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="AiStudio"
          target="virtualArtistId"
          label="AIStudios"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MusicChallenge"
          target="virtualArtistId"
          label="MusicChallenges"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="rewards" source="rewards" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="VirtualArtist"
              source="virtualartist.id"
              reference="VirtualArtist"
            >
              <TextField source={VIRTUALARTIST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RecordLabel"
          target="virtualArtistId"
          label="RecordLabels"
        >
          <Datagrid rowClick="show">
            <TextField label="analytics" source="analytics" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="promotions" source="promotions" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="VirtualArtist"
              source="virtualartist.id"
              reference="VirtualArtist"
            >
              <TextField source={VIRTUALARTIST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
