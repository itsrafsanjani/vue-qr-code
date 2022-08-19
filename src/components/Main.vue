<template>
  <main>
    <div
      class="flex flex-col-reverse align-center justify-center m-auto md:max-w-4xl p-10 md:flex-row"
    >
      <div class="w-full md:w-2/3 mr-24">
        <h1 class="text-3xl font-bold mb-5 md:text-4xl">QR Code Generator</h1>
        <p class="mb-4">
          QR Codes allow smartphone users to access your website simply and
          quickly.
        </p>
        <p>
          Enter your URL below to generate a QR Code and download the image.
        </p>

        <form @submit.prevent="handleFormSubmit" class="mt-4">
          <input
            v-model="form.url"
            id="url"
            name="url"
            type="url"
            placeholder="Enter a URL"
            class="w-full border-2 border-gray-200 rounded py-2 px-3 text-grey-dark mr-2 focus:outline-blue-500 mb-5"
            required
          />

          <select
            v-model="form.size"
            id="size"
            name="size"
            class="w-full border-2 border-gray-200 rounded py-2 px-3 text-grey-dark mr-2 focus:outline-blue-500"
          >
            <option value="100">100x100</option>
            <option value="200">200x200</option>
            <option value="300">300x300</option>
            <option value="400">400x400</option>
            <option value="500">500x500</option>
            <option value="600">600x600</option>
            <option value="700">700x700</option>
          </select>
          <button
            class="bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out rounded w-full text-white py-3 px-4 mt-5"
            type="submit"
          >
            Generate QR Code
          </button>
        </form>
      </div>
      <div class="w-full md:w-1/3 self-center">
        <img
          class="w-1/2 m-auto mb-10 md:w-full"
          src="../assets/qr-code.svg"
          alt=""
        />
      </div>
    </div>

    <div
      class="max-w-5xl m-auto flex flex-col text-center align-center justify-center mt-20"
    >
      <div class="flex items-center justify-center" ref="qrcode"></div>
    </div>
  </main>
</template>

<script>
import * as QRCode from "easyqrcodejs";
export default {
  data() {
    return {
      form: {
        url: "",
        size: "300",
      },
    };
  },

  mounted() {
    // Options
    var options = {
      text: "https://github.com/itsrafsanjani",
    };

    // Create new QRCode Object
    new QRCode(this.$refs.qrcode, options);
  },

  methods: {
    handleFormSubmit() {
      console.log(this.form);
    },
  },
};
</script>

<style lang="scss" scoped></style>
