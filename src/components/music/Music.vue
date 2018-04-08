<template>
    <div>
        <c-header bgc="saddlebrown">
           <h2 slot="title">Music</h2>
        </c-header>
        <c-footer bgc="saddlebrown"></c-footer>
    </div>
</template>
<script>
import cHeader from "@/components/common/Header";
import cFooter from "@/components/common/Footer";

export default {
  components: {
    cHeader,
    cFooter
  },
};
</script>
<style scoped>

</style>