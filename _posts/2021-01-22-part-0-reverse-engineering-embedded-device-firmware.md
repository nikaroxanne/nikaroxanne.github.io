---
layout: post
title: Introduction -- Security Research for Reverse Engineering Firmware of Embedded Devices

---


This project serves as an overview of reverse engineering methodologies related to the remediation of security vulnerabilities in the firmware of embedded devices. As an overview, it seeks to define the terms of the problem and to use an axiomatized approach to make inferences about more complex systems— specifically how to identify and patch rootkits in embedded device firmware. This overview will not detail remediation techniques for specific rootkits. Rather it will serve as a collection of all research undertaken, and provide a conceptual framework for anyone interested in exploring related projects. 

This project was originally started as an investigation to solve a specific problem for a job interview. In respecting the wishes of the company, I will not detail specifics about the embedded device that was given to me, nor or the firmware rootkit present therein. Rather, this project seeks to establish a compendium of the foundational knowledge necessary to approach similar problems. Consider this project as an instance of using the scientific method to solve groups of related problems related to reverse engineering the firmware of embedded devices. It is an example of using the logic of deductive reasoning to expound upon and make inductive inferences about other devices. 

As someone who had no prior experience with hardware reverse engineering before beginning this project, much of the work on this project was completed in an effort to better understand the embedded device that was presented to me. This project includes a plethora of information, and the reader is invited to peruse sections as they see fit. I have detailed my methodology for approaching each step of the reverse engineering process and have presented the information in each section in a way that aims to appeal to both the novice and the seasoned reverse engineer.

All images, including both screenshots and drawings, are my own. 

This project does not provide an exhaustive overview of any one particular subject area, and elucidates only the concepts that were critically important for understanding reverse engineering methodology. As a result, an extensive references section is provided at the end of each section, as well as at the conclusion, for any reader looking to explore any one subject area more deeply.   

Part of the reason for writing this document was that a vast majority of the resources that I consulted during my work on the project assumed prior knowledge, on the part of the reader/viewer, of certain terms. For a novice hardware reverse engineer, the absence of this prerequisite information proved to be a hurdle. My hope is that this project can explain that fundamental prerequisite knowledge and help you clear those hurdles with a minimum number of bruises to your shins. If nothing else, I’ll be waiting at the finish line with a Powerade Zero and an ice pack.  

The project assumes prior knowledge of programming fundamentals. 

All parts of this project will be posted in the coming weeks. The project can also be found under the projects section of this site, or by following this <a href="/projects/reverseEngineeringFirmware">link.</a>
A table of contents is listed below.


Table of Contents:

1. An introduction, including definitions of important terms
2. Methodology and motivations for reverse engineering embedded devices
3. An overview of electrical engineering fundamentals necessary to understand serial communication on an embedded device. 
4. An overview of serial communication protocols
5. An overview of operating system fundamentals related to the firmware reverse engineering process
6. An overview of the Linux boot process
7. An overview of memory management in the Linux kernel
8. An overview of BSD and System-5 Linux rootkits
9. An overview of rootkit identification methods
10. An overview of rootkits remediation techniques
11. An overview of ARM architecture
	a. ARM assembly
	b. ARM assembly vs x86 assembly
	c. Identifying code sections, programming language constructs in ARM assembly
12. An overview of hardware hacking techniques
	a. Definitions and illustrations of hardware
	b. Soldering
	c. Identifying test points
	d. Dumping contents of serial flash chips
	e. Patching contents of serial flash chips
13. Conclusion
14. References
