import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VIRTUALARTIST_TITLE_FIELD } from "../virtualArtist/VirtualArtistTitle";

export const MusicChallengeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MusicChallenges"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
