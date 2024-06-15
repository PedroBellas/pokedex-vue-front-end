<template>
    <footer class="d-flex justify-center align-center">
      <span>
        Developed by

        <a href="https://www.linkedin.com/in/pedro-augusto-bellas-peres/" target="_blank" rel="noopener noreferrer">
          Pedro Bellas
        </a>
      </span>
    </footer>
</template>

<script>
export default {
  name: 'FooterPage',
};
</script>

<style lang="scss" scoped>
  footer {
    grid-area: footer;
    width: 100%;
    height: $footer-height;
    background: $primary-color;
    font-size: 1.125rem;
    color: #FFFFFF;

    a {
      color: #FFFFFF;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
