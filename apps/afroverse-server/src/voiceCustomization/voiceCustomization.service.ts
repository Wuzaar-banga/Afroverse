import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoiceCustomizationServiceBase } from "./base/voiceCustomization.service.base";

@Injectable()
export class VoiceCustomizationService extends VoiceCustomizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
