# Mira Form SDK

SDK для интеграции с Mira Form API на TypeScript/JavaScript.

## Установка

```bash
npm install mira-form-sdk
```

## Быстрый старт

```typescript
import { MiraFormSDK, MiraFormSDKOptions } from 'mira-form-sdk';

const sdk = new MiraFormSDK('your-api-key', {
  baseUrl: 'https://api.miraform.com',
  timeout: 5000,
});

console.log(sdk.ping()); // 'pong'
```

## Пример использования

```typescript
import { MiraFormSDK } from 'mira-form-sdk';

const sdk = new MiraFormSDK('ваш-api-key', { baseUrl: 'https://api.miraform.com' });

// Подготовка данных формы
const { formData, errors } = sdk.prepareFormData({
  resourceId: 'uuid-ресурса',
  formId: 'uuid-формы',
  content: { field1: 'value1', field2: 123 },
  files: [file1, file2], // опционально
});

if (errors) {
  console.error('Ошибки валидации:', errors);
} else {
  // Отправка формы
  sdk.sendForm(formData).then(response => {
    if (response.success) {
      console.log('Успешно отправлено:', response.data);
    } else {
      console.error('Ошибка отправки:', response.errors);
    }
  });
}
```

## Документация

- [API Reference](./docs/API.md) — описание методов и типов

## Сборка

```bash
npm run build
```

## Лицензия
MIT
