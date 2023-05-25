---
title: "TryHackMe: Welcome — CTF Writeup [TR]"
date: 2022-04-23T09:00:00Z
summary: Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır. Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır.
draft: false
type: post
author: Kaptan
categories:
  - TryHackMe
---

{{< toc >}}

Siber güvenlikte becerilerinizi geliştirmeye başlamak için TryHackMe odasını nasıl kullanacağınızı öğrenin. Ayrıca odalara ve görevleri tamamlamak için gereken sanal makinelerin nasıl çalıştırılacağına öğrenin. Bu odaya şu adresten ulaşabilirsiniz: 

https://tryhackme.com/room/welcome

## Access your first machine

**Question 1:**

Go to your machines website (`http://MACHINE_IP`):
+ What is the flag text shown on the machines webpage?

**Answer:**

1. Bu görevde gösterilen makineyi çalıştırın ve yapılandırması için 1 dakika bekleyin.
2. Çalıştırdığınız makinenin IP’sini kopyalayın.
3. Kopyaladığınız ip adresini web tarayıcınıza yapıştırın. Flag görünecektir.


```zsh
Flag, web sayfasında; 'You can access TryHackMe machines!' hemen altında olacaktır.
flag{connection_verified}
```
Bu odayı bizlere sunan tryhackme'ye teşekkürler!

{{< further-reading >}}

