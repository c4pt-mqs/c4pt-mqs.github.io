---
title: "OverTheWire: Bandit — Wargames Writeup [TR]"
date: 2022-04-23T09:00:00Z
summary: Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır. Bu Rehber sizlere kolaylık sağlaması açısından emek verilip, tecrübeler neticesi ile yazılmıştır.
draft: false
type: post
author: Kaptan
categories:
  - OverTheWire
---

{{< toc >}}

Bu oyuna başlamak için bir SSH istemcisi kullanmalısınız. Ayrıca her seviyeye kendi şifrsei ile giriş yapmalısınız. İhtiyacınız olan tek şey bir terminal. Eğer windows kullanıyorsanız powershell ya da PuTTY ile bağlanabilirsiniz.

**Sunucu:** _bandit.labs.overthewire.org_

**Bağlantı Noktası:** _2200_

**Kullanıcı:** _bandit0_

### Bandit Level 0:

http://overthewire.org/wargames/bandit/bandit0.html

Web sitelerinde bize bandit0 için kullanıcı adı ve şifre veriyorlar ve biz de bandit1 şifresini bulmamız gerekiyor. İlk ssh bağlantımız için sitede belirtildiği üzere "bandit0" kullanıcı adı ve "bandit0" şifresiyle giriş yapılacak.

```r
ssh bandit0@bandit.labs.overthewire.org -p 2220
```

**Kullanıcı adı:** `bandit0`

**Şifre:** `bandit0`

### Bandit Level 0 → Level 1

http://overthewire.org/wargames/bandit/bandit1.html

Bandit0 kullanıcısıyla oturum açtıktan sonra "ls" komutunu çalıştırdım ve "readme" adında bir dosya olduğunu gördüm. "cat readme" komutunu kullanarak dosyayı okudum. Bu bandit1'e giriş yapmak için verilen şifreyi içeriyor.

**Kullanıcı adı:** `bandit1`

**Şifre:** `NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL`

### Bandit Level 1 → Level 2

http://overthewire.org/wargames/bandit/bandit2.html

Bandit2 kullanıcı şifresinin "-" adlı bir dosyada kayıtlı olduğu belirtiliyor. Hesaba giriş yaptığımda "ls" komutunu çalıştırdım ve dosyayı gördüm. Dosyayı okumak için birden fazla alternatif yol var: 

1. cat ./-
2. cat <-
3. more -
4. cat '-'

**Kullanıcı adı:** `bandit2`

**Şifre:** `rRGizSaX8Mk1RTb1CNQoXTcYZWU6lgzi`

### Bandit Level 2 → Level 3

http://overthewire.org/wargames/bandit/bandit3.html

Bandit3 kullanıcı şifresinin "spaces in this filename" adlı bir dosyada kayıtlı olduğu belirtiliyor. Hesaba giriş yaptığımda "ls" komutunu çalıştırdım ve dosyayı gördüm. Dosyayı okumak için birden fazla alternatif yol var: 

1. cat 'spaces in this filename'
2. cat spaces\ in\ this\ filename

**Kullanıcı adı:** `bandit3`

**Şifre:** `aBZ0W5EmUfAf7kHTQeOwd8bauFJ2lAiG`

### Bandit Level 3 → Level 4
http://overthewire.org/wargames/bandit/bandit4.html

Bandit4 kullanıcı şifresinin 'inhere' adlı dizininde gizli bir dosyada saklanıyor. Dosya ve dizinleri görmek için "ls" komutunu çalıştırdım, sonra inhere klasörüne gitmek için "cd" komutunu, tüm dosyaları (gizli olanları da) görmek için "ls -a" komutunu ve gizli dosyanın içeriğini görmek için "cat .hidden" komutunu kullandım.

**Kullanıcı adı:** `bandit4`

**Şifre:** `2EW7BBsr6aMMoJ2HjW067dm8EgX26xNe`

### Bandit Level 4 → Level 5

http://overthewire.org/wargames/bandit/bandit5.html

Bandit5 kullanıcı şifresinin 'inhere' klasörünün içinde bir dosyada saklanmaktadır. İçinde birden fazla dosya olduğu için tek tek okumak yerine, dosyalar hakkında bilgi almak istedim ve önce okunabilir metin olanları buldum. Şifre 'ASCII text' olan dosya da saklanmış.

```r
bandit4@bandit:~$ ls
inhere
bandit4@bandit:~$ cd inhere/
bandit4@bandit:~/inhere$ ls
-file00  -file01  -file02  -file03  -file04  -file05  -file06  -file07  -file08  -file09
bandit4@bandit:~/inhere$ file ./-file0*
./-file00: data
./-file01: data
./-file02: data
./-file03: data
./-file04: data
./-file05: data
./-file06: data
./-file07: ASCII text
./-file08: data
./-file09: Non-ISO extended-ASCII text, with no line terminators
bandit4@bandit:~/inhere$ cat ./-file07
lrIWWI6bB37kxfiCQZqUdOIYfr6eEeqR
```

**Kullanıcı adı:** `bandit5`

**Şifre:** `lrIWWI6bB37kxfiCQZqUdOIYfr6eEeqR`

### Bandit Level 5 → Level 6

