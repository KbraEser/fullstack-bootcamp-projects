# React Testing Library — İletişim Formu

Bu depo, Vite ve Vitest ile kurulmuş bir React projesidir. `src/components/IletisimFormu.jsx` bileşeni ile `IletisimFormu.test.jsx` dosyası, form doğrulamasını ve React Testing Library ile sorgulama kalıplarını (`getByText`, `getByRole`, `findAllByTestId`, vb.) birlikte gösterir.

## Test planı (9 senaryo)

| # | Ne doğrulanıyor? |
|---|------------------|
| 1 | Form hatasız render olur; sayfada en az bir `input` vardır. |
| 2 | “İletişim Formu” başlığı metin ve görünürlük kontrolleriyle bulunur. |
| 3 | Ad 5 karakterden kısa olunca tek hata (`findAllByTestId("error")`). |
| 4 | Boş gönderimde üç hata mesajı. |
| 5 | Ad/soyad dolu, email boş → tek hata. |
| 6 | Geçersiz e-posta → “Hata: email geçerli bir email adresi olmalıdır.” |
| 7 | Soyad yok, ad ve email dolu → “Hata: soyad gereklidir.” |
| 8 | Geçerli ad/soyad/email, mesaj boş → hata yok; özetde ad/soyad/email görünür, mesaj alanı yok. |
| 9 | Tüm alanlar dolu gönderilince özetde dört alan da doğru metinle görünür. |

## `IletisimFormu.jsx` — davranış özeti

- **State:** `form` (ad, soyad, email, mesaj), `errors` (alan bazlı hata metinleri), `displayData` (gönderim başarılıysa özet gösterimi).
- **`errorHandling`:**  
  - `ad` en az 5 karakter değilse hata.  
  - `email` basit bir regex ile kontrol edilir (`@` ve nokta içeren desen).  
  - `mesaj` dışındaki alanlar boşsa “gereklidir” hatası.
- **`handleSubmit`:** Tüm alanlar için hata üretir; hepsi boş string ise `displayData` true olur ve `Goruntule` ile özet render edilir.
- **`handleChange`:** Anlık validasyon + `form` güncellemesi; hata varsa `displayData` sıfırlanır.
- **Hata gösterimi:** `ad`, `soyad`, `email` için `Hata: …` öneki; `mesaj` için bileşende `Error:` kullanılmış (testler ad/soyad/email akışına odaklanır).

## `Goruntule.jsx`

Gönderim başarılı olduğunda dolu alanları `firstnameDisplay`, `lastnameDisplay`, `emailDisplay`, `messageDisplay` test id’leri ile listeler.

## Test dosyası (`IletisimFormu.test.jsx`)

- **`beforeEach` / `afterEach`:** Çoğu senaryoda form bir kez `render` edilir; `cleanup` ile DOM temizlenir. `[1]` numaralı test, ödev gereği içinde ayrıca `render` çağırır.
- **`useIletisimFormTestUtils`:** “Gönder” butonunu `getByRole` ile bulup tıklama tekrarını tek yerde toplar; test [4] öğrenme kontrollerinde `screen.getByRole` doğrudan görünsün diye satır içi bırakılmıştır.
- **Kontrol testleri:** Dosya okunup boşluklar silindikten sonra `test("[` ile bölünerek belirli API kalıplarının (`getByText`, `findAllByTestId`, vb.) kullanıldığı doğrulanır.

## Komutlar

```bash
npm install
npm test
```

Geliştirme sunucusu: `npm run dev`.
