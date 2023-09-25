import {View, StyleSheet, Image} from "react-native"

import Text from "./Text"
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#f1f1f1',
    padding: theme.spacings.contentPadding
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: theme.base.borderRadius
  },
  tag: {
    alignItems: 'flex-start',
    borderRadius: theme.base.borderRadius,
    backgroundColor: theme.colors.primary,
    padding: theme.spacings.buttonPadding
  },
  content: {
    alignItems: 'flex-start'
  }
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  ownerAvatarUrl
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={ownerAvatarUrl}
        />
      </View>
      <View style={styles.content}>
        <Text fontWeight="bold">{fullName}</Text>
        <Text>{description}</Text>
        <Text style={styles.tag} color="white">{language}</Text>
        <Text>Stars: {stargazersCount}</Text>
        <Text>Forks: {forksCount}</Text>
        <Text>Reviews: {reviewCount}</Text>
        <Text>Rating: {ratingAverage}</Text>
      </View>
    </View>
  )
}

export default RepositoryItem
