/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import { IsOptional, IsDate, IsString, ValidateNested } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Type } from "class-transformer";
import { VirtualArtist } from "../../virtualArtist/base/VirtualArtist";

@ObjectType()
class VoiceCustomization {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  aiGeneratedVoice!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [VirtualArtist],
  })
  @ValidateNested()
  @Type(() => VirtualArtist)
  @IsOptional()
  virtualArtists?: Array<VirtualArtist>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  voiceClonedFrom!: string | null;
}

export { VoiceCustomization as VoiceCustomization };
