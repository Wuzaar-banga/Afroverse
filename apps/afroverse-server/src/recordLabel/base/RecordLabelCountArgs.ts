/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RecordLabelWhereInput } from "./RecordLabelWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RecordLabelCountArgs {
  @ApiProperty({
    required: false,
    type: () => RecordLabelWhereInput,
  })
  @Field(() => RecordLabelWhereInput, { nullable: true })
  @Type(() => RecordLabelWhereInput)
  where?: RecordLabelWhereInput;
}

export { RecordLabelCountArgs as RecordLabelCountArgs };