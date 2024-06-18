import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MusicChallengeResolverBase } from "./base/musicChallenge.resolver.base";
import { MusicChallenge } from "./base/MusicChallenge";
import { MusicChallengeService } from "./musicChallenge.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MusicChallenge)
export class MusicChallengeResolver extends MusicChallengeResolverBase {
  constructor(
    protected readonly service: MusicChallengeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
