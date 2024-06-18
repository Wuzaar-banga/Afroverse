import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AiStudioService } from "./aiStudio.service";
import { AiStudioControllerBase } from "./base/aiStudio.controller.base";

@swagger.ApiTags("aiStudios")
@common.Controller("aiStudios")
export class AiStudioController extends AiStudioControllerBase {
  constructor(
    protected readonly service: AiStudioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
