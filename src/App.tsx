import React from 'react';
import { StyleSheet } from 'react-native';

import BootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { appConfig } from 'config/app-config';
import { ReactQueryProvider } from 'libs/shared/providers/query-client';
import { ReduxProvider } from 'libs/shared/providers/redux';

import ApplicationNavigator from 'libs/navigation/application';

import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import I18nProvider from 'libs/shared/providers/i18n/i18n';

if (process.env.NODE_ENV !== 'production') {
  console.log({ appConfig, env: process.env });
}

export default function App() {
  React.useEffect(() => {
    (async () => {
      try {
        await BootSplash.hide({ fade: true });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <I18nProvider>
          <GestureHandlerRootView style={styles.rootView}>
            <BottomSheetModalProvider>
              <ApplicationNavigator />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </I18nProvider>
      </ReduxProvider>
    </ReactQueryProvider>
  );
}

const styles = StyleSheet.create({
  rootView: { flex: 1 },
});
