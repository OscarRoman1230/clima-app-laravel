<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header"><h4>Crear Marca</h4></div>
                    <div class="card-body">
                        <form @submit.prevent="create()">
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
    name: "CreateBrand",
    data: () => ({
        form: {
            name: ''
        }
    }),
    methods: {
        async create () {
            await this.axios.post('/api/brand', this.form)
                .then(res => {
                    this.$router.push({ name: 'brand-list' })
                })
                .catch(err => {
                    alert(err)
                })
        }
    }
}
</script>

<style scoped>

</style>
