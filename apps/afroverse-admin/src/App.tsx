import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InvestmentList } from "./investment/InvestmentList";
import { InvestmentCreate } from "./investment/InvestmentCreate";
import { InvestmentEdit } from "./investment/InvestmentEdit";
import { InvestmentShow } from "./investment/InvestmentShow";
import { MusicChallengeList } from "./musicChallenge/MusicChallengeList";
import { MusicChallengeCreate } from "./musicChallenge/MusicChallengeCreate";
import { MusicChallengeEdit } from "./musicChallenge/MusicChallengeEdit";
import { MusicChallengeShow } from "./musicChallenge/MusicChallengeShow";
import { RecordLabelList } from "./recordLabel/RecordLabelList";
import { RecordLabelCreate } from "./recordLabel/RecordLabelCreate";
import { RecordLabelEdit } from "./recordLabel/RecordLabelEdit";
import { RecordLabelShow } from "./recordLabel/RecordLabelShow";
import { VirtualArtistList } from "./virtualArtist/VirtualArtistList";
import { VirtualArtistCreate } from "./virtualArtist/VirtualArtistCreate";
import { VirtualArtistEdit } from "./virtualArtist/VirtualArtistEdit";
import { VirtualArtistShow } from "./virtualArtist/VirtualArtistShow";
import { AiStudioList } from "./aiStudio/AiStudioList";
import { AiStudioCreate } from "./aiStudio/AiStudioCreate";
import { AiStudioEdit } from "./aiStudio/AiStudioEdit";
import { AiStudioShow } from "./aiStudio/AiStudioShow";
import { VoiceCustomizationList } from "./voiceCustomization/VoiceCustomizationList";
import { VoiceCustomizationCreate } from "./voiceCustomization/VoiceCustomizationCreate";
import { VoiceCustomizationEdit } from "./voiceCustomization/VoiceCustomizationEdit";
import { VoiceCustomizationShow } from "./voiceCustomization/VoiceCustomizationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Afroverse"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Investment"
          list={InvestmentList}
          edit={InvestmentEdit}
          create={InvestmentCreate}
          show={InvestmentShow}
        />
        <Resource
          name="MusicChallenge"
          list={MusicChallengeList}
          edit={MusicChallengeEdit}
          create={MusicChallengeCreate}
          show={MusicChallengeShow}
        />
        <Resource
          name="RecordLabel"
          list={RecordLabelList}
          edit={RecordLabelEdit}
          create={RecordLabelCreate}
          show={RecordLabelShow}
        />
        <Resource
          name="VirtualArtist"
          list={VirtualArtistList}
          edit={VirtualArtistEdit}
          create={VirtualArtistCreate}
          show={VirtualArtistShow}
        />
        <Resource
          name="AiStudio"
          list={AiStudioList}
          edit={AiStudioEdit}
          create={AiStudioCreate}
          show={AiStudioShow}
        />
        <Resource
          name="VoiceCustomization"
          list={VoiceCustomizationList}
          edit={VoiceCustomizationEdit}
          create={VoiceCustomizationCreate}
          show={VoiceCustomizationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
