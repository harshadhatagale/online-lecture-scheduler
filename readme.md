# Online Lecture Scheduling Module

## Project Overview

The Online Lecture Scheduling Module is a web-based application designed to streamline the management of courses, batches, instructors, and lecture schedules.

The system enables administrators to create courses, organize them into batches, assign instructors to lectures, and manage schedules efficiently. It also provides instructors with a dedicated panel to view their assigned lectures.

A key feature of the application is its scheduling validation mechanism, which prevents an instructor from being assigned to multiple lectures on the same date, ensuring conflict-free scheduling.

---

# Project Objectives

* Simplify lecture scheduling and management.
* Maintain organized course and batch structures.
* Prevent instructor scheduling conflicts.
* Provide separate interfaces for administrators and instructors.
* Offer a centralized platform for lecture planning and tracking.

---

# User Roles

## Administrator

Administrators are responsible for managing the complete scheduling process.

### Administrator Capabilities

* Create and manage courses.
* Create batches for courses.
* View available instructors.
* Schedule lectures.
* Assign instructors to lectures.
* Monitor lecture schedules.
* Ensure instructors are not double-booked.

---

## Instructor

Instructors have access only to their assigned lecture information.

### Instructor Capabilities

* Log in securely.
* View assigned lectures.
* View lecture dates.
* View associated course and batch details.

---

# Core Features

## Course Management

Administrators can create courses by providing:

* Course Name
* Course Level
* Course Description
* Course Image

Each course acts as the foundation for creating one or more batches.

---

## Batch Management

A course may contain multiple batches.

Example:

Course:

* MERN Stack Development

Batches:

* Weekend Batch
* Morning Batch
* Evening Batch

This structure allows the same course to be offered multiple times to different groups of learners.

---

## Lecture Scheduling

Administrators can schedule lectures by selecting:

* A Batch
* An Instructor
* A Lecture Date

Once scheduled, the lecture becomes visible to the assigned instructor.

---

## Conflict Prevention

The system automatically validates lecture assignments.

### Example

Valid Assignment:

* Instructor: Rahul
* Date: 1 January 2026

Another Valid Assignment:

* Instructor: Rahul
* Date: 2 January 2026

Invalid Assignment:

* Instructor: Rahul
* Date: 1 January 2026
* Another lecture on the same date

The system prevents the second assignment and displays an appropriate message.

This ensures that instructors cannot be assigned multiple lectures on the same day.

---

# User Guide

## Login

Route:

/login

Steps:

1. Enter email address.
2. Enter password.
3. Click Login.

The user is redirected to the appropriate panel based on their role.

---

## Registration

Route:

/register

Steps:

1. Enter name.
2. Enter email.
3. Enter password.
4. Submit the registration form.

---

# Administrator Workflow

## Dashboard

Route:

/

Purpose:

* Access administrative features.
* Navigate to course, batch, and lecture management pages.

---

## Create Course

Route:

/create-course

Steps:

1. Enter course information.
2. Submit the form.
3. The course is added to the system.

---

## Create Batch

Route:

/create-batch

Steps:

1. Enter batch name.
2. Select an existing course.
3. Submit the form.

The batch is linked to the selected course.

---

## Schedule Lecture

Route:

/schedule-lecture

Steps:

1. Select a batch.
2. Select an instructor.
3. Choose a lecture date.
4. Submit the schedule.

The system validates instructor availability before creating the lecture.

---

# Instructor Workflow

## My Lectures

Route:

/my-lectures

Purpose:

Allows instructors to view all lectures assigned to them.

Information displayed:

* Course Name
* Batch Name
* Lecture Date

---

# Application Routes

| Route             | Description              |
| ----------------- | ------------------------ |
| /login            | Login Page               |
| /register         | Registration Page        |
| /                 | Dashboard                |
| /create-course    | Create Course            |
| /create-batch     | Create Batch             |
| /schedule-lecture | Schedule Lecture         |
| /my-lectures      | Instructor Lecture Panel |

---

# Live Application

Frontend Application:

https://online-lecture-scheduler.vercel.app

Backend Service:

https://online-lecture-scheduler-fm33.onrender.com

---

# Expected Usage Flow

### Administrator

Login
→ Create Course
→ Create Batch
→ Schedule Lecture
→ Monitor Lectures

### Instructor

Login
→ View Assigned Lectures
→ Logout

---

# Benefits of the System

* Centralized lecture scheduling.
* Easy course and batch management.
* Instructor workload control.
* Conflict-free scheduling process.
* Improved administrative efficiency.
* Clear visibility of assigned lectures.

---

# Conclusion

The Online Lecture Scheduling Module provides a structured and efficient way to manage educational scheduling activities. By organizing courses, batches, instructors, and lectures in a single platform while preventing scheduling conflicts, the system helps ensure smooth academic operations for both administrators and instructors.
