import Vue from 'vue';
import VueRouter from 'vue-router';

// styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/styles/tailwind.css';

// layouts
import Admin from '@/layouts/Admin.vue';
import Auth from '@/layouts/Auth.vue';

// views for Admin layout
import Dashboard from '@/views/admin/Dashboard.vue';
import Settings from '@/views/admin/Settings.vue';
import Tables from '@/views/admin/Tables.vue';
import Maps from '@/views/admin/Maps.vue';
import AddProduct from '@/views/admin/AddProduct.vue';
import ProductList from '@/views/admin/ProductList.vue';
import CscenterList from '@/views/admin/CscenterList.vue';
import InspectionList from '@/views/admin/InspectionList.vue';

// views for Auth layout
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import FindPassword from '@/views/auth/FindPassword.vue';

import Mypage from '@/views/mypage/Mypage.vue';

// views without layouts
import Index from '@/views/Index.vue';
import Profile from '@/views/Profile.vue';
import List from '@/views/List.vue';
import List2 from '@/views/List2.vue';
import List3 from '@/views/List3.vue';
import Write from '@/views/Write.vue';

import Shoplist from '@/views/shop/Shoplist.vue';
import Shopview from '@/views/shop/Shopview.vue';
import Buy from '@/views/sold/Buypage.vue';
import Buyproc from '@/views/sold/Buyconfirmpage.vue';
import Buycomp from '@/views/sold/Buyconecpt.vue';
import Cscenter from '@/views/cscenter/Cscenter.vue';
import CscenterNotice from '@/views/cscenter/CscenterNotice.vue';
import CscenterQna from '@/views/cscenter/CscenterQna.vue';
import CscenterFaq from '@/views/cscenter/CscenterFaq.vue';
import CscenterInsert from '@/views/cscenter/CscenterInsert.vue';
import CscenterStandard from '@/views/cscenter/CscenterStandard.vue';
import CscenterNotice1 from '@/views/cscenter/CscenterNotice1.vue';
import CscenterNotice2 from '@/views/cscenter/CscenterNotice2.vue';
import CscenterNotice3 from '@/views/cscenter/CscenterNotice3.vue';
import CscenterNotice4 from '@/views/cscenter/CscenterNotice4.vue';
import CscenterNotice5 from '@/views/cscenter/CscenterNotice5.vue';
import CscenterFaq2 from '@/views/cscenter/CscenterFaq2.vue';
import CscenterFaq3 from '@/views/cscenter/CscenterFaq3.vue';
import Buyselect from '@/views/sold/Buyselect.vue';
import Buycomplete from '@/views/sold/Buycomplete.vue';

import Style from '@/views/style/Style.vue';
import StyleView from '@/views/style/StyleView.vue';

import Sellselect from '@/views/sold/Sellselect.vue';
import Sellcomplete from '@/views/sold/Sellcomplete.vue';
import Sell from '@/views/sold/Sellpage.vue';
import Sellproc from '@/views/sold/Sellconfirmpage.vue';
import Sellcomp from '@/views/sold/Sellconecpt.vue';

Vue.use(VueRouter);

// routes
const routes = [
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin',
    component: Admin,
    children: [
      {
        path: '/admin',
        component: Dashboard
      },
      {
        path: '/admin/settings',
        component: Settings
      },
      {
        path: '/admin/tables',
        component: Tables
      },
      {
        path: '/admin/maps',
        component: Maps
      },
      {
        path: '/admin/productList',
        component: ProductList
      },
      {
        path: '/admin/cscenterList',
        component: CscenterList
      },
      {
        path: '/admin/inspectionList',
        component: InspectionList
      },
      {
        path: '/admin/addProduct',
        component: AddProduct
      }
    ]
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: '/auth/login',
        component: Login
      },
      {
        path: '/auth/register',
        component: Register
      },
      {
        path: '/auth/findpassword',
        component: FindPassword
      }
    ]
  },
  {
    path: '/mypage',
    component: Mypage
  },
  {
    path: '/',
    component: Index
  },
  {
    path: '/style',
    component: Style
  },
  {
    path: '/style/:USER_KEY',
    name: 'StyleView',
    component: StyleView,
    props: true
  },

  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/list2',
    component: List2
  },
  {
    path: '/write',
    component: Write
  },
  {
    path: '/list3',
    component: List3
  },
  {
    path: '/buy/:PRODUCT_KEY',
    name: 'Buyselect',
    component: Buyselect
  },
  {
    path: '/buy/sel/:PRODUCT_KEY',
    name: 'Buy',
    component: Buy
  },
  {
    path: '/buy/sel/proc/:PRODUCT_KEY',
    name: 'Buyproc',
    component: Buyproc
  },
  {
    path: '/buy/sel/proc/co/:PRODUCT_KEY',
    name: 'Buycomp',
    component: Buycomp
  },
  {
    path: '/buy/sel/proc/co/complete/:PRODUCT_KEY',
    name: 'Buycomplete',
    component: Buycomplete
  },
  {
    path: '/sell/:PRODUCT_KEY',
    name: 'Sellselect',
    component: Sellselect
  },
  {
    path: '/sell/sel/:PRODUCT_KEY',
    name:'Sell',
    
    component: Sell
  },
  {
    path: '/sell/sel/proc/:PRODUCT_KEY',
    name: 'Sellproc',
    component: Sellproc
  },
  {
    path: '/sell/sel/proc/co/:PRODUCT_KEY',
    name: 'Sellcomp',
    component: Sellcomp
  },
  {
    path: '/sell/sel/proc/co/complete/:PRODUCT_KEY',
    name: 'Sellcomplete',
    component: Sellcomplete
  },
  {
    path: '/shop',
    component: Shoplist
  },

  {
    path: '/shopview/:PRODUCT_KEY',
    name: 'Shopview',
    component: Shopview
  },

  {
    path: '/cscenter',
    component: Cscenter
  },
  {
    path: '/cscenterNotice',
    component: CscenterNotice
  },
  {
    path: '/cscenterQna',
    component: CscenterQna
  },
  {
    path: '/cscenterFaq',
    component: CscenterFaq
  },
  {
    path: '/cscenterStandard',
    component: CscenterStandard
  },
  {
    path: '/cscenterInsert',
    component: CscenterInsert
  },
  {
    path: '/cscenterNotice1',
    component: CscenterNotice1
  },
  {
    path: '/cscenterNotice2',
    component: CscenterNotice2
  },
  {
    path: '/cscenterNotice3',
    component: CscenterNotice3
  },
  {
    path: '/cscenterNotice4',
    component: CscenterNotice4
  },
  {
    path: '/cscenterNotice5',
    component: CscenterNotice5
  },
  {
    path: '/cscenterFaq2',
    component: CscenterFaq2
  },
  {
    path: '/cscenterFaq3',
    component: CscenterFaq3
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
