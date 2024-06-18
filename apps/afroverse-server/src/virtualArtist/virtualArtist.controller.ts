import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VirtualArtistService } from "./virtualArtist.service";
import { VirtualArtistControllerBase } from "./base/virtualArtist.controller.base";

@swagger.ApiTags("virtualArtists")
@common.Controller("virtualArtists")
export class VirtualArtistController extends VirtualArtistControllerBase {
  constructor(
    protected readonly service: VirtualArtistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
