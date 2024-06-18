import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VirtualArtistModuleBase } from "./base/virtualArtist.module.base";
import { VirtualArtistService } from "./virtualArtist.service";
import { VirtualArtistController } from "./virtualArtist.controller";
import { VirtualArtistResolver } from "./virtualArtist.resolver";

@Module({
  imports: [VirtualArtistModuleBase, forwardRef(() => AuthModule)],
  controllers: [VirtualArtistController],
  providers: [VirtualArtistService, VirtualArtistResolver],
  exports: [VirtualArtistService],
})
export class VirtualArtistModule {}
