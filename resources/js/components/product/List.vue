<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">
                <router-link :to="{ name: 'product-create' }" class="btn btn-success">
                    <i class="fas fa-plus"></i>
                </router-link>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="bg-primary text-white">
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Talla</th>
                            <th>Observaciones</th>
                            <th>Cantidad</th>
                            <th>Fecha de embarque</th>
                            <th>Marca</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in products" :key="index">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.size }}</td>
                            <td>{{ item.observations }}</td>
                            <td>{{ item.quantity }}</td>
                            <td>{{ item.boarding_date }}</td>
                            <td>{{ item.nameBrand }}</td>
                            <td>
                                <router-link :to="{ name: 'product-edit', params: { id: item.id } }" class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                <button class="btn btn-danger" @click="deleteProduct(item.id)"><i class="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "List",
    data: () => ({
        products: []
    }),
    mounted() {
        this.getProduct()
    },
    methods: {
        async getProduct () {
            await this.axios.get('/api/product')
                .then(res => {
                    this.products = res.data
                })
                .catch(err => {
                    this.products = []
                })
        },
        deleteProduct (id) {
            if (confirm('¿Desea eliminar el registro?')) {
                this.axios.delete(`/api/product/${id}`)
                    .then(res => {
                        this.getProduct()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
}
</script>

<style scoped>

</style>
