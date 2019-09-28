<template>
    <v-footer 
        class="mt-auto"
        min-height="56"
        id="qrc-footer">
        <p class="mb-0">© QRComer. Todos os direitos reservados</p>
        <div class="flex-grow-1"></div>
        <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
</template>

<style lang="scss">
#qrc-footer {
    background: linear-gradient(135deg, #eb4476, #e18855);
    color: $c-white;
}
</style>