http://overthewire.org/wargames/bandit/bandit6.html

Önce "inhere" klasörüne girdim ve ardından klasörleri görmek için "ls" komutunu çalıştırdım. İçinde bir sürü klasör ve bu klasörlerin içinde birden fazla dosya olduğunu fark ettim.

Her dosyayı okumak zorunda kalmamak için, bana verilen özellikleri kullanıp dosyayı aramanın bir yolunu bulmaya çalıştım. 'find' komuta baktığımda -size, -type ve -executable seçenekleri kullanabileceğimi düşündüm. Tüm bu parametreleri de find ile birleştirince istenilen dosyayı elde ettim.

```r
bandit5@bandit:~/inhere$ find -type f -size 1033c ! -executable
./maybehere07/.file2
bandit5@bandit:~/inhere$ cat ./maybehere07/.file2
P4L4vucdmLnm8I7Vl7jG1ApGSfjYKqJU
```

**Kullanıcı adı:** `bandit6`

**Şifre:** `P4L4vucdmLnm8I7Vl7jG1ApGSfjYKqJU`

### Bandit Level 6 → Level 7

http://overthewire.org/wargames/bandit/bandit7.html

Bu level için find ile -user, -group, -size parametrelerini kullanarak bandit7 kullanıcısına ve bandit6 grubuna ait; 33 byte boyutunda bir dosyayı aradım. Parametreleri istenildiği gibi kullanarak dosyayı okudum.

```r
bandit6@bandit:~$ find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
/var/lib/dpkg/info/bandit7.password
bandit6@bandit:~$ cat /var/lib/dpkg/info/bandit7.password
z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S
```

**Kullanıcı adı:** `bandit7`

**Şifre:** `z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S`

### Bandit Level 7 → Level 8

http://overthewire.org/wargames/bandit/bandit8.html

Bir sonraki seviyenin şifresi, 'data.txt' dosyasında "millionth" kelimesinin yanında saklanıyor.

data.txt dosyasınu okuduğumda bir sürü kelime ve kelimelerin yanında şifre bulnuyordu. Tüm satırlar aynı yapıya sahipmiş gibi görünüyordu. Bize verilen ipucu aslında kolayca bulmamı sağladı. 'grep' ile "millionth" kelimesini aradım.

```r
bandit7@bandit:~$ cat data.txt | grep millionth
millionth	TESKZC0XvTetK0S9xNwm25STk5iWrBvP
```

**Kullanıcı adı:** `bandit8`

**Şifre:** `TESKZC0XvTetK0S9xNwm25STk5iWrBvP`

### Bandit Level 8 → Level 9

http://overthewire.org/wargames/bandit/bandit9.html

'data.txt' dosyasındaki verileri sıralayıp, benzersiz olanları bulmak için 'sort' ve 'uniq' komutlarını kullandım. Tekrar etmeyenleri satırları yazdırmak için de uniq ile '-u' parametresini kullandım.

```r
bandit8@bandit:~$ sort data.txt | uniq -u
EN632PlfYiZbn3PhVK3XOGSlNInNE00t
```

**Kullanıcı adı:** `bandit9`

**Şifre:** `EN632PlfYiZbn3PhVK3XOGSlNInNE00t`

### Bandit Level 9 → Level 10

http://overthewire.org/wargames/bandit/bandit10.html

Dosyayı okumaya çalıştığımda düz bir metin olmadığını ve karışık karakterler içerdiğini gördüm. Metinden okunabilir kelimeleri seçmek için 'strings' komutunu çalıştırdım. Ayrıca bize verilen bilgi ile '=' işareti ile başlayan satırları yazdırmak için grep kullanabiliriz.

```r
bandit9@bandit:~$ cat data.txt | strings | grep ^=
========== password
========== is
=TU%
=^,T,?
========== G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s
```

**Kullanıcı adı:** `bandit10`

**Şifre:** `G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s`

### Bandit Level 10 → Level 11

http://overthewire.org/wargames/bandit/bandit11.html

'data.txt' base64 ile kodlanmış bir satır içeriyor. Deşifre etmek için base64 ile '-d' parametresini kullandım.

```r
bandit10@bandit:~$ cat data.txt 
VGhlIHBhc3N3b3JkIGlzIDZ6UGV6aUxkUjJSS05kTllGTmI2blZDS3pwaGxYSEJNCg==
bandit10@bandit:~$ cat data.txt | base64 -d
The password is 6zPeziLdR2RKNdNYFNb6nVCKzphlXHBM
```

**Kullanıcı adı:** `bandit11`

**Şifre:** `6zPeziLdR2RKNdNYFNb6nVCKzphlXHBM`

Referanslar:
- https://www.dcode.fr/cipher-identifier
- https://cyberchef.io/#recipe=Magic(3,false,false,'')&input=Cg

### Bandit Level 11 → Level 12

http://overthewire.org/wargames/bandit/bandit12.html

'data.txt' dosyası ROT13 algoritmasıyla şifrelenmiş olduğunu farkettim. ROT13 şifresini çözmek için her harfi 13 karakter ilerideki harfle değiştirmek gerekiyor. Tek tek uğraşmak yerine bir siteden yardım alarak bunu çözebiliriz(ref).

