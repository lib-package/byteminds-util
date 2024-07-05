# ByteMinds PH Utility Packages

Utility packages used in the development of ByteMinds PH web platform.

## Installation

Use with npm:

```bash
npx jsr add @jhenbert/byteminds-util
```

Use with deno:

```bash
deno add @jhenbert/byteminds-util
```

Use with pnpm:

```bash
pnpm dlx jsr add @jhenbert/byteminds-util
```

Use with yarn:

```bash
yarn dlx jsr add @jhenbert/byteminds-util
```

## Usage

```bash
import * as mod from "@jhenbert/byteminds-util";
```

## Example

```typescript
const sendMail = async () => {
  const from = "sender@example.com";
  const to = "recipient@example.com";
  const subject = "Hello!";
  const body = "<p>This is a test email.</p>";

  const message = composeMessage(from, to, subject, body);

  const host = "smtp.example.com";
  const port = 587;
  const secure = false;
  const service = "gmail";
  const email = "user@example.com";
  const password = "user_app_password";

  const transporter = mailTransporter(
    host,
    port,
    secure,
    service,
    email,
    password
  );

  try {
    await transporter.sendMail(message);
  } catch (error) {
    console.error("Sending email failed", (error as Error).message);
  }
};
```
