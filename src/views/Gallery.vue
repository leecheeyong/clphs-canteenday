<script setup>
import { ref, onMounted } from 'vue'
import Share from '@/components/share.vue'
import Slider from '@/components/gallery-slider.vue'
const mainInfo = ref({})
//mainInfo.value = await fetch('https://canteenday-2024.vercel.app/gallery').then((r) => r.json())
mainInfo.value = [
  { url: './slideshow/trailer2', category: 'BACKGROUND' },
  {
    url: 'https://joe.js.org/canteenday-images/images/0u7sYDD.webp',
    category: 'IMAGES',
    location: '预热活动',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/76Ah9Ba.webp',
    category: 'IMAGES',
    location: '预热活动',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/wS9ir7o.webp',
    category: 'IMAGES',
    location: '预热活动',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/f6hFdn6.webp',
    category: 'IMAGES',
    location: '预热活动',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/wAbCEdu.webp',
    category: 'IMAGES',
    location: '预热活动',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/4T1qm1f.webp',
    category: 'IMAGES',
    location: '预热活动',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/0y20Ijo.webp',
    category: 'IMAGES',
    location: '预热活动',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/E5g87F2.webp',
    category: 'IMAGES',
    location: '预热活动',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/vBdMsEl.webp',
    category: 'IMAGES',
    location: '预热活动',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/M9xuB21.webp',
    category: 'IMAGES',
    location: '预热活动',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/hwHtYpK.webp',
    category: 'IMAGES',
    location: '预热活动',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OJM6hwy.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/SQmzQQv.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/okQZwGY.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/T4QuCKv.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Br9fOLu.webp',
    category: 'IMAGES',
    location: '乐队',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Um5yH5B.webp',
    category: 'IMAGES',
    location: '乐队',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OaNr7BU.webp',
    category: 'IMAGES',
    location: '乐队',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/TGwmmoM.webp',
    category: 'IMAGES',
    location: '乐队',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/HeCzMQW.webp',
    category: 'IMAGES',
    location: '乐队',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/fpqLBlY.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Qr91H4w.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/x2EWiDp.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OAw2Him.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/06PXvF1.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/h7aMhc7.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Mw8SQae.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/6WtNSuq.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/latJ4L6.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/cK0vCwe.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/TXnepaa.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/VyR6CT2.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/D5Zc9xg.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/94FgdOJ.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/BfTAysA.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/1CWreLq.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/zQIkW4k.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/8bsurE4.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/97pgMGh.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/xOXNaN4.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/PE2hyNw.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/9BPpWyC.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/HFCHoVo.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/N6aD7o7.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/1iZvBpn.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Ki4KaEg.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/KJph9Sv.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/PC20Rrj.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/9IJMRO5.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/QoK3QQH.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/MHSDP2N.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/KozwrdF.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/JRbtwOl.webp',
    category: 'IMAGES',
    location: '试吃会',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ewuMbmY.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Wp1h63l.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/lVjjpUa.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/BOxGN9z.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/brFeOVt.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/gUVmiNS.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/SVlzBvi.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/i1Ca8Hr.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/zLQv5vl.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/DK4ngEj.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Cr9Nmh9.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Mr6Wk1X.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Scgz7bU.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/G74tk6Q.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/zjPHnQU.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/AzKMJuv.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/CuQXq3H.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Ge64YnS.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/dHpmIyB.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/1r1gsKO.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/nPMcBgX.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/T7y1SrE.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/9GAMGov.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/uRHV5xl.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/sq54N2s.webp',
    category: 'IMAGES',
    location: '筹备',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/4i0qvNN.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/hyu12jx.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/kTH3eq5.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/G8OYQIF.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/qDgbYfJ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ZXPH4O8.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/DFyGQzx.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Ff3U2Of.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/enD1LT9.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/I2KYfnD.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/9bkhl6K.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/3LRxILH.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/XtuLaLZ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/pMvLYM8.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/EYoa6zk.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/gHCejV4.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/JFNrnsd.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/j3rpXzx.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/nlCfwdA.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/dfuYLaJ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/cwWSXTl.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/mPQzSna.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/gIlBXeF.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Ij5FLoz.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Y0uDMOa.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/dCz2lFS.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ocTzREM.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/mcWggGo.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/NSCszZk.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/SO4dTl2.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/1G86a8o.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/rfpBgr5.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/kNmb0uV.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/qnXcPxA.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/DDeQiKo.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/3iMtMDL.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/92pC8kS.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/gwhMiWM.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/1Sc9Saz.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/WqeWpqV.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/K94AkhO.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/fjBnD7i.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/AbQgv1n.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/VLfuMVq.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/QA4TgVd.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/RuCvaS0.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/0KlZ7Ay75Z.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/2CP8JzUBJp.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/2zS5zjc1v3.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/3UYbRauKXh.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/45Oe0eHCIm.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/4LSQCkuYWx.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/5ULY8E9ImY.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/76sUQ0YONu.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/7vswoH81lE.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/7mxD7DNCZw.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/8duZHz6CYd.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/8qpoa8IJ7d.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/93cEBQOHeI.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/9EH2O3H5FD.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/9N5gVIy67x.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/C6LzrbjnGI.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/CEC9n10TC7.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/CZby78naBO.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/CSMKdiRBIX.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ClJHjJJiwY.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/CtmBHutooz.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/DoOUFQ1gT4.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/EHnZyX6100.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/EHMYC1LiOq.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ELZZbG8anX.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/EUiKOC2NHy.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/F6Zk1PhJIP.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/FSy4q4HykT.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Fn03FH1jPJ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/JGN0qTs7T6.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/JLLSgJxFax.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/JYdoY6bnxz.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/KNCc9h0Q4F.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/KPX0QpGUTd.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/JJ46ROCecC.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/JgrOkcbyUv.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/LBLQOa4NSR.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Lz5X3FdgJJ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/M3CuoRk5k1.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/MTEQHDGCN6.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/N4kz4gXdpN.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/NCsxIJdzvB.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OAa3aHhB2O.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OiLK4L64zP.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OuBqdVTbzj.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OuasqRX43I.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OvW7ylTJhj.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/PUFxUgUmUv.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OyO8RCPIDC.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/PZJEUMQO2g.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/PtucIYg61Q.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Qs1uO9PCVR.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/R6mmEMuLtQ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/RXCxk9N880.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/RRjkYafLvN.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Sc9WAVKZxv.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/T75Ev1la75.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/TtG0Vh03Uo.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/UCvLAU8SQf.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/T3mwqOwZBL.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/V0KTISpeCl.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/UMyfPOwyo3.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/UZHEIsn8Fh.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/VDxFaM1yzq.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/VTFbHNrP7n.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/WAlk7xIV7m.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/WLHZcVOThz.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/VwaVPomACB.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/WXYHYxrKmk.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/WRPouGhjoa.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Vv27Euu1Oz.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/WcsSbDNBh7.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/WsOBHtbS7M.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/XOddtaOZex.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/YAqHzBDCbh.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Yj1fLluyYx.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/YIBf1Lnjl3.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ZrlvGMDpdx.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/bmiRI5oSEl.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/c3B71R3Lcc.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/dASVJmiOlN.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/dl57ENG7Gs.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/e2KMFg9skm.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/eYVkE6I7GB.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/dWoCDssbLL.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ejqDWVr8GK.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/eoEy4NuIEr.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ewrxeSzESW.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/fgj1CoN8kw.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/gAz8tBjrQt.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/gRLo28swG8.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/gazg2fFzGj.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/hYumClV5Vu.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/gLaADPfHJs.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/hkWv63Wzoj.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/hxDh2lixES.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/i0TYcSslZS.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/iBcJq23XA4.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/iq3iiIE5Gp.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/kT9oMjW10s.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ksDIcQymqX.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/naTQ9kt9ru.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/oNbPQrthCK.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/jm3OK5FsJy.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/oqKipcDuO0.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/pAiUauVRnL.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/q6c5DYRlP1.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/qOPUCDvaly.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/sDImPw1a6G.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/tPcd39szr9.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/tYwEzjgdye.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/th3HIHHvK7.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/pO3GS5KQtz.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/u21THSgoIW.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/uCgyFAIxu8.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/uSjY5J7doJ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/uWKkD8Nfub.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/uZPJYUoUQR.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/u2Xd2AM45o.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/v0VAyLDVec.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/v1tdlL5cXZ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/umZP0UBLPd.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/uZwfXpHO0m.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/vBpKws8lLF.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/vh55u3pUek.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/vjO5qET7co.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/vzFYbXHbXU.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/wO51cTnHSm.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/wfHMXLFycM.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/xo5xFBSIfE.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/xvihuFR0de.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/yDXAm7If9k.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/yvoIE7oJLw.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/yxs7xyKahv.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/yGlZjHqYeN.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/zQ26QvdmCX.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/zePL6EJoxc.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ztq6qLHwv5.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/zqZCthjGkb.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/zvw5ZdMlzA.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/CLd8OB9BX1.webp',
    category: 'IMAGES',
    location: '乐队',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/iCXS6mffp0.webp',
    category: 'IMAGES',
    location: '乐队',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/etJWWMT6xW.webp',
    category: 'IMAGES',
    location: '乐队',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/0AasOWPlgZnZ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/0vuq0niEEGg9.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/2w12Dpb1gKrs.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/2wwUjUZwX76v.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/30G51Oc5EW6O.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/3SK4DjH2D5xm.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/3xKTYYUWcrsI.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/4fpsweeMmCVM.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/58HSjjuXr0yN.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/6uDyFzd2rcyZ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/71NZGTN0aD0t.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/7BQ2kwUyNOEd.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/7itdCcTJxhTR.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/8ej09TqIeV82.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/91DCBQyAkE4p.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/AoDadZ8TAaIv.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/B2Y4ge1LoxXL.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/BCq0lzaG6oH3.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/BzkLjzjI51hj.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/CnY4xYOv3gYz.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/DK8N7lbffNFD.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/EFD2qYX56BFu.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/EVtjvjaEkaOr.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/EmyuINkzsWjN.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/FYvMgRMWBheE.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/GdZ97Ji3EHoT.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/JtIKz82xwL6i.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/HVngIi0FNiqE.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/K5eBda9L84dx.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Knb53QVFtSQ3.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/JW9TgC6OuUBo.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/N6BbefvcgIrr.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/NRP2AISucBN8.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Kn3pKWbEmbq6.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Lw15mymTk0TG.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/IZ8U78pSNiPD.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/NZ807n8Mr01X.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/NidepmBDDPus.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/O61SOgdqeOcj.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OYQJvo3iq6ps.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OgpRaq9Hs3E8.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Q4wPJz4g3A1f.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/RgSGF8BMC5P0.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/QXFEF7346b9I.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/OYe4zvsEjo2F.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/S5BPTUfB1umB.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/SVykUlXJvAGc.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/TzdhYfuxVbAZ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/UNAYj5BiAtHp.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/UkGmRTu5IhBi.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/VEMfmgOQ8VJH.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/VJqfiLCtXGn2.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/VXkAZW0138aW.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/X7mJYc25SGBH.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/VIMYJoxoeCvs.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Xooar2J5uZF7.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/YRSUAmlN4BoN.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/YcTMA6STfFdF.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/Yk2gpRG5MP46.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/aAI9tGWS2RCW.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/aSPltEskM1xQ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/aivxoqHLLznR.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/as6psYGu1W5j.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/YBFBObui5JwR.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/awlQkAN4IfBm.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/bHilBg2M7rFz.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/cBX4kmW2lAuS.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/cJvkDJQIZLzV.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/cYQqG2RXbjCV.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ctseYBKqGP4h.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/cxfSabgsAUjB.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/dm39OUJGx8UN.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/bmnqGvLW1LTX.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/fwMI7pd5a4hp.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ggXMD7o6HsA7.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/hmRSJPzZ9vCW.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/iBGguQrL4msM.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/jDCGqNocBoIA.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/jJL6hvuWFGud.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/k26CM32KZJ8f.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/kOe8Van69KRU.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/lIsT9pveMnOx.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/luzSdbVQ9W7W.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/o2peiBWSekDA.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/oCrTNbm3UFAQ.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/oRcnI65qHo1N.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/oYBM6Gkizix6.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/oqxoeXC1DXSP.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/oyxqjsgMSQCW.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/puzlcS6oJvpH.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/pwq9K6Db24ln.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/q2minxXDHaot.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/rG8rQYa2pRR6.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/rMnz1G4ELYBX.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/rRkyca38dmQ3.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/swxNUiz8Cv0P.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/tDwWBDguP7xc.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/qUft63m1oN5o.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/u855cQifkTJz.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/tzOqSy99fFZt.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/uBvONmgGu4BV.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ucKJkY3FCg1G.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/ujnIDdvHqag8.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/uscUx7fsI2FL.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/vKiLgZCHtYEh.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/vtMR8h7UoGap.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/whLE8AzEi6k6.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/xSXlkvx7hWdy.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/xCR33QrN3Vjt.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Landscape',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/xfMVcPMqrJHD.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/yiiK5vKIGDk6.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  },
  {
    url: 'https://joe.js.org/canteenday-images/images/zURzga9nskHm.webp',
    category: 'IMAGES',
    location: '食堂日',
    orientation: 'Portrait',
    status: 'OK'
  }
]
const currentBackground = ref(0)
const campaignBackground = mainInfo.value.filter((r) => r.category == 'BACKGROUND')
const cursor = ref(null)

onMounted(() => {
  // document.addEventListener('mousemove', (e) => {
  //   cursor.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  // })
  setInterval(() => {
    if (currentBackground.value !== campaignBackground.length - 1) {
      currentBackground.value++
    } else {
      currentBackground.value = 0
    }
  }, 3000)
})
var ua = window.navigator.userAgent.toLowerCase().includes('safari')
</script>

<template>
  <!-- <div class="cursor hidden lg:block" ref="cursor"></div> -->
  <div class="fixed scroll-smooth">
    <!-- <div
      :class="index === currentBackground ? 'block' : 'hidden'"
      v-for="(video, index) in campaignBackground"
    > -->
    <div>
      <video
        autoplay
        muted
        loop
        playsinline
        disablePictureInPicture
        class="top-0 w-screen h-screen z-0 object-cover opacity-60"
      >
        <source
          :src="ua ? campaignBackground[0].url + '.mp4' : campaignBackground[0].url + '.webm'"
          :type="ua ? 'video/mp4' : 'video/webm'"
        />
      </video>
    </div>
    <header class="absolute inset-x-0 top-0 z-50 text-white">
      <nav class="flex items-center justify-center p-6 lg:px-8" aria-label="Global">
        <a href="/" aria-label="Back to home" title="Home">
          <div class="lg:flex lg:flex-1 lg:justify-center">
            <div class="flex items-center justify-center gap-6">
              <img class="h-12 w-auto" src="/Logo.webp" alt="" />
              <h1
                class="sm:text-2xl text-xl bg-pink-400 p-2 pl-4 pr-4 rounded-3xl text-white shadow-md shadow-gray"
              >
                <span class="type-title font-bold"></span>
              </h1>
              <img class="h-12 w-auto" src="/school.webp" alt="" />
            </div>
          </div>
        </a>
      </nav>
      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
          <div
            class="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style="
                clip-path: polygon(
                  74.1% 44.1%,
                  100% 61.6%,
                  97.5% 26.9%,
                  85.5% 0.1%,
                  80.7% 2%,
                  72.5% 32.5%,
                  60.2% 62.4%,
                  52.4% 68.1%,
                  47.5% 58.3%,
                  45.2% 34.5%,
                  27.5% 76.7%,
                  0.1% 64.9%,
                  17.9% 100%,
                  27.6% 76.8%,
                  76.1% 97.7%,
                  74.1% 44.1%
                );
              "
            ></div>
          </div>
          <div class="text-center">
            <div>
              <h1
                class="tracking-tight bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-5xl md:text-6xl font-extrabold text-transparent text-center select-auto"
              >
                相册
              </h1>
              <p
                class="mt-3 tracking-tight bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-2xl md:text-3xl font-extrabold text-transparent text-center select-auto"
              >
                Gallery
              </p>
            </div>
            <div
              class="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                class="relative left-[calc(50%-11rem)] aspect-[1055/678] w-[36.125rem] -translate-x-1/2 rotate-[90deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style="
                  clip-path: polygon(
                    74.1% 44.1%,
                    100% 61.6%,
                    97.5% 26.9%,
                    85.5% 0.1%,
                    80.7% 2%,
                    72.5% 32.5%,
                    60.2% 62.4%,
                    52.4% 68.1%,
                    47.5% 58.3%,
                    45.2% 34.5%,
                    27.5% 76.7%,
                    0.1% 64.9%,
                    17.9% 100%,
                    27.6% 76.8%,
                    76.1% 97.7%,
                    74.1% 44.1%
                  );
                "
              ></div>
            </div>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <router-link
                to="/"
                aria-label="Home"
                title="Home"
                class="text-xl text-gray-600 font-semibold leading-6"
                ><span
                  aria-hidden="true"
                  class="hover:scale-[1.1] ease-in-out transition md:inline-block hidden"
                  >← 主页</span
                ></router-link
              >
              <a
                href="#about"
                aria-label="Learn more"
                title="Learn More"
                class="text-xl text-gray-800 font-semibold leading-6 animate-pulse"
                ><span
                  aria-hidden="true"
                  class="hover:scale-[1.1] ease-in-out transition md:inline-block hidden"
                  >开始探索之乘 →</span
                ><span aria-hidden="true" class="animate-bounce mt-20 inline-block md:hidden"
                  >向上滑以探索更多 ↑</span
                ></a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
      </div>
    </header>
  </div>
  <Share />
  <slider :mainInfo="mainInfo" />
</template>
