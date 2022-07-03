<template>
  <div class="test4">
    <h1>Test #4</h1>
    <p>{{ $route.params }}</p>
    <p>{{ $route.query }}</p>
    <p>{{ $route.params.slug }}</p>
    <p>{{ $route.query.myname }}</p>
    <hr/>
    <h2>Named View Display Below</h2>
  </div>
</template>
