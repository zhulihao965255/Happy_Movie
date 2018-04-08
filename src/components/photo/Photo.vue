<template>
    <div>
        <c-header bgc="#0066CC">
           <h2 slot="title">Photo</h2>
        </c-header>
        <c-footer bgc="#0066CC"></c-footer>
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