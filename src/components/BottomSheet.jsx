import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import React, {useCallback} from 'react';
import {Portal} from '@gorhom/portal';

const Sheet = React.forwardRef((props, ref) => {
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <Portal>
      <BottomSheet
        index={-1}
        ref={ref}
        handleIndicatorStyle={{
          width: '15%',
          backgroundColor: 'gray',
        }}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: '#000000',
        }}
        keyboardBlurBehavior="restore"
        {...props}></BottomSheet>
    </Portal>
  );
});

export default Sheet;
