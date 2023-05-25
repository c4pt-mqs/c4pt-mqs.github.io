---
title: Python Uygulama Örnekleri ve Notları
date: 2022-02-12T09:00:00Z
summary: "İngilizce Öğrenme adına Video, Okuma, Dinleme, Yazma ve Konuşma için kaynaklar gösteriyorum! Günlük pratik, diziler/filmler ve uygulamalar ile İngilizce seviyenizi geliştirin."
draft: false
type: post
author: Kaptan
categories:
  - Python
  - Yazılım
---

{{< toc >}}

Bu yazımda, python öğrenirken kullandığınız birçok komutu derledim. Unuttuğunuz ve takıldığınız yerlerde size yardımcı olması temennim olur. Python programlama dili, geniş bir komut yelpazesine sahip ve çeşitli alanlarda kullanabilirsiniz. Sıkça kullanılan komutları derledim:

## Temeller
Bir sayı yazdır:
{{< highlight-copy >}}
```py
print(123)
```
{{< /highlight-copy >}}

Bir dizi yazdır:
{{< highlight-copy >}}
```py
print("test")
```
{{< /highlight-copy >}}

Sayıları toplamak:
{{< highlight-copy >}}
```py
print(1+2)
```
{{< /highlight-copy >}}

Değişken atamak:
{{< highlight-copy >}}
```py
number = 123
```
{{< /highlight-copy >}}

Değişkeni yazdır:
{{< highlight-copy >}}
```py
print(number)
```
{{< /highlight-copy >}}
     

Fonksiyonu çağır:
{{< highlight-copy >}}
```py
x = min(1, 2)
```
{{< /highlight-copy >}}

Yorum satırı:
{{< highlight-copy >}}
```py
#Bu bir yorumdur
```
{{< /highlight-copy >}}

## Türler
- Integer     42
- String      "a string"
- List        [1, 2, 3]
- Tuple       (1, 2, 3)
- Boolean     True

## Faydalı fonksiyonlar
Ekrana yazdır:
{{< highlight-copy >}}
```py
print("hi")
```
{{< /highlight-copy >}}

Uzunluğu hesapla:
{{< highlight-copy >}}
```py
len("test")
```
{{< /highlight-copy >}}

Sayıların minimum değeri:
{{< highlight-copy >}}
```py
min(1, 2)
```
{{< /highlight-copy >}}

Sayıların maximum değeri:
{{< highlight-copy >}}
```py
max(1, 2)
```
{{< /highlight-copy >}}

Tamsayıya dönüştür:
{{< highlight-copy >}}
```py
int("123")
```
{{< /highlight-copy >}}

Dizeye dönüştür:
{{< highlight-copy >}}
```py
str(123)
```
{{< /highlight-copy >}}

Boolean'a dönüştür:
{{< highlight-copy >}}
```py
bool(1)
```
{{< /highlight-copy >}}

Sayıların aralığını al:
{{< highlight-copy >}}
```py
range(5, 10)
```
{{< /highlight-copy >}}

Bir değer yazdırmak:
{{< highlight-copy >}}
```py
return 123
```
{{< /highlight-copy >}}

İndeksleme:
{{< highlight-copy >}}
```py
"test"[0]
```
{{< /highlight-copy >}}


Dilimleme:
{{< highlight-copy >}}
```py
"test"[1:3]
```
{{< /highlight-copy >}}

Sonraki döngü ile devam ettir:
{{< highlight-copy >}}
```py
continue
```
{{< /highlight-copy >}}

Döngüden çık:
{{< highlight-copy >}}
```py
break
```
{{< /highlight-copy >}}

Liste ekleme:
{{< highlight-copy >}}
```py
numbers = numbers + [4]
```
{{< /highlight-copy >}}

Liste ekleme (metoduyla):
{{< highlight-copy >}}
```py
numbers.append(4)
```
{{< /highlight-copy >}}

Liste öğesini ayıkla:
{{< highlight-copy >}}
```py
value = numbers[0]
```
{{< /highlight-copy >}}

Liste öğesini atama:
{{< highlight-copy >}}
```py
numbers[0] = 123
```
{{< /highlight-copy >}}

## Terimler
- syntax:                    harf ve sembollerin kodda düzenlenmesi
- program:                   bilgisayar için talimatların bütünü
- print:                     ekrana metin yazdır
- string:                    tırnak içine alınmış bir dizi kelime
- variable:                  atanabilir değer
- value examples:            a string, an integer, a boolean
- assignment:                bir değişkene bir değer vermek için '=' kullanmak
- function:                  içine değerler koyup - çağrıldığı bir fonksiyon
- call (a function):         fonksiyonu çalıştırmak için çağırmak
- argument:                  bir fonksiyona girdi vermek
- parameter:                 bir fonksiyon tanımı belirtmek
- return value:              bir fonksiyondan döndürülen değer
- conditional:               yalnızca bir koşul geçerliyse çalıştırılan bir talimat
- loop:                      talimatları tekrar tekrar çalıştırmanın bir yolu/döngü
- list:                      verilen değerleri tutan bir değer türü
- tuple:                     bir liste gibi, ancak değiştirilemez
- indexing:                  belirli bir durumdan, bir elementin çıkarılması
- slicing:                   bazı öğeleri arka arkaya çıkarmak
- dictionary:                anahtarlardan değerlere eşleme

## Hatırlatmalar
- Strings(dizeler) ve lists(listeler) 1’den değil 0’dan başlayarak dizine alınır.
- Print ve return aynı kavram değildir.
- Return anahtar sözcüğü yalnızca fonksiyonların içinde geçerlidir.
- Strings(dizeler) tırnak içine alınmalıdır.
- Variable(değer) veya function(fonksiyon) adlarına boşluk koyamazsınız.
- Typecasting(türünü belirtme) yapmadan strings ve integers ekleyemezsiniz
- Koşullar için, fonksiyon tanımları ve loops(döngüler) yazarken iki nokta üst üste kullanın.
- Tanımlayıcı değişken adları, kodunuzu daha iyi anlamanıza yardımcı olur.

Koşullar:
{{< highlight-copy >}}
```py
if x == 1:
    print("x bir'dir.")
else:
    print("x bir değildir.")
```
{{< /highlight-copy >}}

Listeler:
{{< highlight-copy >}}
```py
sayilar = [7, 8, 9]
ilk_sayi = sayilar[0]
sayilar[2] = 11
if 11 in sayilar:
    print("11 liste de değil!")
for n in sayilar:
    print(n)
```
{{< /highlight-copy >}}

Fonksiyonları Tanımlama:
{{< highlight-copy >}}
```py
def my_func(parametre1, parametre2):
    result = parametre1 + parametre2
    return result
```
{{< /highlight-copy >}}

Döngüler:
{{< highlight-copy >}}
```py
for sayi in [1, 2, 3]:
    print(sayi)
x = 0
while x < 10:
    print(x)
    x = x + 1
```
{{< /highlight-copy >}}

Sözlükler:
{{< highlight-copy >}}
```py
sayilar = {
    1: "bir",
    2: "iki"
}
print(sayilar[1])
```
{{< /highlight-copy >}}

Karşılaştırmalar:
- Eşittir          ==
- Eşit değildir	  !=
- Küçüktür     	  <
- Küçük eşittir	  <=
- Büyüktür	      >

## Faydalı Yöntemler
Küçük harfe dönüştür:

{{< highlight-copy >}}
```py
"XX".lower()
```
{{< /highlight-copy >}}

Büyük harfe dönüştür:
{{< highlight-copy >}}
```py
"xx".upper()
```
{{< /highlight-copy >}}

Boşluklar koyarak böl:
{{< highlight-copy >}}
```py
"a b c".split(" ")
```
{{< /highlight-copy >}}

Boşlukları kaldır:
{{< highlight-copy >}}
```py
" a string ".strip()
```
{{< /highlight-copy >}}

Bir çok dizeyi tek bir dizede birleştir:
{{< highlight-copy >}}
```py
" ".join(["a", "b"])
```
{{< /highlight-copy >}}

String … ile başlamalı:
{{< highlight-copy >}}
```py
"xx".startswith("x")
```
{{< /highlight-copy >}}

String … ile bitmeli:
{{< highlight-copy >}}
```py
"xx".endswith("x")
```
{{< /highlight-copy >}}

Listeleri say:
{{< highlight-copy >}}
```py
[1, 2].count(2)
```
{{< /highlight-copy >}}

Listeyi sil:
{{< highlight-copy >}}
```py
[1, 2].remove(2)
```
{{< /highlight-copy >}}

Dictionary keys:
{{< highlight-copy >}}
```py
{1: 2}.keys()
```
{{< /highlight-copy >}}

