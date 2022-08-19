<template>
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
</template>

<script>
export default {
  data() {
    return {
      form: {
        url: "",
        size: "300"
      },
    };
  },

  methods: {
    handleFormSubmit() {
      console.log(this.form);
    },
  },
};
</script>

<style lang="scss" scoped></style>
