<template>
    <div>
        <c-header bgc="forestgreen">
           <h2 slot="title">Movie</h2>
        </c-header>
        <c-footer bgc="forestgreen"></c-footer>
    </div>
</template>
<script>
import cHeader from "@/components/common/Header";
import cFooter from "@/components/common/Footer";

export default {
  components: {
    cHeader,
    cFooter
  }
};
</script>
<style scoped>
</style>
