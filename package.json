import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // โฟลเดอร์ที่เก็บไฟล์สคริปต์ .spec.js ที่ฟ้าเคยเขียนให้
  fullyParallel: true, // ให้หุ่นยนต์เทสต์หลายๆ เส้นทางพร้อมกันเพื่อประหยัดเวลา
  retries: 1, // ถ้าเว็บหน่วงแล้วเทสต์พัง ให้ลองใหม่ 1 ครั้ง
  reporter: 'html', // ออกรายงานผลการเทสต์เป็นหน้าเว็บสวยๆ ให้กัปตันดู
  use: {
    /* ตั้งค่า URL ของเว็บจริงกัปตันที่นี่ เพื่อให้หุ่นยนต์วิ่งไปเทสต์ถูกที่ */
    baseURL: 'https://[ชื่อบัญชีของกัปตัน].github.io', 
    trace: 'on-first-retry', // อัดวิดีโอและเก็บ Log ไว้ดูย้อนหลังถ้าเทสต์ไม่ผ่าน
    headless: true, // รันแบบไม่มีหน้าจอ (เพื่อให้หุ่นยนต์ทำงานเร็วขึ้น 10 เท่า)
  },
  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Safari (iPhone)',
      use: { ...devices['iPhone 13'] }, // สั่งให้หุ่นยนต์จำลองหน้าจอมือถือด้วย
    },
  ],
});
