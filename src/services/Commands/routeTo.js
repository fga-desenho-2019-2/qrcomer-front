export function routeTo(route) {
    this.$router.push(route).catch(err => {
        throw err
    });
}