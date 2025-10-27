# Firebase Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Firebase Client Configuration
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Firebase Admin Configuration
```env
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"
```

## Setup Steps

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication in your Firebase project
3. Generate a service account key:
   - Go to Project Settings > Service Accounts
   - Click "Generate new private key"
   - Download the JSON file
   - Extract the values for the environment variables

## API Usage

The API route is available at `/api/verify-local` and expects:

### Request
- **Method**: POST
- **Headers**: 
  - `Authorization: Bearer <firebase_id_token>`
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "userId": "user_id_here",
    "verificationCode": "verification_code_here"
  }
  ```

### Response
```json
{
  "success": true,
  "data": { /* response from external API */ },
  "user": {
    "uid": "firebase_user_id",
    "email": "user@example.com"
  }
}
```

## Testing

You can test the API using curl:

```bash
curl -X POST http://localhost:3000/api/verify-local \
  -H "Authorization: Bearer YOUR_FIREBASE_ID_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"userId": "test_user", "verificationCode": "test_code"}'
```





