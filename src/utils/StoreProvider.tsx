import hash from 'object-hash';
import { createContext, FC, useContext } from 'react';
import { Constructor } from './types';

interface StoreContext {
  [store: string]: any;
}

interface Props {
  stores: Constructor[];
}

const storeContext = createContext<StoreContext>({});

export const StoreProvider: FC<Props> = ({ children, stores }) => {
  const parentContext = useContext(storeContext);
  const context: StoreContext = stores.reduce(
    (stores, store) => ({ ...stores, [hash(store)]: new store() }),
    {},
  );

  return (
    <storeContext.Provider value={{ ...parentContext, ...context }}>
      {children}
    </storeContext.Provider>
  );
};

export function useStore<T>(store: Constructor<T>): T {
  const context = useContext(storeContext);
  return context[hash(store) as any];
}
