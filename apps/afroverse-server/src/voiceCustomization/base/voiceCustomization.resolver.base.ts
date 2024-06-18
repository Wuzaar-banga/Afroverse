/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { VoiceCustomization } from "./VoiceCustomization";
import { VoiceCustomizationCountArgs } from "./VoiceCustomizationCountArgs";
import { VoiceCustomizationFindManyArgs } from "./VoiceCustomizationFindManyArgs";
import { VoiceCustomizationFindUniqueArgs } from "./VoiceCustomizationFindUniqueArgs";
import { CreateVoiceCustomizationArgs } from "./CreateVoiceCustomizationArgs";
import { UpdateVoiceCustomizationArgs } from "./UpdateVoiceCustomizationArgs";
import { DeleteVoiceCustomizationArgs } from "./DeleteVoiceCustomizationArgs";
import { VirtualArtistFindManyArgs } from "../../virtualArtist/base/VirtualArtistFindManyArgs";
import { VirtualArtist } from "../../virtualArtist/base/VirtualArtist";
import { VoiceCustomizationService } from "../voiceCustomization.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoiceCustomization)
export class VoiceCustomizationResolverBase {
  constructor(
    protected readonly service: VoiceCustomizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "VoiceCustomization",
    action: "read",
    possession: "any",
  })
  async _voiceCustomizationsMeta(
    @graphql.Args() args: VoiceCustomizationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [VoiceCustomization])
  @nestAccessControl.UseRoles({
    resource: "VoiceCustomization",
    action: "read",
    possession: "any",
  })
  async voiceCustomizations(
    @graphql.Args() args: VoiceCustomizationFindManyArgs
  ): Promise<VoiceCustomization[]> {
    return this.service.voiceCustomizations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => VoiceCustomization, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "VoiceCustomization",
    action: "read",
    possession: "own",
  })
  async voiceCustomization(
    @graphql.Args() args: VoiceCustomizationFindUniqueArgs
  ): Promise<VoiceCustomization | null> {
    const result = await this.service.voiceCustomization(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => VoiceCustomization)
  @nestAccessControl.UseRoles({
    resource: "VoiceCustomization",
    action: "create",
    possession: "any",
  })
  async createVoiceCustomization(
    @graphql.Args() args: CreateVoiceCustomizationArgs
  ): Promise<VoiceCustomization> {
    return await this.service.createVoiceCustomization({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => VoiceCustomization)
  @nestAccessControl.UseRoles({
    resource: "VoiceCustomization",
    action: "update",
    possession: "any",
  })
  async updateVoiceCustomization(
    @graphql.Args() args: UpdateVoiceCustomizationArgs
  ): Promise<VoiceCustomization | null> {
    try {
      return await this.service.updateVoiceCustomization({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => VoiceCustomization)
  @nestAccessControl.UseRoles({
    resource: "VoiceCustomization",
    action: "delete",
    possession: "any",
  })
  async deleteVoiceCustomization(
    @graphql.Args() args: DeleteVoiceCustomizationArgs
  ): Promise<VoiceCustomization | null> {
    try {
      return await this.service.deleteVoiceCustomization(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [VirtualArtist], { name: "virtualArtists" })
  @nestAccessControl.UseRoles({
    resource: "VirtualArtist",
    action: "read",
    possession: "any",
  })
  async findVirtualArtists(
    @graphql.Parent() parent: VoiceCustomization,
    @graphql.Args() args: VirtualArtistFindManyArgs
  ): Promise<VirtualArtist[]> {
    const results = await this.service.findVirtualArtists(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}