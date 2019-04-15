import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {
      welcomeMsg: 'Welcome to Your Vue.js App',
      guide: 'For a guide and recipes on how to configure / customize this project,',
      checkout: 'check out the',
      plugins: 'Installed CLI Plugins',
      links: 'Essential Links',
      ecosystem: 'Ecosystem'
  },
  'ja': {
    welcomeMsg: 'Vue.jsアプリへようこそ',
    guide: 'このプロジェクトを設定/カスタマイズする方法に関するガイドとレシピについては、',
    checkout: 'チェックアウト',
    plugins: 'インストール済みCLIプラグイン',
    links: '基本リンク',
    ecosystem: '生態系'
  },
  'es': {
      welcomeMsg: 'Bienvenido a tu aplicación Vue.js',
      guide: 'Para una guía y recetas sobre cómo configurar / personalizar este proyecto,',
      checkout: 'revisar la',
      plugins: 'Plugins de CLI instalados',
      links: 'Enlaces esenciales',
      ecosystem: 'Ecosistema'
  }
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;