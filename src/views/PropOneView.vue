<template>
  <div class="prop1">
    <h1>Prop1 View</h1>
    <h2>User ID: {{ id }} and Name is: {{ name }}</h2>
  </div>
</template>

<script>
export default {
    name: 'PropOneView',
    props: {
        id: {
            type: Number,
            default: 0,
            required: true
        },
        name: {
            type: String,
            default: null,
            required: true
        }
    }
}
</script>
