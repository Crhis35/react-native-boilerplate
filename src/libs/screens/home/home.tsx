import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { t } = useTranslation('common');

  return (
    <View style={style.container}>
      <View>
        <Text style={style.text}>HomeScreen</Text>
        <Button title={t('submit')} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignContent: 'center' },
  text: { textAlign: 'center' },
});
