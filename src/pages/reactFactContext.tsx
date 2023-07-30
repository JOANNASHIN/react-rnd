/**
 * 참고
 * https://www.youtube.com/watch?v=ZKlXqrcBx88
 */
import React, { createContext, useCallback, useContext, useEffect, useRef, useState, useSyncExternalStore } from "react";

//#region type
interface Store {
  first: string;
  last: string;
}

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
  const store = useRef({
    first: "",
    last: "",
  })

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

const TextInput = ({ value }: { value: "first" | "last" }) => {
  const [fieldValue, setStore] = useStore((store) => store[value]);

  return (
    <div className="field">
      {value}: <input
        value={fieldValue}
        onChange={e => setStore({ [value]: e.target.value })}
      />
    </div>
  );
};

const Display = ({ value }: { value: "first" | "last" }) => {
  const [fieldValue] = useStore((store) => store[value]);
  return (
    <div className="value">
      {value}: {fieldValue}
    </div>
  );
};

const FormContainer = () => {
  return (
    <div className="container">
      <h5>FormContainer</h5>
      <TextInput value="first" />
      <TextInput value="last" />
    </div>
  );
};

const DisplayContainer = () => {
  return (
    <div className="container">
      <h5>DisplayContainer</h5>
      <Display value="first" />
      <Display value="last" />
    </div>
  );
};

const ContentContainer = () => {
  return (
    <div className="container">
      <h5>ContentContainer</h5>
      <FormContainer />
      <DisplayContainer />
    </div>
  );
};

function App() {
  return (
    <Provider>
      <div className="container">
        <h5>App</h5>
        <ContentContainer />
      </div>
    </Provider>
  );
}

export default App;
