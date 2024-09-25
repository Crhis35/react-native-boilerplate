import React from 'react';

export interface BottomSheetProps {
  height: string;
  show?: boolean;
  children: React.ReactNode;
  onClose?(): void;
  enablePanDownToClose?: boolean;
  isScrollable?: boolean;
  hasBackdrop?: boolean;
  enableDismissOnClose?: boolean;
  libBottomSheetBackgroundColor?: string;
}
