import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VirtualArtistService } from "./virtualArtist.service";
import { VirtualArtistGrpcControllerBase } from "./base/virtualArtist.grpc.controller.base";

@swagger.ApiTags("virtualArtists")
@common.Controller("virtualArtists")
export class VirtualArtistGrpcController extends VirtualArtistGrpcControllerBase {
  constructor(protected readonly service: VirtualArtistService) {
    super(service);
  }
}
