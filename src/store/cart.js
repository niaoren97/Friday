import { http } from "@/utils";
import uuid from "uuid/v1";

export default {
  namespaced: true,
  state: {
    items: {},
  },
  mutations: {
    addItem(state, {item}) {
      if(!item.id) {
        item.id = uuid;
      }
    },
    removeItem(state, payload) {
      
    },
  },
  
}