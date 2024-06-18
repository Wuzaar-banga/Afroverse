/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VoiceCustomizationWhereInput } from "./VoiceCustomizationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VoiceCustomizationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VoiceCustomizationWhereInput,
  })
  @ValidateNested()
  @Type(() => VoiceCustomizationWhereInput)
  @IsOptional()
  @Field(() => VoiceCustomizationWhereInput, {
    nullable: true,
  })
  every?: VoiceCustomizationWhereInput;

  @ApiProperty({
    required: false,
    type: () => VoiceCustomizationWhereInput,
  })
  @ValidateNested()
  @Type(() => VoiceCustomizationWhereInput)
  @IsOptional()
  @Field(() => VoiceCustomizationWhereInput, {
    nullable: true,
  })
  some?: VoiceCustomizationWhereInput;

  @ApiProperty({
    required: false,
    type: () => VoiceCustomizationWhereInput,
  })
  @ValidateNested()
  @Type(() => VoiceCustomizationWhereInput)
  @IsOptional()
  @Field(() => VoiceCustomizationWhereInput, {
    nullable: true,
  })
  none?: VoiceCustomizationWhereInput;
}
export { VoiceCustomizationListRelationFilter as VoiceCustomizationListRelationFilter };
