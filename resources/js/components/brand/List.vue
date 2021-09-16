<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">
                <router-link :to="{ name: 'brand-create' }" class="btn btn-success">
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
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in brands" :key="index">
                                <td>{{ item.id }}</td>
                                <td>{{ item.name }}</td>
                                <td>
                                    <router-link :to="{ name: 'brand-edit', params: { id: item.id } }" class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                    <button class="btn btn-danger" @click="deleteBrand(item.id)"><i class="fas fa-trash-alt"></i></button>
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
        deleteBrand (id) {
            if (confirm('¿Desea eliminar el registro?')) {
                this.axios.delete(`/api/brand/${id}`)
                    .then(res => {
                        this.getBrands()
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
