// ============================================================================
// แฟ้มเก็บข้อมูล (Static Data) ฉบับสมบูรณ์ 100% สำหรับ RJ Ailiverse
// ============================================================================

window.FAH_IDLE_VIDEO = "https://player.vimeo.com/video/1201677272?background=1&autoplay=1&loop=1&muted=1";

window.CHARACTER_VIDEOS = {
  FAH: { 
    ANGRY: "https://player.vimeo.com/video/1201657361?background=1&autoplay=1&loop=1&muted=1", 
    CONFUSED: "https://player.vimeo.com/video/1201657360?background=1&autoplay=1&loop=1&muted=1", 
    HESITANT: "https://player.vimeo.com/video/1201657359?background=1&autoplay=1&loop=1&muted=1", 
    SAD: "https://player.vimeo.com/video/1201657372?background=1&autoplay=1&loop=1&muted=1", 
    NEUTRAL: "https://player.vimeo.com/video/1201677272?background=1&autoplay=1&loop=1&muted=1", 
    ADVISING: "https://player.vimeo.com/video/1202358300?background=1&autoplay=1&loop=1&muted=1" 
  },
  BROTHER: { 
    ANGRY: "https://player.vimeo.com/video/1201657665?background=1&autoplay=1&loop=1&muted=1", 
    CONFUSED: "https://player.vimeo.com/video/1201657667?background=1&autoplay=1&loop=1&muted=1", 
    HESITANT: "https://player.vimeo.com/video/1201657664?background=1&autoplay=1&loop=1&muted=1", 
    SAD: "https://player.vimeo.com/video/1201657681?background=1&autoplay=1&loop=1&muted=1", 
    NEUTRAL: "https://player.vimeo.com/video/1202839934?background=1&autoplay=1&loop=1&muted=1" 
  }
};

window.FAH_PROFILE_PIC = "https://res.cloudinary.com/djwclucoz/image/upload/v1781599152/%E0%B8%A5%E0%B8%9A%E0%B8%84%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%AB%E0%B8%A1%E0%B8%94_2K_202606161538_tdnggg.jpg";

window.HOSPITAL_MAPPING = { 
  "เขตสุขภาพที่ 1": [{ name: "รพ.มหาราชนครเชียงใหม่", prov: "เชียงใหม่" }], "เขตสุขภาพที่ 2": [{ name: "รพ.พุทธชินราช", prov: "พิษณุโลก" }],
  "เขตสุขภาพที่ 3": [{ name: "รพ.สวรรค์ประชารักษ์", prov: "นครสวรรค์" }], "เขตสุขภาพที่ 4": [{ name: "รพ.สระบุรี", prov: "สระบุรี" }],
  "เขตสุขภาพที่ 5": [{ name: "รพ.ราชบุรี", prov: "ราชบุรี" }], "เขตสุขภาพที่ 6": [{ name: "รพ.ชลบุรี", prov: "ชลบุรี" }],
  "เขตสุขภาพที่ 7": [{ name: "รพ.ขอนแก่น", prov: "ขอนแก่น" }], "เขตสุขภาพที่ 8": [{ name: "รพ.อุดรธานี", prov: "อุดรธานี" }],
  "เขตสุขภาพที่ 9": [{ name: "รพ.มหาราชนครราชสีมา", prov: "นครราชสีมา" }], "เขตสุขภาพที่ 10": [{ name: "รพ.สรรพสิทธิประสงค์", prov: "อุบลราชธานี" }],
  "เขตสุขภาพที่ 11": [{ name: "รพ.สุราษฎร์ธานี", prov: "สุราษฎร์ธานี" }], "เขตสุขภาพที่ 12": [{ name: "รพ.หาดใหญ่", prov: "สงขลา" }],
  "กรมการแพทย์": [{ name: "รพ.ราชวิถี", prov: "กรุงเทพมหานคร" }, { name: "รพ.เลิดสิน", prov: "กรุงเทพมหานคร" }, { name: "รพ.นพรัตนราชธานี", prov: "กรุงเทพมหานคร" }],
  "สำนักการแพทย์ กรุงเทพฯ": [{ name: "รพ.กลาง", prov: "กรุงเทพมหานคร" }, { name: "รพ.ตากสิน", prov: "กรุงเทพมหานคร" }, { name: "รพ.เจริญกรุงประชารักษ์", prov: "กรุงเทพมหานคร" }],
  "สำนักอนามัย กรุงเทพฯ": [{ name: "ศูนย์บริการสาธารณสุข", prov: "กรุงเทพมหานคร" }], "อื่นๆ": [{ name: "อื่นๆ", prov: "" }]
};

// --- บทเรียน 20 บท ---
window.INITIAL_LESSONS = [
  { id: 1, title: "ยุทธศาสตร์และเป้าหมายการพัฒนาระบบบริการสุขภาพ (Service plan)", videoId: "1-sX4LnWRMSjoEQmWee-9GuiQ2XMvkSro", documentUrl: "https://drive.google.com/file/d/1FrJt9TCbOy5oewg_eMrRG8pW4dNzJHS9/view?usp=sharing" },
  { id: 2, title: "แนวทางการประเมินผู้เสียชีวิตเพื่อบริจาคดวงตาและการประสานงานฯ", videoId: "15QOjyhd0hoxpSSO0tZ7Fj4qFaZByiAzT", documentUrl: "https://drive.google.com/file/d/1iJbKaj0VwcsH0AzdyUqrt2jsTjEyhfSg/view?usp=sharing" },
  { id: 3, title: "จริยธรรม กฎหมายที่เกี่ยวข้องกับการรับบริจาคอวัยวะ และบทบาทของศูนย์ฯ", videoId: "1L5pFZh85OPDz7lWwJCBKlFDXxkTZSxt_", documentUrl: "https://drive.google.com/file/d/1PtfxrqDZrNpX_NDQBGyCqqfZsPnMRg6e/view?usp=sharing" },
  { id: 4, title: "ความสำคัญของการบริจาคและปลูกถ่ายอวัยวะ และบทบาทของบุคลากรฯ", videoId: "14hnZ80UE0KvCmW2oHE2zBTx8uBCg4rIB", documentUrl: "https://drive.google.com/file/d/1HXXlSqONQ3eq7E1Os0C8OtbZcSGbG6a5/view?usp=sharing" },
  { id: 5, title: "การประสานงานเมื่อมีผู้บริจาคอวัยวะสมองตาย และหลักเกณฑ์การจัดสรรอวัยวะ", videoId: "1wkE2CCaRgxlzHmho1ijK49SE028vNqcV", documentUrl: "https://drive.google.com/file/d/1w4xefABcn2GRTQevhpvYuybD2kLozlA6/view?usp=sharing" },
  { id: 6, title: "การเตรียมผู้ป่วยเพื่อเข้ารับการปลูกถ่ายไต และการดูแลหลังปลูกถ่ายไต", videoId: "1pu1O3swHMtTzBXjF3rG_NzfIgjYfgnLm", documentUrl: "https://drive.google.com/file/d/1u_xSPv95dvxXw85QsSx7FYYsKonJbJjj/view?usp=sharing" },
  { id: 7, title: "การจัดกิจกรรมส่งเสริมและประชาสัมพันธ์ชีวิตใหม่หลังการปลูกถ่ายอวัยวะ", videoId: "1Sc-2Z_MOD85kvWBduEEWbPiGxw1zeTec", documentUrl: "https://drive.google.com/file/d/1RSPtCHRe38si6P75CCA_85djfwJhUrdE/view?usp=sharing" },
  { id: 8, title: "กลุ่มงานการพยาบาลรับบริจาค ปลูกถ่ายอวัยวะและเนื้อเยื่อ สธ.", videoId: "1vc4b07Ooas4cozJK5cnweIl2KeeKvHbk", documentUrl: "https://drive.google.com/file/d/1WUO677apoQJeJKboj0iOZmrTIybd4_hM/view?usp=sharing" },
  { id: 9, title: "Identification of Potential Organ Donors and Assessment", videoId: "1TRLOGabpI66ZUEPybGyrpHTN5dNlYP-f", documentUrl: "https://drive.google.com/file/d/14-GXQS4-KHEUraOt8Ey2cGVkhxN12Ump/view?usp=sharing" },
  { id: 10, title: "Organ Packaging and Transportation สำหรับ รพ Donor", videoId: "1POFnLm_G2BuXWgOojDRpotM5YhBxcCnk", documentUrl: "https://drive.google.com/file/d/1VQk-wMxYRbphaBDkCnOkapwgVdTGShbV/view?usp=sharing" },
  { id: 11, title: "Family Approach", videoId: "1GpfjRpbDnilV22iL52ZyOyUcRs9MUVbu", documentUrl: "https://drive.google.com/file/d/1aRjlUNctesyliehy5KXLW7VwmGPW2R4h/view?usp=sharing" },
  { id: 12, title: "Brain Death Diagnosis", videoId: "136Gl3ocDivGYU764t7t9Qvpn_iTJTfs4", documentUrl: "https://drive.google.com/file/d/1TMceKfI3azgRVRo-GtSDluTzq1lhe8-U/view?usp=sharing" },
  { id: 13, title: "Donor Management", videoId: "1YPyTis-9VzJLPhUvwMp1IC_xs7TLIao0", documentUrl: "https://drive.google.com/file/d/1OeZIm6x3lg_-dFTUPgd9LiombnRrPrQh/view?usp=sharing" },
  { id: 14, title: "Organ Procurement", videoId: "12lOd6KsekmV0PDbdLVr2wYsz-gNnovHK", documentUrl: "https://drive.google.com/file/d/1e-PwnXUCVScRLg5bmXRjOMSC0dIeDv5r/view?usp=sharing" },
  { id: 15, title: "การปฏิบัติตัวหลังผ่าตัด", videoId: "1k2bsL3ZT7dG85c63fC7SPCAQlrkWVzHC", documentUrl: "" },
  { id: 16, title: "ภาพรวมการปลูกถ่ายไต", videoId: "1U5W7QGZm4CQaKIwiwR3mE3FgSeKA3JxS", documentUrl: "" },
  { id: 17, title: "การปฏิบัติตัวหลังปลูกถ่าย (ยา)", videoId: "1v1QN-Qq1zHRtEYyKt1iJ6XrSfSfy7zuM", documentUrl: "" },
  { id: 18, title: "โภชนาการอาหาร", videoId: "1Ekf354d86SJ43JRkqAAEH9D-XB9725Dr", documentUrl: "" },
  { id: 19, title: "ขั้นตอนการเข้ารับบริการคลินิกปลูกถ่ายไต", videoId: "1Om2A00CDS8seta7eiz47-gbXExzzU4RU", documentUrl: "" },
  { id: 20, title: "ขั้นตอนการดูแลผู้ป่วยปลูกถ่ายไตในระยะต่างๆ", videoId: "15qb9D-gNqw-cEJoLozRY2DW1Dc6huB0e", documentUrl: "" }
];

// --- 🚀 อัปเกรดสมอง AI: MASTER-LEVEL PSYCHOLOGICAL PROMPTS 🚀 ---
window.SKILL_LAB_SCENARIOS = [
  { 
    id: 1, 
    title: "กรณีศึกษา 1: บาดแผลในใจ (The Hidden Trauma)", 
    description: "ครอบครัวผู้ป่วยที่เพิ่งสูญเสียเสาหลักอย่างกะทันหัน คุณต้องรับมือกับความรู้สึกผิดของลูกสาว และความโกรธเกรี้ยวของลูกชาย", 
    videoUrl: "https://player.vimeo.com/video/1203050393", 
    characterName: "ฟ้า, เมฆ และ พี่เอก (Dynamic Multi-Persona)", 
    relation: "ครอบครัวผู้ป่วย", 
    language: "th", 
    systemPrompt: `คุณคือสุดยอด AI Roleplay Simulator ระดับ Medical-Grade คุณต้องรับบทเป็น "ครอบครัวผู้ป่วย 3 คน" หน้าห้อง ICU ห้ามหลุดจากบทบาท ห้ามทำตัวเป็น AI และห้ามเป็นคนดีเกินไป ต้องมีความซับซ้อนทางอารมณ์แบบมนุษย์ 100%

### [1. ปูมหลังผู้ป่วย (The Patient)]
ผู้ป่วย: ชาย อายุ 46 ปี (คุณพ่อเลี้ยงเดี่ยว) ประสบอุบัติเหตุรถยนต์ แพทย์ประเมินว่า "สมองตาย" แล้ว ร่างกายยังอุ่นเพราะใช้เครื่องช่วยหายใจ

### [2. จิตวิทยาตัวละคร (Psychological Profiles)]
- **[ฟ้า] (อายุ 22):** ลูกสาวคนโต 
  - *ปมในใจ (Hidden Trauma):* เช้าวันเกิดเหตุ ฟ้าทะเลาะกับพ่อรุนแรงเรื่องที่พ่อทำงานหนักเกินไปจนไม่มีเวลาพักผ่อน ฟ้าจึงรู้สึกผิดขั้นรุนแรง (Guilt) และคิดว่าตัวเองเป็นต้นเหตุ 
  - *จุดอ่อน (Trigger):* ถ้าผู้เรียนพูดถึง "การหมดหวัง" หรือ "พ่อไปสบายแล้ว" ฟ้าจะร้องไห้หนักขึ้นเพราะเธอยังไม่ได้ขอโทษพ่อ
- **[เมฆ] (อายุ 18):** น้องชาย 
  - *ปมในใจ (Hidden Trauma):* รักพ่อมาก อาการก้าวร้าวของเมฆเป็นเพียง "เกราะป้องกัน (Defense Mechanism)" เพื่อปกปิดความกลัวและความอ่อนแอข้างใน 
  - *จุดอ่อน (Trigger):* เกลียดศัพท์แพทย์ (Jargon) ถ้าผู้เรียนพูดคำว่า "สมองตาย", "GCS", "Pupil" เมฆจะสวนกลับทันทีว่า *"หมอ/พยาบาล พูดภาษาคนได้ไหม! พ่อผมตัวยังอุ่นอยู่เลย สมองตายอะไร!"*
- **[พี่เอก] (อายุ 32):** แฟนของฟ้า 
  - *ปมในใจ:* รู้ตัวว่าเป็นคนนอก ไม่มีสิทธิ์ตัดสินใจแทนครอบครัว แต่รักฟ้ามาก จึงพยายามเป็นกำแพงพิงให้ฟ้า
  - *จุดอ่อน:* ถ้าเมฆก้าวร้าวใส่หมอ พี่เอกจะดุเมฆให้เบาลง ถ้าฟ้าสติแตก พี่เอกจะลูบหลังและบอกให้ฟ้าตั้งสติฟังหมอก่อน

### [3. กฎการมีปฏิสัมพันธ์ (Interaction Dynamics)]
1. **The First Move:** เริ่มต้นด้วยภาวะ **Denial (ปฏิเสธความจริง)** เสมอ เมฆจะเชื่อว่าพ่อหลับ ฟ้าจะหวังปาฏิหาริย์ ห้ามยอมรับความตายง่ายๆ
2. **Sibling Rescue (ปฏิกิริยาลูกโซ่):** ถ้าผู้เรียนดุหรือใช้คำพูดเย็นชาใส่เมฆ ฟ้าจะหยุดร้องไห้แล้วหันมาปกป้องน้องชายทันที (เข้าสู่โหมด ANGRY)
3. **No Early Donation:** ห้ามตัวละครเอ่ยถึง "การบริจาคอวัยวะ" ก่อนเด็ดขาด จนกว่าผู้เรียนจะปูทาง (Empathy) ได้ดีพอ และเอ่ยปากถามเอง
4. **Natural Flaws:** มนุษย์พูดไม่สมบูรณ์แบบ ให้พิมพ์โดยมีคำสร้อย เช่น "ฮึก..", "เอ่อ..", "คือว่า..", หรือพิมพ์ประโยคขาดๆ หายๆ เวลาสับสน
5. **The Silence Penalty:** ถ้าผู้เรียนพิมพ์แค่ "..." หรือส่งข้อความสั้นเกินไปแบบขอไปที เมฆจะตอบกลับว่า *"หมอเงียบทำไม! ตอบมาสิว่าพ่อผมเป็นอะไร!"*
6. **[สำคัญมาก - การแนะนำตัว]:** หากผู้เรียนพิมพ์ทักทาย หรือแนะนำตัว "ฟ้า" ต้องเป็นคนตอบรับ แนะนำตัวเอง และผายมือแนะนำ "เมฆ" กับ "พี่เอก" ให้ผู้เรียนรู้จักในข้อความแรกทันที

### [4. ข้อกำหนดการส่งออก (Output Format)]
- **กฎเหล็กขั้นสูงสุด:** ให้คุณตอบกลับโดย **เลือกเพียง 1 ตัวละครต่อ 1 ครั้งเท่านั้น!** ห้ามพิมพ์บทพูดของหลายคนออกมาพร้อมกันในข้อความเดียว
- ตอบขึ้นต้นด้วย Tag อารมณ์และชื่อเสมอ เพื่อให้ระบบดึงวิดีโอถูก:
  - [SAD] [ฟ้า] ฮึก... พ่อยังหายใจอยู่นะคะหมอ...
  - [ANGRY] [เมฆ] หมอรักษาประสาอะไรวะ!
  - [NEUTRAL] [พี่เอก] ใจเย็นๆ ไอเมฆ ฟังคุณหมอก่อน
(อารมณ์ที่รองรับ: SAD, ANGRY, CONFUSED, HESITANT, NEUTRAL, ADVISING)` 
  },
  { 
    id: 2, 
    title: "กรณีศึกษา 2: วัฒนธรรมต่างแดน (Cross-Cultural Barrier)", 
    description: "รับมือญาติชาวต่างชาติที่ไม่เข้าใจระบบสาธารณสุขไทย ความท้าทายคือภาษาและการจัดการความคาดหวัง", 
    videoUrl: "https://player.vimeo.com/video/1203050393", 
    characterName: "Fah and Mek (Foreign Tourists)", 
    relation: "ครอบครัวผู้ป่วย (ต่างชาติ)", 
    language: "en", 
    systemPrompt: `You are an elite AI Roleplay Simulator acting as "Two Foreign Relatives" in a Thai ICU. You must stay strictly in character, displaying complex human emotions and cultural barriers. Output ONLY IN ENGLISH.

### [1. The Patient Context]
Patient: 46yo Male tourist, single father. Involved in a severe tuk-tuk accident. Doctors have pronounced "Brain Death" (GCS 3). He is on a ventilator.

### [2. Psychological Profiles]
- **[Fah] (Age 22):** Daughter. 
  - *Hidden Trauma:* She forced her dad to come on this trip to Thailand. She carries immense guilt.
  - *Trigger:* If the user says "passed away" or "died", she will point to the monitor crying, *"But the machine says his heart is still beating! You're lying!"*
- **[Mek] (Age 18):** Son. 
  - *Hidden Trauma:* Feels utterly helpless in a foreign country. Distrusts the local medical system.
  - *Trigger:* Extremely hostile towards medical jargon. If the user says "Brain Death" or "Apnea test" without explaining kindly, Mek will erupt: *"Speak English! What the hell are you doing to my dad?!"*

### [3. Interaction Rules]
1. **Culture Shock:** They do not understand Thai healthcare. They might demand to fly their dad back home immediately. The user must navigate this impossibility gracefully.
2. **One at a Time [STRICT]:** You must output ONLY ONE character's response per turn! NEVER output both characters in a single message!
3. **Format:** Always start with an Emotion Tag and Name:
   - [SAD] [Fah] Please... please save him...
   - [ANGRY] [Mek] I demand to see the head doctor!
   - [CONFUSED] [Fah] I don't understand... he was fine this morning.
(Supported Emotions: SAD, ANGRY, CONFUSED, HESITANT, NEUTRAL, ADVISING)` 
  }
];

// --- ข้อสอบ 40 ข้อ (ย่อลงเพื่อประหยัดพื้นที่ แต่ข้อมูลครบตามเดิม) ---
window.QUIZ_QUESTIONS_RAW = [
  "เป้าหมายหลักของ Service Plan สาขาการรับบริจาคและปลูกถ่ายอวัยวะคือข้อใด?|ลดค่าใช้จ่ายในการดูแลผู้ป่วยวิกฤต|เพิ่มจำนวนผู้บริจาคอวัยวะสมองตายและผู้ได้รับการปลูกถ่ายอวัยวะให้เพียงพอ|ลดภาระงานของบุคลากรทางการแพทย์ในห้องICU|สร้างศูนย์ปลูกถ่ายอวัยวะในทุกชุมชน|1",
  "การจัดเก็บดวงตา (Eye procurement) ควรดำเนินการให้แล้วเสร็จอย่างช้าที่สุดภายในกี่ชั่วโมงหลังผู้ป่วยเสียชีวิต?|ภายใน 2 ชั่วโมง|ภายใน 24-48 ชั่วโมง|ภายใน 3 วัน|ภายใน 6-8 ชั่วโมง (หากมีการประคบเย็นอาจยืดได้)|3",
  "ประโยชน์สูงสุดของการปลูกถ่ายไตเมื่อเทียบกับการฟอกเลือด (Dialysis) คืออะไร?|ผู้ป่วยไม่ต้องทานยากดภูมิคุ้มกันอีกเลย|แพทย์ทำงานง่ายขึ้นโดยไม่ต้องตรวจติดตามผล|สามารถรับประทานอาหารได้ทุกชนิดโดยไม่มีข้อจำกัด|ผู้ป่วยมีคุณภาพชีวิตที่ดีขึ้น อัตราการรอดชีวิตสูง และลดภาระค่าใช้จ่ายระยะยาว|3",
  "การบรรจุไตเพื่อขนส่ง (Kidney Packaging) ต้องรักษาอุณหภูมิให้อยู่ในช่วงใด?|แช่แข็งในน้ำแข็งแห้ง (-20 องศาเซลเซียส)|อุณหภูมิห้อง (25 องศาเซลเซียส)|2-4 องศาเซลเซียส (แช่ในน้ำแข็งเกล็ดที่กำลังละลาย)|แช่ในน้ำอุ่น (37 องศาเซลเซียส)|2",
  "การทำ Decoupling หมายถึงการแยกเรื่องใดออกจากเรื่องใด?|แยกการทำงานของหัวใจออกจากปอด|แยกหมอออกจากพยาบาล|แยกการแจ้งข่าวสมองตาย ออกจากการเจรจาขอรับบริจาคอวัยวะ|แยกญาติผู้ชายออกจากญาติผู้หญิง|2",
  "การทำ Apnea Test เป็นขั้นตอนสำคัญเพื่อพิสูจน์สิ่งใด?|เพื่อดูว่าหัวใจยังเต้นอยู่หรือไม่|เพื่อพิสูจน์ว่าศูนย์ควบคุมการหายใจที่ก้านสมองสูญเสียการทำงานอย่างถาวร|เพื่อกระตุ้นให้ผู้ป่วยฟื้นคืนสติ|เพื่อดูการทำงานของปอดก่อนบริจาค|1",
  "ข้อใดคือเกณฑ์อายุขั้นต่ำในการแสดงความจำนงบริจาคอวัยวะได้ด้วยตนเองตามกฎหมายไทย?|15 ปีบริบูรณ์|18 ปีบริบูรณ์|20 ปีบริบูรณ์|ไม่มีข้อจำกัดหากได้รับความยินยอมจากผู้ปกครอง|1",
  "อวัยวะใดต่อไปนี้ไม่สามารถปลูกถ่ายได้?|สมอง|หัวใจ|ปอด|ตับอ่อน|0",
  "ข้อใดคือสาเหตุการเสียชีวิตที่พบได้บ่อยที่สุดในกลุ่มผู้บริจาคอวัยวะสมองตาย?|โรคมะเร็งระยะสุดท้าย|อุบัติเหตุทางศีรษะ (Traumatic Brain Injury)|โรคติดเชื้อในกระแสเลือด|โรคหัวใจล้มเหลวเฉียบพลัน|1",
  "ในการเจรจาขอรับบริจาคอวัยวะ หากญาติมีความเชื่อว่า 'บริจาคแล้วชาติหน้าอวัยวะจะไม่ครบ' บุคลากรทางการแพทย์ควรตอบสนองอย่างไร?|อธิบายว่าตามหลักพุทธศาสนา การเสียสละร่างกายเป็นทานบารมีขั้นสูง|เพิกเฉยและเปลี่ยนไปคุยเรื่องอื่น|บอกว่าเป็นความเชื่อที่ผิดและไม่มีเหตุผล|ยุติการเจรจาทันที|0"
];

// --- 📍 ข้อมูลพิกัดแผนที่ 13 เขต ---
window.BASE_REGIONS = [
  { id: 'R1', name: 'เขตสุขภาพที่ 1', desc: 'เชียงใหม่และภาคเหนือตอนบน', x: 28, y: 15 },
  { id: 'R2', name: 'เขตสุขภาพที่ 2', desc: 'พิษณุโลกและภาคเหนือตอนล่าง', x: 34, y: 32 },
  { id: 'R3', name: 'เขตสุขภาพที่ 3', desc: 'นครสวรรค์และภาคกลางตอนบน', x: 38, y: 44 },
  { id: 'R4', name: 'เขตสุขภาพที่ 4', desc: 'สระบุรีและภาคกลางตอนบน', x: 44, y: 50 },
  { id: 'R5', name: 'เขตสุขภาพที่ 5', desc: 'ราชบุรีและภาคตะวันตก', x: 32, y: 58 },
  { id: 'R6', name: 'เขตสุขภาพที่ 6', desc: 'ชลบุรีและภาคตะวันออก', x: 58, y: 60 },
  { id: 'R7', name: 'เขตสุขภาพที่ 7', desc: 'ขอนแก่นและอีสานตอนกลาง', x: 62, y: 38 },
  { id: 'R8', name: 'เขตสุขภาพที่ 8', desc: 'อุดรธานีและอีสานตอนบน', x: 74, y: 26 },
  { id: 'R9', name: 'เขตสุขภาพที่ 9', desc: 'นครราชสีมาและอีสานตอนล่าง', x: 62, y: 48 },
  { id: 'R10', name: 'เขตสุขภาพที่ 10', desc: 'อุบลราชธานีและอีสานตอนล่าง', x: 82, y: 48 },
  { id: 'R11', name: 'เขตสุขภาพที่ 11', desc: 'สุราษฎร์ธานีและภาคใต้ตอนบน', x: 28, y: 78 },
  { id: 'R12', name: 'เขตสุขภาพที่ 12', desc: 'สงขลาและภาคใต้ตอนล่าง', x: 38, y: 92 },
  { id: 'BKK', name: 'กรุงเทพมหานคร', desc: 'ศูนย์กลางการแพทย์และสาธารณสุข', x: 48, y: 56 }
];

window.LIVE_REPORT_URL = "https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/report.txt"; 

window.AI_INSIGHT_TEXT = `📊 AI Policy Intelligence Report:\n\n[1] มิติบุคลากร (Status Quo):\n• เข้าร่วมโครงการ {{USERS}} ราย | ผ่านเกณฑ์ {{PASSED}} ราย\n• กำลังรักษาระดับการฝึกเจรจา (Skill Lab) เพื่อปิดช่องว่างการขาดแคลนทีมภูมิภาค\n\n[2] มิติความเหลื่อมล้ำเชิงพื้นที่ (Geo-Equity):\n• ภูมิภาคนำร่องสูงสุด: {{MAX_REG_NAME}} ({{MAX_REG_USERS}} ราย)\n• พื้นที่เฝ้าระวัง: {{MIN_REG_NAME}} ({{MIN_REG_USERS}} ราย)\n\n[3] มิติวิกฤตระดับชาติ (National Crisis Benchmark):\n• ปัจจุบันไทยมีผู้รออวัยวะสะสมกว่า 8,019 ราย\n• คอขวดหลัก: "ขาดทักษะการเจรจาในห้อง ICU" ระบบ RJ Ailiverse จึงเป็นเครื่องมือเร่งด่วนในการแก้ปัญหานี้`;

window.POLICY_SPEECH = `สวัสดีค่ะท่านผู้บริหาร ฟ้าทำการสังเคราะห์ข้อมูลล่าสุดพบว่า ขณะนี้เรามีบุคลากรในระบบ {{USERS}} ท่าน สอบผ่านแล้ว {{PASSED}} ท่านค่ะ จากมิติเชิงพื้นที่พบว่า {{MAX_REG_NAME}} มีความตื่นตัวสูงสุดค่ะ อย่างไรก็ตาม ปัจจุบันผู้ป่วยชาวไทยที่รออวัยวะพุ่งสูงกว่าแปดพันราย คอขวดสำคัญคือการขาดทีมเจรจาในภูมิภาค ฟ้าขอเสนอให้เร่งนโยบายจัดเก็บในเขตปลูกถ่ายในเขต และใช้ระบบของเราเป็นเกณฑ์มาตรฐานแห่งชาติในการประเมินทักษะค่ะ ท่านสามารถดูรายละเอียดรายงานเชิงนโยบายบนหน้าจอได้เลยค่ะ`;
