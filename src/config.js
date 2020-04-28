export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-zzsw06xg00iv"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://fu7qojekf1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_BS0wzEF2P",
    APP_CLIENT_ID: "3b3o5k2fppjgeqb8qa2jan2ms0",
    IDENTITY_POOL_ID: "us-east-1:78c4657c-f73e-4595-9c16-89d875486cd8"
  }
};