Dictionary values:
{{< highlight-copy >}}
```py
{1: 2}.values()
```
{{< /highlight-copy >}}

Dictionary key/value pairs:
{{< highlight-copy >}}
```py
{1: 2}.items()
```
{{< /highlight-copy >}}

## Bonus
+ Zip lists:
zip([1, 2], ["one", "two"])

- Set:
my_set = {1, 2, 3}

+ Set intersection:
{1, 2} & {2, 3}

- Set union:
{1, 2} | {2, 3}

+ Index of list element:
[1, 2, 3].index(2)

- Sort a list:
numbers.sort()

+ Reverse a list:
numbers.reverse()

- Sum of list:
sum([1, 2, 3])

+ Numbering of list elements:
for i, item in enumerate(items):

- Read a file line by line:
for line in open("file.txt"):

+ Read file contents:
contents = open("file.txt").read()

- Random number between 1 and 10:
import random; x = random.randint(1, 10)

+ List comprehensions:
[x+1 for x in numbers]

- Check if any condition holds:
any([True, False])

+ Check if all conditions hold:
all([True, False])

## Code Snippets

Kullanıcıdan girdi alma:
{{< highlight-copy >}}
```py
name = input("Enter your name: ")
print("Hello, " + name + "!")
```
{{< /highlight-copy >}}

For döngüsü kullanma:
{{< highlight-copy >}}
```py
numbers = [1, 2, 3, 4, 5]
for number in numbers:
    print(number)
```
{{< /highlight-copy >}}

While döngüsü kullanma:
{{< highlight-copy >}}
```py
count = 0
while count < 5:
    print(count)
    count += 1
```
{{< /highlight-copy >}}

Listeyi filtreleme:
{{< highlight-copy >}}
```py
numbers = [1, 2, 3, 4, 5]
even_numbers = [num for num in numbers if num % 2 == 0]
print(even_numbers)

```
{{< /highlight-copy >}}

Fonksiyon tanımlama ve çağırma:
{{< highlight-copy >}}
```py
def greet(name):
    print("Hi, " + name + "!")

greet("Jack")
```
{{< /highlight-copy >}}

Sınıf tanımlama ve nesne oluşturma:
{{< highlight-copy >}}
```py
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print("Merhaba, benim adım " + self.name)

person = Person("Ali")
person.greet()
```
{{< /highlight-copy >}}

Dosya okuma ve yazma:
{{< highlight-copy >}}
```py
# Dosya yazma
with open("file.txt", "w") as file:
    file.write("This is a test.")

# Dosya okuma
with open("file.txt", "r") as file:
    content = file.read()
    print(content)
```
{{< /highlight-copy >}}

Dosya işlemleri (CSV):
{{< highlight-copy >}}
```py
import csv

# CSV dosyası yazma
data = [["Name", "Age"], ["Jake", 30], ["Alan", 25]]
with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)

# CSV dosyası okuma
with open("data.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
```
{{< /highlight-copy >}}

Bir Dizeyi Ters Çevir:
{{< highlight-copy >}}
```py
def reverse_string(string):
    return string[::-1]

text = "Hello, World!"
reversed_text = reverse_string(text)
print("Reversed Text:", reversed_text)
```
{{< /highlight-copy >}}

Listeyi Tersine Çevir:
{{< highlight-copy >}}
```py
def reverse_list(lst):
    reversed_lst = lst[::-1]
    return reversed_lst

my_list = [1, 2, 3, 4, 5]
reversed_list = reverse_list(my_list)
print("Reversed List:", reversed_list)
```
{{< /highlight-copy >}}

Listedeki Sayıların Ortalamasını Hesaplama:
{{< highlight-copy >}}
```py
def calculate_average(numbers):
    total = sum(numbers)
    average = total / len(numbers)
    return average

nums = [5, 2, 9, 1, 7]
average = calculate_average(nums)
print("Average:", average)
```
{{< /highlight-copy >}}

Dictionary kullanma:
{{< highlight-copy >}}
```py
person = {"name": "Jake", "age": 21, "city": "New York"}
print(person["name"])
print(person.get("age"))
```
{{< /highlight-copy >}}

