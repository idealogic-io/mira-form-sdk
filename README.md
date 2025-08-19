# Mira Form SDK

SDK for Mira Form API на TypeScript/JavaScript.

## Installation

```bash
npm install mira-form-sdk
```

## Start Using

```typescript
import { MiraFormSDK, MiraFormSDKOptions } from 'mira-form-sdk';

const sdk = new MiraFormSDK('your-api-key', {
  baseUrl: 'https://api.miraform.com',
  timeout: 5000,
});
```

## Example Usage

```typescript
import { MiraFormSDK } from 'mira-form-sdk';

const sdk = new MiraFormSDK('pk_key', { baseUrl: 'https://api.miraform.com' });

// Data preparation
const { formData, errors } = sdk.prepareFormData({
  resourceId: 'uuid',
  formId: 'uuid',
  content: { field1: 'value1', field2: 123 },
  files: [file1, file2], // optional
});

if (errors) {
  console.error('Validation error:', errors);
} else {
  // Form submission
  sdk.sendForm(formData).then(response => {
    if (response.success) {
      console.log('Success:', response.data);
    } else {
      console.error('Error:', response.errors);
    }
  });
}
```

## Build

```bash
npm run build
```

## License
MIT
