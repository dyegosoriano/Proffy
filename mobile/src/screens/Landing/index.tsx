import React, { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import api from '../../services/api'

import styles from './styles'

import studyIcon from '../../assets/images/icons/study.png'
import heartIcon from '../../assets/images/icons/heart.png'
import LandingImg from '../../assets/images/landing.png'
import giveClassesImg from '../../assets/images/icons/give-classes.png'

const Landing: React.FC = () => {
  const navigation = useNavigation()

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connection').then(response => {
      const { total } = response.data

      setTotalConnections(total)
    })
  }, [])

  function handleNavigationGiveClasses() {
    navigation.navigate('GiveClasses')
  }

  function handleNavigateStudyPages() {
    navigation.navigate('Study')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={LandingImg} />

      <Text style={styles.title}>
        Seja bem vindo,
        {'\n'}
        <Text style={styles.titleBold}>Oque deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateStudyPages}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigationGiveClasses}
        >
          <Image source={giveClassesImg} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas {'  '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing
