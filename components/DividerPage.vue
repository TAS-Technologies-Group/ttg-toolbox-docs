<script setup lang="ts">
const props = defineProps({
  top: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="container-content">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right" :style="{ top: props.top ? `${props.top}px` : '0px' }">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
:root {
  --vt-c-green: #42b883;
  --vt-c-green-light: #42d392;
  --vt-c-green-dark: #33a06f;
  --vt-c-yellow: #ffc517;
  --vt-c-yellow-light: #ffe417;
  --vt-c-yellow-dark: #e0ad15;
  --vt-c-red: #b8272c;
}

.container-content {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  gap: 20px;
}
.right,
.left {
  flex: 1;
  padding: 1rem;
  min-width: 300px;
}
.right {
  align-self: flex-start;
  position: sticky;
  height: max-content;
}

ol.order-list-I {
  list-style: none;
  counter-reset: li;
  padding-left: 0px;
}

ol.order-list-I > li {
  counter-increment: li;
}

ol.order-list-I > li::before {
  display: inline-block;
  content: counter(li);
  color: var(--vp-c-brand-dark);
  border: 1px var(--vp-c-brand-dark) solid;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  margin-right: 8px;
  background-color: var(--vp-c-brand-lightest);
}

ol.order-list-I > li > ol {
  list-style: none;
  counter-reset: li;
  margin-left: 10px;
}

ol.order-list-I > li > ol > li {
  counter-increment: li;
}

ol.order-list-I > li > ol > li::before {
  display: inline-block;
  content: counter(li);
  color: var(--vp-c-brand);
  border: 1px var(--vp-c-brand) solid;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  margin-right: 8px;
  background-color: var(--vp-c-brand-dimm);
}

ol.order-list-I ol ol {
  list-style: none;
  counter-reset: li;
  margin-left: 10px;
}

ol.order-list-I ol li {
  counter-increment: li;
}

ol.order-list-I ol li::before {
  display: inline-block;
  content: counter(li);
  border: 1px solid;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  margin-right: 8px;
}

div[icon-type] > .custom-block-title {
  display: flex;
  align-items: center;
}

div[icon-type*="tip"] > .custom-block-title::before {
  content: "i";
  margin-right: 5px;
  font-size: 16px;
}

div[icon-type*="info"] > .custom-block-title::before {
  content: "ⓘ";
  margin-right: 5px;
  font-size: 20px;
  color: inherit;
}

div[icon-type*="warning"] > .custom-block-title::before {
  content: "⚠";
  margin-right: 5px;
  font-size: 20px;
  color: inherit;
}

div[icon-type*="video"] > .custom-block-title::before {
  content: "⏵";
  font-size: 20px;
  color: inherit;
  margin-right: 5px;
}

div[icon-type*="danger"] > .custom-block-title::before {
  content: "!";
  font-size: 20px;
  color: inherit;
  margin-right: 5px;
}

.info.custom-block[icon-type*="bordered"] {
  border: 1px solid var(--vt-c-green);
}

.info.custom-block[icon-type*="bordered"] > .custom-block-title::before {
  color: var(--vt-c-green);
}

.warning.custom-block[icon-type*="bordered"] {
  border: 1px solid var(--vt-c-yellow);
}

.warning.custom-block[icon-type*="bordered"] > .custom-block-title::before {
  color: var(--vt-c-yellow);
}

.danger.custom-block[icon-type*="bordered"] {
  border: 1px solid var(--vt-c-red);
}

.danger.custom-block[icon-type*="bordered"] > .custom-block-title::before {
  color: var(--vt-c-red);
}
</style>
