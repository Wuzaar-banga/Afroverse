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
import { VirtualArtistWhereInput } from "./VirtualArtistWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VirtualArtistListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VirtualArtistWhereInput,
  })
  @ValidateNested()
  @Type(() => VirtualArtistWhereInput)
  @IsOptional()
  @Field(() => VirtualArtistWhereInput, {
    nullable: true,
  })
  every?: VirtualArtistWhereInput;

  @ApiProperty({
    required: false,
    type: () => VirtualArtistWhereInput,
  })
  @ValidateNested()
  @Type(() => VirtualArtistWhereInput)
  @IsOptional()
  @Field(() => VirtualArtistWhereInput, {
    nullable: true,
  })
  some?: VirtualArtistWhereInput;

  @ApiProperty({
    required: false,
    type: () => VirtualArtistWhereInput,
  })
  @ValidateNested()
  @Type(() => VirtualArtistWhereInput)
  @IsOptional()
  @Field(() => VirtualArtistWhereInput, {
    nullable: true,
  })
  none?: VirtualArtistWhereInput;
}
export { VirtualArtistListRelationFilter as VirtualArtistListRelationFilter };