```r
bandit11@bandit:~$ cat data.txt 
Gur cnffjbeq vf WIAOOSFzMjXXBC0KoSKBbJ8puQm5lIEi
```

**Kullanıcı adı:** `bandit12`

**Şifre:** `JVNBBFSmZwKKOP0XbFXOoW8chDz5yVRv`

Referanslar:
- https://rot13.com/

### Bandit Level 12 → Level 13

http://overthewire.org/wargames/bandit/bandit13.html

Bu bölüm baştan beri canımı sıkmış olsada sonunda şifreyi buldum. Dosyayı tekrar tekrar sıkıştırılmış hexdump olan data.txt dosyasında saklanmaktadır. 

Bu seviyede '/tmp' altında çalışabileceğimiz bir dizin oluşturmamız gerekiyor. Örneğin: `mkdir /tmp/myname123`. Ardından, cp dosyasını bu dizine kopyalayın ve mv kullanarak yeniden adlandırın.

```r
bandit12@bandit:~$ mkdir /tmp/myname123
bandit12@bandit:~$ cp data.txt /tmp/myname123
bandit12@bandit:~$ cd /tmp/myname123
bandit12@bandit:/tmp/myname123$ ls
data.txt
```

Dosyanın hexdump'ını çözebilmek için 'xxd' uygulaması ile '-r' parametresini çalıştırdım. Bu komut, hexdump'ı tersine çevirir.

```r
bandit12@bandit:/tmp/myname123$ xxd -r data.txt > dump.txt
```

İpucuda bize dosyanın birden çok kez sıkıştırıldığı söyleniyor. Bu nedenle hangi sıkıştırma yönteminin kullanıldığını bulmak için 'file' komutunu kullandım.

```r
bandit12@bandit:/tmp/myname123$ file dump.txt 
dump.txt: gzip compressed data, was "data2.bin", last modified: Sun Apr 23 18:04:23 2023, max compression, from Unix, original size modulo 2^32 581
```

gzip ile sıkıştırıldığını görüyoruz. İçeriğini görmek için dosyanın uzantısına '.gz' ekledim. Ardından onu açmak için 'gunzip' komutunu çalıştırdım. Tekrar tekrar sıkıştırıldığını bildiğim için 'file' ile kontrol ettim.

```r
bandit12@bandit:/tmp/myname123$ mv dump.txt dump.txt.gz
bandit12@bandit:/tmp/myname123$ gunzip dump.txt.gz
bandit12@bandit:/tmp/myname123$ ls
data.txt  dump.txt
bandit12@bandit:/tmp/myname123$ file *
data.txt: ASCII text
dump.txt: bzip2 compressed data, block size = 900k
```

bzip2 ile sıkıştırılmış olduğunu görüyorum. Bu nedenle uzantıya '.bz2' ekleyerek dosyayı açmak için 'bzip2'yi '-d' parametresi ile çalıştırdım. Başka bir dosya oluştu ve yine 'file' ile kontrol ettim.

```r
bandit12@bandit:/tmp/myname123$ mv dump.txt dump.bz2
bandit12@bandit:/tmp/myname123$ bzip2 -d dump.bz2
bandit12@bandit:/tmp/myname123$ file *
data.txt: ASCII text
dump:     gzip compressed data, was "data4.bin", last modified: Sun Apr 23 18:04:23 2023, max compression, from Unix, original size modulo 2^32 20480
```

Görünüşe göre tekrar gzip kullanıldı. Bu şekilde defalarca sıkıştırılan dosyayı aynı işlemleri yukarıda yaptığım şekilde devam ettirdim. En sonunda 'data8' ASCII text dosyası olarak okunabilir bir hâle geldi.

```r
bandit12@bandit:/tmp/myname123$ mv dump dump.gz
bandit12@bandit:/tmp/myname123$ gunzip dump.gz
bandit12@bandit:/tmp/myname123$ file *
data.txt: ASCII text
dump:     POSIX tar archive (GNU)
bandit12@bandit:/tmp/myname123$ mv dump dump.tar
bandit12@bandit:/tmp/myname123$ tar -xf dump.tar
bandit12@bandit:/tmp/myname123$ file *
data5.bin: POSIX tar archive (GNU)
data.txt:  ASCII text
dump.tar:  POSIX tar archive (GNU)
bandit12@bandit:/tmp/myname123$ mv data5.bin data5.tar
bandit12@bandit:/tmp/myname123$ tar -xf data5.tar 
bandit12@bandit:/tmp/myname123$ file *
data5.tar: POSIX tar archive (GNU)
data6.bin: bzip2 compressed data, block size = 900k
data.txt:  ASCII text
dump.tar:  POSIX tar archive (GNU)
bandit12@bandit:/tmp/myname123$ mv data6.bin data6.bz2
bandit12@bandit:/tmp/myname123$ bzip2 -d data6.bz2
bandit12@bandit:/tmp/myname123$ file *
data5.tar: POSIX tar archive (GNU)
data6:     POSIX tar archive (GNU)
data.txt:  ASCII text
dump.tar:  POSIX tar archive (GNU)
bandit12@bandit:/tmp/myname123$ mv data6 data6.tar
bandit12@bandit:/tmp/myname123$ tar -xf data6.tar
bandit12@bandit:/tmp/myname123$ file *
data5.tar: POSIX tar archive (GNU)
data6.tar: POSIX tar archive (GNU)
data8.bin: gzip compressed data, was "data9.bin", last modified: Sun Apr 23 18:04:23 2023, max compression, from Unix, original size modulo 2^32 49
data.txt:  ASCII text
dump.tar:  POSIX tar archive (GNU)
bandit12@bandit:/tmp/myname123$ mv data8.bin data8.gz
bandit12@bandit:/tmp/myname123$ gunzip data8.gz
bandit12@bandit:/tmp/myname123$ file *
data5.tar: POSIX tar archive (GNU)
data6.tar: POSIX tar archive (GNU)
data8:     ASCII text
data.txt:  ASCII text
dump.tar:  POSIX tar archive (GNU)
bandit12@bandit:/tmp/myname123$ cat data8
The password is wbWdlBxEir4CaE8LaPhauuOo6pwRmrDw
```

