import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "investment",
      "musicchallenge",
      "recordlabel",
      "aistudio",
      "virtualartist",
      "voicecustomization",
      "user"
    ],
    protoPath: [
      "src/investment/investment.proto",
      "src/musicchallenge/musicchallenge.proto",
      "src/recordlabel/recordlabel.proto",
      "src/aistudio/aistudio.proto",
      "src/virtualartist/virtualartist.proto",
      "src/voicecustomization/voicecustomization.proto",
      "src/user/user.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
