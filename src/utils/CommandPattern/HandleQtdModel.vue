<script>
export default {
  data() {
    return {
      qtd: this.ammount
    };
  },
  props: {
    name: {
      required: true,
      type: String
    },
    ammount: {
      default: 1,
      type: Number
    }
  }
};
</script>