import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MusicChallengeService } from "./musicChallenge.service";
import { MusicChallengeGrpcControllerBase } from "./base/musicChallenge.grpc.controller.base";

@swagger.ApiTags("musicChallenges")
@common.Controller("musicChallenges")
export class MusicChallengeGrpcController extends MusicChallengeGrpcControllerBase {
  constructor(protected readonly service: MusicChallengeService) {
    super(service);
  }
}
