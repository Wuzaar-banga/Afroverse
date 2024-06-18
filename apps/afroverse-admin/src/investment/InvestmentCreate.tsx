import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const InvestmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="investor" source="investor" />
        <div />
        <NumberInput step={1} label="tokenStaked" source="tokenStaked" />
      </SimpleForm>
    </Create>
  );
};