Try-Except bloğu kullanma:
{{< highlight-copy >}}
```py
try:
    num = int(input("Bir sayı girin: "))
    result = 10 / num
    print("Sonuç:", result)
except ZeroDivisionError:
    print("Hata: Sıfıra bölme hatası!")
except ValueError:
    print("Hata: Geçersiz sayı girişi!")
```
{{< /highlight-copy >}}

Modül içe aktarma:
{{< highlight-copy >}}
```py
import math

radius = 5
area = math.pi * math.pow(radius, 2)
print("Area of the circle:", area)
```
{{< /highlight-copy >}}

String işlemleri:
{{< highlight-copy >}}
```py
text = "Hello, world!"
print(text.upper())
print(text.lower())
print(text.split(", "))

```
{{< /highlight-copy >}}

Lambda fonksiyonu kullanma:
{{< highlight-copy >}}
```py
double = lambda x: x * 2
print(double(5))
```
{{< /highlight-copy >}}

Liste sıralama:
{{< highlight-copy >}}
```py
numbers = [5, 2, 8, 1, 9]
numbers.sort()
print(numbers)
```
{{< /highlight-copy >}}

Veri yapıları:
{{< highlight-copy >}}
```py
# Tuple
point = (3, 5)
print(point[0])

# Set
fruits = {"apple", "banana", "orange"}
fruits.add("pear")
print(fruits)

# Dictionary
person = {"name": "John", "age": 30}
person["city"] = "New York"
print(person)
```
{{< /highlight-copy >}}

API istekleri (requests kütüphanesi kullanarak):
{{< highlight-copy >}}
```py
import requests

response = requests.get("https://api.example.com/data")
data = response.json()

# Verileri kullanma
for item in data:
    print(item["name"], item["value"])
```
{{< /highlight-copy >}}

Web Scraping (Beautiful Soup kütüphanesi kullanarak):
{{< highlight-copy >}}
```py
import requests
from bs4 import BeautifulSoup

# Web sayfasını çekme
url = "https://www.example.com"
response = requests.get(url)

# HTML içeriğini ayrıştırma
soup = BeautifulSoup(response.text, "html.parser")

# Etiketleri seçme
links = soup.find_all("a")
for link in links:
    print(link.get("href"))

```
{{< /highlight-copy >}}

Binary'i Decimal'e Çevirme:
{{< highlight-copy >}}
```py
binary = "101010"
decimal = int(binary, 2)
print("Decimal:", decimal)
```
{{< /highlight-copy >}}

Decimal'i Binary'e Çevirme:
{{< highlight-copy >}}
```py
decimal = 42
binary = bin(decimal)[2:]
print("Binary:", binary)
```
{{< /highlight-copy >}}

Faktöriyel Hesaplama:
{{< highlight-copy >}}
```py
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

num = 5
result = factorial(num)
print("Factorial:", result)
```
{{< /highlight-copy >}}

Fibonacci Serisi:
{{< highlight-copy >}}
```py
def fibonacci(n):
    fib_sequence = [0, 1]
    for i in range(2, n):
        fib_sequence.append(fib_sequence[i - 1] + fib_sequence[i - 2])
    return fib_sequence

num = 8
fib_seq = fibonacci(num)
print("Fibonacci Sequence:", fib_seq)
```
{{< /highlight-copy >}}

Linear Arama:
{{< highlight-copy >}}
```py
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

numbers = [3, 5, 1, 9, 2, 7]
target_num = 9
index = linear_search(numbers, target_num)
print("Target found at index:", index)
```
{{< /highlight-copy >}}

Bubble Sıralama:
{{< highlight-copy >}}
```py
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

numbers = [9, 2, 5, 1, 7, 3]
bubble_sort(numbers)
print("Sorted Numbers:", numbers)
```
{{< /highlight-copy >}}

Asal Sayı mı?:
{{< highlight-copy >}}
```py
def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

number = 17
is_prime_number = is_prime(number)
print("Is Prime Number:", is_prime_number)
```
{{< /highlight-copy >}}

Caesar Cipher:
{{< highlight-copy >}}
```py
def caesar_encrypt(text, shift):
    encrypted_text = ""
    for char in text:
        if char.isalpha():
            ascii_val = ord(char)
            shifted_val = (ascii_val - ord('a') + shift) % 26 + ord('a')
            encrypted_text += chr(shifted_val)
        else:
            encrypted_text += char
    return encrypted_text

def caesar_decrypt(text, shift):
    decrypted_text = ""
    for char in text:
        if char.isalpha():
            ascii_val = ord(char)
            shifted_val = (ascii_val - ord('a') - shift) % 26 + ord('a')
            decrypted_text += chr(shifted_val)
        else:
            decrypted_text += char
    return decrypted_text

message = "hello world"
encrypted_message = caesar_encrypt(message, 3)
print("Encrypted Message:", encrypted_message)

decrypted_message = caesar_decrypt(encrypted_message, 3)
print("Decrypted Message:", decrypted_message)
```
{{< /highlight-copy >}}

