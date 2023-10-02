import {View, StyleSheet, Image} from "react-native"

import Text from "./Text"
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    padding: theme.spacings.contentPadding
  },
  image: {
    marginRight: theme.spacings.medium,
    width: 50,
    height: 50,
    borderRadius: theme.base.borderRadius
  },
  name: {
    marginBottom: theme.spacings.small,
    fontWeight: theme.fontWeights.bold,
  },
  description: {
    marginBottom: theme.spacings.small
  },
  tag: {
    alignItems: 'flex-start',
    borderRadius: theme.base.borderRadius,
    backgroundColor: theme.colors.primary,
    padding: theme.spacings.buttonPadding,
    marginBottom: theme.spacings.medium,
  },
  content: {
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
  },
  repoStats: {
    display: 'flex',
    flexDirection: 'row',
  },
  repoStat: {
    marginRight: theme.spacings.large,
  }
})

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

  const formatCount = (count) => {
    if (count < 1000) return count
    return (count / 1000).toFixed(0) + 'k'
  }

  const repoStatItems = [
    {stargazersCount: {
      label: 'Stars',
      value: stargazersCount
    }},
    {forksCount: {
      label: 'Forks',
      value: forksCount
    }},
    {reviewCount: {
      label: 'Reviews',
      value: reviewCount
    }},
    {ratingAverage: {
      label: 'Rating',
      value: ratingAverage
    }}
  ]

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: ownerAvatarUrl
          }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.tag}>
          <Text color="white">{language}</Text>
        </View>
        <View style={styles.repoStats}>
          {repoStatItems.map((stat, index) => {
            const key = Object.keys(stat)[0]
            const {label, value} = stat[key]

            return (
              <View key={index} style={styles.repoStat}>
                <Text fontWeight="bold">{formatCount(value)}</Text>
                <Text>{label}</Text>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem
