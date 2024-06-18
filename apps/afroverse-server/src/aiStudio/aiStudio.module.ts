import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AiStudioModuleBase } from "./base/aiStudio.module.base";
import { AiStudioService } from "./aiStudio.service";
import { AiStudioController } from "./aiStudio.controller";
import { AiStudioResolver } from "./aiStudio.resolver";

@Module({
  imports: [AiStudioModuleBase, forwardRef(() => AuthModule)],
  controllers: [AiStudioController],
  providers: [AiStudioService, AiStudioResolver],
  exports: [AiStudioService],
})
export class AiStudioModule {}
