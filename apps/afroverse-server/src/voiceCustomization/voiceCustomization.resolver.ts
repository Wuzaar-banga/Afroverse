import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VoiceCustomizationResolverBase } from "./base/voiceCustomization.resolver.base";
import { VoiceCustomization } from "./base/VoiceCustomization";
import { VoiceCustomizationService } from "./voiceCustomization.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoiceCustomization)
export class VoiceCustomizationResolver extends VoiceCustomizationResolverBase {
  constructor(
    protected readonly service: VoiceCustomizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
