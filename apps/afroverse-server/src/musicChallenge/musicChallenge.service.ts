import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MusicChallengeServiceBase } from "./base/musicChallenge.service.base";

@Injectable()
export class MusicChallengeService extends MusicChallengeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
