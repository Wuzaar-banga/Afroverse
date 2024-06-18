import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VIRTUALARTIST_TITLE_FIELD } from "../virtualArtist/VirtualArtistTitle";

export const AiStudioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AIStudios"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
