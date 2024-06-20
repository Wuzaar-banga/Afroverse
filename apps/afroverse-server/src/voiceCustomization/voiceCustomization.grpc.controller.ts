import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoiceCustomizationService } from "./voiceCustomization.service";
import { VoiceCustomizationGrpcControllerBase } from "./base/voiceCustomization.grpc.controller.base";

@swagger.ApiTags("voiceCustomizations")
@common.Controller("voiceCustomizations")
export class VoiceCustomizationGrpcController extends VoiceCustomizationGrpcControllerBase {
  constructor(protected readonly service: VoiceCustomizationService) {
    super(service);
  }
}
