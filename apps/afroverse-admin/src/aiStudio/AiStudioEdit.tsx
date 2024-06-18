import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VirtualArtistTitle } from "../virtualArtist/VirtualArtistTitle";

export const AiStudioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
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
