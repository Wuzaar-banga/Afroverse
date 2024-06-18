import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InvestmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Investments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="investor" source="investor" />
        <TextField label="reward" source="reward" />
        <TextField label="tokenStaked" source="tokenStaked" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