Vigenère Cipher:
{{< highlight-copy >}}
```py
def vigenere_encrypt(plain_text, key):
    encrypted_text = ""
    key_index = 0
    for char in plain_text:
        if char.isalpha():
            shift = ord(key[key_index].lower()) - ord('a')
            encrypted_char = chr((ord(char.lower()) - ord('a') + shift) % 26 + ord('a'))
            if char.isupper():
                encrypted_text += encrypted_char.upper()
            else:
                encrypted_text += encrypted_char
            key_index = (key_index + 1) % len(key)
        else:
            encrypted_text += char
    return encrypted_text

def vigenere_decrypt(encrypted_text, key):
    decrypted_text = ""
    key_index = 0
    for char in encrypted_text:
        if char.isalpha():
            shift = ord(key[key_index].lower()) - ord('a')
            decrypted_char = chr((ord(char.lower()) - ord('a') - shift) % 26 + ord('a'))
            if char.isupper():
                decrypted_text += decrypted_char.upper()
            else:
                decrypted_text += decrypted_char
            key_index = (key_index + 1) % len(key)
        else:
            decrypted_text += char
    return decrypted_text

message = "HELLO WORLD"
key = "KEY"
encrypted_message = vigenere_encrypt(message, key)
print("Encrypted Message:", encrypted_message)

decrypted_message = vigenere_decrypt(encrypted_message, key)
print("Decrypted Message:", decrypted_message)
```
{{< /highlight-copy >}}

Rail Fence Cipher:
{{< highlight-copy >}}
```py
def rail_fence_encrypt(plain_text, rails):
    encrypted_text = ""
    rail_lines = [[] for _ in range(rails)]
    rail_index = 0
    direction = 1
    for char in plain_text:
        rail_lines[rail_index].append(char)
        rail_index += direction
        if rail_index == 0 or rail_index == rails - 1:
            direction *= -1
    for rail in rail_lines:
        encrypted_text += ''.join(rail)
    return encrypted_text

def rail_fence_decrypt(encrypted_text, rails):
    decrypted_text = ""
    rail_lines = [[] for _ in range(rails)]
    rail_index = 0
    direction = 1
    for char in encrypted_text:
        rail_lines[rail_index].append(None)
        rail_index += direction
        if rail_index == 0 or rail_index == rails - 1:
            direction *= -1
    index = 0
    for rail in rail_lines:
        for i in range(len(rail)):
            rail[i] = encrypted_text[index]
            index += 1
    rail_index = 0
    direction = 1
    for _ in range(len(encrypted_text)):
        decrypted_text += rail_lines[rail_index].pop(0)
        rail_index += direction
        if rail_index == 0 or rail_index == rails - 1:
            direction *= -1
    return decrypted_text

message = "HELLO WORLD"
rails = 3
encrypted_message = rail_fence_encrypt(message, rails)
print("Encrypted Message:", encrypted_message)

decrypted_message = rail_fence_decrypt(encrypted_message, rails)
print("Decrypted Message:", decrypted_message)
```
{{< /highlight-copy >}}

