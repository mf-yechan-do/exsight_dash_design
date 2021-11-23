import { useMemo } from "react";
import { types, applySnapshot, Instance } from "mobx-state-tree";

let store;

const Store = types
  .model({
    datatype: types.string,
    sidebar: types.string,
    mode: types.string,
    isToggleOn: types.boolean,
    isToggleOn2: types.boolean,
    isToggleOn3: types.boolean,
    isToggleOn4: types.boolean,
    isToggleOn5: types.boolean,
    isToggleOn6: types.boolean
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
    const Toggle = (_isToggleOn: boolean) => {
      self.isToggleOn = _isToggleOn;
    };
    const Toggle2 = (_isToggleOn: boolean) => {
      self.isToggleOn2 = _isToggleOn;
    };
    const Toggle3 = (_isToggleOn: boolean) => {
      self.isToggleOn3 = _isToggleOn;
    };
    const Toggle4 = (_isToggleOn: boolean) => {
      self.isToggleOn4 = _isToggleOn;
    };
    const Toggle5 = (_isToggleOn: boolean) => {
      self.isToggleOn5 = _isToggleOn;
    };
    const Toggle6 = (_isToggleOn: boolean) => {
      self.isToggleOn6 = _isToggleOn;
    };
  

    return { onChangeSidebar,ChangeMode, DataType, Toggle,Toggle2,Toggle3,Toggle4,Toggle5,Toggle6};
  });

  export type IStore = Instance<typeof Store>
  
export function initializeStore(snapshot = null) {
  const _store = store ?? Store.create({
    datatype: "",
    mode: "home",
    sidebar: "open",
    isToggleOn: true,
    isToggleOn2: true,
    isToggleOn3: true,
    isToggleOn4: true,
    isToggleOn5: true,
    isToggleOn6: true
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
