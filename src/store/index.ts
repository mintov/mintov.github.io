
import { defineStore } from 'pinia'
 
interface State { }
 
export const useUserStore = defineStore('main', {
  state: ():State => ({ }),
  //类似于computed
  getters: { },
  //类似于methods
  actions: { }
})
