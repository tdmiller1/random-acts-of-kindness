import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {  useInMemoryActs } from '@/hooks/useInMemoryActs';
import { RandomAct } from './home';

export default function ProgressTab() {
  const [acts, setActs] = useInMemoryActs();


  function handleOnChange(id: number, isChecked: boolean) {
    const oldAct = acts[id];
    if (oldAct !== undefined) {
      const copy = { ...acts };
      copy[id] = {
        id,
        title: oldAct.title,
        checked: isChecked,
      };
      setActs(copy);
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      {Object.entries(acts).map(([key, act]) => (
        <RandomAct key={act.id} act={act} onChange={handleOnChange} />
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
