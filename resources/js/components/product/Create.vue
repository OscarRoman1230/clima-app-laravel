<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header"><h4>Crear Producto</h4></div>
                    <div class="card-body">
                        <form @submit.prevent="create()">
                            <div class="row">
                                <div class="col-6 mb-2">
                                    <div class="form-group">
                                        <label>Nombre</label>
                                        <input type="text" class="form-control" v-model="form.name" required>
                                    </div>
                                </div>
                                <div class="col-6 mb-2">
                                    <div class="form-group">
                                        <label>Talla</label>
                                        <input type="text" class="form-control" v-model="form.size" required>
                                    </div>
                                </div>
                                <div class="col-6 mb-2">
                                    <div class="form-group">
                                        <label>Observaciones</label>
                                        <input type="text" class="form-control" v-model="form.observations" required>
                                    </div>
                                </div>
                                <div class="col-6 mb-2">
                                    <div class="form-group">
                                        <label>Cantidad</label>
                                        <input type="text" class="form-control" v-model="form.quantity" required onkeypress='return event.charCode >= 48 && event.charCode <= 57'>
                                    </div>
                                </div>
                                <div class="col-6 mb-2">
                                    <div class="form-group">
                                        <label>Fecha de embarque</label>
                                        <input type="date" class="form-control" v-model="form.boarding_date" required>
                                    </div>
                                </div>
                                <div class="col-6 mb-2">
                                    <div class="form-group">
                                        <label>Marca</label>
                                        <select class="form-select" v-model="form.brands_id">
                                            <option value="" disabled selected>Selecciona una marca</option>
                                            <option :value="item.id" v-for="(item, index) in brands" :key="index">{{ item.name }}</option>
                                        </select>
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
    name: "CreateProduct",
    data: () => ({
        form: {
            name: '',
            size: '',
            observations: '',
            quantity: '',
            boarding_date: '',
            brands_id: ''
        },
        brands: []
    }),
    mounted() {
        this.getBrands()
    },
    methods: {
        async getBrands () {
            await this.axios.get('/api/brand')
                .then(res => {
                    this.brands = res.data
                })
                .catch(err => {
                    this.brands = []
                })
        },
        async create () {
            await this.axios.post('/api/product', this.form)
                .then(res => {
                    this.$router.push({ name: 'product-list' })
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
