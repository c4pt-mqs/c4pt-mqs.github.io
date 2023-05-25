---
title: "TryHackMe: Introductory Researching — CTF Writeup [TR]"
date: 2022-04-23T09:00:00Z
summary: Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır. Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır.
draft: false
type: post
author: Kaptan
weight: -1
categories:
  - TryHackMe
---

{{< toc >}}

Bu oda, TryHackMe'de 'Araştırmaya Giriş' tanımlı kılavuz ve notlar içerir. Bu odaya şu adresten ulaşabilirsiniz:

https://tryhackme.com/room/introtoresearch

## Introduction

Bilgisayar korsanlığı; BT bilgisi ve becerileri gerektirdiği doğru olsa da araştırma, öğrenme, kurcalama ve tekrar tekrar deneme yeteneği de aynı derecede önemlidir.

Her bilgisayar sistemi hakkında her şeyi bilmek imkansızdır. Bu nedenle bilgisayar korsanları kendi araştırmalarını nasıl yapacaklarını öğrenmelidir. Çoğu zaman araştırmadaki başarı, bir terimin nasıl arandığına bağlıdır. Bu nedenle nasıl arama yapılacağını öğrenmek de önemli bir beceridir.

**Question 1:**

Read the Introduction

**Answer:**

No answer needed

## Example Research Question

Bu görevde, bir JPEG görüntü dosyasının içindeki bir mesajın, nasıl çıkarılacağını bulmak için nasıl araştırma yapabileceğimiz konusunda bize rehberlik ediyor.

Birkaç basit google araması ile verilerin görüntü dosyalarında gizlenebileceğini öğreniyoruz. Buna steganografi deniyor. Bir JPEG'den veri çıkarabilen steghide adlı bir araç hakkında bilgi ediniyoruz. steghide'ın nasıl kurulacağını ve kullanılacağını öğreniyoruz.

Belirli bir hedefe ulaşmak için bu tür kazanımlar, CTF yarışmalarında ve penetrasyon testlerinde yaygındır.
Aşağıdaki sorular, bu tür bir araştırma yapmak için bazı pratikler sağlar:

**Question 1:**

- In the Burp Suite Program that ships with Kali Linux, what mode would you use to manually send a request (often repeating a captured request numerous times)?

**Answer:**

Etkili bir arama yaparken, en önemli anahtar kelimeleri belirlemeye çalışın. Bunlar, neye ihtiyacımız olduğuna dair bir açıklama sağlayan kelimelerdir. Soruya baktığımızda, aşağıdaki anahtar kelimeleri görüyoruz:

Burp Suite, Kali Linux, mod, manuel, send, request, repeating

Şimdi etkili bir arama yapmak için bu anahtar kelimeleri birlikte kullanalım. Burp Suite'teki bir özellik hakkında soru sorduğunu biliyoruz. Bu anahtar kelimelerle bir arama yapıyoruz, örenk olarak:

- Burp Suite manual send request mode
- Burp Suite repeat request
- Burp Suite send request manual

Birbirini tekrarlayıcı görünüyorlar. Ancak bazen tek bir anahtar kelimeyi kaldırmak veya eklemek; arama motoru sonuçlarını önemli ölçüde değiştirebilir. Tüm bu kombinasyonlar, cevabı arama motorunun ilk sayfasında bulmamla sonuçlandı.

```zsh
Repeater
```

**Question 2:**

- What hash format are modern Windows login passwords stored in?

**Answer:**

Yukarıdakiyle aynı yöntemi kullanarak anahtar kelimeleri tanımlarız:

Hash, format, modern, Windows, login, passwords, stored

Anahtar kelimeleri birleştirdiğimizde:

- Hash format Windows login passwords
- Windows hash format login password storage
- Login password storage hash format Windows

Bu kelimelerin birlikte aratılması benzer sonuçları karşımıza getirir. Bunların Windows hash formatları olduğunu çabucak öğreniyoruz; LM ve NTLM'dir. NTLM daha yeni bir biçimdir.

```zsh
NTLM
```

**Question 3:**

- What are automated tasks called in Linux?

**Answer:**

Bir kez daha, sorudaki anahtar kelimeleri belirleyerek başlıyoruz:

automated, tasks, Linux

Bunları birleştirmenin yalnızca birkaç yolu vardır. Tümü arama motorunda benzer sonuçları vermelidir.

```zsh
Cron Jobs
```

**Question 4:**

- What number base could you use as a shorthand for base 2 (binary)?

**Answer:**

Anahtar kelimeleri belirleme:

number base shorthand base 2 binary

Yine, aradığımız şeyi bulmak için bunların kombinasyonlarını kullanabiliriz.

```zsh
Base 16
```

**Question 5:**

- If a password hash starts with $6$, what format is it (Unix variant)?

**Answer:**

Sorudaki anahtar kelimelerle başlayalım:

password hash $6$ format Unix

6$'ın SHA-512 algoritmasını gösterdiğini çabucak buldum. Ancak bu, TryHackMe'nin yanıt istediği formata uymuyordu. Bu sefer doğru cevabı bulmak için SHA512 kullanarak başka bir arama yaptım:

