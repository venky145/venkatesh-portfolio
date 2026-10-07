---
title: GeGo Home
kind: personal
status: in-development
tagline: A calmer way to run a household.
summary: A native iOS and iPadOS household coordination app that gives everyone a clear view of what needs attention, who is responsible, and what is coming next.
context: Native iOS & iPadOS · SwiftUI
role: Founder / iOS Engineer
technologies:
  - Swift
  - SwiftUI
  - Observation
  - Swift Concurrency
  - UserNotifications
  - XCTest
image: /apps/gego-home/01.png
imageFit: contain
frame: "phone"
screenshots:
  - src: /apps/gego-home/01.png
    alt: GeGo Home, the task that needs attention first
  - src: /apps/gego-home/02.png
    alt: GeGo Home, the next task in the carousel
  - src: /apps/gego-home/03.png
    alt: GeGo Home, another household task
  - src: /apps/gego-home/04.png
    alt: GeGo Home remind me options
  - src: /apps/gego-home/05.png
    alt: GeGo Home, reassign a task to someone else
  - src: /apps/gego-home/06.png
    alt: GeGo Home, a completed task with undo
order: 4
featured: true
caseStudy: false
---

### Problem

GeGo Home is a native iOS and iPadOS household coordination app, designed to reduce everyday family chaos by giving everyone a clear view of what needs attention, who is responsible, and what is coming next.

### Product thinking

I am designing and building the product end to end in SwiftUI, with a focus on calm UX, privacy-aware task visibility, household collaboration, and a maintainable native architecture.

### Architecture

- Native SwiftUI architecture using Observation, pragmatic MVVM, pure domain rules, and value-based navigation.
- A progressive household domain designed around Tasks, Members, future Spaces, and recurring Routines.

### Engineering decisions

- An attention-based Home that prioritises approaching, overdue, and important household tasks.
- Interactive task flows for completion, reminders, rescheduling, reassignment, and Undo.
- A family overview of each member's responsibilities, with Personal and shared task visibility.
- Native local notifications and contextual reminders.
- Unit tests around task ranking, privacy, reminders, reassignment, and household behaviour.

### What's next

Evolving GeGo Home beyond a shared to-do list into a model of the household itself — spaces, recurring home-care routines, assignment requests, and a derived view of which areas of the home need attention.

