<template>
    <v-footer 
        class="mt-auto"
        min-height="56"
        id="qrc-footer">
        <v-container>
          <p class="mb-0">© QRComer {{ new Date().getFullYear() }}. Todos os direitos reservados</p>
            <div class="flex-grow-1"></div>
        </v-container>
    </v-footer>
</template>

<style lang="scss">
#qrc-footer {
    background: linear-gradient(135deg, #eb4476, #e18855);
    color: $c-white;
}
</style>