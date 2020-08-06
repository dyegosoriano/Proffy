import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

import studyIcon from '../../assets/images/icons/study.png'
import heartIcon from '../../assets/images/icons/heart.png'
import LandingImg from '../../assets/images/landing.png'
import giveClassesImg from '../../assets/images/icons/give-classes.png'

const Landing: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={LandingImg} />

      <Text style={styles.title}>
        Seja bem vindo,
        {'\n'}
        <Text style={styles.titleBold}>Oque deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesImg} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas {'  '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing
