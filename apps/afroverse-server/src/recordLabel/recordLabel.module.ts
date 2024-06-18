import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecordLabelModuleBase } from "./base/recordLabel.module.base";
import { RecordLabelService } from "./recordLabel.service";
import { RecordLabelController } from "./recordLabel.controller";
import { RecordLabelResolver } from "./recordLabel.resolver";

@Module({
  imports: [RecordLabelModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecordLabelController],
  providers: [RecordLabelService, RecordLabelResolver],
  exports: [RecordLabelService],
})
export class RecordLabelModule {}