```zsh
sha512crypt
```

## Vulnerability Searching
Bir sistemi etkili bir şekilde hacklemek için, üzerinde hangi yazılımların ve hizmetlerin çalıştığını bulmamız gerekir. Bir hedefteki farklı yazılım türleri hakkında bilgi edindikçe, o yazılım için mevcut/bilinen güvenlik açıklarını kontrol etmemize olanak sağlar.

Bilgisayar korsanları için bulunabilir güvenlik açıkları içeren web siteleri var. En yaygın olanlardan bazıları ExploitDB ve NVD'dir (Ulusal Güvenlik Açığı Veritabanı). Kali Linux ayrıca, ExploitDB'yi aramak için komut satırını kullanmamıza izin veren önceden yüklenmiş olan 'searchsploit' aracıyla birlikte gelir.

**Question 1:**

- What is the CVE for the 2020 Cross-Site Scripting (XSS) vulnerability found in WPForms?

**Answer:**

ExploitDB'ye gidin ve 'WPForms' arayın. Siteler arasında komut dosyası çalıştırmayı içeren 2 sonuç karşımıza çıkar. Ancak yalnızca birinin CVE'si vardır:

```zsh
CVE-2020-10385
```

**Question 2:**

- There was a Local Privilege Escalation vulnerability found in the Debian version of Apache Tomcat, back in 2016. What's the CVE for this vulnerability?

**Answer:**

'Apache tomcat' yazarak arama yaptım ve yaklaşık 60 sonuç aldım. Bu yüzden 'Apache tomcat debian' ifadesini kullanarak başka bir arama yaptım. Bu sefer ortaya çıkan tek bir sonuç buldum:

```zsh
CVE-2016-1240
```

**Question 3:**

- What is the very first CVE found in the VLC media player?

**Answer:**

Bu sefer; 'vlc' terimini kullanarak exploit-db'de bir arama yaptım. Ardından ilk CVE'yi bulmak için tarihe göre filtreledim:

```zsh
CVE-2007-0017
```

**Question 4:**

- If you wanted to exploit a 2020 buffer overflow in the sudo program, which CVE would you use?

**Answer:**

'Sudo buffer overflow'u aradım. İlk sonuç olarak karşıma çıkıyor:

```zsh
CVE-2019-18634
```

## Manual Pages

Manuel (man) sayfalar, birçok Linux komutunda yardım almak için mükemmeldir. Farklı söz dizimine sahip çok fazla komut ve kullanılabilecek çok sayıda seçenek olduğu için hepsini ezberlemek mümkün değildir. Bu durumda man sayfaları devreye girer; genellikle sözdizimi ve parametreler hakkında iyi bir genel bilgilendirme sağlarlar.
Bir komutun kılavuz sayfasına erişmek için 'man [komut]' yazmanız yeterlidir.

**Question 1:**

SCP is a tool used to copy files from one computer to another.
- What switch would you use to copy an entire directory?

**Answer:**

Komut satırına 'man scp' yazarak scp için kılavuz sayfasına erişin. Dizinlerle ilgili girişler için kılavuz sayfasını tarayın. Aşağıdaki seçeneği buldum:

```zsh
-r
```

**Question 2:**

fdisk is a command used to view and alter the partitioning scheme used on your hard drive.
- What switch would you use to list the current partitions?

**Answer:**

fdisk için kılavuz sayfasına bakın ve 'mevcut bölümleri listeleme'ye karşılık gelen herhangi bir şey için taramaya başlayın. Kolayca bulabilirsiniz:

```zsh
-l
```

**Question 3:**

nano is an easy-to-use text editor for Linux. There are arguably better editors (Vim, being the obvious choice); however, nano is a great one to start with.

- What switch would you use to make a backup when opening a file with nano?

**Answer:**

Bu sefer man sayfasını grep komutu ile bağlayarak ve 'backup' terimini arayarak sonuçlarımı daraltmaya çalıştım:

Cevap bu olabilir. Ancak asıl kılavuz sayfasını açmaya ve ilgili parametreyi okumaya karar verdim:

```zsh
-B
```

**Question 4:**

Netcat is a basic tool used to manually send and receive network requests. 
- What command would you use to start netcat in listen mode, using port 12345?

**Answer:**

Bu sefer netcat'in man sayfasını kullanmamız gerekiyor, iki parça bilgi arıyoruz:
(1) dinleme modunda nasıl başlatılır

(2) bağlantı noktası numarasının nasıl belirleneceği (12345)

'Man netcat' kullanarak netcat için man sayfasını çekebiliriz. Şimdi bunları tek bir komutta birleştirelim:

```zsh
nc -l -p 12345
```

## Final Thoughts

Bilgisayar korsanlığı için gereken birçok beceri vardır. Ancak en önemlilerinden biri araştırma yapabilme becerisi edinmektir. Farklı şeyleri arayabilmek ve esnek olabilmek inanılmaz derecede etkili bir özelliktir.

**Question 1:**

Research Complete!

**Answer:**

No answer needed

Bu odayı bizlere sunan tryhackme'ye teşekkürler!

{{< further-reading >}}

