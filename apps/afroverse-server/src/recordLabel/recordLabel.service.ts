import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecordLabelServiceBase } from "./base/recordLabel.service.base";

@Injectable()
export class RecordLabelService extends RecordLabelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
