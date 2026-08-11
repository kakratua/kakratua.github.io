---
title: "Python Automation เริ่มจากงานเล็กก่อน"
description: "เลือกงานซ้ำที่เหมาะกับการทำอัตโนมัติ และวางโครงสคริปต์ให้อ่านง่าย"
tags: [Python, Automation]
categories: [Coding]
reading_time: "อ่าน 6 นาที"
---

งานอัตโนมัติที่ดีไม่จำเป็นต้องเริ่มจากระบบใหญ่ ลองเลือกงานที่ทำซ้ำ มีเงื่อนไขชัด และตรวจผลลัพธ์ได้

## ตัวอย่างโครงสร้าง

```python
from pathlib import Path

source = Path("input")
output = Path("output")
output.mkdir(exist_ok=True)

for file in source.glob("*.txt"):
    text = file.read_text(encoding="utf-8")
    (output / file.name).write_text(text.strip(), encoding="utf-8")
```

เพิ่ม logging และ validation เมื่อเริ่มใช้งานจริง
