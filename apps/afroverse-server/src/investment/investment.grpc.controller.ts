import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InvestmentService } from "./investment.service";
import { InvestmentGrpcControllerBase } from "./base/investment.grpc.controller.base";

@swagger.ApiTags("investments")
@common.Controller("investments")
export class InvestmentGrpcController extends InvestmentGrpcControllerBase {
  constructor(protected readonly service: InvestmentService) {
    super(service);
  }
}
