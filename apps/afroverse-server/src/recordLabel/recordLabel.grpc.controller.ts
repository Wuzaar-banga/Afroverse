import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecordLabelService } from "./recordLabel.service";
import { RecordLabelGrpcControllerBase } from "./base/recordLabel.grpc.controller.base";

@swagger.ApiTags("recordLabels")
@common.Controller("recordLabels")
export class RecordLabelGrpcController extends RecordLabelGrpcControllerBase {
  constructor(protected readonly service: RecordLabelService) {
    super(service);
  }
}
