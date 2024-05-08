<template>
    <nav class="h-16 bg-foreground">
        <div class="container mx-auto px-4 md:px-0">
            <div class="flex flex-wrap items-center justify-between mx-auto">
                <a href="#" class="flex items-center h-16 self-center text-3xl font-semibold text-white">Whogi</a>
                <button id="dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" @click="toggleDropdown">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto text-xl z-10" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-foreground">
                        <router-link to="/" active-class="active" class="text-muted 'block py-2 pl-3 pr-4 rounded hover:text-accent md:p-0" >Home</router-link>
                    </ul>
                </div>
            </div>
        </div>
    </nav>    
</template>

<script>
export default {
    data() {
        return {
            dropdown: false,
        };
    },

    methods: {
        toggleDropdown() {
            this.dropdown = !this.dropdown;
            const navbar = document.getElementById('navbar-default');
            this.dropdown ? navbar.classList.toggle('hidden') : navbar.classList.toggle('hidden')
        }
    },
    
}
</script>

<style scoped>
.active {
    color: #FA4033;
}
</style>