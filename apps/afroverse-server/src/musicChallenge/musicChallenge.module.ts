import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MusicChallengeModuleBase } from "./base/musicChallenge.module.base";
import { MusicChallengeService } from "./musicChallenge.service";
import { MusicChallengeController } from "./musicChallenge.controller";
import { MusicChallengeResolver } from "./musicChallenge.resolver";

@Module({
  imports: [MusicChallengeModuleBase, forwardRef(() => AuthModule)],
  controllers: [MusicChallengeController],
  providers: [MusicChallengeService, MusicChallengeResolver],
  exports: [MusicChallengeService],
})
export class MusicChallengeModule {}
