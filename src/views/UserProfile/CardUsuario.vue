<script>
import Membro from "../../components/Membro.vue";

export default {
  data() {
    return {
      cardmembro: [
        {
          id: 1,
          name: "Blank",
          img: require("@/assets/images/profile/blank-profile-picture-.png")
        }
      ]
    };
  },
  components: {
    QrcMembro: Membro
  }
};
</script>

<style lang="scss">
#card-membro {
  padding: 10% 20%;
}

.card-membro-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -10px;
  margin-left: -10px;
  align-items: center;
}

.card-membro-section:first-child {
  z-index: -1;
}
</style>