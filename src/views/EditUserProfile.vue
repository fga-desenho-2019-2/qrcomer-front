<template>
  <v-content class="edit-user-page d-flex flex-column">
    <Navbar />
    <div>
      <v-form ref="form">
        <v-container style="overflow: hidden;" class="pt-0">
            <div class="user-img" style="z-index: 0">
                <div class="card-img">
                    <img :src="image" alt="">
                </div>
                <v-btn 
                    large
                    id="user-file-img"
                    icon>
                    <v-icon>mdi-image-edit</v-icon>
                    <input type="file"  @change="filePreview">
                </v-btn>
                
            </div>
          <v-row>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field v-model="userData.email" label="E-mail" disabled color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field v-model="userData.cpf" label="CPF" disabled color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field v-model="userData.first_name" label="Nome" required color="#e18855"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field v-model="userData.last_name" label="Sobrenome" required color="#e18855"></v-text-field>
            </v-col>

          </v-row>
        </v-container>
      </v-form>
      <v-bottom-navigation color="white">
        <v-btn @click="validate">
          <font color="white">
            <strong>CONFIRMAR</strong>
          </font>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "../components/Navbar";
import User from '../services/userService';
import { validationUtil } from "../utils/ValidationUtils";
import { routeTo } from "../services/context";

let user = new User();

export default {
  components: {
    Navbar
  },
  data: () => ({
    userData: {},
    valid: true,
    udateImage: false,
    nameRules: [v => !!v || "Campo obrigatório"],
    emailRules: [
      v => !!v || "Campo obrigatório",
      v => /.+@.+\..+/.test(v) || "E-mail deve ser válido"
    ],
    passwordRules: [
      v => !!v || "Campo obrigatório",
      v => (v && v.length >= 8) || "Senha deve ser maior do que 8 caracteres"
    ],
    telephoneRules: [v => !!v || "Campo obrigatório"],
    cpfRules: [v => !!v || "Campo obrigatório"],
    image: require("@/assets/images/profile/blank-profile-picture-.png"),
  }),
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        let body = {
            cpf: validationUtil.cleanMaskCpf(this.userData.cpf),
            email: this.userData.email,
            first_name: this.userData.first_name,
            last_name: this.userData.last_name
        };
        let response = await user.editUser(body.cpf,body);
        if (this.updateImage) {
            const image2base64 = require('image-to-base64');
            image2base64(this.image)
                .then(async result => {
                        await user.editUserImage({
                            cpf: validationUtil.cleanMaskCpf(this.userData.cpf),
                            image: result
                        });
                }).catch(error => {
                    alert(error);
                })
        }
        if (response.status >= 400) {
            this.errors = response.data;
            return;
        } else {
            routeTo('/usuario',this);
        }
      }
    },
    filePreview(e) {
      const file = e.target.files[0];
      this.image = URL.createObjectURL(file);
      this.updateImage = true;
    }
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
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca|Palanquin:100,300,400,500,700&display=swap");

.edit-user-page .v-item-group.v-bottom-navigation .v-btn {
  max-width: none;
  width: 100%;
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
}

.v-text-field {
  color: #eb4476;
  font-family: "Palanquin", sans-serif;
}

.user-img {
    margin: 0 -15px;
    position: relative;

    .card-img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 280px;
        background: linear-gradient(to bottom right, transparent 50%, #efefef 40%), linear-gradient(-40deg, #eb4476, #e18855) #efefef;

        img {
            display: flex;
            height: 250px;
            width: 250px;
            object-fit: cover;
            border-radius: 0 30px;
            box-shadow: 0 2px 7px -2px $c-gray60;
        }
    }

    #user-file-img {
        position: absolute;
        left: 50%;
        bottom: -7px;
        transform: translateX(-50%);
        background: $main-color;
        color: $c-white;
        box-shadow: 0px 2px 7px -2px $c-gray60;

        input {
            opacity: 0;
            position: absolute;
            left: 0;
            top: -7px;
            width: 100%;
            height: 38px;
        }
    }
}
</style>