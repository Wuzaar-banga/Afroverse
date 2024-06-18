import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AiStudioResolverBase } from "./base/aiStudio.resolver.base";
import { AiStudio } from "./base/AiStudio";
import { AiStudioService } from "./aiStudio.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AiStudio)
export class AiStudioResolver extends AiStudioResolverBase {
  constructor(
    protected readonly service: AiStudioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
