<template>
  <pdf-viewer
    :pdf="pdf"
    :config="config"
    :page-number="2"
    :locale="locale"
    @after-created="afterCreated"
    @open="open"
    @pages-rendered="pagesRendered"
    file-name="Custom fileName"
    style="position: relative"
  >
    <template #footer>
      <div class="footer">
        <span>Footer</span>
      </div>
    </template>
  </pdf-viewer>
</template>

<script lang="ts">
import PdfViewer from "@/components/pdf-viewer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    PdfViewer,
  },
  data() {
    return {
      config: {
        // toolbar: {
        //   toolbarViewerLeft: {
        //     pageNumber: false,
        //   },
        // },
      },
      scale: "1",
      pdf: "/sample.pdf",
      locale: "en",
    };
  },
  methods: {
    afterCreated(pdfApp) {
      // window._pdfApp = pdfApp
      console.log("===***=== After created");
    },
    open() {
      console.log("===***=== Opened");
    },
    pagesRendered() {
      console.log("===***=== Pages rendered");
    },
  },
});
</script>

<style lang="scss" scoped>
$footer-height: 50px;

.footer {
  background: red;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: $footer-height;
}

::v-deep #outerContainer {
  height: calc(100% - #{$footer-height}) !important;
}
</style>
