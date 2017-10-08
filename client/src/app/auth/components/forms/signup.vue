<template>
  <div class="well">
    <el-form ref="form">
      <el-form-item label="Name">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="E-mail">
        <el-input v-model="email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
      <el-button @click="submit">Login</el-button>
    </el-form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    /**
    * Component's local state
    */
    data() {
      return {};
    },
    methods: {
      /**
      * Map the actions from Vuex to this component.
      * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
      */
      ...mapActions(['attemptSignUp', 'setMessage']),

      /**
      * Handle form's submit event
      */
      submit() {
        const {name, email, password } = this // http://wesbos.com/destructuring-objects/
        this.attemptSignUp({name, email, password }) // this is a Vuex action
          .then(() => {
            this.setMessage({ type: 'error', message: [] }) // this is a Vuex action
            this.$router.push({ name: 'dashboard.index' })
          })
      }
      /**
      * Reset component's local state
      */
    }
  }
</script>
