<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light" style="background-color: #e3f2fd;">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link to="/" tag="nav" class="navbar-brand" active-class="active" exact>Stock Trader</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/stocks">Stocks</router-link>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">End Day</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Save & Load
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Save</a>
              <a class="dropdown-item" href="#">Load</a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Funds</a>
          </li>

        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
