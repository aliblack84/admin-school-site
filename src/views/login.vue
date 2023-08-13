<template>
<div style="" class="login-page">
  <div style="background-image: url('../../img/back.jpg');" class="	 bg-cover	 min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h1 style="font-family: parvas;font-size: 40px;" class="text-2xl font-semibold mb-4 text-center">ورود به پنل</h1>
      <br>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label style="font-family: parvas;font-size: 22px;" class="block font-semibold text-sm font-medium mb-1" for="username">نام کاربری</label>
        <div style="height: 10px;"></div>
          <input v-model="username" id="username" name="username" type="text" required
                 class="w-full p-2 border rounded border-gray-300">
        </div>
        <div class="mb-6">
          <label style="font-family: parvas; font-size: 22px;" class="block font-semibold text-sm font-medium mb-1" for="password">رمز عبور</label>
          <div style="height: 10px;"></div>

          <input v-model="password" id="password" name="password" type="password" required
                 class="w-full p-2 border rounded border-gray-300">
        </div>
        <br>
        <button @click="next()" style="font-family: parvas;font-size: 25px;" type="submit" class="w-full font-semibold bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          ورود
        </button>
      </form>
    </div>
  </div>
</div>
</template>
<style>

</style>
<script setup>
import router from '@/router';

const next =()=>{
  router.push('/tables')
}
</script>
