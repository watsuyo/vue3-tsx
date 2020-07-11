import { defineComponent } from '@vue/composition-api'
import HelloWorld from '../components/HelloWorld'
export default defineComponent({
  name: "App",

  components: {
    HelloWorld
  },

  setup() {
    return () => (
      <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      </div>
    )
  }
})