**Kullanıcı adı:** `bandit13`

**Şifre:** `wbWdlBxEir4CaE8LaPhauuOo6pwRmrDw`

### Bandit Level 13 → Level 14

http://overthewire.org/wargames/bandit/bandit14.html

İpucuda bahsettiği üzere SSH anahtarını sshkey.private adlı bir dosyada gördüm. 'bandit14' kullanıcısının profiline girmek için bu anahtarı kullanmalıyız. Bunun için 'ssh' komutunu '-i' parametresini kullanarak çalıştırdım. Ardından söylenildiği üzere '/etc/bandit_pass/bandit14' dosyasını okuyarak şifreyi yazdırdım.

```r
bandit13@bandit:~$ ssh -i sshkey.private bandit14@bandit.labs.overthewire.org -p 2220
bandit14@bandit:~$ whoami
bandit14
bandit14@bandit:~$ cat /etc/bandit_pass/bandit14
fGrHPx402xGC7U7rXKDaxiWFTOiF0ENq
```

**Kullanıcı adı:** `bandit14`

**Şifre:** `fGrHPx402xGC7U7rXKDaxiWFTOiF0ENq`

### Bandit Level 14 → Level 15

http://overthewire.org/wargames/bandit/bandit15.html

İpucuya göre localhost'ta 30000 numaralı port'tan bağlantı kurmamız ve elimizdeki şifreyi göndermemiz gerekiyor. Bunu yapmak için 'nc' çalıştırdım. Bağlandığımı görünce 'bandit14' şifresini yapıştırdım ve ardından şifreyi aldım.

```r
bandit14@bandit:~$ nc localhost 30000
fGrHPx402xGC7U7rXKDaxiWFTOiF0ENq
Correct!
jN2kgmIXJ6fShzhT2avhotn4Zcka6tnt
```

**Kullanıcı adı:** `bandit15`

**Şifre:** `jN2kgmIXJ6fShzhT2avhotn4Zcka6tnt`

### Bandit Level 15 → Level 16

http://overthewire.org/wargames/bandit/bandit16.html

Soruyla ilgili bilgileri çevirdiğimde --> 

Faydalı not: "KALP ATIYOR" ve "R BLOKUNU Oku" alıyor musunuz? -ign_eof kullanın ve kılavuz sayfasındaki "BAĞLANTILI KOMUTLAR" bölümünü okuyun. "R" ve "Q" ile birlikte, "B" komutu da o komutun bu versiyonunda çalışıyor...

'openssl' ile 30001 bağlantı noktasına bağlanmayı denedim ve bandit15'in şifresini yazdım ve bandit16'ın şifresini buldum. 'ign_eof' kullanmamız gerektiği söylense de, onu kullanmadan da şifreye ulaşabildik. Ancak genel anlamda 'ign_eof' veri girişini sonlandırmadan devam etmemizi sağlıyor. man page: "Girişin sonuna ulaşıldığında bağlantının kapatılmasını engeller."

```r
bandit15@bandit:~$ openssl s_client -connect localhost:30001
...

---
read R BLOCK
jN2kgmIXJ6fShzhT2avhotn4Zcka6tnt
Correct!
JQttfApK4SeyHwDlI9SXGR50qclOAil1

closed
```

**Kullanıcı adı:** `bandit16`

**Şifre:** `JQttfApK4SeyHwDlI9SXGR50qclOAil1`

### Bandit Level 16 → Level 17

http://overthewire.org/wargames/bandit/bandit17.html

İpucuda da söylendiği gibi, hangi ana bilgisayarın SSL çalıştırdığını bulmamız gerekiyor. Bunu yapmak için, 31000'den 32000'e kadar her port'u kontrol ettim. 'openssl' ile teker teker hepsini kontrol ettim ve '31790' portunun bize RSA key verdiğini gördüm.

