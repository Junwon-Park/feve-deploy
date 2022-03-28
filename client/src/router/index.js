import Vue from "vue";
import VueRouter from "vue-router";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// layouts
import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout
import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";
import AddProduct from "@/views/admin/AddProduct.vue";
import ProductList from "@/views/admin/ProductList.vue";
import CscenterList from "@/views/admin/CscenterList.vue";

// views for Auth layout
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

import Mypage from "@/views/mypage/Mypage.vue";

// views without layouts
import Index from "@/views/Index.vue";
import Profile from "@/views/Profile.vue";
import List from "@/views/List.vue";
import List2 from "@/views/List2.vue";
import List3 from "@/views/List3.vue";
import Write from "@/views/Write.vue";

import Shoplist from "@/views/shop/Shoplist.vue";
import Sold from "@/views/sold/Sellpage.vue"



Vue.use(VueRouter);

// routes
const routes = [
  {
    path: "/admin",
    name:'admin',
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
      {
        path: "/admin/productList",
        component: ProductList,
      },
      {
        path: "/admin/cscenterList",
        component: CscenterList,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/mypage",
    component: Mypage,
  },
  {
    path: "/",
    component: Index,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/list2",
    component: List2,
  },
  {
    path: "/list3",
    component: List3,
  },
  {
    path: "/write",
    component: Write,
  },
  {
    path: "/sold",
    component: Sold,
  },
  {
    path: "/admin/addProduct",
    component: AddProduct,
  },
  
  {
    path: "/shop",
    component: Shoplist,

  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
