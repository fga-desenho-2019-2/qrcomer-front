<template>
  <v-content class="user-page d-flex flex-column">
  <Navbar />
    <div>
      <v-container class="pt-0" style="overflow: hidden;">
          <div class="user-img" style="z-index: 0">
                <div class="card-img">
                    <img :src="image" alt="">
                </div>
            </div>
        <v-row v-if="user" class="user-data">

          <v-col cols="12" md="6" class="user-item">
            <p class="label">Email:</p>
            <p class="value">{{userData.email || "--"}}</p>
          </v-col>
          
          <v-col cols="12" md="6" class="user-item">
            <p class="label">CPF:</p>
            <p class="value">{{userData.cpf || "--"}}</p>
          </v-col>

          <v-col cols="12" md="6" class="user-item">
            <p class="label">Nome:</p>
            <p class="value">{{userData.first_name || "--"}}</p>
          </v-col>
          
          <v-col cols="12" md="6" class="user-item">
            <p class="label">Sobrenome:</p>
            <p class="value">{{userData.last_name || "--"}}</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from '../components/Navbar';
import User from '../services/userService';

let user = new User();

export default {
  components: {
    Navbar
  },
  data() {
    return {
      activeBtn: 1,
      showNav: true,
      dialog: false,
      userData: {},
      image: require("@/assets/images/profile/blank-profile-picture-.png"),
    };
  },
  props: {
    user: {
      required: true
    },
  },
  computed: mapGetters({
    userCpf: "auth/userCpf"
  }),
  async created() {
    let response = await user.getUser(this.userCpf)
    this.userData = response.data
    if (this.userData.image) {
        this.image = this.userData.image
    } 
  }
};
</script>

<style lang="scss">
.user-page .v-item-group.v-bottom-navigation .v-btn {
  max-width: none;
  width: 100%;
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
}

.card {
  width: auto;
  border-bottom: solid 1px black;
  padding-bottom: 8px;
  padding-top: 8px;
  margin: auto;
}

.user-data {
    .user-item {
        border-bottom: 1px solid #e18855;
        padding: 10px;
        .label {
            color: $c-gray60;
            font-size: 16px;
            margin-bottom: 0;
        }

        .value {
            font-size: 14px;
            margin-bottom: 0;
            
        }
    }
}
.user-img {
    margin: 0 -15px;

    .card-img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 280px;
        background: linear-gradient(to bottom right, transparent 50%, #efefef 40%), linear-gradient(-40deg, #eb4476, #e18855) #efefef;

        img {
            display: flex;
            height: 250px;
            object-fit: cover;
            width: 250px;
            border-radius: 0 30px;
            box-shadow: 0 2px 7px -2px $c-gray60;
        }
    }
}
</style>