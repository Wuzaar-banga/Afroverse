import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiStudioServiceBase } from "./base/aiStudio.service.base";

@Injectable()
export class AiStudioService extends AiStudioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
