import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VoiceCustomizationService } from "./voiceCustomization.service";
import { VoiceCustomizationControllerBase } from "./base/voiceCustomization.controller.base";

@swagger.ApiTags("voiceCustomizations")
@common.Controller("voiceCustomizations")
export class VoiceCustomizationController extends VoiceCustomizationControllerBase {
  constructor(
    protected readonly service: VoiceCustomizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
