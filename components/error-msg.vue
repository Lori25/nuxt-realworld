<template>
  <div>
    <ul class="error-messages">
      <template v-for="(messages, name) in errors">
        <li v-for="(msg, index) in messages" :key="index">
          {{ name }} {{ msg }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    errors: Array
  }
}
</script>
