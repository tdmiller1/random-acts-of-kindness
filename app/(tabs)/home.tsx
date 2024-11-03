import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Checkbox } from '@/components/Checkbox';
import { useEffect, useState } from 'react';
import { useInMemoryActs, RandomActType } from "@/hooks/useInMemoryActs";


export const RandomAct = ({
  act,
  onChange,
}: {
  act: RandomActType;
  onChange: (id: number, checked: boolean) => void
}) => {

  console.log(
    'RandomAct:', act
  );
 return (<ul>
    <Checkbox
      checked={act.checked}
      onChange={(e) => {
        console.log(e.target.checked);
        onChange(act.id, e.target.checked)
      }}
    />
    <ThemedText>{act.title}</ThemedText>
  </ul>);
}

export default function HomeTab() {
  const [acts, setActs] = useInMemoryActs();

  console.log(acts)


  function handleOnChange(id: number, isChecked: boolean){
    const oldAct = acts[id]
    if(oldAct !== undefined){
      const copy = {...acts}
      copy[id] = {
        id,
        title: oldAct.title,
        checked: isChecked
      }
      console.log("setActs", copy);
      setActs(copy);
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Oustanding Acts</ThemedText>
        {Object.entries(acts).map(([key, act]) => (
          <RandomAct key={act.id} act={act} onChange={handleOnChange} />
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
