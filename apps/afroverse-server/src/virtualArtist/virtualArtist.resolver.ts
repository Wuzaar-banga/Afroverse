import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VirtualArtistResolverBase } from "./base/virtualArtist.resolver.base";
import { VirtualArtist } from "./base/VirtualArtist";
import { VirtualArtistService } from "./virtualArtist.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VirtualArtist)
export class VirtualArtistResolver extends VirtualArtistResolverBase {
  constructor(
    protected readonly service: VirtualArtistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
