---
title: 'Programming the Website'
pubDate: 2024-02-21
author: 'Fabian'
image: 'astro.jpg'
tags: ['Website']
slug: programming-the-website
---

## Goals of the Website

With our Website our main goal was to make an very easy to use and good brand representation of PimpMyRide.

## Setting up the Boilerplate

At first we setup the boilerplate which was created with our UI-Library **NextUI** which was shipped together with **NextJS**. </br>
After the initial install we made the basic logic of the Navigation and Footer.

## Making the Landingpage

The first real thing we made was the **Landingpage**. </br>
It consists of a video which takes the first size of the screen, where it displays our Logo in the middle. Under the video there are 3 brackets of information displayed, which include: **What we are**, **Making aware of our Blog** and presenting our **RC-Project**

## Making the About-Page

The content of the **About-Page** is a picture presented information about all team members. </br>
These are displayed in **Cards** where you can click a Button which opens a **Modal** with specific information about the person.

## Making the Blog

The **Blog** is for our documentation and representation of our **Media** we produce at PimpMyRide. </br>
The initial design was made by Noel such as the logic. 

At the point where we were finished we had a problem. It was that the markdown files weren't rendered right and we had to make an decition.

## Migrating from NextJS to Astro

Because of the **Blog Problem** we chose a new Framework named **Astro**. </br>
In about 5h we rebuild the whole Website in Astro. It was so fast because Astro supports React components, so we could take the components from NextJS and put it in Astro.