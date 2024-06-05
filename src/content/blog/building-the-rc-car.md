---
title: 'Building the RC-Car'
pubDate: 2024-06-03
author: 'Dominik Leitner'
image: ''
tags: ['RC-Car']
slug: building-the-rc-car
---


## Ideen & Umgesetzte Punkte

**Ürsrpüngliche Ideen:**
- Motor & Servomotor (movement)
- LEDs
- Speaker
- Web Controller

**Umgesetzte Punkte:**
- Motor & Servomotor (movement)
- LEDs (Unterbodenbeleuchtung)
- Web Controller

Einige der ursrpünglich geplanten Ideen konnten letztendlich nicht in die Tat umgesetzt werden. Einerseits aufgrund der benötigten Ressourcen und andererseits weil unsere Steuereinheit (ESP32) zu wenig Speicherkapazität für alle geplanten Funktionen besitzt.


## Wie funktioniert das RC-Car?

**Schaltkreise und Bauteile:**
Um ein ferngesteuertes Auto zu bauen benötigt man zuerst einmal alle wichtigen Bauteile. Damit die Kosten für das Projekt möglichst gering bleiben, haben wir dass Gehäuse sowie die Motoren von einem alten RC-Car als Grundlage verwendet.

Im Großen und Ganzen besteht das Auto aus einem 12V Akku, einer kleinen Powerbank als Stromversorgung für die Microcontroller und einfachen Mosfet-Schaltungen damit der Antriebsmotor, die 12V-LEDs und der Servo über den ESP32 gesteuert werden können.

**Controller Applikation:**
Wenn man das Auto nun Steuern möchte muss man sich nur mit dem WLAN **"PimpMyRide"** verbinden und im Browser die IP des Microcontrollers eingeben. Dann erscheint auch schon eine simple Webseite mit der Mann Lenken, Fahren und das Licht steuern kann.

Die Website und somit auch der Webserver laufen auf dem Accesspoint-ESP32. Durch versenden von GET/POST Requests an den Steuer-ESP32 kann das Auto dann gesteuert werden.


## Welche Probleme sind aufgetreten?

Wie zuvor schon erwähnt wurden ein paar der Ideen letztendlich nicht umgesetzt. Hauptsächlich aufgrund von Material, Ressourcen und fehlender Speicherkapazität. Nicht umgesetz wurden:

- **Lautsprecher:**
  Diesen habe ich zwar über den ESP32 schon einmal zum Laufen gebracht, leider ist aber die dazu benötigte Arduino-library zu groß und hätte nur über einen weiteren ESP32 gesteuert werden können. Da wir aber nur zwei Microcontroller haben musste diese Idee leider von der Liste gestichen werden.
- **Rückwärtsgang:**
  Ich habe viel Zeit in Recherche und Ausprobieren von verschiedenen Schaltungen investiert und bin leztendlich zum Entschluss gekommen, dass alleinig mit den verfügbaren Bauteilen keine Möglichkeit besteht einen Rückwärtsgang zu bauen. Dafür müsste man die Schaltung irgendwie umkehren oder + und - am Motor vertauschen. 
- **Speed:**
  Da das alte Gehäuse vom RC-Car schon recht alt und teilweise beschädigt ist und der Allrad antrieb jetzt nur noch über die Vorderachse funktioniert (hintere Achsen sind abgebrochen oder nicht mehr existent) kann fast keine Beschleunigung generiert werden und das Auto fährt nur sehr langsam. Hebt man das Auto aber hoch sieht man das sich die Reifen aber mit voller Kraft drehen. 


## Zeiteinteilung & Tagebuch

  1. Recherche, welchen Microcontroller, welche Bauteile wir benötigen -> Bestellen der Bauteile (2h)
  2. Recherche zu ESP32 und wie damit ein Servo, Gleichstrommotor betrieben werden kann (3h)
  3. Konstruieren der Schaltungen in Tinkercad (2h)
  3. Testaufbau der Servomotorschaltung, schreiben eines hardcoded Programmcodes, der den Servo hin und her schwenken lässt, Kalibrieren des Servos (2h)
  4. Webpage bauen: einfache Web-App zum Steuern des Servos bauen -> Steurung funktioniert (1.5h)
  5. Versuch: Motor über vorhandenen NPN-Transistor zu Schalten -> schlägt aber fehl (2h)
  6. Erneute Recherche zu Tranistor und Motoren: Entschluss -> Mosfets bestellen (2h)
  7. Motorschaltung mit Mosfet funktionsfähig aufbauen, ESP32 schaltet Verstärkerschaltung ein & aus (3h)
  8. Problem: Reifen drehen sich zwar, Trägheit ist aber zu groß -> erneute Recherche und Aufbau in Tinkercad; wie bekommt der Motor mehr Strom? (2h)
  9. Auslagern des Web-Controller programms in eine am Laptop auszuführende Applikation = weniger Speicherauslastung am ESP32 (1.5h)
  10. **Milestone:** 1ter Prototyp -> Fahren, Lenken, Web-Controller
  11. Versuch aufbau einer Bluetooth-Speaker Schaltung mit ESP32: funktioniert -> library verbraucht aber zu viel Speicher am Microcontroller und wird deshalb nicht am RC-Car umgesetzt. (2h)
  12. Aufbauen der LEDs für die Unterbodenbeleuchtung und hinzufügen der Steuerung davür zum Web-Controller (2h)
  13. Migrieren der Controller-Applikation zurück auf den ESP32, Microcontroller hat 2Cores (1. Accesspoint, 2. Webseite anzeigen), dauert leider so lange, weil der gesamte HTML, Javascript, css Code als String in der Arduino IDE mitgegeben werden muss (2.5h)
  14. GUI-Design der Controller-Applikation etwas verschönern (1h)
  15. Finish (ca. 30h gesamt)
