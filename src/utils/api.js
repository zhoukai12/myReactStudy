import server from '@/utils/require';


export default {
    //请求轮播图
    apiGetHomeData() {
        return server.get('/yszhome/pub/index');
    },
}