```r
bandit16@bandit:~$ nmap -p 31000-32000 localhost
Starting Nmap 7.80 ( https://nmap.org ) at 2023-05-24 18:32 UTC
Nmap scan report for localhost (127.0.0.1)
Host is up (0.00014s latency).
Not shown: 996 closed ports
PORT      STATE SERVICE
31046/tcp open  unknown
31518/tcp open  unknown
31691/tcp open  unknown
31790/tcp open  unknown
31960/tcp open  unknown

bandit16@bandit:~$ openssl s_client -connect localhost:31790
...
---
read R BLOCK
JQttfApK4SeyHwDlI9SXGR50qclOAil1
Correct!
-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAvmOkuifmMg6HL2YPIOjon6iWfbp7c3jx34YkYWqUH57SUdyJ
imZzeyGC0gtZPGujUSxiJSWI/oTqexh+cAMTSMlOJf7+BrJObArnxd9Y7YT2bRPQ
Ja6Lzb558YW3FZl87ORiO+rW4LCDCNd2lUvLE/GL2GWyuKN0K5iCd5TbtJzEkQTu
DSt2mcNn4rhAL+JFr56o4T6z8WWAW18BR6yGrMq7Q/kALHYW3OekePQAzL0VUYbW
JGTi65CxbCnzc/w4+mqQyvmzpWtMAzJTzAzQxNbkR2MBGySxDLrjg0LWN6sK7wNX
x0YVztz/zbIkPjfkU1jHS+9EbVNj+D1XFOJuaQIDAQABAoIBABagpxpM1aoLWfvD
KHcj10nqcoBc4oE11aFYQwik7xfW+24pRNuDE6SFthOar69jp5RlLwD1NhPx3iBl
J9nOM8OJ0VToum43UOS8YxF8WwhXriYGnc1sskbwpXOUDc9uX4+UESzH22P29ovd
d8WErY0gPxun8pbJLmxkAtWNhpMvfe0050vk9TL5wqbu9AlbssgTcCXkMQnPw9nC
YNN6DDP2lbcBrvgT9YCNL6C+ZKufD52yOQ9qOkwFTEQpjtF4uNtJom+asvlpmS8A
vLY9r60wYSvmZhNqBUrj7lyCtXMIu1kkd4w7F77k+DjHoAXyxcUp1DGL51sOmama
+TOWWgECgYEA8JtPxP0GRJ+IQkX262jM3dEIkza8ky5moIwUqYdsx0NxHgRRhORT
8c8hAuRBb2G82so8vUHk/fur85OEfc9TncnCY2crpoqsghifKLxrLgtT+qDpfZnx
SatLdt8GfQ85yA7hnWWJ2MxF3NaeSDm75Lsm+tBbAiyc9P2jGRNtMSkCgYEAypHd
HCctNi/FwjulhttFx/rHYKhLidZDFYeiE/v45bN4yFm8x7R/b0iE7KaszX+Exdvt
SghaTdcG0Knyw1bpJVyusavPzpaJMjdJ6tcFhVAbAjm7enCIvGCSx+X3l5SiWg0A
R57hJglezIiVjv3aGwHwvlZvtszK6zV6oXFAu0ECgYAbjo46T4hyP5tJi93V5HDi
Ttiek7xRVxUl+iU7rWkGAXFpMLFteQEsRr7PJ/lemmEY5eTDAFMLy9FL2m9oQWCg
R8VdwSk8r9FGLS+9aKcV5PI/WEKlwgXinB3OhYimtiG2Cg5JCqIZFHxD6MjEGOiu
L8ktHMPvodBwNsSBULpG0QKBgBAplTfC1HOnWiMGOU3KPwYWt0O6CdTkmJOmL8Ni
blh9elyZ9FsGxsgtRBXRsqXuz7wtsQAgLHxbdLq/ZJQ7YfzOKU4ZxEnabvXnvWkU
YOdjHdSOoKvDQNWu6ucyLRAWFuISeXw9a/9p7ftpxm0TSgyvmfLF2MIAEwyzRqaM
77pBAoGAMmjmIJdjp+Ez8duyn3ieo36yrttF5NSsJLAbxFpdlc1gvtGCWW+9Cq0b
dxviW8+TFVEBl1O4f7HVm6EpTscdDxU+bCXWkfjuRb7Dy9GOtt9JPsX8MBTakzh3
vBgsyi/sN3RqRBcGU40fOoZyfAMT8s1m/uYv52O6IgeuZ/ujbjY=
-----END RSA PRIVATE KEY-----
```

Bu RSA key'i rsa_key adında bir dosyaya kaydettim. Daha sonra bağlantı sağlamak için izinlerini değiştirdim. Ardından ssh ile bağlantı sağladım.

```r
kaptan@mqs ~ % nano rsa_key
kaptan@mqs ~ % chmod 600 rsa_key
kaptan@mqs ~ % ssh -i rsa_key bandit17@bandit.labs.overthewire.org -p 2220
bandit17@bandit:~$ cat /etc/bandit_pass/bandit17
VwOSWtCA7lRKkTfbr2IDh6awj9RNZM5e
```

**Kullanıcı adı:** `bandit17`

**Şifre:** `VwOSWtCA7lRKkTfbr2IDh6awj9RNZM5e`

### Bandit Level 17 → Level 18

http://overthewire.org/wargames/bandit/bandit18.html

Bu level'da dosya karşılaştırmaya yarayan 'diff' adında uygulamayı kullanarak yapılan değişikliği hemen görebiliyoruz. Verilen şifrelerden ilki çalışıyor. Ancak söylenildiği gibi giriş yaptığımızda 'Byebye!' uyarısını alıyoruz. Devamı bir sonraki levelda.

