# 🌳 Family Tree Coding Challenge

## 📌 Overview
This project implements a family tree system for the Lengaburu kingdom.

It supports:
- Adding a child through the mother
- Fetching relationships like Siblings, Maternal-Aunt, Paternal-Uncle

---

## 🧠 Approach

- Designed using Object-Oriented Programming (OOP)
- A central `Person` model represents each individual
- `FamilyTree` service manages members and relationships
- Relationship logic is separated into modular handlers
- A resolver pattern is used to fetch relationships dynamically

---
---

## ▶️ How to Run

npm install
npx ts-node src/index.ts input.txt

---

## 📥 Input Format

ADD_CHILD Flora Minerva Female
GET_RELATIONSHIP Minerva Paternal-Uncle

---

## 📤 Sample Output

CHILD_ADDED
Balin Balan

---

## ⚠️ Error Handling

PERSON_NOT_FOUND
CHILD_ADDITION_FAILED
NONE

---

## 📁 Project Structure

src/
  models/
  services/
  relationships/
  utils/
  index.ts

---

## 📌 Assumptions

- Only mother can add a child
- No database used
- Single-threaded

---

## 🧩 Extensibility

New relationships can be added easily using handlers

## 🏗️ Tech Stack

- TypeScript
- Node.js

---

## ▶️ How to Run

```bash
npm install
npx ts-node src/index.ts input.txt
