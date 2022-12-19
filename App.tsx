import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import vcl, {
  VCLInitializationDescriptor,
  VCLEnvironment,
  VCLEnvTypes,
} from '@velocitycareerlabs/vcl-react-native';

const environment: VCLEnvironment = {
  value: VCLEnvTypes.STAGING,
};

export default function App() {
  useEffect(() => {
    const initializationDescriptor: VCLInitializationDescriptor = {
      environment: environment,
      cacheSequence: 0,
    };

    async function test() {
      try {
        const response = await vcl.initialize(initializationDescriptor);
        console.log({response});
      } catch (error) {
        console.log('error', error);
      }
    }

    test();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Test SDK Velocity!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
