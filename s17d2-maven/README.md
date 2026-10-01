# s17d2 — Spring Boot & Dependency Injection

Workintech Sprint 5 ödevi: geliştirici (developer) modeli, vergi oranları ve REST API ile CRUD işlemleri.

## Gereksinimler

- Java 17
- Maven (veya projedeki `./mvnw`)

## Çalıştırma

```bash
./mvnw spring-boot:run
```

Uygulama **8585** portunda, taban yol **`/workintech`** altında ayağa kalkar.

## API özeti

Tüm yollar `http://localhost:8585/workintech` ile başlar.

| Metot | Yol | Açıklama |
|--------|-----|----------|
| GET | `/developers` | Tüm geliştiriciler |
| GET | `/developers/{id}` | ID’ye göre tek kayıt |
| POST | `/developers` | Yeni kayıt (deneyime göre maaştan vergi düşülür) |
| PUT | `/developers/{id}` | Güncelleme |
| DELETE | `/developers/{id}` | Silme |

## Actuator

Örnek: `/workintech/actuator/health`, `/workintech/actuator/mappings`, `/workintech/actuator/info`

## Paket yapısı (kısaca)

- `model` — `Developer` ve deneyim seviyesine göre alt sınıflar
- `tax` — `Taxable` arayüzü ve `DeveloperTax` uygulaması
- `rest` — `DeveloperController`