Playfair Cipher:
{{< highlight-copy >}}
```py
import string

def generate_playfair_matrix(key):
    key = key.lower()
    key += string.ascii_lowercase
    matrix = []
    for char in key:
        if char not in matrix and char.isalpha():
            matrix.append(char)
    playfair_matrix = [matrix[i:i+5] for i in range(0, len(matrix), 5)]
    return playfair_matrix

def find_char(matrix, char):
    for i in range(len(matrix)):
        if char in matrix[i]:
            return i, matrix[i].index(char)
    return -1, -1

def playfair_encrypt(plain_text, key):
    encrypted_text = ""
    playfair_matrix = generate_playfair_matrix(key)
    for i in range(0, len(plain_text), 2):
        char1 = plain_text[i]
        char2 = plain_text[i + 1] if i + 1 < len(plain_text) else 'x'
        row1, col1 = find_char(playfair_matrix, char1)
        row2, col2 = find_char(playfair_matrix, char2)
        if row1 == row2:
            encrypted_text += playfair_matrix[row1][(col1 + 1) % 5]
            encrypted_text += playfair_matrix[row2][(col2 + 1) % 5]
        elif col1 == col2:
            encrypted_text += playfair_matrix[(row1 + 1) % 5][col1]
            encrypted_text += playfair_matrix[(row2 + 1) % 5][col2]
        else:
            encrypted_text += playfair_matrix[row1][col2]
            encrypted_text += playfair_matrix[row2][col1]
    return encrypted_text

def playfair_decrypt(encrypted_text, key):
    decrypted_text = ""
    playfair_matrix = generate_playfair_matrix(key)
    for i in range(0, len(encrypted_text), 2):
        char1 = encrypted_text[i]
        char2 = encrypted_text[i + 1]
        row1, col1 = find_char(playfair_matrix, char1)
        row2, col2 = find_char(playfair_matrix, char2)
        if row1 == row2:
            decrypted_text += playfair_matrix[row1][(col1 - 1) % 5]
            decrypted_text += playfair_matrix[row2][(col2 - 1) % 5]
        elif col1 == col2:
            decrypted_text += playfair_matrix[(row1 - 1) % 5][col1]
            decrypted_text += playfair_matrix[(row2 - 1) % 5][col2]
        else:
            decrypted_text += playfair_matrix[row1][col2]
            decrypted_text += playfair_matrix[row2][col1]
    return decrypted_text

message = "HELLO WORLD"
key = "KEYWORD"
encrypted_message = playfair_encrypt(message, key)
print("Encrypted Message:", encrypted_message)

decrypted_message = playfair_decrypt(encrypted_message, key)
print("Decrypted Message:", decrypted_message)
```
{{< /highlight-copy >}}

Atbash Cipher:
{{< highlight-copy >}}
```py
def atbash_encrypt(plain_text):
    encrypted_text = ""
    for char in plain_text:
        if char.isalpha():
            ascii_val = ord(char.lower())
            encrypted_val = ord('z') - (ascii_val - ord('a'))
            encrypted_text += chr(encrypted_val)
        else:
            encrypted_text += char
    return encrypted_text

def atbash_decrypt(encrypted_text):
    decrypted_text = ""
    for char in encrypted_text:
        if char.isalpha():
            ascii_val = ord(char.lower())
            decrypted_val = ord('z') - (ascii_val - ord('a'))
            decrypted_text += chr(decrypted_val)
        else:
            decrypted_text += char
    return decrypted_text

message = "HELLO WORLD"
encrypted_message = atbash_encrypt(message)
print("Encrypted Message:", encrypted_message)

decrypted_message = atbash_decrypt(encrypted_message)
print("Decrypted Message:", decrypted_message)
```
{{< /highlight-copy >}}

Autokey Cipher:
{{< highlight-copy >}}
```py
def autokey_encrypt(plain_text, key):
    encrypted_text = ""
    key = key + plain_text
    for i in range(len(plain_text)):
        char = plain_text[i]
        if char.isalpha():
            shift = ord(key[i].lower()) - ord('a')
            encrypted_char = chr((ord(char.lower()) - ord('a') + shift) % 26 + ord('a'))
            if char.isupper():
                encrypted_text += encrypted_char.upper()
            else:
                encrypted_text += encrypted_char
        else:
            encrypted_text += char
    return encrypted_text

def autokey_decrypt(encrypted_text, key):
    decrypted_text = ""
    key = key.lower()
    for i in range(len(encrypted_text)):
        char = encrypted_text[i]
        if char.isalpha():
            shift = ord(key[i].lower()) - ord('a')
            decrypted_char = chr((ord(char.lower()) - ord('a') - shift) % 26 + ord('a'))
            if char.isupper():
                decrypted_text += decrypted_char.upper()
            else:
                decrypted_text += decrypted_char
            key += decrypted_char
        else:
            decrypted_text += char
    return decrypted_text

message = "HELLO WORLD"
key = "KEY"
encrypted_message = autokey_encrypt(message, key)
print("Encrypted Message:", encrypted_message)

decrypted_message = autokey_decrypt(encrypted_message, key)
print("Decrypted Message:", decrypted_message)
```
{{< /highlight-copy >}}

