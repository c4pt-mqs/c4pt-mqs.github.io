---
title: "TryHackMe: Tutorial — CTF Writeup [TR]"
date: 2022-04-23T09:00:00Z
summary: Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır. Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır.
draft: false
type: post
author: Kaptan
weight: -1
categories:
  - Rehber
---

{{< toc >}}

Bu oda, TryHackMe'deki odalara ve görevleri tamamlamak için gereken sanal makinelerin (VM'ler) nasıl çalıştırılacağına dair bir giriş niteliğindedir. Bu odaya şu adresten ulaşabilirsiniz:

https://tryhackme.com/room/tutorial

### Starting your first machine

Sanal makine (VM), bir bilgisayarın öykünmesidir. Bir VM, başka bir bilgisayara fiziksel olarak sahip olmadan o bilgisayarın işlevini görür. TryHackMe, birçok farklı aktivite uygulamamıza izin vermek için sanal makineleri kullanır. Makinelerden biri saldırmak; diğerini ise saldıracağımız makine(target) olarak kullanırız.

{{< figure src="/img/content/tryhackme/tutorial/1.jpeg" alt="Description of image" loading="lazy" width="100%" height="auto" >}}

1. Odanın üst kısmındaki mavi ‘Start AttackBox' düğmesine tıklayarak erişilebilen Saldırı Makinesidir. AttackBox, bir Ubuntu Linux makinesine erişmenizi sağlayan yandan bir görünümde açılacaktır. Bu, TryHackMe'de diğer makinelere saldırmak için kullandığımız makinedir.

2. Görev 1'in üst kısmındaki yeşil "Start Machine" düğmesine tıklayarak erişilen Hedef(target) Makinesidir. Start Machine, makinenin adı ve IP adresi hakkında bilgi içeren odanın en üstünde bir bölüm açar. Bir görevde ne zaman bir makine açsak, bunu genellikle AttackBox'ımız ile o makineye saldırmak için yaparız.
Bu odada, (target)makinemize AttackBox'ımızdan erişmemiz gerekiyor. AttackBox'ta Firefox web tarayıcısını açın.
Ardından, Firefox'ta konum çubuğuna http://`<IP>` yazın ve `<IP>` yerine dağıtılan makinenin IP adresini yazın. Bu IP adresi, odanın üst kısmındaki kartta bulunuyor.

{{< figure src="/img/content/tryhackme/tutorial/2.jpeg" alt="Description of image" loading="lazy" width="100%" height="auto" >}}

AttackBox'taki Firefox web tarayıcısını kullanarak ve hedef makinenin IP adresine gidelim.

{{< figure src="/img/content/tryhackme/tutorial/3.jpeg" alt="Description of image" loading="lazy" width="100%" height="auto" >}}

**Question 1:**

Follow the steps in this task. What is the flag text shown on the website of the machine you started on this task?
A flag is just a piece of text that's used to verify you've performed a certain action. In security challenges, users are asked to find flags to prove that they've successfully hacked a machine.

**Answer:**

```zsh
Flag, web sayfasında; 'You can access TryHackMe machines!' hemen altında olacaktır.
flag{connection_verified}
```
Bu odayı bizlere sunan tryhackme'ye teşekkürler!

{{< further-reading >}}

