import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const InvestmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="investor" source="investor" />
        <div />
        <NumberInput step={1} label="tokenStaked" source="tokenStaked" />
      </SimpleForm>
    </Edit>
  );
};
