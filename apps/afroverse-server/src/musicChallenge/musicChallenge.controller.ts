import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MusicChallengeService } from "./musicChallenge.service";
import { MusicChallengeControllerBase } from "./base/musicChallenge.controller.base";

@swagger.ApiTags("musicChallenges")
@common.Controller("musicChallenges")
export class MusicChallengeController extends MusicChallengeControllerBase {
  constructor(
    protected readonly service: MusicChallengeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
