// export default {
//   STRIPE_KEY: "pk_test_dP9TR8ZotUkqF5oh4wvwOhm400myi4zMya",
//   MAX_ATTACHMENT_SIZE: 5000000,
//   s3: {
//     REGION: "us-east-1",
//     BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-zzsw06xg00iv"
//   },
//   apiGateway: {
//     REGION: "us-east-1",
//     URL: "https://fu7qojekf1.execute-api.us-east-1.amazonaws.com/prod"
//   },
//   cognito: {
//     REGION: "us-east-1",
//     USER_POOL_ID: "us-east-1_BS0wzEF2P",
//     APP_CLIENT_ID: "3b3o5k2fppjgeqb8qa2jan2ms0",
//     IDENTITY_POOL_ID: "us-east-1:78c4657c-f73e-4595-9c16-89d875486cd8"
//   }
// };

const dev = {
  STRIPE_KEY: "pk_test_dP9TR8ZotUkqF5oh4wvwOhm400myi4zMya",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-97glf6pf8uq7"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.serverless-stack.org/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_uJnqh2Gca",
    APP_CLIENT_ID: "4o9du187tdhoqu233a3sn7eel5",
    IDENTITY_POOL_ID: "us-east-1:c203e019-dca6-4c4b-a20c-9c860481d73d"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_dP9TR8ZotUkqF5oh4wvwOhm400myi4zMya",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-mcejtbhtxqil"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.serverless-stack.org/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_vqPwY4Sf2",
    APP_CLIENT_ID: "47du3cimq5mpos1qnie77roat3",
    IDENTITY_POOL_ID: "us-east-1:93075200-6a30-4ba0-9f19-20280a454232"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