Beaufort Cipher:
{{< highlight-copy >}}
```py
def beaufort_encrypt(plain_text, key):
    key = key.lower()
    key = (key * (len(plain_text) // len(key) + 1))[:len(plain_text)]
    encrypted_text = ""
    for i in range(len(plain_text)):
        char = plain_text[i]
        if char.isalpha():
            shift = ord(key[i]) - ord('a')
            encrypted_char = chr((ord(char.lower()) - ord('a') - shift) % 26 + ord('a'))
            if char.isupper():
                encrypted_text += encrypted_char.upper()
            else:
                encrypted_text += encrypted_char
        else:
            encrypted_text += char
    return encrypted_text

def beaufort_decrypt(encrypted_text, key):
    key = key.lower()
    key = (key * (len(encrypted_text) // len(key) + 1))[:len(encrypted_text)]
    decrypted_text = ""
    for i in range(len(encrypted_text)):
        char = encrypted_text[i]
        if char.isalpha():
            shift = ord(key[i]) - ord('a')
            decrypted_char = chr((ord(char.lower()) - ord('a') + shift) % 26 + ord('a'))
            if char.isupper():
                decrypted_text += decrypted_char.upper()
            else:
                decrypted_text += decrypted_char
        else:
            decrypted_text += char
    return decrypted_text

message = "HELLO WORLD"
key = "KEY"
encrypted_message = beaufort_encrypt(message, key)
print("Encrypted Message:", encrypted_message)

decrypted_message = beaufort_decrypt(encrypted_message, key)
print("Decrypted Message:", decrypted_message)
```
{{< /highlight-copy >}}

Substitution Cipher:
{{< highlight-copy >}}
```py
def substitution_encrypt(plain_text, key):
    encrypted_text = ""
    for char in plain_text:
        if char.isalpha():
            if char.isupper():
                encrypted_text += key[ord(char) - ord('A')].upper()
            else:
                encrypted_text += key[ord(char) - ord('a')]
        else:
            encrypted_text += char
    return encrypted_text

def substitution_decrypt(encrypted_text, key):
    decrypted_text = ""
    for char in encrypted_text:
        if char.isalpha():
            if char.isupper():
                decrypted_text += chr(key.upper().index(char) + ord('A'))
            else:
                decrypted_text += chr(key.lower().index(char) + ord('a'))
        else:
            decrypted_text += char
    return decrypted_text

message = "HELLO WORLD"
key = "QWERTYUIOPASDFGHJKLZXCVBNM"
encrypted_message = substitution_encrypt(message, key)
print("Encrypted Message:", encrypted_message)

decrypted_message = substitution_decrypt(encrypted_message, key)
print("Decrypted Message:", decrypted_message)
```
{{< /highlight-copy >}}

Polybius Square Cipher:
{{< highlight-copy >}}
```py
def polybius_encrypt(plain_text):
    polybius_square = {
        'A': '11', 'B': '12', 'C': '13', 'D': '14', 'E': '15',
        'F': '21', 'G': '22', 'H': '23', 'I': '24', 'J': '25',
        'K': '31', 'L': '32', 'M': '33', 'N': '34', 'O': '35',
        'P': '41', 'Q': '42', 'R': '43', 'S': '44', 'T': '45',
        'U': '51', 'V': '52', 'W': '53', 'X': '54', 'Y': '55',
        'Z': '53'
    }
    encrypted_text = ""
    for char in plain_text:
        if char.isalpha():
            char = char.upper()
            encrypted_text += polybius_square[char]
    return encrypted_text

def polybius_decrypt(encrypted_text):
    polybius_square = {
        '11': 'A', '12': 'B', '13': 'C', '14': 'D', '15': 'E',
        '21': 'F', '22': 'G', '23': 'H', '24': 'I', '25': 'J',
        '31': 'K', '32': 'L', '33': 'M', '34': 'N', '35': 'O',
        '41': 'P', '42': 'Q', '43': 'R', '44': 'S', '45': 'T',
        '51': 'U', '52': 'V', '53': 'W', '54': 'X', '55': 'Y'
    }
    decrypted_text = ""
    for i in range(0, len(encrypted_text), 2):
        pair = encrypted_text[i:i+2]
        decrypted_text += polybius_square[pair]
    return decrypted_text

message = "HELLO WORLD"
encrypted_message = polybius_encrypt(message)
print("Encrypted Message:", encrypted_message)

decrypted_message = polybius_decrypt(encrypted_message)
print("Decrypted Message:", decrypted_message)
```
{{< /highlight-copy >}}

