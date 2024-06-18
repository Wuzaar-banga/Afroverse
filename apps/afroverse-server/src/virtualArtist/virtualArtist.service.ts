import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VirtualArtistServiceBase } from "./base/virtualArtist.service.base";

@Injectable()
export class VirtualArtistService extends VirtualArtistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
