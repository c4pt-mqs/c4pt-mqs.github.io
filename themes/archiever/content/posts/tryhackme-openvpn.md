---
title: "TryHackMe: OpenVPN — CTF Writeup [TR]"
date: 2022-04-23T09:00:00Z
summary: Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır. Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır.
draft: false
type: post
author: Kaptan
categories:
  - TryHackMe
---

{{< toc >}}

Bu oda bize OpenVPN kullanarak diğer ağlara nasıl bağlanabileceğimizi öğretiyor. Bu odaya şu adresten ulaşabilirsiniz:

https://tryhackme.com/room/openvpn

Her şeyden önce, aşağıdaki şekil’de gösterildiği gibi, openvpn’e erişim sayfasından (Download My Configuration File) yapılandırma dosyasını indirin:

{{< figure src="/img/content/tryhackme/openvpn/1.png" alt="Configuration File" loading="lazy" width="100%" height="auto" >}}

Openvpn’yi makinenize zaten yüklediyseniz harika, aksi takdirde aşağıdaki komutu yazarak yükleyebilirsiniz:

```zsh
sudo apt-get install openvpn
```

Openvpn’yi makinenize yükledikten sonra, o yapılandırma dosyasının bulunduğu dizinine gidin ve şu komutu yazın:
```zsh
openvpn [indirdiğiniz dosyanın adı].ovpn
```

Bağlanmayı deneyecek ve terminalde gösterildiği gibi tamamlandığında "Initialization Sequence Completed" uyarısı gelir, bu VPN’nizin TryHackMe ağına bağlandığınız anlamına gelir.

Artık makineye erişebilirsiniz. Şimdi makineyi çalıştırın:
 
{{< figure src="/img/content/tryhackme/openvpn/3.png" alt="Configuration File" loading="lazy" width="100%" height="auto" >}}

1 dakika sonra makine yüklenicek ve ip adresi görünür hale gelicektir.

{{< figure src="/img/content/tryhackme/openvpn/4.png" alt="Configuration File" loading="lazy" width="100%" height="auto" >}}

Farklı odalarda makineye farklı IP adresi alabilirsiniz. Bu normaldir.

**Question 1:**

- What is the flag displayed on the deployed machine’s website?

**Answer:**
Ip adresini web tarayıcısına girerek flag’a erişin:
```zsh
flag{connection_verified}
```

Bu odayı bizlere sunan tryhackme’ye teşekkürler!

{{< further-reading >}}

