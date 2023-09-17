import styled from 'styled-components/native'
import { colors } from '../../styles/colors'

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 24px;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primary};
`

export const ProfileResume = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 16px 0px;
`

export const ProfileImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 40px;
`

export const GreetingText = styled.Text`
  margin-top: 2px;
  font-size: 40px;
  color: ${colors.primary};
`

export const Name = styled.Text`
  font-weight: bold;
  font-size: 40px;
  color: ${colors.primary};
`

export const TodayText = styled.Text`
  margin-top: 2px;
  font-size: 16px;
  color: ${colors.primary};
`

export const BoldText = styled.Text`
  font-weight: bold;
  color: ${colors.gray.dark};
`

export const ResumeInformations = styled.View`
  margin-top: 58px;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`

export const TotalContainer = styled.View`
  background-color: ${colors.primary};
  flex: 1;
  border-radius: 8px;
  padding: 12px 18px;
  height: 132px;
`

export const TotalText = styled.Text`
  margin-top: 14px;
  color: #d8d8d8;
  font-size: 12px;
  font-weight: 400;
`

export const Summary = styled.Text`
  color: #d8d8d8;
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
`
export const ProjectsInformations = styled.View`
  justify-content: space-between;
`

export const ProjectResumeContainer = styled.View`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #f9f9ff;
  width: 160px;
  height: 60px;
`

export const ProjectResumeTitle = styled.Text`
  color: #d8d8d8;
  font-size: 10px;
  font-weight: 400;
`

export const ProjectResumeInformation = styled.Text`
  color: #181059;
  font-size: 10px;
  font-weight: 700;
`

export const CreateNewHourContainer = styled.View`
  background-color: ${colors.primary};
  margin-top: 40px;
  border-radius: 8px;
  padding: 12px 18px;
  justify-content: space-between;
  flex-direction: row;
`

export const TitleCreateHour = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 16px;
`

export const SubTitleCreateHour = styled.Text`
  color: ${colors.white};
  font-size: 10px;
  font-weight: 400;
`

export const ButtonGoCreateNewHour = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #f6c300;
`
