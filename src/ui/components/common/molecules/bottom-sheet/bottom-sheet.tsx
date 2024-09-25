import React from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { useReducedMotion } from 'react-native-reanimated';

import { BottomSheetProps } from './bottom-sheet.model';

export default function BottomSheet(props: BottomSheetProps) {
  const {
    children,
    height,
    show,
    onClose,
    enablePanDownToClose,
    isScrollable,
    hasBackdrop = true,
    enableDismissOnClose = true,
  } = props;
  const reducedMotion = useReducedMotion();

  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const onCloseModal = React.useCallback(() => {
    onClose?.();
    bottomSheetModalRef.current?.close();
  }, [onClose]);

  const handleSheetChanges = React.useCallback(
    (index: number) => {
      if (index === -1) {
        onCloseModal();
      }
    },
    [onCloseModal],
  );

  React.useEffect(() => {
    if (show) {
      bottomSheetModalRef.current?.present();
    } else {
      onCloseModal();
    }
  }, [show, onCloseModal]);

  const renderBackdrop = React.useCallback(
    (attr: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...attr}
        onPress={onCloseModal}
        opacity={0.9}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [onCloseModal],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={enablePanDownToClose}
      enableDismissOnClose={enableDismissOnClose}
      snapPoints={[height]}
      index={show ? 0 : -1}
      onDismiss={onCloseModal}
      animateOnMount={!reducedMotion}
      backdropComponent={hasBackdrop ? renderBackdrop : undefined}
    >
      {isScrollable ? <ScrollView>{children}</ScrollView> : children}
    </BottomSheetModal>
  );
}
