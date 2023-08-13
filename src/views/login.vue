<template>
<div style="" class="login-page">
  <div style="background-image: url('../../img/back.jpg');" class="	 bg-cover	 min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-4 text-center">ورورد</h1>
      <br>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1" for="username">نام کاربری</label>
          <input v-model="username" id="username" name="username" type="text" required
                 class="w-full p-2 border rounded border-gray-300">
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium mb-1" for="password">رمز عبور</label>
          <input v-model="password" id="password" name="password" type="password" required
                 class="w-full p-2 border rounded border-gray-300">
        </div>
        <br>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          ورود
        </button>
      </form>
    </div>
  </div>
</div>
</template>
<style>

</style>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // In a real application, you would perform authentication here
      // For this example, we'll just log the entered username and password
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    },
  },
};
</script>
