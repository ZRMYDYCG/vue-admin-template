import { defineStore } from "pinia"

const useLayOutSettingStore = defineStore('layoutSettingStore', {
    state: () :any => {
        return {
            isFold: false
        }
    },
    actions: {
        changeFoldStatus() {
            this.isFold = !this.isFold
        }
    }
})

export default  useLayOutSettingStore
