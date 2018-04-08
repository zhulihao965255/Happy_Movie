<template>
    <div>
        <c-header bgc="olive">
           <h2 slot="title">Book</h2>
        </c-header>
        <c-footer bgc="olive"></c-footer>
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