Running Key Cipher:
{{< highlight-copy >}}
```py
def running_key_encrypt(plain_text, key):
    key = key.upper()
    encrypted_text = ""
    for i in range(len(plain_text)):
        char = plain_text[i]
        if char.isalpha():
            char_offset = ord(char) - ord('A')
            key_offset = ord(key[i % len(key)]) - ord('A')
            encrypted_offset = (char_offset + key_offset) % 26
            encrypted_char = chr(encrypted_offset + ord('A'))
            encrypted_text += encrypted_char
        else:
            encrypted_text += char
    return encrypted_text

def running_key_decrypt(encrypted_text, key):
    key = key.upper()
    decrypted_text = ""
    for i in range(len(encrypted_text)):
        char = encrypted_text[i]
        if char.isalpha():
            char_offset = ord(char) - ord('A')
            key_offset = ord(key[i % len(key)]) - ord('A')
            decrypted_offset = (char_offset - key_offset) % 26
            decrypted_char = chr(decrypted_offset + ord('A'))
            decrypted_text += decrypted_char
        else:
            decrypted_text += char
    return decrypted_text

message = "HELLO WORLD"
key = "KEY"
encrypted_message = running_key_encrypt(message, key)
print("Encrypted Message:", encrypted_message)

decrypted_message = running_key_decrypt(encrypted_message, key)
print("Decrypted Message:", decrypted_message)
```
{{< /highlight-copy >}}

Bir Metindeki Kelimeleri Saymak:
{{< highlight-copy >}}
```py
def count_words(text):
    words = text.split()
    word_count = len(words)
    return word_count

sentence = "This is a sample sentence."
word_count = count_words(sentence)
print("Word Count:", word_count)
```
{{< /highlight-copy >}}

Bir Listedeki Maksimum Sayıyı Bulma:
{{< highlight-copy >}}
```py
def find_max(numbers):
    max_num = float('-inf')
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

nums = [5, 2, 9, 1, 7]
max_number = find_max(nums)
print("Maximum Number:", max_number)
```
{{< /highlight-copy >}}

Rastgele Parola Oluşturma:
{{< highlight-copy >}}
```py
import random
import string

def generate_password(length):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

password_length = 10
random_password = generate_password(password_length)
print("Random Password:", random_password)
```
{{< /highlight-copy >}}

Bir Sayının Üssünü Almak:
{{< highlight-copy >}}
```py
def power(base, exponent):
    result = 1
    for _ in range(exponent):
        result *= base
    return result

base_num = 2
exponent_num = 3
power_result = power(base_num, exponent_num)
print("Power Result:", power_result)
```
{{< /highlight-copy >}}

Bir Sayıdaki Rakamların Toplamı:
{{< highlight-copy >}}
```py
def sum_of_digits(number):
    total = 0
    while number > 0:
        digit = number % 10
        total += digit
        number //= 10
    return total

num = 12345
digit_sum = sum_of_digits(num)
print("Sum of Digits:", digit_sum)
```
{{< /highlight-copy >}}

Bir Dizideki Ünlüleri Saymak:
{{< highlight-copy >}}
```py
def count_vowels(text):
    vowels = "aeıioöuü"
    count = 0
    for char in text.lower():
        if char in vowels:
            count += 1
    return count

sentence = "Hello, how are you?"
vowel_count = count_vowels(sentence)
print("Vowel Count:", vowel_count)
```
{{< /highlight-copy >}}

Sıcaklık Dönüştürme:
{{< highlight-copy >}}
```py
def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_to_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return celsius

temp_celsius = 25
temp_fahrenheit = celsius_to_fahrenheit(temp_celsius)
print("Temperature in Fahrenheit:", temp_fahrenheit)

temp_fahrenheit = 77
temp_celsius = fahrenheit_to_celsius(temp_fahrenheit)
print("Temperature in Celsius:", temp_celsius)
```
{{< /highlight-copy >}}


{{< highlight-copy >}}
```py

```
{{< /highlight-copy >}}


{{< highlight-copy >}}
```py

```
{{< /highlight-copy >}}


{{< highlight-copy >}}
```py

```
{{< /highlight-copy >}}









{{< further-reading >}}