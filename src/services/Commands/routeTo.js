export function routeTo(route, ctx) {
    if (ctx) {
        ctx.$router.push(route).catch(err => {
            throw err
        });
    } else {
        this.$router.push(route).catch(err => {
            throw err
        });
    }
}