<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header"><h4>Editar Marca</h4></div>
                    <div class="card-body">
                        <form @submit.prevent="update()">
                            <div class="row">
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                        <label>Nombre</label>
                                        <input type="text" class="form-control" v-model="form.name" required>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Edit",
    data: () => ({
        form: {
            name: ''
        }
    }),
    mounted () {
        this.getBrand()
    },
    methods: {
        async getBrand() {
            const id = this.$route.params.id
            await this.axios.get(`/api/brand/${id}`)
                .then(res => {
                    const {name} = res.data
                    this.form.name = name
                })
                .catch(err => {
                    console.log(err)
                })
        },
        async update () {
            const id = this.$route.params.id
            await this.axios.put(`/api/brand/${id}`, this.form)
                .then(res => {
                    this.$router.push({ name: 'brand-list' })
                })
                .catch(err => {
                    console.log(err)
                    alert(err)
                })
        }
    }
}
</script>

<style scoped>

</style>
