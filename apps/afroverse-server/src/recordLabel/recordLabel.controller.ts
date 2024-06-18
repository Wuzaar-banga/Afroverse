import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecordLabelService } from "./recordLabel.service";
import { RecordLabelControllerBase } from "./base/recordLabel.controller.base";

@swagger.ApiTags("recordLabels")
@common.Controller("recordLabels")
export class RecordLabelController extends RecordLabelControllerBase {
  constructor(
    protected readonly service: RecordLabelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
