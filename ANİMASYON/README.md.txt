# FK(FATIMAGÜL KARAKAŞ) CSS Animation Project 
Bu proje,HTML ve CSS kullanılarak oluşturulmuş animasyonlu bir kutu (div) çalışmasıdır.
Siyah arka plan üzerinde yer alan yeşil bir kutu içerisine büyük boyutta "FK" yazılmış ve kutuya ışık (glow) efekti başta olmak üzere birden fazla animasyon tanımlanmıştır.
README dosyasında anlatılan tüm özellikler, eklenen örnek görselde birebir uygulanmıştır.

Projenin Amacı:
* CSS `@keyframes` yapısını öğrenmek
* Bir elemana birden fazla animasyon tanımlamayı kavramak
* Glow (ışık), kayma, dönme, büyüme-küçülme, solma ve renk değiştirme efektlerini uygulamalı görmek

CSS kısmında her alan kodların hepsi yapılmıştır ancak örnek olarak koyduğum fotodaki kısmını anlatmak isterim.Uygulanan Görsel Özellikler:
* Arka plan rengi siyah(body { background-color: black; )
* Ortada 250x250 px boyutunda yeşil bir kutu.
* Kutu içinde büyük puntolu "FK" yazısı.
* Kutunun etrafında mavi renkli glow (ışık) efekti.
* Glow efekti 2 saniyede bir artıp azalarak sürekli tekrar etmektedir.

Kullanılan Teknolojiler: HTML5,CSS3,CSS Animations (`@keyframes`)

Projede Uygulanan Animasyonlar:
Bu projede aşağıdaki animasyonların tamamı ayrı ayrı tanımlanmış ve uygulanmıştır:
1- Glow (Işık) Efekti  (Aktif Kullanılıyor)
```css
@keyframes glow{
  50%{
    box-shadow: 0px 0px 50px blue;
  }
}
```
* Kutunun etrafında mavi bir ışık yanıp sönmektedir.
* Animasyon süresi: **2 saniye**
* Animasyon türü: **ease-in-out**
* Sonsuz döngüde çalışmaktadır.
2-Sola Kayma (slideLeft)
* Kutu ekranın sağından sola doğru kayacak şekilde tanımlanmıştır.
3-Sağa Kayma (slideRight)
* Kutu soldan sağa doğru hareket edecek şekilde ayarlanmıştır.
4-Aşağı Kayma (slideDown)
* Kutu yukarıdan aşağı doğru hareket edecek animasyon olarak tanımlanmıştır.
5-Yukarı Kayma (slideUp)
* Kutu aşağıdan yukarı doğru çıkacak şekilde ayarlanmıştır.
6-Döndürme (rotate)
* Kutu kendi etrafında **360 derece dönecek** animasyon olarak tanımlanmıştır.
7- Büyüme (grow)
* Kutu %50 zamanda **2 kat büyüyecek** şekilde animasyon verilmiştir.
8- Küçülme (shrink)
* Kutu %50 zamanda **yarı boyutuna küçülecek** şekilde ayarlanmıştır.
9- Solma (fade)
* Kutu animasyonun ortasında **saydam hale gelmektedir**.
10- Renk Değiştirme (colorChange)
* Kutu sırasıyla şu renklere geçiş yapmaktadır:
  * Mor
  * Kırmızı
  * Pembe
  * Kahverengi
  * Mavi
  * Sarı

##  Ana Kutu (Box) Özellikleri:
```css
#box{
  width: 250px;
  height:250px;
  background-color: green;
  font-size: 10em;
  text-align: center;
  animation-name: glow;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-direction: normal;
  animation-timing-function: ease-in-out;
}
```
Bu kod ile:
* Kutunun boyutları ayarlandı
* Arka plan rengi yeşil yapıldı
* Yazı ortalandı
* Glow animasyonu aktif edildi
* Animasyonun sürekli ve yumuşak geçişli çalışması sağlandı

---
## Bu Projede Öğrenilenler
* `@keyframes` kullanımı
* CSS ile animasyon kontrolü
* `transform`, `opacity`, `box-shadow` kullanımı
* Sonsuz döngü animasyon mantığı
* Görsel efekt tasarımı
---

##  Geliştirme Fikirleri

* Birden fazla kutu eklenebilir.
* Buton ile animasyonlar değiştirilebilir.
* JavaScript ile animasyonlar kontrol edilebilir.
* Hover (üzerine gelince) vb. efektleri eklenebilir.

---

## Geliştirici

Bu proje, CSS animasyonlarını öğrenme ve uygulama amacıyla geliştirilmiştir.

---

✅ Görselde yer alan tüm efektler bu projede **aktif olarak uygulanmıştır**.
