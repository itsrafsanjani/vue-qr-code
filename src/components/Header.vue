<template>
  <header class="p-4 mb-10 bg-blue-500">
    <div class="w-full flex justify-between items-center">
      <a href="/">
        <h1 class="text-xl font-bold text-white text-center md:text-left">
          QR Code Generator
        </h1>
      </a>
      <t-dropdown text="Color Mode">
        <div slot-scope="{ hide, blurHandler }">
          <button
            class="bg-white block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            role="menuitem"
            @click="updateTheme('light')"
          >
            Light
          </button>
          <button
            class="bg-white block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            role="menuitem"
            @click="updateTheme('dark')"
          >
            Dark
          </button>
        </div>
      </t-dropdown>
    </div>
  </header>
</template>

<script>
import { TDropdown } from "@variantjs/vue";
export default {
  components: {
    TDropdown,
  },
  created() {
    this.setThemeToLocalStorage();
  },

  methods: {
    setThemeToLocalStorage(changed) {
      if (!("theme" in localStorage)) {
        localStorage.theme = "light";
      }

      if (changed) {
        localStorage.theme = changed;
      }
    },
    updateTheme(name) {
      if (name == "dark") {
        console.log(name);
        document.documentElement.classList.add("dark");
        this.setThemeToLocalStorage("dark");
      } else {
        console.log(name);
        document.documentElement.classList.remove("dark");
        this.setThemeToLocalStorage("light");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
