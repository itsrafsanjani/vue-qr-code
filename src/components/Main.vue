<template>
  <main>
    <div
      class="flex flex-col-reverse align-center justify-center m-auto md:max-w-4xl p-10 md:flex-row"
    >
      <div class="w-full md:w-2/3 mr-24">
        <h1 class="text-3xl font-bold mb-5 md:text-4xl">QR Code Generator</h1>
        <p class="mb-4">
          QR Codes allow smartphone users to access your website link, mobile number or any type
          of code simply and quickly without typing them!
        </p>
        <p>
          Enter any link, number or text below to generate a QR Code and download the image.
        </p>

        <form @submit.prevent="handleFormSubmit" class="mt-4">
          <input
            v-model="form.text"
            id="text"
            name="text"
            type="text"
            placeholder="Enter anything"
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
      id="qrcode"
      class="max-w-5xl m-auto flex flex-col text-center align-center justify-center"
      :class="{ 'my-20': form.text }"
    >
      <div ref="qrcode">
        <vue-qrcode
          v-if="form.text"
          :value="form.text"
          :options="{ width: form.size }"
          class="flex items-center justify-center mx-auto"
          style="height: 100%; width: 100%;"
        ></vue-qrcode>
      </div>

      <button
        @click.prevent="download"
        v-if="form.text"
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded w-1/3 m-auto my-5"
      >
        Download
      </button>
    </div>
  </main>
</template>

<script>
import slugify from "slugify";
import VueQrcode from "@chenfengyuan/vue-qrcode";
export default {
  components: {
    VueQrcode,
  },
  data() {
    return {
      form: {
        text: "",
        size: "300",
      },
      qrcodeReady: false,
    };
  },

  methods: {
    handleFormSubmit() {
      const qrcode = document.getElementById("qrcode");
      if (qrcode) {
        qrcode.scrollIntoView({ behavior: "smooth" });
      }
    },

    download() {
      const filename = slugify(this.form.text.replace(/(^\w+:|^)\/\//, ""));
      const qrCode = this.$refs.qrcode.firstChild;
      if (qrCode) {
        const link = document.createElement("a");
        link.download = filename + ".png";
        link.href = qrCode.toDataURL();
        link.click();
        console.log(link);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
