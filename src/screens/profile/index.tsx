import { Text, View } from "react-native";
import {
  Container,
  Name,
  ProfileImage,
  ProfileResume,
  GreetingText,
  Title,
  TodayText,
  ResumeInformations,
  TotalContainer,
  TotalText,
  Summary,
  ProjectResumeContainer,
  ProjectsInformations,
  ProjectResumeTitle,
  ProjectResumeInformation,
  CreateNewHourContainer,
  TitleCreateHour,
  SubTitleCreateHour,
  ButtonGoCreateNewHour,
} from "./styles";

import { AntDesign } from "@expo/vector-icons";

import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { texts } from "./content/texts";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export const ProfileScreen = () => {
  const { language } = useLanguage();
  const actualDate = new Date().toLocaleDateString(
    language === "pt" ? "pt-BR" : "en-US",
    {
      weekday: "long",
    }
  );

  return (
    <Container>
      <Title>{texts[language].tabTitle}</Title>

      <ProfileResume>
        <View>
          <GreetingText>{texts[language].greeting}</GreetingText>
          <Name>Kayo</Name>
          <TodayText>{capitalizeFirstLetter(actualDate)}</TodayText>
        </View>
        <ProfileImage source={{ uri: "https://github.com/oyaksaile.png" }} />
      </ProfileResume>

      <ResumeInformations>
        <TotalContainer>
          <Ionicons name="md-wallet" size={42} color="white" />
          <TotalText>Total Recebido</TotalText>
          <Summary>R$ 44.000</Summary>
        </TotalContainer>

        <ProjectsInformations>
          <ProjectResumeContainer>
            <ProjectResumeTitle>
              <SimpleLineIcons name="cloud-download" size={24} color="black" />
            </ProjectResumeTitle>
            <ProjectResumeInformation>
              100+ Pdfs Gerados
            </ProjectResumeInformation>
          </ProjectResumeContainer>

          <ProjectResumeContainer>
            <ProjectResumeTitle>Assinatura</ProjectResumeTitle>
            <ProjectResumeInformation>GRÁTIS</ProjectResumeInformation>
          </ProjectResumeContainer>
        </ProjectsInformations>
      </ResumeInformations>

      <CreateNewHourContainer>
        <View>
          <TitleCreateHour>Cadastrar horas</TitleCreateHour>
          <SubTitleCreateHour>
            {`Deseja cadastrar mais horas \ntrabalhadas?`}
          </SubTitleCreateHour>
        </View>

        <View>
          <ButtonGoCreateNewHour>
            <AntDesign name="arrowright" size={24} color="white" />
          </ButtonGoCreateNewHour>
        </View>
      </CreateNewHourContainer>
    </Container>
  );
};
