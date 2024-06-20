import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiStudioService } from "./aiStudio.service";
import { AiStudioGrpcControllerBase } from "./base/aiStudio.grpc.controller.base";

@swagger.ApiTags("aiStudios")
@common.Controller("aiStudios")
export class AiStudioGrpcController extends AiStudioGrpcControllerBase {
  constructor(protected readonly service: AiStudioService) {
    super(service);
  }
}
