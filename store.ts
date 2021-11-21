import { useMemo } from "react";
import { types, applySnapshot, Instance } from "mobx-state-tree";

let store;

const Store = types
  .model({
    datatype: types.string,
    sidebar: types.string,
    mode: types.string
  })
  .actions((self) => {
    

    const onChangeSidebar = (_sidebar: string) => {
      self.sidebar = _sidebar;
    };
    const ChangeMode = (_mode: string) => {
      self.mode = _mode;
    };
    const DataType = (_datatype: string) => {
      self.datatype = _datatype;
    };
  

    return { onChangeSidebar,ChangeMode, DataType};
  });

  export type IStore = Instance<typeof Store>
  
export function initializeStore(snapshot = null) {
  const _store = store ?? Store.create({
    datatype: "",
    mode: "home",
    sidebar: "open",
    });

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return store;
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
