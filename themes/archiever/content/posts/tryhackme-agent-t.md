---
title: "TryHackMe: Agent T — CTF Writeup [TR]"
date: 2022-04-23T09:00:00Z
summary: Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır. Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır.
draft: false
type: post
author: Kaptan
categories:
  - TryHackMe
---

{{< toc >}}

Agent T, bir hedef makinede root almak için backdoor kullanmayı gerektiren kolay seviyeli bir odadır. Bu odaya şu adresten ulaşabilirsiniz:

https://tryhackme.com/room/agentt

## Find The Flag

Görevin üst kısmındaki 'Makineyi Başlat' düğmesine tıklayarak hedef makineyi başlatabiliriz. Kali Linux kullandığım için OpenVPN kullanacağım.

**Question 1:**

What is the flag?

**Answer:**

Hedef makine'de açık bulmak için nmap taramasıyla başlayacağız. Listelenen hizmetlerin ve taramanın ayrıntılı olmasını istiyoruz; bu nedenle önce tüm portları tarayacağız. Ardından açık olan portlara detaylı servis taraması yapacağız. Kullanacağımız komut şu olacak:

```zsh
nmap -p- -T4 [IP]
```

{{< figure src="/img/content/tryhackme/agent-t/1.png" alt="Description of image" loading="lazy" width="100%" height="auto" >}}

Makinede bir adet açık HTTP(80) bağlantı noktası buluyoruz. Daha sonra bu port için derin tarama yapıyoruz:

```zsh
nmap -p80 -sS -sC -sV -v [IP]
```

{{< figure src="/img/content/tryhackme/agent-t/2.png" alt="Description of image" loading="lazy" width="100%" height="auto" >}}

Listelenen sürümü Google'da aratırsak, bir backdoor olduğunu görürüz. Exploit'i GitHub'dan ya da Kali'de kurulu olan 'searchsploit' aracı ile indirebilirsiniz. Önce exploit var mı diye kontrol edelim:

```zsh
searchsploit PHP 8.1.0-dev
```

{{< figure src="/img/content/tryhackme/agent-t/3.png" alt="Description of image" loading="lazy" width="100%" height="auto" >}}

Şimdi de bulunduğumuz dizine kopyalayalım:

```zsh
searchsploit -m 49933.py
```

{{< figure src="/img/content/tryhackme/agent-t/4.png" alt="Description of image" loading="lazy" width="100%" height="auto" >}}

Şimdi gelelim backdoor'u çalıştırmaya:

"Enter the full host url:" kısmına makine ip adresimizi 'http://' dahil ederek giriyoruz. Kullanıcı yetkimizi kontrol ettiğimizde, root olduğumuzu görüyoruz. Bayrağı bulmak için ise aşağıdaki komutu kullanabiliriz:

```zsh
find / -type f -name "*.txt"
```

```zsh
flag{4127d0530abf16d6d23973e3df8dbecb}
```

Oda bitti! Bir backdoor kullanarak bir nmap taramasından root erişimi elde ettik. Umarım bu yazı, odayı tamamlamada size yardımcı olmuştur.

Bu odayı bizlere sunan TryHackMe'ye teşekkürler!

{{< further-reading >}}