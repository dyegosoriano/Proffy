import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/dyegoSoriano.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Dyego Soriano</Text>
          <Text style={styles.subject}>Física</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        obcaecati, voluptatum molestiae soluta similique modi earum aliquam
        labore nisi architecto debitis, ipsa expedita eveniet doloribus ipsam
        nam non doloremque. Fugiat.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>20,00</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem
