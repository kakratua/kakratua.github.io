# Greerati Pro Jekyll Template

เว็บไซต์ Jekyll แบบ custom ที่พร้อม Deploy บน GitHub Pages ผ่าน GitHub Actions

## ฟีเจอร์

- Landing page สไตล์ modern enterprise
- Dark/Light mode และจำค่าที่เลือก
- Blog พร้อม Tag filter
- Projects collection
- Timeline, About และ Travel
- Responsive สำหรับมือถือ
- SEO meta พื้นฐาน, favicon และหน้า 404
- GitHub Actions workflow พร้อมใช้

## อัปขึ้น GitHub Pages

1. แตก ZIP
2. สร้าง repository ชื่อ `YOUR-USERNAME.github.io`
3. อัปโหลดไฟล์และโฟลเดอร์ทั้งหมดจากภายใน ZIP ไปที่ root ของ repository
4. ไปที่ **Settings > Pages**
5. ที่ **Build and deployment > Source** เลือก **GitHub Actions**
6. Push หรือ Commit ไปที่ branch `main`

## สิ่งที่ควรแก้ก่อนเผยแพร่

- `_config.yml`: title, description, url
- `_includes/footer.html`: GitHub, LinkedIn และ Email
- `about.md`: ประวัติและ Timeline
- `_posts/`: บทความ
- `_projects/`: โปรเจกต์

## ทดสอบในเครื่อง (ไม่บังคับ)

```bash
bundle install
bundle exec jekyll serve
```

จากนั้นเปิด `http://localhost:4000`

## เพิ่มบทความ

สร้างไฟล์ `_posts/YYYY-MM-DD-slug.md`

```yaml
---
title: "ชื่อบทความ"
description: "คำอธิบายสั้น"
tags: [Python, Automation]
categories: [Coding]
reading_time: "อ่าน 5 นาที"
---
```

## หมายเหตุ

Template นี้เป็นงานออกแบบใหม่ ไม่ได้คัดลอกไฟล์ของ Chirpy และใช้โค้ดภายใน repository นี้เพื่อให้แก้ไขต่อได้ง่าย
