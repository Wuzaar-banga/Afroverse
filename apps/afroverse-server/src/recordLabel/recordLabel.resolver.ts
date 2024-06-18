import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RecordLabelResolverBase } from "./base/recordLabel.resolver.base";
import { RecordLabel } from "./base/RecordLabel";
import { RecordLabelService } from "./recordLabel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RecordLabel)
export class RecordLabelResolver extends RecordLabelResolverBase {
  constructor(
    protected readonly service: RecordLabelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
