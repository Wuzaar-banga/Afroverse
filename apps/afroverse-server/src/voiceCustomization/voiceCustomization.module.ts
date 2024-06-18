import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoiceCustomizationModuleBase } from "./base/voiceCustomization.module.base";
import { VoiceCustomizationService } from "./voiceCustomization.service";
import { VoiceCustomizationController } from "./voiceCustomization.controller";
import { VoiceCustomizationResolver } from "./voiceCustomization.resolver";

@Module({
  imports: [VoiceCustomizationModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoiceCustomizationController],
  providers: [VoiceCustomizationService, VoiceCustomizationResolver],
  exports: [VoiceCustomizationService],
})
export class VoiceCustomizationModule {}
