import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

type RefreshFn = () => Promise<void> | void;

type RefreshContextType = {
  refreshing: boolean;
  triggerRefresh: () => Promise<void>;
  register: (key: string, fn: RefreshFn) => void;
  unregister: (key: string) => void;
};

const RefreshContext = createContext<RefreshContextType | undefined>(undefined);

export const RefreshProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [refreshing, setRefreshing] = useState(false);
  const registry = useRef<Map<string, RefreshFn>>(new Map());

  const register = useCallback((key: string, fn: RefreshFn) => {
    registry.current.set(key, fn);
  }, []);

  const unregister = useCallback((key: string) => {
    registry.current.delete(key);
  }, []);

  const triggerRefresh = useCallback(async () => {
    if (refreshing) return;
    setRefreshing(true);
    const fns = Array.from(registry.current.values());
    for (const fn of fns) {
      try { await Promise.resolve(fn()); } catch { }
    }
    setRefreshing(false);
  }, [refreshing]);

  const value = useMemo(() => ({ refreshing, triggerRefresh, register, unregister }), [refreshing, triggerRefresh, register, unregister]);

  return <RefreshContext.Provider value={value}>{children}</RefreshContext.Provider>;
};

export const useRefreshContext = () => {
  const ctx = useContext(RefreshContext);
  if (!ctx) throw new Error('useRefreshContext must be used within RefreshProvider');
  return ctx;
};
