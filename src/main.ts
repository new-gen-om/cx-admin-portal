// 메인 CSS 파일을 가져옵니다.
import './assets/main.css'

// Vue.js 애플리케이션 생성에 필요한 함수와 Pinia 상태 관리 라이브러리를 가져옵니다.
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 루트 컴포넌트(App.vue)와 라우터 설정, i18n 설정을 가져옵니다.
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

// i18n 설정 (예제 메시지)
const messages = {
  en: {
    welcome: 'Welcome to CX Admin Portal',
  },
  ko: {
    welcome: 'CX 관리자 포털에 오신 것을 환영합니다',
  },
}

// i18n 인스턴스를 생성합니다.
const i18n = createI18n({
  locale: 'en', // 기본 언어 설정
  fallbackLocale: 'en', // 언어가 없을 경우 기본 언어
  messages, // 언어 메시지
})

// Vue 애플리케이션 인스턴스를 생성합니다.
const app = createApp(App)

// Pinia 상태 관리 라이브러리를 애플리케이션에 등록합니다.
app.use(createPinia())

// Vue Router를 애플리케이션에 등록합니다.
app.use(router)

// i18n을 애플리케이션에 등록합니다.
app.use(i18n)

// 애플리케이션을 HTML의 #app 요소에 마운트합니다.
app.mount('#app')
