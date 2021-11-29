import { useMemo } from "react";
import { types, applySnapshot, Instance } from "mobx-state-tree";

let store;

const FilterId = types.model({
  name: types.string,
  id : types.boolean,
});

const Store = types
  .model({
    datatype: types.string,
    sidebar: types.boolean,
    menu: types.number,
    filter: types.array(FilterId),
    isToggleOn2: types.boolean,
    isToggleOn3: types.boolean,
    isToggleOn4: types.boolean,
    isToggleOn5: types.boolean,
    isToggleOn6: types.boolean
  })
  .actions((self) => {
    

    const onChangeSidebar = (_sidebar: boolean) => {
      self.sidebar = _sidebar;
    };
    const Changemenu = (_menu: number) => {
      self.menu = _menu;
    };
    const DataType = (_datatype: string) => {
      self.datatype = _datatype;
    };
    const setIdFilterBox = (_filterId: boolean) => {
      self.filter[0].id = (_filterId);
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
  

    return { onChangeSidebar,Changemenu, DataType, setIdFilterBox,Toggle2,Toggle3,Toggle4,Toggle5,Toggle6};
  });

  export type IStore = Instance<typeof Store>
  
export function initializeStore(snapshot = null) {
  const _store = store ?? Store.create({
    datatype: "",
    menu: 0,
    sidebar: true,
    filter: [{id:false,name:"name"},{id:false,name:"domain"}],
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
