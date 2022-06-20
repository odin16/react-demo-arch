import { createContext, FC, useContext, useMemo } from 'react';
import { StoreClass, StoreFactory } from './types';

interface Props {
  stores: (StoreClass | StoreFactory)[];
  children?: React.ReactNode;
}

let globalStores = new Map<any, any>();
const storeContext = createContext<typeof globalStores>(globalStores);

export const StoreProvider: FC<Props> = ({ children, stores }) => {
  const parentContext = useContext(storeContext);

  const context = useMemo(() => {
    if (!stores.length) return parentContext;

    const container = new Map();

    stores.forEach(store => {
      let instance;

      try {
        instance = (store as StoreFactory)();
      } catch (err) {
        if ((err as any)?.message.includes("cannot be invoked without 'new'")) {
          instance = new (store as StoreClass)();
        } else {
          throw err;
        }
      }

      container.set(store, instance);
    });

    return (globalStores = new Map([...parentContext, ...container]));
  }, [stores]);

  return (
    <storeContext.Provider value={context}>{children}</storeContext.Provider>
  );
};

export function useStore<T>(identifier: StoreClass<T>): T {
  const context = useContext(storeContext);
  return context.get(identifier);
}

export function getStore<T>(identifier: StoreClass<T>): T {
  return globalStores.get(identifier);
}
