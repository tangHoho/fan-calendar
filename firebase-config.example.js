// 追星行事曆 Firebase 設定
// 使用方式：把這個檔案複製一份，改名為 firebase-config.js，填入你的設定後上傳到 GitHub。
// 之後更新 index.html 時，不要覆蓋 firebase-config.js。
//
// 設定值在 Firebase 後台：專案設定（齒輪）→ 一般 → 你的應用程式 → SDK 設定和配置
// 這些值會出現在公開網頁上是正常的，資料安全靠 Firestore 安全規則保護。

export const firebaseConfig = {
  apiKey: "填入你的 apiKey",
  authDomain: "你的專案.firebaseapp.com",
  projectId: "你的專案 ID",
  storageBucket: "你的專案.appspot.com",
  messagingSenderId: "",
  appId: ""
};
