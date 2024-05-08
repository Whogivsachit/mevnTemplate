<template>
    <appLayout title="indexPage">
        <div class="container mx-auto">
            <div class="flex flex-col py-16 text-center text-white">
                <h1>Welcome to the index page.</h1>
                <p>{{ res }}</p>
            </div>
        </div>
    </appLayout>
</template>


<script>
import appLayout from '@/layouts/appLayout.vue';
import devService from '@/services/devService';

export default {
    name: 'indexPage',
    components: {
        appLayout,
    },
    data() {
        return {
            res: '',
        }
    },

    async mounted() {
        const response = await devService.heartbeat();
        this.res = response.message;
    },

}
</script>