import { VoiceCustomizationWhereInput } from "./VoiceCustomizationWhereInput";
import { VoiceCustomizationOrderByInput } from "./VoiceCustomizationOrderByInput";

export type VoiceCustomizationFindManyArgs = {
  where?: VoiceCustomizationWhereInput;
  orderBy?: Array<VoiceCustomizationOrderByInput>;
  skip?: number;
  take?: number;
};
