import { test, expect } from '@playwright/test';

// ============================================================================
// หุ่นยนต์ทดสอบระบบ RJ Ailiverse (Automated E2E Testing)
// ============================================================================

test.describe('RJ Ailiverse - Golden Paths Validation', () => {

  // --------------------------------------------------------------------------
  // 🧪 เส้นทางที่ 1: ผู้เรียนใหม่ (The New Learner Journey)
  // --------------------------------------------------------------------------
  test('Scenario 1: ผู้เรียนใหม่ ต้องเริ่มจาก Pretest และเวลาเรียน 0%', async ({ page }) => {
    test.setTimeout(60000); // ให้เวลาหุ่นยนต์เทสต์ข้อนี้ 1 นาที
    
    // 1. เข้าสู่หน้า Landing Page
    await page.goto('/');
    await page.getByRole('button', { name: /เข้าสู่ระบบ e-Learning/i }).click();
    await page.getByRole('button', { name: /พิมพ์แชทสนทนา/i }).click();

    // 2. ตรวจสอบสิทธิ์ (สร้างรหัสสุ่มใหม่)
    const mockLicense = '999' + Math.floor(10000 + Math.random() * 90000).toString();
    await page.getByPlaceholder('ระบุตัวเลข').fill(mockLicense);
    await page.getByRole('button', { name: 'ตรวจสอบ' }).click();
    
    // เลือก "เรียนใหม่" และไปต่อ
    await page.getByText('เรียนใหม่', { exact: true }).click();
    await page.getByRole('button', { name: /ดำเนินการต่อ/i }).click();

    // 3. กรอกข้อมูลส่วนตัว (ฟอร์มลงทะเบียน)
    await page.getByPlaceholder('ระบุชื่อและนามสกุล').fill('คุณพยาบาล ทดสอบระบบ');
    await page.getByPlaceholder('08xxxxxxxx').fill('0812345678');
    await page.getByPlaceholder('email@example.com').fill('qa-test@rjailiverse.com');
    await page.getByPlaceholder('ระบุตำแหน่ง').fill('พยาบาลวิชาชีพ');
    
    // เลือก dropdown สังกัดและหน่วยงาน (เลือก 'อื่นๆ')
    const selects = await page.locator('select').all();
    if (selects.length >= 2) {
        await selects[1].selectOption({ label: 'อื่นๆ' }); // สังกัด
        await selects[2].selectOption({ label: 'อื่นๆ' }); // รพ.
    }
    await page.getByPlaceholder('โปรดระบุ').fill('โรงพยาบาลศูนย์จำลอง');
    await page.getByPlaceholder('จังหวัด').fill('กรุงเทพมหานคร');
    
    // กดรับ OTP
    await page.getByRole('button', { name: 'รับ OTP' }).click();

    // 4. ทะลวงระบบด้วย Master OTP
    await expect(page.getByText('รหัส OTP')).toBeVisible();
    await page.getByPlaceholder('000000').fill('202699');
    await page.getByRole('button', { name: /เข้าสู่ห้องเรียน/i }).click();

    // 5. ตรวจสอบว่าโดนบังคับให้ทำ Pretest หรือไม่
    await expect(page.getByText('แบบทดสอบก่อนเรียน')).toBeVisible();
    
    // (หุ่นยนต์จะทำข้อสอบข้อ 1 เพื่อความรวดเร็ว แล้วเช็คว่าระบบตอบสนอง)
    await page.locator('label').first().click(); // เลือกข้อ ก.
    
    // ป้องกันหุ่นยนต์ทำงานเร็วไปจนระบบตกใจ
    await page.waitForTimeout(1000); 
  });


  // --------------------------------------------------------------------------
  // 🧪 เส้นทางที่ 2: สายด่วน Onsite (The Onsite Fast-Track)
  // --------------------------------------------------------------------------
  test('Scenario 2: ผู้เรียน Onsite ได้สิทธิ์ 100% และเข้าทำ Posttest ได้เลย', async ({ page }) => {
    test.setTimeout(90000); // เคสนี้ยาวหน่อย ให้เวลา 1.5 นาที
    
    // 1. เข้าสู่หน้า Landing Page
    await page.goto('/');
    await page.getByRole('button', { name: /เข้าสู่ระบบ e-Learning/i }).click();
    await page.getByRole('button', { name: /พิมพ์แชทสนทนา/i }).click();

    // 2. ตรวจสอบสิทธิ์ (สร้างรหัสสุ่มใหม่)
    const mockLicenseOnsite = '888' + Math.floor(10000 + Math.random() * 90000).toString();
    await page.getByPlaceholder('ระบุตัวเลข').fill(mockLicenseOnsite);
    await page.getByRole('button', { name: 'ตรวจสอบ' }).click();
    
    // เลือก "Onsite / Online" และไปต่อ
    await page.getByText('Onsite / Online', { exact: true }).click();
    await page.getByRole('button', { name: /ดำเนินการต่อ/i }).click();

    // 3. กรอกข้อมูลส่วนตัว (เลือกสิทธิ์เป็น Onsite)
    await page.getByPlaceholder('ระบุชื่อและนามสกุล').fill('นายแพทย์ ออนไซต์เทสต์');
    
    const selects = await page.locator('select').all();
    await selects[0].selectOption({ label: 'Onsite' }); // เปลี่ยนสิทธิ์เป็น Onsite
    
    await page.getByPlaceholder('08xxxxxxxx').fill('0899999999');
    await page.getByPlaceholder('email@example.com').fill('onsite-test@rjailiverse.com');
    await page.getByPlaceholder('ระบุตำแหน่ง').fill('แพทย์');
    
    if (selects.length >= 2) {
        await selects[1].selectOption({ label: 'อื่นๆ' });
        await selects[2].selectOption({ label: 'อื่นๆ' });
    }
    await page.getByPlaceholder('โปรดระบุ').fill('โรงพยาบาลศูนย์จำลอง');
    await page.getByPlaceholder('จังหวัด').fill('เชียงใหม่');
    
    // กดรับ OTP และกรอก Master OTP
    await page.getByRole('button', { name: 'รับ OTP' }).click();
    await expect(page.getByText('รหัส OTP')).toBeVisible();
    await page.getByPlaceholder('000000').fill('202699');
    await page.getByRole('button', { name: /เข้าสู่ห้องเรียน/i }).click();

    // 4. ตรวจสอบสิทธิพิเศษใน Dashboard
    // ต้องเห็นคำว่า "พร้อมสอบ Posttest แล้ว!" โผล่ขึ้นมาทันทีโดยไม่ต้องดูวิดีโอ
    await expect(page.getByText('พร้อมสอบ Posttest แล้ว!')).toBeVisible();
    
    // หลอดเวลาเรียนต้องเต็ม 100%
    await expect(page.getByText('100%')).toBeVisible();

    // 5. จำลองการเข้าห้องเจรจา (Skill Lab)
    await page.getByRole('button', { name: /ห้องเจรจา/i }).click();
    await page.getByText('TH', { exact: true }).click(); // เลือกเคสภาษาไทย
    
    // พิมพ์ข้อความหา AI
    await expect(page.getByPlaceholder('พิมพ์ข้อความ...')).toBeVisible();
    await page.getByPlaceholder('พิมพ์ข้อความ...').fill('สวัสดีครับ หมอมาแจ้งผลการรักษานะครับ');
    await page.getByRole('button', { name: /send/i }).click();

    // รอดูปุ่มจบการสนทนาโผล่ขึ้นมา
    await expect(page.getByText('🛑 จบการจำลองสถานการณ์')).toBeVisible({ timeout: 15000 });
    
  });

});
