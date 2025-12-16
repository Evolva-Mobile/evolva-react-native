import React, { useEffect } from 'react';
import { RefreshControl, ScrollView, ScrollViewProps } from 'react-native';
import { useRefreshContext } from '../layout/RefreshProvider';

type Props = ScrollViewProps & {
  refreshKey: string;
  onRefreshRequest?: () => Promise<void> | void;
};

export const RefreshableScrollView: React.FC<Props> = ({ refreshKey, onRefreshRequest, children, ...rest }) => {
  const { refreshing, triggerRefresh, register, unregister } = useRefreshContext();

  useEffect(() => {
    if (onRefreshRequest) register(refreshKey, onRefreshRequest);
    return () => unregister(refreshKey);
  }, [refreshKey, onRefreshRequest, register, unregister]);

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={triggerRefresh} />} {...rest}>
      {children}
    </ScrollView>
  );
};
