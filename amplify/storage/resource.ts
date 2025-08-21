import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplify-d1qs7gu2w5uksu-ma-amplifydataamplifycodege-evx0yxgdhwqy',
  access: (allow) => ({
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'protected/{entity_id}/*': [
      allow.authenticated.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});