```r
bandit17@bandit:~$ diff passwords.new passwords.old
< hga5tuuCLF6fFzUpnagiMN8ssu9LFrdg
---
> glZreTEH1V3cGKL6g4conYqZqaEj0mte
kaptan@mqs ~ % ssh bandit18@bandit.labs.overthewire.org -p 2220
...
Byebye !
Connection to bandit.labs.overthewire.org closed.
```

**Kullanıcı adı:** `bandit18`

**Şifre:** `hga5tuuCLF6fFzUpnagiMN8ssu9LFrdg`

### Bandit Level 18 → Level 19

http://overthewire.org/wargames/bandit/bandit19.html

Bir önceki levelda açıkladığım gibi makineye giriş yapar yapmaz "Byebye!" çıktısını aldım ve hemen makine bağlantım kesildi. Bu durumu nasıl çözebileceğim konusunda uzun araştırmalar neticesinde ssh'da '-T' parametresinin işe yaradığını buldum(ref).

```r
kaptan@mqs ~ % ssh bandit18@bandit.labs.overthewire.org -p 2220 -T
                         _                     _ _ _   
                        | |__   __ _ _ __   __| (_) |_ 
                        | '_ \ / _` | '_ \ / _` | | __|
                        | |_) | (_| | | | | (_| | | |_ 
                        |_.__/ \__,_|_| |_|\__,_|_|\__|
                                                       

                      This is an OverTheWire game server. 
            More information on http://www.overthewire.org/wargames

bandit18@bandit.labs.overthewire.org's password: 
ls
readme
cat readme
awhqfNnAbc1naukrpqDYcF95h7HoMTrC
```

**Kullanıcı adı:** `bandit19`

**Şifre:** `awhqfNnAbc1naukrpqDYcF95h7HoMTrC`

Referanslar: 
- http://man.openbsd.org/ssh#T
- https://stackoverflow.com/questions/7114990/pseudo-terminal-will-not-be-allocated-because-stdin-is-not-a-terminal

### Bandit Level 19 → Level 20

http://overthewire.org/wargames/bandit/bandit20.html

Level'da söylenildiği üzere setuid binary'sini ana dizinde kullanmalıyız. Peki setuid ne demek: Setuid, bir kullanıcının bir dosyayı veya programı, o dosyanın sahibinin izniyle çalıştırmasına izin veren bir ayardır. İzinleri kontrol ettiğimizde bandit19'un gruptan olduğunu görüyorum. Böylece bandit19 üzerinden bandit20 için kod çalıştırabiliyorum.

```r
bandit19@bandit:~$ ./bandit20-do cat '/etc/bandit_pass/bandit20'
VxCazJaVykI6W36BkBU0mJTCM8rR95XT
bandit19@bandit:~$ file *
bandit20-do: setuid ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV),dynamically linked, 
interpreter /lib/ld-linux.so.2, BuildID[sha1]=c148b21f7eb7e816998f07490c8007567e51953f, for GNU/Linux 3.2.0, not stripped
bandit19@bandit:~$ ./bandit20-do 
Run a command as another user.
Example: ./bandit20-do id
bandit19@bandit:~$ ls -al bandit20-do
-rwsr-x--- 1 bandit20 bandit19 14876 Apr 23 18:04 bandit20-do
bandit19@bandit:~$ ./bandit20-do cat '/etc/bandit_pass/bandit20'
VxCazJaVykI6W36BkBU0mJTCM8rR95XT
```

**Kullanıcı adı:** `bandit20`

**Şifre:** `VxCazJaVykI6W36BkBU0mJTCM8rR95XT`

### Bandit Level 20 → Level 21

http://overthewire.org/wargames/bandit/bandit21.html

Bu levelda "suconnect" adında çalıştırılabilir bir dosya var. Bu dosya localhost'ta belirli bir port'tan TCP bağlantısı kurmamızı amaçlıyor. Ayrıca diğer taraftan doğru bir şifre alırsa, bir sonraki şifreyi çıktı olarak veriyor. İki terminal açmak yerine arkaplanda işlem yapıcak şekilde bandit20 kullanıcısının şifresini localhost'a gönderdim. Sonrasında 'suconnect' dosyasını çalıştırdım ve böylece diğer şifrenin çıktısını aldım.

```r
bandit20@bandit:~$ ls
suconnect
bandit20@bandit:~$ file *
suconnect: setuid ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux.so.2, BuildID[sha1]=67d1a01f06a6ae6a42184cc8cf912967cecf72da, for GNU/Linux 3.2.0, not stripped
bandit20@bandit:~$ strings suconnect
...
Usage: %s <portnumber>
This program will connect to the given port on localhost using TCP. If it receives the correct password from the other side, the next password is transmitted back.
ERROR: Invalid portnumber
localhost
getaddrinfo: %s
Could not connect
ERROR: Can't read from socket
Read: %s
/home/bandit21/.prevpass
Password matches, sending next password
/etc/bandit_pass/bandit21
ERROR: This doesn't match the current password!
FAIL
bandit20@bandit:~$ echo -n "VxCazJaVykI6W36BkBU0mJTCM8rR95XT" | nc -lvnp localhost -p 1234 &
[1] 1234511
bandit20@bandit:~$ Listening on 0.0.0.0 1234
./suconnect 1234
Connection received on 127.0.0.1 46136
Read: VxCazJaVykI6W36BkBU0mJTCM8rR95XT
Password matches, sending next password
NvEJF7oVjkddltPSrdKEFOllh9V1IBcq
```

**Kullanıcı adı:** `bandit21`

**Şifre:** `NvEJF7oVjkddltPSrdKEFOllh9V1IBcq`

### Bandit Level 21 → Level 22

http://overthewire.org/wargames/bandit/bandit22.html

Bu levelda "/etc/cron.d/" dizininde bir cron görevi yapılandırılmış. Cron, belirli bir zaman aralığında belirli komutları çalıştıran bir programdır. Söylenilen dizine gidip oradaki dosyaları inceledim. 'cronjob_bandit22' dosyasını okuduğumda başında yıldızlar olan komutların her saat, her dakikada bir komut çalıştırdığını gördüm. Burada benim ilgimi çeken 'cronjob_bandit22.sh' dosyası oldu. Dosyayı okuduğumda ise şifreyi '/tmp' dizininde başkabir dosyaya yazdığını gördüm. Bu dosyayı okuyunca şifreye ulaştım.

```r
bandit21@bandit:~$ cd /etc/cron.d
bandit21@bandit:/etc/cron.d$ file *
cronjob_bandit15_root: ASCII text
cronjob_bandit17_root: ASCII text
cronjob_bandit22:      ASCII text
cronjob_bandit23:      ASCII text
cronjob_bandit24:      ASCII text
cronjob_bandit25_root: ASCII text
e2scrub_all:           ASCII text
otw-tmp-dir:           regular file, no read permission
sysstat:               ASCII text
bandit21@bandit:/etc/cron.d$ cat cronjob_bandit22
@reboot bandit22 /usr/bin/cronjob_bandit22.sh &> /dev/null
* * * * * bandit22 /usr/bin/cronjob_bandit22.sh &> /dev/null
bandit21@bandit:/etc/cron.d$ cat /usr/bin/cronjob_bandit22.sh
#!/bin/bash
chmod 644 /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv
cat /etc/bandit_pass/bandit22 > /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv
bandit21@bandit:/etc/cron.d$ cat  /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv
WdDozAdTM2z9DiFEQ2mGlwngMfj4EZff
```

**Kullanıcı adı:** `bandit22`

**Şifre:** `WdDozAdTM2z9DiFEQ2mGlwngMfj4EZff`

### Bandit Level 22 → Level 23

http://overthewire.org/wargames/bandit/bandit23.html

Önceki levelda ki gibi, "/etc/cron.d" klasöründe bir cron görevi yapılandırması bulunuyor. 'cronjob_bandit23' dosyayısını okuduğumda her dakika çalışan bir bash betiği olduğunu gördüm. Dosyayı okuduğumda; kullanıcı adınının "myname" değişkenine, "echo I am user $myname" komutunu, md5sum komutuna gönderiyor ve hash'i 'cut' ile yazdırılan değer için ilk kısmını "mytarget" değişkenine atıyor. Yani gerçek bir hash değeri elde ediyor. Bu hash'i(mytarget) değişkenini "/tmp/" dizinine kopyalıyor. Bu dizindeki dosyayı okuduğumuzda şifreye ulaşıyoruz.

```r
bandit22@bandit:~$ cd /etc/cron.d
bandit22@bandit:/etc/cron.d$ file *
cronjob_bandit15_root: ASCII text
cronjob_bandit17_root: ASCII text
cronjob_bandit22:      ASCII text
cronjob_bandit23:      ASCII text
cronjob_bandit24:      ASCII text
cronjob_bandit25_root: ASCII text
e2scrub_all:           ASCII text
otw-tmp-dir:           regular file, no read permission
sysstat:               ASCII text
bandit22@bandit:/etc/cron.d$ cat cronjob_bandit23
@reboot bandit23 /usr/bin/cronjob_bandit23.sh  &> /dev/null
* * * * * bandit23 /usr/bin/cronjob_bandit23.sh  &> /dev/null
bandit22@bandit:/etc/cron.d$ cat /usr/bin/cronjob_bandit23.sh
#!/bin/bash

myname=$(whoami)
mytarget=$(echo I am user $myname | md5sum | cut -d ' ' -f 1)

echo "Copying passwordfile /etc/bandit_pass/$myname to /tmp/$mytarget"

cat /etc/bandit_pass/$myname > /tmp/$mytarget
bandit22@bandit:/etc/cron.d$ echo I am user bandit23 | md5sum | cut -d ' ' -f 1
8ca319486bfbbc3663ea0fbe81326349
bandit22@bandit:/etc/cron.d$ cat /tmp/8ca319486bfbbc3663ea0fbe81326349
QYw0Y2aiA672PsMmh9puTQuhoz8SyR2G
```

**Kullanıcı adı:** `bandit23`

**Şifre:** `QYw0Y2aiA672PsMmh9puTQuhoz8SyR2G`

### Bandit Level 23 → Level 24

http://overthewire.org/wargames/bandit/bandit24.html

"/etc/cron.d" dizininde "cronjob_bandit24" dosyasında bir cron yapılandırması mevcut. Dosyanın içinde çalıştırılan komutta; '/var/spool/$myname/foo' dizininde olan her dosyanın bir kez çalıştırılacağını ve 60 saniye sonra silineceğini görüyoruz. '/etc/bandit_pass/bandit24'ten şifreyi alıp başka bir dosyaya yazdırmak için bir '/tmp' dizinine script yazdım. Script'i '/var/spool/bandit24/foo' dizinine kopyaladım. Belli bir süre bekledikten sonra şifreyi okudum.

```r
bandit23@bandit:~$ cd /etc/cron.d
bandit23@bandit:/etc/cron.d$ file *
cronjob_bandit15_root: ASCII text
cronjob_bandit17_root: ASCII text
cronjob_bandit22:      ASCII text
cronjob_bandit23:      ASCII text
cronjob_bandit24:      ASCII text
cronjob_bandit25_root: ASCII text
e2scrub_all:           ASCII text
otw-tmp-dir:           regular file, no read permission
sysstat:               ASCII text
bandit23@bandit:/etc/cron.d$ cat cronjob_bandit24
@reboot bandit24 /usr/bin/cronjob_bandit24.sh &> /dev/null
* * * * * bandit24 /usr/bin/cronjob_bandit24.sh &> /dev/null
bandit23@bandit:/etc/cron.d$ cat /usr/bin/cronjob_bandit24.sh
#!/bin/bash

myname=$(whoami)

cd /var/spool/$myname/foo || exit 1
echo "Executing and deleting all scripts in /var/spool/$myname/foo:"
for i in * .*;
do
    if [ "$i" != "." -a "$i" != ".." ];
    then
        echo "Handling $i"
        owner="$(stat --format "%U" ./$i)"
        if [ "${owner}" = "bandit23" ]; then
            timeout -s 9 60 ./$i
        fi
        rm -rf ./$i
    fi
done

bandit23@bandit:/etc/cron.d$ mkdir /tmp/here
bandit23@bandit:/etc/cron.d$ cd /tmp/here
bandit23@bandit:/tmp/here$ touch script.sh
bandit23@bandit:/tmp/here$ nano script.sh
#!/bin/bash

cat /etc/bandit_pass/bandit24 > /tmp/here/password
bandit23@bandit:/tmp/here$ chmod 777 script.sh
bandit23@bandit:/tmp/here$ cp script.sh /var/spool/bandit24/foo
bandit23@bandit:/tmp/here$ cat password 
VAfGXJ1PBSsPSnvsjI8p759leLZ9GGar
```

**Kullanıcı adı:** `bandit24`

**Şifre:** `VAfGXJ1PBSsPSnvsjI8p759leLZ9GGar`

### Bandit Level 24 → Level 25

http://overthewire.org/wargames/bandit/bandit25.html

```r
bandit23@bandit:~$ mkdir /tmp/here
bandit23@bandit:~$ cd /tmp/here
bandit24@bandit:/tmp/here$ for i in {0000..9999}; do echo VAfGXJ1PBSsPSnvsjI8p759leLZ9GGar $i; done | nc localhost 30002
...
Correct!
The password of user bandit25 is p7TaowMYrmu23Ol8hiZh9UvD0O9hpx8d
```

**Kullanıcı adı:** `bandit25`

**Şifre:** `p7TaowMYrmu23Ol8hiZh9UvD0O9hpx8d`

### Bandit Level 25 → Level 26

http://overthewire.org/wargames/bandit/bandit26.html



**Kullanıcı adı:** `bandit26`

**Şifre:** ``

### Bandit Level 26 → Level 27

http://overthewire.org/wargames/bandit/bandit27.html



**Kullanıcı adı:** `bandit27`

**Şifre:** ``

### Bandit Level 27 → Level 28

http://overthewire.org/wargames/bandit/bandit28.html



**Kullanıcı adı:** `bandit28`

**Şifre:** ``

### Bandit Level 28 → Level 29

http://overthewire.org/wargames/bandit/bandit29.html



**Kullanıcı adı:** `bandit29`

**Şifre:** ``

### Bandit Level 29 → Level 30

http://overthewire.org/wargames/bandit/bandit29.html



**Kullanıcı adı:** `bandit30`

**Şifre:** ``

### Bandit Level 30 → Level 31

http://overthewire.org/wargames/bandit/bandit29.html



**Kullanıcı adı:** `bandit31`

**Şifre:** ``

### Bandit Level 31 → Level 32

http://overthewire.org/wargames/bandit/bandit29.html



**Kullanıcı adı:** `bandit32`

**Şifre:** ``

### Bandit Level 32 → Level 33

http://overthewire.org/wargames/bandit/bandit29.html



**Kullanıcı adı:** `bandit33`

**Şifre:** ``



### Bandit Level 33 → Level 34

http://overthewire.org/wargames/bandit/bandit29.html



**Kullanıcı adı:** `bandit34`

**Şifre:** ``



{{< further-reading >}}

