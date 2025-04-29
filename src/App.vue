<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

// 사이드바 상태 관리
const isSidebarOpen = ref(true)

// 사이드바 토글 함수
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// 로그인/로그아웃 버튼 클릭 핸들러 (예제)
const handleLoginLogout = () => {
  console.log('Login/Logout button clicked')
}
</script>

<template>
  <div :class="['layout', { 'sidebar-open': isSidebarOpen }]">
    <!-- Top Header -->
    <header class="top">
      <div class="top-left">
        <img src="/logo/EXODUS-SINGLE.png" alt="Product Logo" class="product-image" />
        <span class="product-label">Openstack Private Cloud Management Platform</span>
      </div>
      <div class="top-right">
        <span class="user-role">Admin</span>
        <span class="user-info">John Doe</span>
        <button @click="handleLoginLogout" class="login-logout-btn">Logout</button>
        <button @click="toggleSidebar" class="toggle-sidebar-btn">
          {{ isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar' }}
        </button>
      </div>
    </header>

    <!-- Sidebar -->
    <aside :class="['sidebar', { open: isSidebarOpen }]">
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Dashboard</RouterLink>
          </li>
          <li>
            <RouterLink to="/settings">Settings</RouterLink>
          </li>
          <li>
            <RouterLink to="/profile">Profile</RouterLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="content">
      <RouterView />
    </main>

    <!-- Bottom Footer -->
    <footer class="bottom">
      <p>&copy; 2025 MIHO Application</p>
    </footer>
  </div>
</template>

<style scoped>
/* 스타일 정의 */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.app {
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #333;
}

.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr;
  /* 기본 사이드바 너비 */
  grid-template-areas:
    "top top"
    "sidebar content"
    "bottom bottom";
  height: 100%;
  width: 100%;
  transition: grid-template-columns 0.3s ease-in-out;
  /* 부드러운 전환 */
}

.layout.sidebar-open {
  grid-template-columns: 250px 1fr;
  /* 사이드바 열림 상태 */
}

.layout:not(.sidebar-open) {
  grid-template-columns: 0px 1fr;
  /* 사이드바 닫힘 상태 */
}

.top {
  grid-area: top;
  background-color: #f4f4f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}

.top-left {
  display: flex;
  align-items: center;
}

.top-right {
  display: flex;
  align-items: center;
}

.product-image {
  width: 150px;
  height: auto;
  display: block;
  margin-right: 1rem;
}

/* Sidebar 스타일 */
.sidebar {
  grid-area: sidebar;
  background-color: #f8f9fa;
  padding: 1rem;
  border-right: 1px solid #ddd;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  width: 250px;
  /* 기본 너비 */
}

.sidebar.open {
  transform: translateX(0);
  /* 열릴 때 */
  display: block;
  /* 열릴 때 표시 */
}

.layout:not(.sidebar-open) .sidebar {
  transform: translateX(-100%);
  display: none;
  /* 닫힐 때 완전히 숨김 */
}

.content {
  grid-area: content;
  padding: 1rem;
  overflow-y: auto;
}

.bottom {
  grid-area: bottom;
  background-color: #f4f4f4;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.875rem;
}

/* 토글 버튼 스타일 */
.toggle-sidebar-btn {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-sidebar-btn:hover {
  background-color: #0056b3;
}
</style>