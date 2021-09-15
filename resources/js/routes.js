const BrandEdit = () => import('./components/brand/Edit')
const BrandCreate = () => import('./components/brand/Create')
const BrandList = () => import('./components/brand/List')

const ProductEdit = () => import('./components/product/Edit')
const ProductCreate = () => import('./components/product/Create')
const ProductList = () => import('./components/product/List')

export const routes = [
    {
        path: '/',
        redirect: { name: 'brand-list'}
    },
    {
        name: 'brand-create',
        path: '/brand-create',
        component: BrandCreate
    },
    {
        name: 'brand-edit',
        path: '/brand-edit/:id',
        component: BrandEdit
    },
    {
        name: 'brand-list',
        path: '/brands',
        component: BrandList
    },
    {
        name: 'product-create',
        path: '/product-create',
        component: ProductCreate
    },
    {
        name: 'product-edit',
        path: '/product-edit/:id',
        component: ProductEdit
    },
    {
        name: 'product-list',
        path: '/products',
        component: ProductList
    }
]
