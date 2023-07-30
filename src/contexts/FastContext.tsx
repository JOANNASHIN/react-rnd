
import React, { createContext, useCallback, useContext, useEffect, useRef, useState, useSyncExternalStore } from "react";


export default function createFastContext<Store>(initialState: Store) {
  //#region type

  type StoreSet = (value: Partial<Store>) => void;
  type UseStoreDataReturnType = ReturnType<typeof useStoreData>;
  type TCallback = () => void;

  interface UseStoreDataProps {
    get: () => Store;
    set: StoreSet;
    subscribe: (callback: TCallback) => TCallback;
  }
  //#endregion
    
  /**
   * 스토어 데이터
   */
  function useStoreData(): UseStoreDataProps {
    const store = useRef(initialState)

    const get = useCallback(() => store.current, []);

    const subscribers = useRef(new Set<TCallback>());

    const set = useCallback((value:  Partial<Store>) => {
      store.current = {
        ...store.current,
        ...value
      }

      subscribers.current.forEach((callback) => callback());
    }, []);

    const subscribe = useCallback((callback: TCallback) => {
      subscribers.current.add(callback);

      return () => {
        subscribers.current.delete(callback);
      }
    }, []);
    
    return {
      get,
      set,
      subscribe,
    };
  }


  /** 스토어 context */
  const StoreContext = createContext<null | UseStoreDataReturnType>(null);

  /** 스토어 context Provider 
   * - 데이터는 useStoreData- get, set, subscribers 
  */
  function Provider ({children} : {children: React.ReactNode}) {
    const store = useStoreData();

    return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    )
  }

  /**
   * 스토어 사용시에 부를 함수
   */
  function useStore<SelecterOutput>(
    selector: (store: Store) => SelecterOutput
  ): [
    SelecterOutput, 
    StoreSet
  ] {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error('Store not found');
    }

    //원래 이 방법을 밑에처럼 처리함
    // const [state, setState] = useState(store.get());

    // useEffect(() => {
    //   return store.subscribe(() => setState(store.get()))
    // }, [])

    const state = useSyncExternalStore(store.subscribe, () => selector(store.get()));
    
    return [
      state,
      store.set
    ]
  }

  return {
    Provider,
    useStore,
  }
}
